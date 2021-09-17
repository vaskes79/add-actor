import inquirer, { Question } from "inquirer";
import { CliOptions } from "./cli";

export class Prompt {
  private questions: Question[] = [];

  async dialog(): Promise<void> {
    const answers = await inquirer.prompt(this.questions);
    console.log("answers", answers);
  }

  createQuestions(opt: CliOptions): void {
    if (!opt.id) {
      this.questions.push({
        type: "input",
        name: "id",
        message:
          "you should set id for actor that you will find on https://www.kino-teatr.ru/",
      });
    }
    if (!opt.name) {
      this.questions.push({
        type: "input",
        name: "name",
        message: "you should set name actor",
      });
    }
    //   if (!options.gender) {
    //     questions.push({
    //     });
    //   }
  }

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
}
// import { slugify } from "transliteration";
// import createFolder from "./createFolder";
// import parsePage from "./parsePage";

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
