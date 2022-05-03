const delay = require('delay');
const puppeteer = require('puppeteer');
const prompt = require("prompt-sync")({ sigint: true });
const n = prompt("How Many Tab(s) Would You Like To Open? ");

(async function example() {

  while(true){
    try {
      let i = 0;

      process.setMaxListeners(Infinity);
      let browsers = []
      while(i < n){

      await delay(3000);
      let browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
      
      const page = await browser.newPage();
      await browsers.push(browser)
      //await browsers.push(browser)
      //await page.setDefaultNavigationTimeout(Infinity); 
      await page.goto('https://arcio-server.losh531.repl.co/');
      let x = i + 1;
      await console.log("Opening Tab Number " + x);
      i++;
    }
    await delay(60000 * 60)
    browsers.forEach(async function(item, index){
      await item.close()
    })
  } finally {
    await console.log("Finished Opening + waiting")
    

  }
}
})();
