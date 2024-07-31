const { test, expect } = require("@playwright/test")


test('AssertionsTest' , async ({page})=>{

    //open app url
    await page.goto('https://demo.nopcommerce.com/register')

    
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    
    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    
    const logoElement = await page.locator('.header-logo')
    await expect(logoElement).toBeVisible()

    
    const searchStoreBox = await page.locator('#small-searchterms')
    await expect(searchStoreBox).toBeEnabled()

    
    const maleRadioButton = await page.locator('#gender-male')
    await maleRadioButton.click() // select radio button for Male
    await expect(maleRadioButton).toBeChecked()

    
    const newsletterCheckBox = await page.locator('#Newsletter')
    await expect(newsletterCheckBox).toBeChecked()


    //6) expect(locator).toHaveAttribute()  Element has attribute
    const registerButton = await page.locator('#register-button')
    await expect(registerButton).toHaveAttribute('type','submit')


    // .toHaveText()
    await expect(await page.locator('.page-title h1')).toHaveText('Register') //full text


    //.toContainText()
    await expect(await page.locator('.page-title h1')).toContainText('Reg') //partial text


    //.toHaveValue(value)
    const emailInputBox = await page.locator('#Email')
    emailInputBox.fill('test@demo.com')
    await expect(emailInputBox).toHaveValue('test@demo.com')


    //.toHaveCount() for dropdowns
    const dayDropdown = await page.locator("select[name='DateOfBirthDay'] option")
    await expect(dayDropdown).toHaveCount(32)


})