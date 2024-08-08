exports.HomePage = class HomePage{

    constructor(page){
        this.page = page
        this.productList = "#//*[@id='tbodyid']/div/div/div/h4/a"
        this.addToCartBtn = '.btn.btn-success.btn-lg'
        this.cart='#cartur'

    }

    async addProductToCart(productName){
        //grab all the products into an array $$
        const productList = await this.page.$$(this.productList)

        //loop through the array to check each item
        for (const product of productList){
            //if this nth item is a match, click onto it and break loop
            if (productName === await product.textContent()){
                await product.click()
                break
            }
        }

        //we are now in the cart page, clicking on Add to Cart brings up a dialog popup
        //in order to handle a dialog popup, we have to pre-build below dialog handler
        await this.page.on('dialog', async dialog=>{
            if(dialog.message().includes('added')){
                //we click on accept for the dialog box
                await dialog.accept()
            }
        })
        //we're handling the dialog popup in the block above, safe to click through the add to cart button
        await this.page.locator(this.addToCartBtn).click()
    }


    async goToCart(){
        await this.page.locator(this.cart).click()
    }



}