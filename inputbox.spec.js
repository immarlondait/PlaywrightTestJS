import {test, expect} from '@playwright/test'

test('handle inputbox', async ({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/')


    //inputbox - name
    await expect(page.locator("//input[@id='name']")).toBeVisible()
    await expect(page.locator("//input[@id='name']")).toBeEmpty()
    await expect(page.locator("//input[@id='name']")).toBeEditable()
    await expect(page.locator("//input[@id='name']")).toBeEnabled()


    //const nameField = await page.locator('#name') // CSS
    //const nameField = await page.locator("//input[@id='name']") // XPATH
    await page.fill("//input[@id='name']", "John")

    
    await page.waitForTimeout(5000) //pausing execution, give you time to get eyes on it
    
})