import { Question } from "inquirer";

export const questions: Question[] = [
  {
    type: "input",
    name: "id",
    message:
      "you should set id for actor that you will find on https://www.kino-teatr.ru/",
  },
  {
    type: "input",
    name: "name",
    message: "you should set name actor",
  },
  {
    type: "list",
    name: "gender",
    message: "you should change gender actor",
    choices: ["female", "man"],
    default: "female",
  },
];
