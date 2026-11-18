import{test,expect} from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import { LogoutPage } from '../pages/logoutPage'
import validLoginData from '../utils/loginCredential.json'  

test('Verify logout functionality', async({page})=>{
    const loginpage = new LoginPage(page)
    await loginpage.openApplication()   
     const usernameValue = validLoginData.validuser.username
    const paswwordValue = validLoginData.validuser.password
    await loginpage.login(usernameValue, paswwordValue)     
    await loginpage.clickLogin()
    const logoutpage = new LogoutPage(page)
    await logoutpage.clickLogoutButton()    
    expect(page.url()).toBe('https://www.demoblaze.com/index.html') 
})