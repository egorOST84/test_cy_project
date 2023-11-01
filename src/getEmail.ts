import puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    await page.goto('https://internxt.com/temporary-email');

    const emailElement = await page.waitForSelector('div.flex.h-full.w-full.cursor-pointer > p');

    if (emailElement) {
        const email = await page.evaluate(element => element.textContent, emailElement);
        console.log('Generated email:', email);

        // Save email to file
        const fs = require('fs');
        fs.writeFileSync('./cypress/fixtures/tempEmail.txt', email, 'utf-8');

        await browser.close();
    } else {
        console.error('Email not found');
    }
})();
