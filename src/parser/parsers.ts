import cheerio from "cheerio";

const parseListWorks = ($, el) => ({
  year: $(el).find(".film_year_text").text(),
  title: $(el).find(".film_name > a > strong").text(),
  role: $(el).find(".film_role").text(),
  href: $(el).find(".film_name>a").attr("href"),
});

export function parseActorWorks(body, callback) {
  const $ = cheerio.load(body);
  const results = [];
  $(".film_block").each((i, el) => {
    results.push(parseListWorks($, el));
  });

  return results;
}

export function parseActorBio(body, callback) {
  const $ = cheerio.load(body);
  const date = $(".actor_table_data > span > a:nth-child(1)").attr("title");
  const year = $(".actor_table_data > span > a:nth-child(2)").attr("title");
  const info = {
    name: $(".actor_header h2").text(),
    birthDay: date + " " + year,
    description: $(".grid_content.actor_bio_block").text().trim(),
  };

  return info;
}
