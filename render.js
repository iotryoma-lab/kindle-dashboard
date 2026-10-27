// dash.html を Kindle 用の 600x800 グレースケール PNG にする
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 600, height: 800 } });
  await page.goto('file://' + __dirname + '/dash.html');
  try { await page.waitForSelector('body[data-ready="1"]', { timeout: 20000 }); } catch (e) {}
  await page.waitForTimeout(500);
  await page.addStyleTag({ content: 'html{filter:grayscale(1)}' });
  await page.screenshot({ path: 'dashboard.png' });
  await browser.close();
})();
