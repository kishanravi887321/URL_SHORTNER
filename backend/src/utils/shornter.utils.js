import { nanoid } from "nanoid";

const generateShortCode = (length = 8) => {
  return nanoid(length);
};

console.log(generateShortCode());



const getUrl=(prefix="")=>{
    if(prefix){
        return `https://${prefix}.${generateShortCode()}`;
    }
    else{
        return `https://short.${generateShortCode()}`;
    }
}

console.log(getUrl("customprefix"));
console.log(getUrl());