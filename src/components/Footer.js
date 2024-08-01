import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import github from '../assets/img/github.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          <p className="footer-name">
              <strong>
                <span className="first-name">Vatsal</span> 
                <span className="last-name"> Prajapati</span>
              </strong>
            </p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon-1">
              <a href="https://www.linkedin.com/in/vatsal-prajapati-30a35a19a/"><img src={navIcon1} alt="Icon" /></a>
            </div>
            <div className="social-icon-1">
              <a href="https://github.com/vatsal-2002"><img src={github} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
