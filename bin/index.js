#! /usr/bin/env node

const fs = require("fs");
const path = require("path");

process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});

const argFile = process.argv[2]
fs.readFile(argFile, (err, data) => {
    if (err) throw err;

    defTxt="\"" + data.toString() + "\""

    const defStr = defTxt.split("\n").join("\n")

    const projPath = path.resolve(__dirname, '../')
    console.log(projPath+"/defString.js")
    fs.writeFileSync(projPath+"/defString.js", "export const defString = " + defStr)

    //wtProm
    //.then(()=>{})
    //.catch((err)=>{
    //    throw new err
    //})
})
