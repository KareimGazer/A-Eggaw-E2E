// test the dark mode
// responsiveness

const { test, expect, describe } = require('@playwright/test');
const { describe } = require('node:test');

const { DATA_FOLDER, WEBSITE_HOME } = require('./config');


describe('Accessability', () => {
    
    test.beforeEach(async ({ page }) => {
        await page.goto(WEBSITE_HOME);
    })

    test('should be responsive', async ({ page }) => {

        // testing on samsung galaxy A51/A71
        await page.setViewportSize({ width: 412, height: 914 });
        await page.screenshot({ path: `${DATA_FOLDER}/samsung_galaxy_portrait.png` });

        await page.setViewportSize({ width: 914, height: 412 });
        await page.screenshot({ path: `${DATA_FOLDER}/samsung_galaxy_landscape.png` });

        // testing on iPad Air
        await page.setViewportSize({ width: 820, height: 1180 });
        await page.screenshot({ path: `${DATA_FOLDER}/ipad_air_portrait.png` });

        await page.setViewportSize({ width: 1180, height: 820 });
        await page.screenshot({ path: `${DATA_FOLDER}/ipad_air_landscape.png` });

        // testing on Desktop
        await page.setViewportSize({ width: 1920, height: 1080 });
        await page.screenshot({ path: `${DATA_FOLDER}/desktop.png` });

    })
})
