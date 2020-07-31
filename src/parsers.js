import cheerio from "cheerio";

export function parseActorWorks(body, callback) {
  const $ = cheerio.load(body);
  const results = [];
  $(".film_block").each(function (item) {
    // TODO: check this == item
    results.push({
      year: $(this).find(".film_year_text").text(),
      title: $(this).find(".film_name > a > strong").text(),
      role: $(this).find(".film_role").text(),
      href: $(this).find(".film_name>a").attr("href"),
    });
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
