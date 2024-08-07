const {test, expect} = require('@playwright/test')


//only
// test.only('test1', async({page})=>{
//     console.log('this is test1')
// })

//skip
// test.skip('test2', async({page})=>{
//     console.log('this is test2')
// })

//>npx playwright test Annotations.spec.js --project chromium
// test('test3', async({page, browserName})=>{
//     console.log('this is test3')
//     if(browserName === 'firefox')
//     {
//         test.skip()
//     }
// })

//Fixme v1
// test.fixme('test4', async({page})=>{
//     console.log('this is test4')
// })

//Fixme v2
// test('test4', async({page})=>{
//     test.fixme()
//     console.log('this is test4')
// })

//Fail, negative tests
//expected to fail, will error if succeeds
// test('test5', async({page})=>{
//     test.fail()
//     console.log('this is test5')
//     expect(1).toBe(2) //this assertion will fail, which is what we're expecting
// })

//Fail v2
// test('test6', async({page, browserName})=>{
//     //if browser is chrome, expect test to fail
//     //if browser isn't chrome, we expect to pass
//     //used for using same test for multiple browsers where one is intended to fail
//     if(browserName === 'chromium'){
//         //if chrome, we change expections of this test to be a fail result
//         test.fail()
//     }
    
//     console.log('this is test6')
//     expect(1).toBe(2) //this assertion will fail, which is what we're expecting if we're running chrome
// })

//Slow
//triples timeout, default time is 30s so will take 90s with slow
//in playwright.config.js below the use: block (before projects: block) we can set the 'timeout' specifically there
test('test7', async({page})=>{
    //test.slow() //triples the timeout set in playwright.config.js, default 30s
    test.setTimeout(2000) //can also manually set this specific test's timeout
    await page.goto('https://www.demoblaze.com/index.html')
    console.log('this is test7')
})