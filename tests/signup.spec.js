import { test, expect } from '@playwright/test'
import { SignupPage } from '../pages/signupPage'
import signupData from '../utils/signup.json'



    test('Verify signup with valid credentials and click signup', async ({ page }) => {

        const signupPage = new SignupPage(page)
        await signupPage.openApplication()
        await signupPage.openSignup()

        const username = signupData.signupusername
        const password = signupData.signupPassword

        await signupPage.enterSignupDetails(username, password)
        await signupPage.clickSignup()
        page.on('dialog', async dialog=>{ 
        expect(dialog.message()).toBe('Sign up successful.')
        console.log(dialog.message())
        await dialog.accept()
        })
        await expect(page.locator('#nameofuser')).toContainText(username)

    })

    test('verify signup with valid data and click close', async({page})=>{

        const signupPage = new SignupPage(page)
        await signupPage.openApplication()
        await signupPage.openSignup()

        const username = signupData.signupusername
        const password = signupData.signupPassword
        await signupPage.enterSignupDetails(username, password)
        await signupPage.clickClose()
    })

