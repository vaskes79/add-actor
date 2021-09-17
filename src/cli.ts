import arg from "arg";

export interface Options {
  id: string | undefined;
  name: string | undefined;
  gender: string | undefined;
}

export class Cli {
  parseOptions(rawArgs: string[]): Options {
    const args = arg(
      {
        "--id": String,
        "--name": String,
        "--gender": String,
        "--dir": String,
        "-i": "--id",
        "-g": "--gender",
        "-n": "--name",
      },
      {
        argv: rawArgs.slice(2),
      }
    );

    return {
      id: args["--id"],
      name: args["--name"],
      gender: args["--gender"],
    };
  }

  cli(args: string[]) {
    let options = this.parseOptions(args);
    console.log(options);
  }
}

// import arg from "arg";
// import inquirer from "inquirer";
// import { slugify } from "transliteration";
// import createFolder from "./createFolder";
// import parsePage from "./parsePage";

// export interface OptionsPrompt extends Options {
//   dir: string;
//   id: string | undefined;
//   gender: string | undefined;
// }

// async function promptForMissingOptions(
//   options: Options
// ): Promise<OptionsPrompt> {
//   const questions: inquirer.Question[] = [];

//   if (!options.id) {
//     questions.push({
//       type: "input",
//       name: "id",
//       message:
//         "you should set id for actor that you will find on https://www.kino-teatr.ru/",
//     });
//   }

//   if (!options.name) {
//     questions.push({
//       type: "input",
//       name: "name",
//       message: "you should set name actor",
//     });
//   }

//   if (!options.gender) {
//     questions.push({
//       type: "list",
//       name: "gender",
//       message: "you should change gender actor",
//       // https://levelup.gitconnected.com/create-your-own-advanced-cli-with-typescript-5868ae3df397
//       choices: ["female", "man"],
//       default: "female",
//     });
//   }

//   const answers = await inquirer.prompt(questions);

//   let name = options.name || answers.name;
//   name = name.trim().replace(/[\n\t\b\s]+/, " ");
//   const dir = slugify(name);

//   return {
//     ...options,
//     name,
//     dir,
//     id: options.id || answers.id,
//     gender: options.gender || answers.gender,
//   };
// }

// export async function cli(args: string[]) {
//   let options = parseArgumentsIntoOptions(args);
//   let optionsPromt = await promptForMissingOptions(options);
//   await createFolder(optionsPromt);
//   await parsePage(optionsPromt);
// }
