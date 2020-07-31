import fs from "fs";

export default async function createFolder(options) {
  const { dir } = options;
  fs.mkdirSync(dir, (err) => {
    if (err) console.log("createFolder error: ", err);
    console.log(`created folder ${dir}`);
  });
}
