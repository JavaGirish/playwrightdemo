import { test, expect } from "@playwright/test";


test('Working with different locators', async ({page}) => {
    await page.goto('https://www.amazon.ae/')
    await page.getByPlaceholder('Search Amazon.ae').fill('lego technic')
    await page.click('#nav-search-submit-button')
    await page.getByText('Mobile Phones').click()
    
    await page.goto('https://demo.nopcommerce.com/login?returnUrl=%2F')
    await page.getByLabel('Email').fill('admin@test.com')
    
})