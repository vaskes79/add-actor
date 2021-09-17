import { CliOptions } from "../Cli";

export class Parser {
  async parsePage(data: CliOptions): Promise<void> {
    console.log(data);
  }

  // import fs from "fs";
  // import request from "needle";
  // import tress, { TressJobData, TressWorkerDoneCallback } from "tress";
  // import { parseActorBio, parseActorWorks } from "./parsers";
  // import { listFormat, infoFormat } from "./formats";
  // import { OptionsPrompt } from "./cli";

  // async function init(
  //   { url, parser }: TressJobData,
  //   callback: TressWorkerDoneCallback
  // ) {
  //   const res = await request.get(url);
  //   const data = parser(res);
  //   callback(data);
  // }

  // export default async function parsePage(options: OptionsPrompt) {
  //   const { id, name, dir } = options;
  //   const URL_SERV = `https://www.kino-teatr.ru/kino/acter/m/ros`;
  //   const URL_WORKS = `${URL_SERV}/${id}/works/`;
  //   const URL_BIO = `${URL_SERV}/${id}/bio/`;
  //   const BIO = { url: URL_BIO, parser: parseActorBio };
  //   const WORKS = { url: URL_WORKS, parser: parseActorWorks };

  //   const query = tress(init);

  //   query.push(BIO, (parsedData) => {
  //     fs.writeFileSync(`${dir}/info.json`, JSON.stringify(parsedData, null, 4));
  //     fs.writeFileSync(`${dir}/info.txt`, infoFormat({ ...parsedData, name }));
  //   });

  //   query.push(WORKS, (parsedData) => {
  //     const htmlWorks = parsedData.map(listFormat);
  //     fs.writeFileSync(`${dir}/works.json`, JSON.stringify(parsedData, null, 4));
  //     fs.appendFileSync(`${dir}/info.txt`, htmlWorks.join("\n"));
  //   });
  // }

  // import cheerio from "cheerio";

  // const parseListWorks = ($, el) => ({
  //   year: $(el).find(".film_year_text").text(),
  //   title: $(el).find(".film_name > a > strong").text(),
  //   role: $(el).find(".film_role").text(),
  //   href: $(el).find(".film_name>a").attr("href"),
  // });

  // export function parseActorWorks(body, callback) {
  //   const $ = cheerio.load(body);
  //   const results = [];
  //   $(".film_block").each((i, el) => {
  //     results.push(parseListWorks($, el));
  //   });

  //   return results;
  // }

  // export function parseActorBio(body, callback) {
  //   const $ = cheerio.load(body);
  //   const date = $(".actor_table_data > span > a:nth-child(1)").attr("title");
  //   const year = $(".actor_table_data > span > a:nth-child(2)").attr("title");
  //   const info = {
  //     name: $(".actor_header h2").text(),
  //     birthDay: date + " " + year,
  //     description: $(".grid_content.actor_bio_block").text().trim(),
  //   };

  //   return info;
  // }
}

///-----------------------------

// export const listFormat = ({ year, title, role }) =>
//   `<li>${year} ${title}</li>`;

// export const infoFormat = ({ name, birthDay, description }) => {
//   const sep = "------------------------------------";
//   return `${sep}
// Имя Фамилия
// ${sep}
// ${name}

// ${sep}
// дата рождения
// ${sep}
// ${birthDay}

// ${sep}
// образование
// ${sep}
// ${description}

// ${sep}
// навыки
// ${sep}

// ${sep}
// работы в театре
// ${sep}

// ${sep}
// работы в кино
// ${sep}
// `;
// };
