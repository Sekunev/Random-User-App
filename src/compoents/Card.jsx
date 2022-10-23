import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Email from "../assets/email.svg";
import Phone from "../assets/phone.svg";
import Location from "../assets/location.svg";
import "./style.css";

const Cards = ({ person }) => {
  console.log(person);
  const { name, location, email, phone, picture, dob, registered } = person;

  return (
    <div className="container  d-flex justify-content-center align-items-center flex-column fs-4 my-2">
      <h1 className="lead display-4 mb-3" style={{ color: "#FF5A33" }}>
        Random User App
      </h1>
      <Card style={{ width: "30rem" }} className="cards">
        <ListGroup variant="flush">
          <div className="align-items-center mt-2">
            <img className="picture" src={picture?.large} alt="" />
            <p>
              {name?.title} {name?.first} {name?.last}
            </p>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-2 mx-4 ">
            <img src={Email} alt="" width="50px" />
            <p>{email}</p>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-4 mx-4">
            <img src={Phone} width="50px" alt="" />
            <p>+{phone}</p>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-4 mx-4">
            <img src={Location} width="50px" alt="" />
            <p>
              {location?.city},{location?.country}
            </p>
          </div>

          <div className="extra text-center">
            <p>Age : {dob?.age}</p>
            <p>
              Register Date : {new Date(registered?.date).toLocaleDateString()}
            </p>
          </div>
        </ListGroup>
      </Card>
    </div>
  );
};

export default Cards;
