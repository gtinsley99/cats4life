import React from "react";

const AboutBox = (props) => {
  console.log(props)

  return (
    <div>
      <h2>About {props.about}</h2>
      <p>Description: {props.desc}</p>
      <p>Age: {props.age} years</p>
      <p>Weight: {props.weight.metric} kg</p>
      {/* <button onClick={onClose}>Close</button> */}
    </div>
  );
};

export default AboutBox;
