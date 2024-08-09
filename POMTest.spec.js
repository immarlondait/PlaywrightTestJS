//Page Object Model, POM
import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { HomePage } from '../pages/HomePage'
import { CartPage } from '../pages/CartPage'


test.fixme('Page Object Model test', async ({page})=>{


    ////// without POM ///////
    // await page.goto("https://demoblaze.com/index.html")
    // await page.click('id=login2')
    // await page.locator('#loginusername').fill("pavanol")
    // await page.locator('#loginpassword').fill("test@123")
    // await page.click("//button[normalize-space()='Log in']")

    //Login
    const login = new LoginPage(page)
    await login.gotoLoginPage()
    await login.login('pavanol', 'test@123')
    

    

    //Home

    const home = new HomePage(page)
    await home.addProductToCart("Nexus 6")
    await page.waitForTimeout(2000)
    await home.goToCart()
    

    //Cart
    const cart = new CartPage(page)
    await page.waitForTimeout(2000)
    const status = await cart.checkProductInCart("Nexus 6")

    //failing in HomePage.js, failing on the click()?

    expect(await status).toBe(true)
    


    await page.waitForTimeout(2000)
} )