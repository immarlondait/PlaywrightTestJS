const {test, expect} = require('@playwright/test')

test('Keyboard Actions', async ({page}) =>{
    
    await page.goto('https://gotranscript.com/text-compare')

    //await page.locator("textarea[placeholder='Paste one version of the text here.']").fill("Welcome to automation")

    await page.type("textarea[placeholder='Paste one version of the text here.']", "Welcome to automation")

    //ctrl+a
    await page.keyboard.press('Control+A')
    //await page.keyboard.press('Meta+A') //on MacOS


    //ctrl+c
    await page.keyboard.press('Control+C')

    //tab
    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')


    //ctrl+v
    await page.keyboard.press('Control+V')
    
    

    await page.waitForTimeout(2000) //pausing execution, give you time to get eyes on it
})