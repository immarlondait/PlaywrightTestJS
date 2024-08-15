// testing on: https://reqres.in/
// postman link: web.postman.co

// in config file, changed fullyParallel to false since below tests have dependencies of the test above it

const {test, expect} = require('@playwright/test')

var userid

//for playwright, instead of sending page fixture we send request fixture
test('Get users', async ({request}) => {
    
    const response = await request.get('https://reqres.in/api/users?page=2')
    console.log(await response.json())
    expect(response.status()).toBe(200)

})

test('Create user', async ({request}) => {
    
    //first param is url, second param is data
    const response = await request.post('https://reqres.in/api/users',
                                    {
                                        data: {
                                            "name": "kumar",
                                            "job": "trainer"
                                        },

                                        headers: {
                                            "Accept": "application/json"
                                        }

                                    })

    console.log(await response.json())
    expect(await response.status()).toBe(201)

    var res = await response.json()
    userid = res.id //id come from the api response payload, could be .name, .job, .createdAt

})

test('Update user', async ({request}) => {
    
    const response = await request.put('https://reqres.in/api/users/'+userid,
                                    {
                                        data: {
                                            "name": "kumar",
                                            "job": "teacher"
                                        },

                                        headers: {
                                            "Accept": "application/json"
                                        }

                                    })

    console.log(await response.json())
    expect(await response.status()).toBe(200)

    
})

test('Delete user', async ({request}) => {
    const response = await request.delete('https://reqres.in/api/users/'+userid)
    expect(await response.status()).toBe(204)
    
})
