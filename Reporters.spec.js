//https://playwright.dev/docs/test-reporters 
const {test, expect} = require('@playwright/test')

test('Test1', async ({page}) => {
    await page.goto('https://www.demoblaze.com/index.html')
    await expect(page).toHaveTitle('STORE')
})

test('Test2', async ({page}) => {
    await page.goto('https://demo.opencart.com/')
    await expect(page).toHaveTitle('Your Store')
})

test('Test3', async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page).toHaveTitle('OrangeHRM')
})

// changed config reporters from 'html' to 'list'
// or manually via terminal
//                    --reporter=list
// line, list, dot, html, json, junit