import { test, expect } from "@playwright/test";


test('Working with different locators', async ({page}) => {
    await page.goto('https://amazon.in/')
    await page.getByPlaceholder('Search Amazon.in').fill('lego technic')
    await page.click('#nav-search-submit-button')
    await page.getByText('Mobiles').click()
})