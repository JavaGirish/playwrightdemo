import { test, expect } from "@playwright/test";

test('Verify Emirates Webpage title is as per expected', async ({page}) => {
    await page.goto("https://emirates.com");    
    await expect(page).toHaveTitle("Emirates | Fly Better")
    console.log("page url is: " + page.url())
    await page.locator("//button[text()='Accept']").click()
    await page.click("//button[@data-link='BOOK']")
    await page.locator("//*[@class='account-username']").click()

    await page.fill('id=sso-email', '00960999966')
    await page.fill('id=sso-password_label', 'Test@2017')
    await page.locator('#login-button').click()
    await page.close()
})



