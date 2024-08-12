// https://playwright.dev/docs/pages

const {test, expect, chromium } = require('@playwright/test')

test('Handle Pages/Windows', async () => {

    // below used if we don't want to pass a {page} fixture in the method
    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page1 = await context.newPage()   //With both of these, we can handle 
    const page2 = await context.newPage()   //each page independently



    const allPages = context.pages()
    console.log("Number of pages created: ", allPages.length)


    await page1.goto('https://demoblaze.com/index.html')
    await expect(page1).toHaveTitle('STORE')

    await page2.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page2).toHaveTitle('OrangeHRM')



})

test.only('Handle Multiple Pages/Windows', async () => {

    // below used if we don't want to pass a {page} fixture in the method
    const browser = await chromium.launch() //create new browser
    const context = await browser.newContext() //create new context
    
    const page1 = await context.newPage()

    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page1).toHaveTitle('OrangeHRM')

    const pagePromise = context.waitForEvent('page') //waiting for event to be triggered
    await page1.locator("(//a[normalize-space()='OrangeHRM, Inc'])").click()

    const newPage = await pagePromise // the event (clicking link) gets saved to newPage

    await expect(newPage).toHaveTitle('Human Resources Management Software | OrangeHRM')



    await newPage.waitForTimeout(2000)
    await browser.close() //close since we created our own page
})