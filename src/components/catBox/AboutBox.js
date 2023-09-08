import React from "react";

const AboutBox = (cats, index) => {
  console.log(cats[index]);
  return (
    <div>
      <h2>About (name)</h2>
      <p>Description: {cats.breeds[0].description}</p>
      <p>Age: {cats.breeds[0].age} years</p>
      <p>Weight: {cats.breeds[0].weight} kg</p>
      {/* <button onClick={onClose}>Close</button> */}
    </div>
  );
};



export default AboutBox;
