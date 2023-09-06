import { useState, useEffect } from "react";

const Catsapi = (setCats) => {
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const res = await fetch(
          "https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1&api_key=GmThRaHgn9VohAryRwmvHCgeKuC19fmO8hmwNwiSsBayy1SaFXFSogCkUCSLLSmU"
        );
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const data = await res.json();
        setCats(data);
      } catch (error) {
        setErrors("Failed to fetch data");
        console.log(error);
        console.log(errors);
      }
    };
    fetchCats();
  }, []);

  return;
};

export default Catsapi;
