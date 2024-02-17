import {test, expect} from "@playwright/test"


test("Check dropdown selectors", async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com')
    await page.locator('#country').selectOption({index: 5})
    await page.waitForTimeout(3000)
    await page.locator('#country').selectOption({value: 'uk'})
    var contents = await page.locator('#country').textContent();
    expect(contents.includes("Germany")).toBeTruthy()
    await page.selectOption('#colors', ['Red','Yellow', 'Blue'])

})


test('Handle auto suggest dropdown', async ({page}) => {
 
await page.goto('https://getbootstrap.com/docs/4.0/components/dropdowns/')
await page.locator('#dropdownMenuButton').click()
await page.waitForTimeout(3000)

const options = await page.$$('#dropdownMenuButton ~ div a')
for(let option of options)
{
    const value = await option.textContent()
    if(value.includes('Action'))
    {
        await option.click()
    }
}

})