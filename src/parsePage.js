import fs from "fs";
import request from "needle";
import tress from "tress";
import cheerio from "cheerio";
import { parseActorBio, parseActorWorks } from "./parsers";
import { listFormat, infoFormat } from "./formats";

function init({ url, parser }, callback) {
  request.get(url, function (err, res) {
    if (err) throw err;
    const data = parser(res.body);
    callback(data);
  });
}

export default async function parsePage(options) {
  const { id, name, dir } = options;
  const URL_WORKS = `https://www.kino-teatr.ru/kino/acter/m/ros/${id}/works/`;
  const URL_BIO = `https://www.kino-teatr.ru/kino/acter/m/ros/${id}/bio/`;
  const BIO = { url: URL_BIO, parser: parseActorBio };
  const WORKS = { url: URL_WORKS, parser: parseActorWorks };
  let q = tress(init);

  q.push(BIO, (parsedData) => {
    fs.writeFileSync(`${dir}/info.json`, JSON.stringify(parsedData, null, 4));
    fs.writeFileSync(`${dir}/info.txt`, infoFormat({ ...parsedData, name }));
  });

  // q.push(WORKS, (parsedData) => {
  //   fs.readFile(`${WD}/src/works.html`, (err, data) => {
  //     if (err) console.log(err);
  //     const htmlWorks = parsedData.map(listFormat);
  //     fs.writeFileSync(`${WD}/works.json`, JSON.stringify(parsedData, null, 4));
  //     fs.appendFileSync(`${WD}/info.txt`, htmlWorks.join("\n"));
  //   });
  // });

  // q.drain = function () {
  //   require("fs").writeFileSync("./data.json", JSON.stringify(results, null, 4));
  // };
}
