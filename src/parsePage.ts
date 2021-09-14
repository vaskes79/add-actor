import fs from "fs";
import request from "needle";
import tress, { TressJobData, TressWorkerDoneCallback } from "tress";
import { parseActorBio, parseActorWorks } from "./parsers";
import { listFormat, infoFormat } from "./formats";
import { OptionsPrompt } from "./cli";

async function init(
  { url, parser }: TressJobData,
  callback: TressWorkerDoneCallback
) {
  const res = await request.get(url);
  const data = parser(res);
  callback(data);
}

export default async function parsePage(options: OptionsPrompt) {
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
