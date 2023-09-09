const fs = require(`fs`)   // importing the "fs" (file systems) to work with my imported file
const csv = require(`csv-parser`) // importing the csv (comma-separate vales) a txt file format // i downloaded a extension 

//Defining my input and output files 
const inputFilePath = `/Users/xavierrice/Desktop/Module3/Group_App_Development/src/assets/top-1k-ingredients.csv`
const outputFilePath = `/Users/xavierrice/Desktop/Module3/Group_App_Development/src/pantryDb/pantry.json`

//creating an empty array to store my data
const pantryData = [];

//using FS to read the cvs file and split it into two lines
const lines = fs.readFileSync(inputFilePath, 'utf-8').split('\n')

//using the forEach method to iterate through each line in the cvs file
lines.forEach((line) => {
const parts = line.trim().split(";")   //spliting it into parts by the ";"
if (parts.length === 2){                 //checking to see that there are exactly two parts now (the item and the id)
  const item = parts[0].trim()          // set and trim the item
  const id = parseInt(parts[1].trim(), 10); // set, trim and parse the id as a number value

   if(!isNaN(id)) {         //checking to see if the id is a number now and done correctly
    pantryData.push({[item]: id})   // pushing the item and id in as objects into the array
   }
}
})

fs.writeFileSync(outputFilePath, JSON.stringify(pantryData, null, 2))   //writing the converted data (patryData) into the jsonFile
console.log("Conversion Success!! You did it gurl")  //letting my know that i was able to do it gurl!~
