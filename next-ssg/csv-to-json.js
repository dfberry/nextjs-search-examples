const csvFilePath="./books.csv"
const csv=require('csvtojson')
const fs=require('fs')

async function main(){
    const jsonArray=await csv().fromFile(csvFilePath);
    fs.writeFileSync('books.json',JSON.stringify(jsonArray,null,2))
    
}
main().then().catch(err=>console.log(err))