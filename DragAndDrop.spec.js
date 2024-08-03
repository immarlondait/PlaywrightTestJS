const {test, expect} = require('@playwright/test')

test('Drag and Drop', async ({page}) =>{
    
    await page.goto('http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')

    const seoul = await page.locator('#box5') //drag this item 
    const southKorea = await page.locator('#box105') //drag to here

    //Approach 1
    // await seoul.hover()
    // await page.mouse.down()
    // await southKorea.hover()
    // await page.mouse.up()


    //Approach 2
    await seoul.dragTo(southKorea)


    
    

    await page.waitForTimeout(2000) //pausing execution, give you time to get eyes on it
})