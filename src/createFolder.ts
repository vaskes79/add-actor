import fs from "fs";
import { OptionsPrompt } from "./cli";

export default async function createFolder(options: OptionsPrompt) {
  const { dir } = options;
  const isExist = fs.existsSync(dir);
  if (isExist) {
    return;
  } else {
    fs.mkdirSync(dir);
  }
}
