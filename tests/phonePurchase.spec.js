
import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import { PhonePurchasePage } from '../pages/phonePurchasePage'
import validLoginData from '../utils/loginCredential.json'
import cartData from '../utils/cartDetails.json'


test('Purchase a phone', async ({ page }) => {

    const loginpage = new LoginPage(page)
    const phonePurchasePage = new PhonePurchasePage(page)

    const usernameValue = validLoginData.validuser.username
    const passwordValue = validLoginData.validuser.password

    await loginpage.openApplication()

    await loginpage.login(usernameValue, passwordValue)
    await loginpage.clickLogin()
    await expect(page.locator('#nameofuser')).toContainText(usernameValue)
    
    await phonePurchasePage.selectphone()
     page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`)
    dialog.dismiss().catch(() => {})
  })
    await cartPage.clickCartButton()
    await cartPage.clickPlaceOrderButton()
    await cartPage.enterDetails(cartData.name, cartData.country, cartData.city, cartData.creditCard, cartData.month, cartData.year);
    await cartPage.clickPurchaseButton()
    await cartPage.verifyPurchaseSuccess()

})

