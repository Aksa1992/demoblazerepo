import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import validLoginData from '../utils/loginCredential.json'

test.only('Verify login with valid credentials', async ({ page }) => {

    const loginpage = new LoginPage(page)
    await loginpage.openApplication()
    const usernameValue = validLoginData.validuser.username
    const paswwordValue = validLoginData.validuser.password
    await loginpage.login(usernameValue, paswwordValue)
    await loginpage.clickLogin()
    await expect(page.locator('#nameofuser')).toContainText(usernameValue)
   
})

test('Verify login with invalid username and valid password', async({page})=>{

    const loginpage = new LoginPage(page)
    await loginpage.openApplication()
    const usernameValue = validLoginData.invalidUser.invaliduUsername
    const passwordValue = validLoginData.validuser.password
    await loginpage.login(usernameValue,passwordValue)
    await loginpage.clickLogin()
    page.on('dialog', async dialog=>{ 
        expect(dialog.message()).toBe('User does not exist.')
        console.log(dialog.message())
        await dialog.accept()
    })

})

test('Verify login with valid username and invalid password', async({page})=>{
    const loginpage = new LoginPage(page)
    await loginpage.openApplication()
    const usernameValue = validLoginData.validuser.username
    const passwordValue = validLoginData.invalidUser.invalidPassword
    await loginpage.login(usernameValue,passwordValue)
    await loginpage.clickLogin()
    page.on('dialog', async dialog=>{ 
        expect(dialog.message()).toBe('Wrong password.')
        console.log(dialog.message())
        await dialog.accept()
    })
})

test('Verify login with invalid username and invalid password', async({page})=>{
     const loginpage = new LoginPage(page)
    await loginpage.openApplication()
    const usernameValue = validLoginData.invalidUser.invaliduUsername
    const passwordValue = validLoginData.invalidUser.invalidPassword
    await loginpage.login(usernameValue,passwordValue)
    await loginpage.clickLogin()
    page.on('dialog', async dialog=>{ 
        expect(dialog.message()).toBe('User does not exist.')
        console.log(dialog.message())
        await dialog.accept()
    })
})

