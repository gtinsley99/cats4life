import { faker } from "@faker-js/faker";
import { useEffect } from "react";

const FakerLocation = (setLocation) => {
  let locationArray = [];
  useEffect(() => {
    const fetchLocation = () => {
      for (let i = 0; i < 12; i++) {
        let locationValue = faker.location.country();
        locationArray.push(locationValue);
        setLocation(locationArray);
      }
    };
    fetchLocation();
  }, []);
  return;
};

export default FakerLocation;