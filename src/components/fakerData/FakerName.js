import { faker } from "@faker-js/faker";
import { useEffect } from "react";

const FakerName = (name, setName) => {
  useEffect(() => {
    const fetchName = () => {
      for (let i = 0; i < 12; i++) {
        let nameValue = faker.person.firstName();
        let nameArray = [...name];
        nameArray.push(nameValue);
        setName(nameArray);
      }
    };
    fetchName();
  }, []);
  return;
};

export default FakerName;