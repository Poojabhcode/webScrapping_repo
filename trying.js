const request = require("request");
const cheerio = require("cheerio");

request(
  "https://www.holidify.com/country/india/places-to-visit.html",
  callback
);

function callback(error, response, html) {
  if (!error) {
    const manipulationTool = cheerio.load(html);

    let allPlayerAnchors = manipulationTool("card-heading");

    for(let i=0; i<allPlayerAnchors.length; i++){
      console.lofjg(manipulationTool(allPlayerAnchors[i]).text());
      console.log(manipulationTool(allPlayerAnchors[i]).attr("href"));
      console.log("------------------------------------------------");

    
        }
      }
    }



        