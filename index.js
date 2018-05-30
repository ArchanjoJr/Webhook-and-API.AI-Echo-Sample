"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
let url = 'https://tecsus.com.br/tecmeter/service/call/json/medida/561';
var options = {
    url: url,
    headers: {
        "Authorization": "Bearer eyJhbGciOiAiSFMyNTYiLCAidHlwIjogIkpXVCJ9.eyJpYXQiOiAxNTExODc1NzcwLjAsICJ1c2VyX2dyb3VwcyI6IHt9LCAidXNlciI6IHsiZmlyc3RfbmFtZSI6ICJTcHJpbmciLCAibGFzdF9uYW1lIjogIkZpZWxkMDkiLCAiZmlyc3RfYWMiOiBmYWxzZSwgInJlZ2lzdHJhdGlvbl9pZCI6ICIiLCAiaWQiOiAyMzMsICJyZXNldF9wYXNzd29yZF9rZXkiOiAiIiwgInJlc3BvbnNhdmVsIjogZmFsc2UsICJhZG0iOiBmYWxzZSwgInJlZ2lzdHJhdGlvbl9rZXkiOiAiIiwgImVtYWlsIjogInNwcmluZzlAdGVjc3VzLmNvbS5iciJ9LCAiZXhwIjogMTUxMTg4MzI3MC4wLCAiaG1hY19rZXkiOiAiMzU5YjYwYjMtZGY2ZS00NTE3LTgyZGItYzA5MDQ1ZTgxNjk3In0.LQ1DbMVBMWYsWeVn-BiWaK0DCkSwh_HxjANOmCFMhcs"
    }
};

const restService = express();

function has(object, key) {
  return object ? hasOwnProperty.call(object, key) : false;
}

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());

