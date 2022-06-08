// const express = require("express");
const http = require("http");
const { MongoClient } = require("mongodb");
const url = require("url");

// const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

async function main() {
  const URI = `mongodb+srv://user:5ppdHxvDgVL0CahB@cluster0.57mmy.mongodb.net/orders?retryWrites=true&w=majority`;
  const client = new MongoClient(URI);
  try {
    await client.connect();
    await listDatabases(client);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

main();
let findResult = "";
async function listDatabases(client) {
  console.log("Connected successfully to server");
  const db = client.db("orders");
  const collection = db.collection("goods");
  //=========== find all document
  findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);
}
//"CORS Access-Control-Allow-Origin"
const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");
  console.log("server work");
  if (req.method == "GET") {
    let urlRequest = url.parse(req.url, true);
    if (urlRequest.query.p == "80") {
      res.end(JSON.stringify(findResult));
    }
  }
});

server.listen(4000);
