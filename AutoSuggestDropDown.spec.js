//different way to set up test fixture

const {test, expect} = require('@playwright/test')

test('Auto suggest dropdown', async ({page}) =>{

    await page.goto('https://www.redbus.in/')

    await page.locator('#src').fill('Delhi')
    await page.waitForSelector("//li[@class='sc-iwsKbI jTMXri']/div/text[1]")

    const fromCityOptions = await page.$$("//li[@class='sc-iwsKbI jTMXri']/div/text[1]")
    
    for(let option of fromCityOptions) {
        const value = await option.textContent()
        //console.log(value)
        if(value.includes('Azadpur')){
            await option.click()
            break
        }
    }

    await page.waitForTimeout(2000)



    

    await page.waitForTimeout(2000) //pausing execution, give you time to get eyes on it
    
})