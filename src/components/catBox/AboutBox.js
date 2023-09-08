import React from "react";
import {Button} from "./CatBox.styles";

const AboutBox = (props) => {

  const handleCloseAbout = (index) => {
    const updatedShowAbout = [...props.showAbout];
    updatedShowAbout[index] = false;
    props.setShowAbout(updatedShowAbout);
  };

  return (
    <div className= 'about'>
      <h2>About {props.about}</h2>
      <h4>Origin:</h4>
      <p className="aboutP"> {props.origin}</p>
      <h4>Description:</h4>
      <p className="aboutP">{props.desc}</p>
      <h3>Breed Overview:</h3>
      <h4>Temperament: </h4>
      <p className="aboutP">{props.temp}</p>
      <h4>Life Span:</h4>
      <p className="aboutP"> {props.life}</p>
      <h4>Weight:</h4>
      <p className="aboutP"> {props.weight.metric} kg</p>
      <h3>Personality:</h3>
      <h4>Adaptability Level:</h4>
      <p className="aboutP"> {props.adapt}</p>
      <h4>Affection Level:</h4>
      <p className="aboutP"> {props.affection}</p>
      <h4>Energy Level:</h4>
      <p className="aboutP"> {props.energy}</p>
      <h4>Social Level:</h4>
      <p className="aboutP"> {props.social}</p>
      <h3>Coat Care:</h3>
      <h4>Hypoallergenic Level:</h4>
      <p className="aboutP"> {props.hypo}</p>
      <h4>Grooming Level:</h4>
      <p className="aboutP"> {props.grooming}</p>
      <h4>Shedding Level:</h4>
      <p className="aboutP"> {props.shed}</p>
      <Button onClick={() => handleCloseAbout(props.index)}>Close</Button>
    </div>
  );
};

export default AboutBox;
