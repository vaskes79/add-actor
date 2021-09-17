import inquirer, { QuestionCollection } from "inquirer";
import { slugify } from "transliteration";
import { CliOptions } from "./cli";

export class Prompt {
  private questions: QuestionCollection[] = [];

  async dialog(): Promise<CliOptions> {
    const answers = await inquirer.prompt<Promise<CliOptions>>(this.questions);
    let { dir, name } = answers;
    if (!dir && name) {
      name = name.trim().replace(/[\n\t\b\s]+/, " ");
      answers["name"] = name;
      answers["dir"] = slugify(name);
    }

    return answers;
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
    if (!opt.gender) {
      this.questions.push({
        type: "list",
        name: "gender",
        message: "you should change gender actor",
        choices: ["female", "male"],
        default: "female",
      });
    }
  }
}
