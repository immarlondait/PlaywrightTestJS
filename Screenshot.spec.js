// const {test, expect} = require('@playwright/test')
import {test, expect} from '@playwright/test'


//could also add in the playwright.config.js file to take a screenshot after EVERY test
//in the use: {} block
//add "screenshot: 'on'"

test('Page screenshot', async ({page}) =>{

    await page.goto('https://demo.opencart.com/')
    await page.screenshot( {path: 'Screenshots/'+Date.now()+'HomePage.png'} )
    
    
})



test('Full Page screenshot', async ({page}) =>{

    await page.goto('https://demo.opencart.com/')
    await page.screenshot( {path: 'Screenshots/'+Date.now()+'FullPage.png', fullPage:true} )
    
    
})



test.only('Element screenshot', async ({page}) =>{

    
    await page.goto('https://demo.opencart.com/')
    await page.locator("(//div[@class='product-thumb'])[1]").screenshot( {path: 'Screenshots/'+Date.now()+'Macbook.png'} )
    
})