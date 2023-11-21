#! /usr/bin/env node

const fs = require("fs");
const path = require("path");

process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});

if (process.argv.length < 3) {
    throw new Error("graph txt file path must be given as arg")
}

const argFile = process.argv[2]
fs.readFile(argFile, (err, data) => {
    if (err) throw err;

    defTxt="\"" + data.toString() + "\""

    const codedStr = defTxt.split("\n").join("\\u000A")

    const projPath = path.resolve(__dirname, '../')
    console.log(projPath+"/defString.js")

    const defStr = "export const defString = " + codedStr
    fs.writeFileSync(projPath+"/defString.js", Buffer.from(defStr, 'utf8'))

    //wtProm
    //.then(()=>{})
    //.catch((err)=>{
    //    throw new err
    //})
})
