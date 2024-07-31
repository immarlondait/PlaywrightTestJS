import {test, expect} from '@playwright/test'

test('Handle Dropdowns', async ({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //Multiple ways to select option from the dropdown
    //await page.locator('#country').selectOption({label: 'India'})         //label or visible text
    // await page.locator('#country').selectOption('India')                 //visible text (capital 'i')
    //await page.locator('#country').selectOption({value: 'uk'})            //value (lowercase 'i', more visible diff for 'usa' and 'United States')
    //await page.locator('#country').selectOption({index: 1})               //index
    //await page.selectOption('#country', 'India')                            //by text



    //Assertions
    //1) check total number of options in dropdown - Approach 1
    // const options = await page.locator('#country option')
    // await expect(options).toHaveCount(10) 


    //2) check number of options in dropdown  - Approach 2
    // const options = await page.$$('#country option')
    // //console.log("Number of options ", options.length)
    // await expect(options.length).toBe(10)


    //3) check presence of value in the dropdown - Approach1
    // const content = await page.locator('#country').textContent()
    // await expect(content.includes('India')).toBeTruthy()
    
    //4) check presence of blue in the dropdown - Approach2, using loop
    // const options = await page.$$('#country option')
    // let status=false

    // for(const option of options){
    //     //console.log(await option.textContent())
    //     let value = await option.textContent()
    //     if(value.includes('France')){
    //         status=true
    //         break
    //     }
    // }
    // expect(status).toBeTruthy()


    //5) select option from dropdown using loop
    const options = await page.$$('#country option')
    for(const option of options){
        let value = await option.textContent()
        if(value.includes('France')){
            await page.selectOption('#country', value)
            break
        }
    }
    

    await page.waitForTimeout(2000) //pausing execution, give you time to get eyes on it
    
})