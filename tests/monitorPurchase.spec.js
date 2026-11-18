import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import { MonitorPurchasePage } from '../pages/monitorPurchasePage'
import validLoginData from '../utils/loginCredential.json'
import cartData from '../utils/cartDetails.json'

test('Purchase a monitor', async ({ page }) => {

    const loginpage = new LoginPage(page)
    const purchasePage = new MonitorPurchasePage(page)

    const usernameValue = validLoginData.validuser.username
    const passwordValue = validLoginData.validuser.password

    await loginpage.openApplication()
    await loginpage.login(usernameValue, passwordValue)
    await loginpage.clickLogin()
    await expect(page.locator('#nameofuser')).toContainText(usernameValue)


    await purchasePage.selectMonitor()
     page.on('dialog', async dialog=>{ 
        expect(dialog.message()).toBe('Product added')
        console.log(dialog.message())
        await dialog.accept()
        })
    await cartPage.clickCartButton()
    await cartPage.clickPlaceOrderButton()
    await cartPage.enterDetails(cartData.name, cartData.country, cartData.city, cartData.creditCard, cartData.month, cartData.year)
    await cartPage.clickPurchaseButton()
    await cartPage.verifyPurchaseSuccess()
})