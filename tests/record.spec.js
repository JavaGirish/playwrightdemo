import { test, expect, devices } from '@playwright/test';

test('flipkart tests', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
  await page.getByText('Search for Products, Brands').click();
  await page.getByPlaceholder('Search for Products, Brands').fill('lego technic');
  await page.getByPlaceholder('Search for Products, Brands').press('Enter');
  await page.locator('.css-1dbjc4n > div > div > div > div > div > .css-1dbjc4n > div > img:nth-child(2)').first().click();
  
  const locator = page.getByText('Buy now')
  var options= {enabled: true, timeout: 3000}
  await expect(locator).toBeEnabled(options);
  await page.getByText('Buy now').click();
  
});


test('checking various assertions', async ({page}) => {

    await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F')
    const locator = page.getByLabel('First name:')
    await locator.fill('admin@test.com')
    await expect(locator).toHaveValue('admin@test.com')

    await expect.soft(page.locator('h1')).toHaveText('Register')

    await expect.soft(page.locator("//select[@name='DateOfBirthDay']//option")).toHaveCount(32)

    await expect(page.locator("(//strong)[1]"),"Text is not matching").toHaveText('Your Personal')

})