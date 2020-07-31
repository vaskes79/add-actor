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
  const URL_SERV = `https://www.kino-teatr.ru/kino/acter/m/ros`;
  const URL_WORKS = `${URL_SERV}/${id}/works/`;
  const URL_BIO = `${URL_SERV}/${id}/bio/`;
  const BIO = { url: URL_BIO, parser: parseActorBio };
  const WORKS = { url: URL_WORKS, parser: parseActorWorks };

  const query = tress(init);

  query.push(BIO, (parsedData) => {
    fs.writeFileSync(`${dir}/info.json`, JSON.stringify(parsedData, null, 4));
    fs.writeFileSync(`${dir}/info.txt`, infoFormat({ ...parsedData, name }));
  });

  query.push(WORKS, (parsedData) => {
    const htmlWorks = parsedData.map(listFormat);
    fs.writeFileSync(`${dir}/works.json`, JSON.stringify(parsedData, null, 4));
    fs.appendFileSync(`${dir}/info.txt`, htmlWorks.join("\n"));
  });
}
