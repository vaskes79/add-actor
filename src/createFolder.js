import fs from "fs";

export default async function createFolder(options) {
  const { dir } = options;
  const isExist = fs.existsSync(dir);
  if (isExist) {
    return;
  } else {
    fs.mkdirSync(dir, (err) => {
      if (err) console.log("createFolder error: ", err);
      console.log(`created folder ${dir}`);
    });
  }
}
