const { test, expect, describe } = require('@playwright/test');
const { WEBSITE_HOME, APP_NAME } = require('./config');

describe('Sitemap', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(WEBSITE_HOME);
    })

    test('should have a home page', async ({ page }) => {
        await expect(page).toHaveURL(WEBSITE_HOME);
    })

    // TODO: add the use of geolocation to work
    test('should have a dashboard page', async ({ page }) => {
        await page.getByRole('link', { name: 'docs' }).click();

        await expect(page).toHaveURL(`${WEBSITE_HOME}/dashboard`);
    })

    test('should have the app title', async ({ page }) => {
        await expect(page).toHaveTitle(APP_NAME);
    })
})