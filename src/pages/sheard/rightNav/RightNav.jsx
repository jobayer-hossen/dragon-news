import React from "react";
import { Button, ListGroup} from "react-bootstrap";
import { FaGoogle ,FaGithub ,FaFacebook,FaInstagram,FaTwitter} from "react-icons/fa";
import QZone from "../qzone/QZone";
import bg from '../../../assets/bg.png'

const RightNav = () => {
  return (
    <div>
      <h4>LogIn</h4>
      <Button variant="outline-primary"> <FaGoogle/> Login with Google</Button>
      <Button variant="outline-secondary"> <FaGithub/> Login with Github</Button>

    <div>
    <ListGroup>
      <ListGroup.Item><FaFacebook/>Facebook</ListGroup.Item>
      <ListGroup.Item><FaInstagram/>Instagram</ListGroup.Item>
      <ListGroup.Item><FaTwitter/>Twitter</ListGroup.Item>
    </ListGroup>
    </div>
    <QZone></QZone>
    <div>
    <img src={bg} alt="" />
    </div>
    </div>

  );
};

export default RightNav;
