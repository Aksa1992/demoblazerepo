export class LoginPage{
    constructor(page){
        this.page=page
        this.loginLink = page.locator('#login2')
        this.username = page.locator('#loginusername')
        this.password = page.locator('#loginpassword')
        this.loginButton = page.locator('button[onclick="logIn()"]')
    }

     async openApplication(){
        await this.page.goto('https://www.demoblaze.com/')

    }

      async login(username, password){
        await this.loginLink.click()
        await this.username.fill(username)
        await this.password.fill(password)
    }

     async clickLogin(){
        await this.loginButton.click()
     }
}