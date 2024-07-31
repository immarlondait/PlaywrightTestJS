// const {test, expect} = require('@playwright/test')
import {test, expect} from '@playwright/test'

test('Locators', async ({page})=>{

    // semi-colon isn't needed
    // await is needed for any page() functions
    await page.goto("https://demoblaze.com/index.html")

    //await page.locator('locator').click()
    //await page.click('locator')
    
    //click on login button - property
    
    //await page.locator('id=login2').click()
    await page.click('id=login2')

    // id="loginusername"
    // provide username - css, #[locator]
    await page.locator('#loginusername').fill("pavanol")
    //await page.fill('#loginusername', 'pavanol')
    //await page.type('#loginusername', 'pavanol')

    await page.locator('#loginpassword').fill("test@123")


    //click on login button
    ///html/body/div[3]/div/div/div[3]/button[2]
    await page.click("//button[normalize-space()='Log in']")

    //verify logout link present
    const logoutlink = await page.locator("//a[normalize-space()='Log out']")
    
    await expect(logoutlink).toBeVisible()

    await page.close()

} )