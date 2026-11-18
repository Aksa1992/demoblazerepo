export class PhonePurchasePage {

    constructor(page) {
        this.page = page

        this.phone = page.locator('//a[@onclick="byCat(\'phone\')"]')
        this.selectOnePhone = page.getByRole('link', { name: 'Samsung galaxy s6' })
        this.phoneAddtoCart = page.locator('//a[@onclick="addToCart(2)"]')
        this.cartButton = page.locator('#cartur')
        this.placeOrderButton = page.locator('//button[@data-target="#orderModal"]')
        this.orderModal = page.locator('#orderModal')
        this.name = page.locator('#name')
        this.country = page.locator('#country')
        this.city = page.locator('#city')
        this.creditCard = page.locator('#card')
        this.month = page.locator('#month')
        this.year = page.locator('#year')
        this.purchaseButton = page.locator('//button[text()="Purchase"]')
        this.successMessage = page.locator('.sweet-alert h2')

    }

    async selectphone() {

        await this.phone.click()
        await this.selectOnePhone.click();
        const dialogPromise = this.page.waitForEvent('dialog')
        await this.phoneAddtoCart.click()
        const dialog = await dialogPromise
        console.log(dialog.message())
        await dialog.accept()
    }

    async clickCartButton() {
        await this.cartButton.click()
    }

    async clickPlaceOrderButton() {
        await this.placeOrderButton.click()
    }

    async enterDetails(name, country, city, creditCard, month, year) {

        await this.name.fill(name)
        await this.country.fill(country)
        await this.city.fill(city)
        await this.creditCard.fill(creditCard)
        await this.month.fill(month)
        await this.year.fill(year)
    }

    async clickPurchaseButton() {
        await this.purchaseButton.click()
    }

    async verifyPurchaseSuccess() {
        await expect(this.successMessage).toHaveText('Thank you for your purchase!')
    }
}