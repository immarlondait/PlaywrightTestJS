import {test, expect} from '@playwright/test'

test('handle RadioButton', async ({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/')


    //RadioButton - male, //input[@id='male']
    await page.check("//input[@id='male']")

    await expect(await page.locator("//input[@id='male']")).toBeChecked() //validate male radio button is checked
    await expect(await page.locator("//input[@id='male']").isChecked()).toBeTruthy() //validate male radio button is checked and set to true
    await expect(await page.locator("//input[@id='female']").isChecked()).toBeFalsy() //validate male radio button is checked and female radio button is false (unchecked)
    

    
    


    

    
    await page.waitForTimeout(2000) //pausing execution, give you time to get eyes on it
    
})