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
