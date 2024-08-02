const {test, expect} = require('@playwright/test')

test('Drag and Drop', async ({page}) =>{
    
    await page.goto('https://testautomationpractice.blogspot.com/')

    

    await page.waitForTimeout(2000) //pausing execution, give you time to get eyes on it
})