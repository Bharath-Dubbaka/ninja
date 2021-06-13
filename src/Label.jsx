import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./Label.css";
import Footer from "./Footer";


const Lables = () => {
  const [string, setString] = useState("");

  const handleString = (e) => {
    // let preString = 'http://www.google.com/search?q=+';
    let postString =
      ' -intitle:"profiles" -inurl:"dir/ " site:linkedin.com/in/ OR site:linkedin.com/pub/';
    setString(e.target.value + postString);
  };
  //   const handleClear = () => {
  //     setString("");
  //   };

  const onSubmit = () => {
    return string.length !== 0
      ? window.open("http://www.google.com/search?q=+" + string)
      : alert("Please enter string");
  };

  return (
    <div>
      <div className="main-div">
        <div className="heading-div">
          <h2 className="title-div"> NinjaSourcing</h2>
        </div>
        <div className="caption-div">
          <p>
            Easily way to search profiles on LinkedIn, created with a vision to
            help recruiters all over world
          </p>
        </div>
        <div className="action-div">
          <Input
            className="input-field"
            type="text"
            name="string"
            placeholder='eg: "Full Stack" AND "Java" AND (Database OR DB OR Backend OR "Back end") AND San jose, CA'
            onChange={handleString}
          />
          <Button onClick={onSubmit} className="search-btn">
            Search
          </Button>
        </div>
        <div className="middle-div">
          <p>
            This site is free for everyone to use, build with a vision to help
            recruiters and startup finding the potential/desired candidates for
            their organization,<b> "BUT NOT EXPLOIT/MISUSE"</b>....
            {/* but it still costs me money
            to host and maintain… Why don’t you #BeAwesome and help out by
            Donating. Lorem ipsum dolor, sit amet consectetur adipisicing elit. */}
            {" "}
            Please go through the boolean guides available on google on how to
            source, if you are not familiar with syntax or concept.
            I am working on the page to make it more usable and productive by
            adding new options and add-ons.
          </p>
          <br />
          <br />
          <br />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Lables;
