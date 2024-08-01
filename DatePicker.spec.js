//different way to set up test fixture
const {test, expect} = require('@playwright/test')

test('Date Picker', async ({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    

    await page.waitForTimeout(2000) //pausing execution, give you time to get eyes on it
    
})


