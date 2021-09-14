import arg from "arg";
import inquirer from "inquirer";
import { slugify } from "transliteration";
import createFolder from "./createFolder";
import parsePage from "./parsePage";

interface Person {
  id: string | undefined;
  name: string | undefined;
  gender: string | undefined;
}

function parseArgumentsIntoOptions(rawArgs: string[]): Person {
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

async function promptForMissingOptions(options: Person) {
  const questions = [];

  if (!options.id) {
    questions.push({
      type: "input",
      name: "id",
      message:
        "you should set id for actor that you will find on https://www.kino-teatr.ru/",
    });
  }

  if (!options.name) {
    questions.push({
      type: "input",
      name: "name",
      message: "you should set name actor",
    });
  }

  if (!options.gender) {
    questions.push({
      type: "list",
      name: "gender",
      message: "you should change gender actor",
      choices: ["female", "man"],
      default: "female",
    });
  }

  const answers = await inquirer.prompt(questions);

  let name = options.name || answers.name;
  name = name.trim().replace(/[\n\t\b\s]+/, " ");
  const dir = slugify(name);

  return {
    ...options,
    name,
    dir,
    id: options.id || answers.id,
    gender: options.gender || answers.gender,
  };
}

export async function cli(args: string[]) {
  let options = parseArgumentsIntoOptions(args);
  options = await promptForMissingOptions(options);
  await createFolder(options);
  await parsePage(options);
}
