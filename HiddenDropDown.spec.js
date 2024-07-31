//different way to set up test fixture
const {test, expect} = require('@playwright/test')

test('Hidden options dropdown', async ({page}) =>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    

    await page.waitForTimeout(2000) //pausing execution, give you time to get eyes on it
    
})