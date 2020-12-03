import React from "react";
import PropTypes from "prop-types";

const Profile = (props) => {
  const stylingObj = {
    display: "flex",
    flexDirection: "column",
    color: "lime",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={stylingObj}>
      <h1>Hello</h1>
      <h2>I am {props.fullName}</h2>
      <h2>{props.profession}</h2>
      <h2>{props.bio}</h2>
      <h2>{props.phoneNumber}</h2>
      <img className="image" src={props.children} alt="" />
      <button className="my-button" onClick={props.handleName}>
        Click Me
      </button>
    </div>
  );
};
let nom = "Jon Doe";
Profile.defaultProps = {
  fullName: "Jon Doe",
  profession: "Only God Knows what i'm doing",
  bio: "I come whenever you forgot to pass props",
  phoneNumber: "000000000",
};

Profile.propTypes = {
  fullName: PropTypes.string,
  profession: PropTypes.string,
  bio: PropTypes.string,
  phoneNumber: PropTypes.number,
  handleName: PropTypes.func,
};

export default Profile;
