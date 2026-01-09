import { nanoid } from "nanoid";

const generateShortCode = (length = 8) => {
  return nanoid(length);
};

console.log(generateShortCode());

export { generateShortCode };