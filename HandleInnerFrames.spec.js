//different way to set up test fixture
const {test, expect} = require('@playwright/test')

test('iframes', async ({page}) =>{

    await page.goto('https://ui.vision/demo/webtest/frames/')

    
    const frame3 = await page.frame({url: "https://ui.vision/demo/webtest/frames/frame_3.html"})
    // frame3.locator("input[name='mytext3']").fill("Welcome")


    //nested frame
    const childFrame = await frame3.childFrames() //grabbing all child frames, but we only have one so length=1, array[0]
    //locator of radio button
    childFrame[0].locator('//*[@id="i5"]').check()



    await page.waitForTimeout(2000) //pausing execution, give you time to get eyes on it
    
})