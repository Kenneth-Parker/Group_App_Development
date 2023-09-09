const test = console.log
import Pantry from '/Users/xavierrice/Desktop/Module3/Group_App_Development/src/pantryDb/pantry.json'
import { useState, useEffect } from "react";


const PantryList = () => {
const [pantryItems, setPantryItems] = useState({})

useEffect(() => {

setPantryItems(Pantry)

}, [])



return (

    <div>
       
    </div>
)



};


export default PantryList;