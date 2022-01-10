import React from "react";
import styled from "styled-components";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import ContactForm from "./ContactForm";
import ContactInfoItem from "./ContactInfoItem";
import SectionTitle from "./SectionTitle";
import { Link, animateScroll as scroll } from "react-scroll";

const ContactSectionStyle = styled.div`
  background-color: #f6e1eb;
  html {
    overflow: scroll;
    overflow-x: hidden;
  }
  ::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
  /* Optional: show position indicator in red */
  ::-webkit-scrollbar-thumb {
    background: #ff0000;
  }
  scroll: smooth;
.container{
  display:flex;
  align-content:center;
  justify-content:center:
}
  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 2rem;
    justify-content: space-between;
    position: relative;
    margin-left: 2rem;
  }
  .contactSection__wrapper::after {
    position: absolute;
    content: "";
    width: 2px;
    height: 50%;
    background-color: black;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .left {
    width: 100%;
    max-width: 500px;
  }
  .right {
    max-width: 500px;
    width: 100%;
    border-radius: 12px;
  }
  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;

export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <Link to="section1"></Link>
      <div className="container">
        <SectionTitle heading="contact" subheading="get in touch" />
        <div className="contactSection__wrapper">
          <div className="left">
            <ContactInfoItem
              icon={<MdLocalPhone />}
              text="+91 6386 694 7041 "
            />
            <ContactInfoItem
              icon={<MdEmail />}
              text="yadavnishant995@gmail.com"
            />
            <ContactInfoItem text="New Delhi, India" />
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}
