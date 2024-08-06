import {test, expect} from '@playwright/test'

// run cmd prompt with --grep '@tagHere'

test('test1@sanity', async ({page}) =>{

    // await page.goto('https://www.demoblaze.com/index.html')
    // await page.getByRole('link', { name: 'Log in' }).click()
    // await page.locator('#loginusername').fill('pavanol')
    // await page.locator('#loginpassword').fill('test@123')
    // await page.getByRole('button', { name: 'Log in' }).click()
    // await expect(page.locator('#logout2')).toBeVisible()
    
    console.log('this is test 1')
    
})

test('test2@sanity', async ({page}) =>{

    console.log('this is test 2')
    
})

test('test3@regression', async ({page}) =>{

    console.log('this is test 3')
    
})


test('test4@regression', async ({page}) =>{

    console.log('this is test 4')
    
})

//cmd to not run any tests with specific tag
//--grep '@sanity' --grep-invert '@regression'
test('test5@sanity@regression', async ({page}) =>{

    console.log('this is test 5')
    
})

