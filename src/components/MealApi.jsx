import { useEffect, useState } from "react";



const MealApi = () => {
    const apiUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast';

useEffect(() => {

    fetch(apiUrl)
      .then((response) => {
      if (!response.ok) {
        throw new Error("Network didn't return your response");
      }
      return response.json()
    })
    .then((data) => console.log(data))
    .catch((error) => console.log("There's an err with fetching data:", error));
}, []);

return <></>;
};



export default MealApi;