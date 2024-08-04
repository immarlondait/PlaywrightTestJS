// reference: https://playwright.dev/docs/input#upload-files

const {test, expect} = require('@playwright/test')

test('Single File', async ({page}) =>{
    
    await page.goto('https://practice.expandtesting.com/upload')

    await page.waitForSelector('#fileInput')

    //await page.locator('#fileInput').click()


    await page.locator('#fileInput').setInputFiles('C:/Users/Marlon/Downloads/Resized_received_849043087058418.jpg')

    

    await page.waitForTimeout(2000) //pausing execution, give you time to get eyes on it
})



test.only('Multiple Files', async ({page}) =>{
    
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')

    await page.waitForSelector('#filesToUpload')

    await page.locator('#filesToUpload')
                .setInputFiles(['C:/Users/Marlon/Downloads/Resized_received_849043087058418.jpg',   //file1
                                'C:/Users/Marlon/Downloads/tardis.jpeg'])                           //file2
                                                                                                    //.setInputFiles([file1, file2])

    // #fileList li:nth-child(1)
    // #fileList li:nth-child(2)                                                     

    expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('Resized_received_849043087058418.jpg')
    expect(await page.locator('#fileList li:nth-child(2)')).toHaveText('tardis.jpeg')
    

    await page.waitForTimeout(3000) //pausing execution, give you time to get eyes on it

    //remove files
    await page.locator('#filesToUpload').setInputFiles([]) //empty array
    expect(await page.locator('#fileList')).toHaveText('No Files Selected')
    await page.waitForTimeout(3000)
})