import arg from "arg";
import { Prompt } from "./Prompt";

export interface CliOptions {
  id?: string | undefined;
  name?: string | undefined;
  gender?: string | undefined;
  dir?: string;
}

export class Cli {
  data: CliOptions = {};
  prompt: Prompt = new Prompt();

  grabOptions(rawArgs: string[]): void {
    const args = arg(
      {
        "--id": String,
        "--name": String,
        "--gender": String,
        "--dir": String,
        "-i": "--id",
        "-g": "--gender",
        "-n": "--name",
        "-d": "--dir",
      },
      {
        argv: rawArgs.slice(2),
      }
    );

    this.data = {
      id: args["--id"],
      name: args["--name"],
      gender: args["--gender"],
      dir: args["--dir"],
    };
  }

  cli(args: string[]) {
    this.grabOptions(args);
    this.prompt.createQuestions(this.data);
    this.prompt.dialog();
    //   let optionsPromt = await promptForMissingOptions(options);
    //   await createFolder(optionsPromt);
    //   await parsePage(optionsPromt);
  }
}
