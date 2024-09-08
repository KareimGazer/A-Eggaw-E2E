const { test, expect, describe } = require('@playwright/test');
const { describe } = require('node:test');
const { WEBSITE_HOME, APP_NAME } = require('./config');

describe('Sitemap', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(WEBSITE_HOME);
    })

    test('should have a home page', async ({ page }) => {
        await expect(page).toHaveURL(WEBSITE_HOME);
    })

    // TODO: add the use of geolocation
    test('should have a details page', async ({ page }) => {
        await page.getByRole('link', { name: 'docs' }).click();
        await expect(page).toHaveURL(`${WEBSITE_HOME}/docs/intro`);
    })

    test('should have the app title', async ({ page }) => {
        await expect(page).toHaveTitle(APP_NAME);
    })
})