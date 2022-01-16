import React, { useState } from "react";
import "./contact.css";

export default function Contact() {
  const [userData, setUserdata] = useState({
    Name: "",
    Email: "",
    Message: "",
  });
  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserdata({ ...userData, [name]: value });
  };

  //connection with firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { Name, Email, Message } = userData;
    if (Name && Email && Message) {
      const res = await fetch(
        "https://personal-react-portfolio-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          hearders: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Name,
            Email,
            Message,
          }),
        }
      );
      if (res) {
        setUserdata({
          Name: "",
          Email: "",
          Message: "",
        });
        alert("Your Message has been sent successfully.");
      } else {
        alert("Plz fill the data");
      }
    } else {
      alert("Plz fill the data");
    }
  };
  return (
    <>
      <div class="containersfull" id="contact">
        <form method="POST">
          <div class="title">
            <h2>CONTACT</h2>
          </div>
          <div class="half">
            <div class="item">
              <label for="name">NAME</label>
              <input
                type="text"
                name="Name"
                id="name"
                value={userData.Name}
                onChange={postUserData}
              />
            </div>
            <div class="item">
              <label for="email">EMAIL</label>
              <input
                type="text"
                name="Email"
                id="email"
                value={userData.Email}
                onChange={postUserData}
              />
            </div>
          </div>
          <div class="full">
            <label for="message">MESSAGE</label>
            <textarea
              name="Message"
              id="message"
              value={userData.Message}
              onChange={postUserData}
            ></textarea>
          </div>
          <div class="action">
            <input type="submit" value="SEND MESSAGE" onClick={submitData} />
            <input type="reset" value="RESET" />
          </div>
        </form>
      </div>
    </>
  );
}
