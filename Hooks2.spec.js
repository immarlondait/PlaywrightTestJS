import {test, expect} from '@playwright/test'
// edited playwright.config.js 
// fullyParallel: false //set to false

let page;

//test.beforeEach(async ({browser}) =>{
test.beforeAll(async ({browser}) =>{
    page = await browser.newPage()

    await page.goto('https://www.demoblaze.com/index.html')
    //Login
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@123')
    await page.locator("button[onclick='logIn()']").click()
})

//test.afterEach(async() =>{
test.afterAll(async() =>{

    //Logout
    await page.locator('#logout2').click()

})


test('Home Page Test', async () =>{ //removed the {page} fixture since we made it global

    //Home Page
    const products = await page.$$('.card-block')
    expect(products).toHaveLength(9)
})


test('Add Product to Cart Test', async () =>{

    //Add product to cart
    await page.locator('//a[normalize-space()="Samsung galaxy s6"]').click()
    await page.locator('//a[normalize-space()="Add to cart"]').click()
    //alert handler
    page.on('dialog', async dialog=>{
        expect(dialog.message()).toContain('Product added.')
        await dialog.accept()
    })

})