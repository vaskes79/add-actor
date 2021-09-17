import fs from "fs";

export class Files {
  async createFolder(dir: string): Promise<void> {
    const isExist = fs.existsSync(dir);
    if (isExist) {
      return;
    } else {
      fs.mkdirSync(dir);
    }
  }
}
