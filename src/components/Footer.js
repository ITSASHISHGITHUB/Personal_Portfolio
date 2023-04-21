import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import dp from '../assets/img/dp.png';
import { Avatar } from "@mui/material";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={52} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/ashishyadav677/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/Itsyadu"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/ashish_ydvv21/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Made By Ashish Yadav </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
