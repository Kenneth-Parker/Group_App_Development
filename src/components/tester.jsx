import { useState, useEffect } from "react";

const tester = () => {

const [pantry, setPantry] = useState({})

  useEffect(() => {

    fetch(``)
      .then(r => r.json())
      .then(data => setAllVideos(data))
      .catch(err => console.log(err))
  }, [])







return (
    <h1>Hello from X</h1>
)


};


export default tester;