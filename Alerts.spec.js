//different way to set up test fixture
const {test, expect} = require('@playwright/test')

test('Alert with OK', async ({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    // Enabling dialog window handler
    // Need this block before actually clicking on the alert
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept()
    })
    // We need above code block to be able to validate the alert box from below
    await page.click("button[onclick='myFunctionAlert()']")




    await page.waitForTimeout(2000) //pausing execution, give you time to get eyes on it
    
})


test('Confirmation Dialog - Alert with OK and CANCEL', async ({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    // Enabling dialog window handler
    // Need this block before actually clicking on the alert
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        await dialog.accept() // close by using OK button
        //await dialog.dismiss() // close by using CANCEL
    })
    // We need above code block to be able to validate the alert box from below
    await page.click("button[onclick='myFunctionConfirm()']")
    await expect(page.locator('#demo')).toHaveText("You pressed OK!")
    



    await page.waitForTimeout(2000) //pausing execution, give you time to get eyes on it
    
})

test('Prompt - with input box', async ({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    // Enabling dialog window handler
    // Need this block before actually clicking on the alert
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain('Harry Potter')


        await dialog.accept('John') // close by using OK button // This is the value that gets entered in the prompt box
        //await dialog.dismiss() // close by using CANCEL
    })
    // We need above code block to be able to validate the alert box from below
    await page.click("button[onclick='myFunctionPrompt()']")
    await expect(page.locator('#demo')).toHaveText("Hello John! How are you today?")
    



    await page.waitForTimeout(2000) //pausing execution, give you time to get eyes on it
    
})