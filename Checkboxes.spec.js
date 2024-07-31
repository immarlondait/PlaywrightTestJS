import {test, expect} from '@playwright/test'

test('handle RadioButton', async ({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //single checkbox
    
    /* my attempt
    const sundayCheckbox = await page.locator('#sunday')
    await sundayCheckbox.check()
    await expect(sundayCheckbox).toBeChecked()
    */

    await page.locator('#sunday').check()
    // expect(await page.locator('#sunday')).toBeChecked()
    expect(await page.locator('#sunday').isChecked()).toBeTruthy()

    await page.waitForTimeout(2000) //pausing execution, give you time to get eyes on it

    //await page.locator('#sunday').uncheck()
    expect(await page.locator('#monday').isChecked()).toBeFalsy()
    

    //Multiple Checkboxes
    const checkboxLocators=[
        "#tuesday",
        "#wednesday",
        "#thursday"
    ]

    for(const locator of checkboxLocators){ // check multiple checkboxes
        await page.locator(locator).check()
    }

    for(const locator of checkboxLocators){ // uncheck multiple checkboxes
        if (await page.locator(locator).isChecked()){
            await page.locator(locator).uncheck()
        }
    }

    for(const locator of checkboxLocators){ // validate multiple checkboxes unchecked
        expect(await page.locator(locator).isChecked()).toBeFalsy()
    }



    await page.waitForTimeout(2000) //pausing execution, give you time to get eyes on it
    
})