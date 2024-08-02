const {test, expect} = require('@playwright/test')

test('Date Picker', async ({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //filling in manually
    //await page.fill('#datepicker', '05/28/1986')


    const year = "2023"
    const month = "May"
    const day = "28"

    await page.click('#datepicker') // opens datepicker

    
    
    // for now, only going forward  in time
    while(true){
        const currentYear  = await page.locator('.ui-datepicker-year').textContent()
        const currentMonth = await page.locator('.ui-datepicker-month').textContent()

        if(currentYear == year && currentMonth == month){
            break
        }

        //await page.locator('[title="Next"]').click() //Next
        await page.locator('[title="Prev"]').click() //Prev
    }

    
    const dates = await page.$$(".ui-state-default")
    
    
    /*
    // Date selection via loop
   
    for(const dt of dates){
        if(await dt.textContent() == day){
            await dt.click()
        }
    }
    */

    // date selection - without loop
    await page.click(`//a[@class='ui-state-default'][text()='${day}']`)

    

    await page.waitForTimeout(2000) //pausing execution, give you time to get eyes on it
    
})


