export class LogoutPage {
  constructor(page) {
    this.page = page
    this.logoutButton = page.locator('#logout2')
  } 

    async clickLogoutButton() {
        await this.logoutButton.click()
    }
}