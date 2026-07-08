const { test } = require('@playwright/test');


test('Browser Context Playwright test', async ({ browser }) => {
    chrome - plugins / cookies
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.youtube.com/");
});

test('Page Playwright test', async ({ page }) => {
    //chrome -plugins/ cookies
    //const context = await browser.newContext();
    //const page=await context.newPage();
    await page.goto("https://www.google.com/");
});