restService.post('/test', (req, res) => {
  const action = req.body.result.action;
  switch (action) {
    case 'BillStatsIntent':
    request(options, function (err, response, body) {
      let json = JSON.parse(body);
      if(err){
        res.status(400).json({
          speech:`erro interno no servidor`,
          displayText:`erro interno no servidor`,
          source: 'api-test-dialog',
        });
      } else {
        res.status(200).send({
          speech:`o valor que voce gastou até hoje é de R$${json['dados']['valor_atual']}`,
          displayText: `o valor que voce gastou até hoje é de R$${json['dados']['valor_atual']}`,
          source: 'api-test-dialog',
        });
      }
    });
      break;
    case 'CloseWaterRegister':
      // URL_OFF = 'http://186.236.67.18:8030/turnoff'
      /*request(URL_OFF, function (err, response, body) {
      let json = JSON.parse(body);
      if(err){
        res.status(400).json({
          speech:`erro interno no servidor`,
          displayText:`erro interno no servidor`,
          source: 'api-test-dialog',
        });*/
      res.status(200).json({
        speech: 'Registro Fechado',
        displayText: 'Registro Fechado',
        source: 'api-test-dial'
      })
      break;
    case 'OpenWaterRegister':
      // URL_ON = 'http://186.236.67.18:8030/turnon'
      /*request(URL_ON, function (err, response, body) {
      let json = JSON.parse(body);
      if(err){
        res.status(400).json({
          speech:`erro interno no servidor`,
          displayText:`erro interno no servidor`,
          source: 'api-test-dialog',
        });*/
        res.status(200).json({
          speech: 'Registro Aberto',
          displayText: 'Registro Aberto',
          source: 'api-test-dial'
        })
        asdasdasd
      break;
    case 'WaterFactIntent':
    const opt = [
      "Less than 1% of the water supply on land can be used as potable water,",
      "At the moment a person feels thirsty, their body has lost more than 1% of their total amount of water.",
      "Approximately 25,700 liters (6,800 gallons) of water are needed to grow one-day food for a family of four.",
      "Underground water can take a human life only to cross a kilometer.",
       "A person can live about a month without food, but only about a week without water.",                "If a human does not absorb enough water, dehydration is the result.",
      "Most of the Earth's surface is permanently frozen or salted.",
      "If all the water in the world were in one gallon, the fresh water available for use would be equal to only one tablespoon.",
      "When water contains a lot of calcium and magnesium, it's called hard water.",
      "Hard water is not suitable for all purposes for which water is normally used.",
      "One acre of corn will produce 15,000 liters (4,000 gallons) of water a day in evaporation.",
      "A small drip from a faucet can waste up to 75 liters of water a day.",
      "Of all the earth's water, only 2.5% is fresh water.",
      "Freshwater is groundwater (0.5%) or easily accessible water in lakes, streams, rivers, etc. (0.01%).",
      "The oceans are very wide and there are many on earth, the oceans store most of the earth's water.",
      "The oceans are apparently 97% of the total amount of water on Earth, 2% of which is frozen.",
      "Human bones are 25% water.",
      "Most people in the world should walk for at least 3 hours to get water.",
      "Today, at least 400 million people live in regions with severe water shortages.",
      "It takes 450 liters (120 gallons) of water to produce an egg.",
      "Bottled water can be up to 1,000 times more expensive than tap water and may not be as safe.",
      "Two-thirds of the water contained in a house is used in the bathroom.",
      "Less than 1% of the water treated by public water is used for drinking and cooking.",
      "More than 2 billion people on earth do not have a safe supply of water.",
      "The best-selling brand of bottled water (Aquafina) is treated with Pepsi-packaged tap water.",
      "70% percent of an elephant is water,",
      "Ground water supplies serve about 80% of the population, while up to 4% of usable groundwater is already polluted.",
      "At the moment a person feels thirsty, their body has lost more than 1% of their total amount of water.",
      "Every day, it rains heavily in the United States to cover the entire state of Vermont with 2 feet of water,",
      "Every day, US water users draw enough water to fill a line of Olympic size swimming pools that arrive around the world.",
      "Water represents 70% of body mass.",
      "You should drink enough to equal your body weight in ounces every day.If you weigh 200 pounds, drink 100 ounces.",
      "It takes 7,000 liters (1,850 gallons) of water to refine a barrel of crude oil.",
      "For every six ounces of caffeine or alcohol you consume, an additional 10 to 12 ounces of water is needed to rehydrate you.",
      "We lost more than 2 liters of water every day through the normal vapor exchange of our skin, also known as sweating.",
      "Insufficient water intake is a risk factor for colon, breast, urinary tract, kidney, bladder, prostate and testis cancers.",
      "Hydration is critical to the bloodstream, allowing the immune system to reach the damaged tissues in greater numbers.",
      "Did you know that 25% of the bottled water in the market is extracted from municipal faucets?",
      "Pure water (the hydrogen and oxygen atoms) has a neutral pH of 7, which is neither acid nor basic.",
      "Four gallons (1 gallon) of gasoline can contaminate approximately 2.8 million gallons (750,000 gallons) of water.",
      "If all new sources of contamination could be eliminated in 10 years, 98% of all available groundwater would be free of pollution.",
      "There are 12,000 different toxic chemical compounds in industrial use today, and more than 500 new chemicals are developed every year.",
      "Water dissolves more substances than any other liquid.",
      "Wherever water travels, it carries chemicals, minerals, and nutrients.",
      "Pure water (the hydrogen and oxygen atoms) has a neutral pH of 7, which is neither acid nor basic.",
      "Four gallons (1 gallon) of gasoline can contaminate approximately 2.8 million gallons (750,000 gallons) of water.",
      "If all new sources of contamination could be eliminated in 10 years, 98% of all available groundwater would be free of pollution.",
      "There are 12,000 different toxic chemical compounds in industrial use today, and more than 500 new chemicals are developed every year.",
      "Water dissolves more substances than any other liquid,",
      "Wherever water travels, it carries chemicals, minerals, and nutrients.",
      "Freshwater animals are disappearing five times faster than terrestrial animals.",
      "Every day the sun evaporates trillions of tons of water.",
      "The weight that a person loses directly after intense physical activity is the weight of water, not fat,",
      "It takes 5,680 liters (1,500 gallons) of water to process a barrel of beer.",
      "At birth, water accounts for approximately 80% of children's body weight,",
      "To process a chicken, we need 44 liters (11.6 gallons) of water.",
      "To process one of the fruits or vegetables, we need 35 liters (9.3 gallons) of water.",
    ];
    const item = opt[Math.floor(Math.random()*opt.length)]; 
    res.status(200).json({
      speech:item,
      displayText:item,
      source: 'api-test-dial',
    });
      break;
  }
});

restService.get('/ok',(req, res) => {
  request(options, function (err, response, body) {
    if(err){
      console.log('err:', err);
      res.status(400).send('ERROR');
    } else {
      console.log('body:', body);
      var json = JSON.parse(body);
      return res.status(200).json({
        speech:`o valor consumo geral é ${json['dados']['consumo_geral']}`,
        displayText:`o valor consumo geral é ${json['dados']['consumo_geral']}`,
        source: 'webhooke-echo-sample',
      })
    }
  });
});

restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
