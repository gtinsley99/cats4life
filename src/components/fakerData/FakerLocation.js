import { faker } from "@faker-js/faker";
import { useEffect } from "react";

const FakerLocation = (location, setLocation) => {
  useEffect(() => {
    const fetchLocation = () => {
      for (let i = 0; i < 12; i++) {
        let locationValue = faker.location.country();
        let locationArray = [...location];
        locationArray.push(locationValue);
        setLocation(locationArray);
      }
    };
    fetchLocation();
  }, []);
  return;
};

export default FakerLocation;