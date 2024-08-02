const {test, expect} = require('@playwright/test')

test('Mouse Right Click', async ({page}) =>{
    
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')

    
    const button = await page.locator("//span[@class='context-menu-one btn btn-neutral']")

    //right click action
    await button.click({button: 'right'}) //other options "left", "middle", button.click() to see options
    




    await page.waitForTimeout(2000) //pausing execution, give you time to get eyes on it
})