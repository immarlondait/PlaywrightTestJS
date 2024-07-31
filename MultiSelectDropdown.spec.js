import {test, expect} from '@playwright/test'

test('Handle Dropdowns', async ({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //Select multiple options from multiselect dropdown
    //await page.selectOption('#colors', ['Blue', 'Red', 'Yellow'])

    //Assertions
    //1) check number of options in dropdown
    // const options = await page.locator('#colors option')
    // await expect(options).toHaveCount(5)
    
    //2) check number of options in dropdown using JS array
    // const options = await page.$$('#colors option')
    // //console.log("Number of options: ", options.length)
    // await expect(options.length).toBe(5)

    //3) check presence of value/option in dropdown 
    const content = await page.locator('#colors').textContent()
    await expect(content.includes('Blue')).toBeTruthy()
    await expect(content.includes('Black')).toBeFalsy()



    await page.waitForTimeout(2000) //pausing execution, give you time to get eyes on it
    
})