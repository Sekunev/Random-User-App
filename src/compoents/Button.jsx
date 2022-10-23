import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const Buton = ({ getPerson, loading }) => {
  const handlePerson = () => {
    getPerson();
  };
  return (
    <div className="text-center ">
      <Button
        style={{
          backgroundColor: "#FF5A33",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
        className="p-2 mt-1 fs-4 text-dark"
        onClick={handlePerson}
        variant="danger"
      >
        {loading ? "Random User" : "Loading..."}
      </Button>
    </div>
  );
};

export default Buton;
