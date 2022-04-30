var cmd=require('node-cmd');
console.log("Program start");
//console.log("Verifying installed packages");
//cmd.runSync('npm i');
//console.log("All packages OK");
console.log("Preparing packages");
var Scraper = require('images-scraper');
const {writeFile} = require('fs');
const path = './json/*.json';
var results = ""	
var img = "";
////////////////////////////Get image from Google API///////////////////////////////////////////////////////////////////////////////
const google = new Scraper({ puppeteer:{headless:false},});
(async () => {var results = await google.scrape('banana',20);console.log('results');var img=20;
writeFile(path, JSON.stringify(results, null, 2), (error)=> {if(error){console.log(":("); return;}console.log(":)");});})();
////////////////////////////Send image to RestbAI and load results into json object/////////////////////////////////////////////////
var checkExist = setInterval(function() {
   if (img .length) {
      console.log("Exists!");
      clearInterval(checkExist);
   }
}, 100); // check every 100ms

var checkExist = setInterval(function() {if (img.length) {
	console.log("Finished scraping for images");
	var image= "https://peiphy.xyz/favicon.ico"
console.log("Starting build");
var curltime = cmd.runSync(`curl -s "https://api-us.restb.ai/vision/v2/multipredict" \ -d model_id="re_roomtype_global_v2,re_features_v3,re_appliances_v2" \-d image_url=${image} \-d client_key="78b4fdd3020ebcd8fffadf001377b0fb9138a677f4f8b92131e7a7c18c93d468" > ./data.json`);
//Models currently active are: Room type, home features, and appliances.//
//console.log(curltime);
console.log("Curltime");
      clearInterval(checkExist);}}, 10);
      console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA") 
