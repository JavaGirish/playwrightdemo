import {test, expect} from '@playwright/test'

    test.beforeEach('Launch URL', async ({page}) => {
        await page.goto('https://testautomationpractice.blogspot.com')
    })

    test('Handle alerts with ok button', async ({page}) => {
       
        page.on('dialog', async dialog => {
            
            expect(dialog.type()).toContain('alert')
            expect(dialog.message()).toContain('I am an alert box!')        
            await dialog.accept()
        })
        await page.locator("//button[text()='Alert']").click()
    })

    test('Handle alerts with ok button without handler', async ({page}) => {
        await page.locator("//button[text()='Alert']").click()
    })

    test('Handle confirm with OK button', async ({page}) => {
        page.on('dialog', async dialog => {
            expect(dialog.type()).toContain('confirm')
            expect(dialog.message()).toContain('Press a button!') 
            await dialog.accept()
        })
        await page.locator("//button[text()='Confirm Box']").click()
        await expect(page.getByText('You pressed OK!')).toBeVisible()

    })

    test('Handle confirm with Dismiss', async ({page}) => {
        page.on('dialog', async dialog => {
            expect(dialog.type()).toBe('confirm')
            expect(dialog.message()).toBe('Press a button!') 
            await dialog.dismiss()   
        })
        await page.locator("//button[text()='Confirm Box']").click()
        await expect(page.getByText('You pressed Cancel!')).toBeVisible()

    })

    test('Handle prompt', async ({page}) => {
        page.on('dialog', async dialog => {
            expect(dialog.type()).toBe('prompt')
            expect(dialog.message()).toBe('Please enter your name:')
            expect(dialog.defaultValue()).toBe('Harry Potter')
            await dialog.accept('Daniel Atlas')
        })
        await page.locator("//button[text()='Prompt']").click()
        await expect(page.locator('#demo')).toHaveText('Hello Daniel Atlas! How are you today?')
        await page.close()

    })

    test.afterEach('Close browsers', async ({page}) => {

        await page.close()
    })