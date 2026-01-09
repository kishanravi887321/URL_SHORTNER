
const makeShortCode=(url)=>{
    const shortCode = new URL(url).pathname.slice(1);
    // console.log("Short code generated:", shortCode);
    return shortCode;

}

// console.log(makeShortCode("https://short.saksin.online/abcd1234"));
export default makeShortCode;