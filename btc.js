{
  "name": "btc",
  "permissions": "NONE",
  "permissions2": "NONE",
  "restriction": "1",
  "_id": "PhoZw",
  "actions": [
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false",
      "path": "$.image.small",
      "storage": "1",
      "varName": "imgcoin",
      "debugMode": "1",
      "headers": "",
      "reUse": "1",
      "name": "Store Json From WebAPI"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false",
      "path": "$.market_data.current_price.usd",
      "storage": "1",
      "varName": "usdpricecoin",
      "debugMode": "1",
      "headers": "",
      "reUse": "1",
      "name": "Store Json From WebAPI"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false",
      "path": "$.market_data.high_24h.usd",
      "storage": "1",
      "varName": "ath24hcoin",
      "debugMode": "1",
      "headers": "",
      "reUse": "1",
      "name": "Store Json From WebAPI"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false",
      "path": "$.id",
      "storage": "1",
      "varName": "idcoin",
      "debugMode": "1",
      "headers": "",
      "reUse": "1",
      "name": "Store Json From WebAPI"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false",
      "path": "$.symbol",
      "storage": "1",
      "varName": "symbolcoin",
      "debugMode": "1",
      "headers": "",
      "reUse": "1",
      "name": "Store Json From WebAPI"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false",
      "path": "$.market_data.low_24h.usd",
      "storage": "1",
      "varName": "lowcoin",
      "debugMode": "1",
      "headers": "",
      "reUse": "1",
      "name": "Store Json From WebAPI"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false",
      "path": "$.market_data.price_change_percentage_24h",
      "storage": "1",
      "varName": "24hpercentagecoin",
      "debugMode": "1",
      "headers": "",
      "reUse": "1",
      "name": "Store Json From WebAPI"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "",
      "buttons": [],
      "selectMenus": [],
      "attachments": [],
      "embeds": [
        {
          "title": "Name: ${tempVars(\"idcoin\")} / Symbol: ${tempVars(\"symbolcoin\")} ",
          "url": "",
          "color": "#FFD700",
          "timestamp": "true",
          "imageUrl": "",
          "thumbUrl": "${tempVars(\"imgcoin\")}",
          "description": "",
          "fields": [
            {
              "name": "Info:",
              "value": "**${this.convertTextToEmojis(\"USD\", true)} Price: $ ${tempVars(\"usdpricecoin\")}**\n**🟢High 24H USD: $ ${tempVars(\"ath24hcoin\")}**\n**🔴Low 24H USD: $ ${tempVars(\"lowcoin\")}**\n**🕛Percentage ${this.convertTextToEmojis(\"24H\", true)}: ${tempVars(\"24hpercentagecoin\")} %**\n",
              "inline": "false"
            }
          ],
          "author": "",
          "authorUrl": "",
          "authorIcon": "",
          "footerText": "",
          "footerIconUrl": ""
        }
      ],
      "reply": true,
      "ephemeral": false,
      "tts": false,
      "overwrite": false,
      "dontSend": false,
      "editMessage": "0",
      "editMessageVarName": "",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    }
  ],
  "comType": "4",
  "description": "Price Check for Bitcoin"
}
