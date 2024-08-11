exports.HomePage = class HomePage{

    constructor(page){
        this.page = page
        //this.productList = "//div[@id='tbodyid']/div/div/div/h4/a"
        this.productList = "//div[@id='tbodyid']/div/div/div/h4"
        this.addToCartBtn = "//a[normalize-space()='Add to cart']"
        this.cart='#cartur'

    }

    async addProductToCart(productName){

        const productList = await this.page.$$(this.productList);

        for (const product of productList) {
            if ( productName === await product.textContent() ) {
                await product.click();  // This is where we're having our problem
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