//different way to set up test fixture
const {test, expect} = require('@playwright/test')

test('frames', async ({page}) =>{

    await page.goto('https://ui.vision/demo/webtest/frames/')

    





    await page.waitForTimeout(2000) //pausing execution, give you time to get eyes on it
    
})