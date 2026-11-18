export class SignupPage{
    constructor(page){
        this.page=page
        this.signupLink = page.locator('#signin2')
        this.username = page.locator('#sign-username')
        this.password = page.locator('#sign-password')
        this.signupButton = page.locator('button[onclick="register()"]')
        this.closeButton = page.locator('#signInModal').getByRole('button', {name:'Close',exact: true}).last()

    }

     async openApplication(){
        await this.page.goto('https://www.demoblaze.com/')

    }


    async openSignup() {
        await this.signupLink.click();
    }

    async enterSignupDetails(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);
    }

    async clickSignup() {
        await this.signupButton.click();
    }

    async clickClose(){
        await this.closeButton.click()
    }
}