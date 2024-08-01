//different way to set up test fixture
const {test, expect} = require('@playwright/test')

test('frames', async ({page}) =>{

    await page.goto('https://ui.vision/demo/webtest/frames/')

    //total frames
    const allframes = await page.frames()
    console.log("Number of frames: ", allframes.length)


    //approach 1: using name/url
    //const frame1 = page.frame('name') //if name is available
    // const frame1 = await page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_1.html'}) //no name available
    // await frame1.fill("[name='mytext1']", 'Hello')


    //approach 2: using frame locator
    const inputbox = await page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']")
    inputbox.fill('Hello')
    




    await page.waitForTimeout(2000) //pausing execution, give you time to get eyes on it
    
})