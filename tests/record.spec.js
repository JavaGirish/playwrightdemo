import { test, expect } from '@playwright/test';

test('flipkart search tests', async ({ page }) => {
  
  await page.goto('https://www.flipkart.com/');  
  await page.getByPlaceholder('Search for Products, Brands and More').fill('lego technic');
  await page.getByPlaceholder('Search for Products, Brands').press('Enter');
  await expect(page).toHaveTitle('Lego Technic- Buy Products Online at Best Price in India - All Categories | Flipkart.com')   
});


test('checking various assertions', async ({page}) => {

    await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F')
    const locator = page.getByLabel('First name:')
    await locator.fill('admin@test.com')
    await expect(locator).toHaveValue('admin@test.com')

    await expect.soft(page.locator('h1')).toHaveText('Register')

    await expect.soft(page.locator("//select[@name='DateOfBirthDay']//option")).toHaveCount(32)

    await expect(page.locator("(//strong)[1]"),"Text is not matching").toHaveText('Your Personal Details')

})