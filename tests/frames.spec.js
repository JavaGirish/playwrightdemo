import {test, expect} from '@playwright/test'


test.beforeEach('Launch browser', async ({page}) => {
    await page.goto('https://ui.vision/demo/webtest/frames/')
})

test('Handle frames', async ({page}) => {
    const frame1 = page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_1.html'})
    await frame1.locator("//input[@name='mytext1']").fill("Text 1")
    const frame2 = page.frameLocator("//frame[@src='frame_2.html']")
    await frame2.locator("[name='mytext2']").fill('John Smith')
    await page.close()
})


test('Nested frames', async ({page}) => {

    const frame3 = page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_3.html'})

    const child = frame3.childFrames()
    await child[0].locator("//span[text()='I am a human']").click()
    await page.close()
})