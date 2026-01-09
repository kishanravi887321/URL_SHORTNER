import { nanoid } from "nanoid";

const generateShortCode = (length = 8) => {
  return nanoid(length);
};

console.log(generateShortCode());



const getUrl=(prefix="")=>{
    let temp=generateShortCode();
    if(prefix){
        return [`https://${prefix}.saksin.online/${temp}`, temp];
    }
    else{
        return [`https://short.saksin.online/${temp}`, temp];
    }
}
console.log(getUrl());
export default getUrl;