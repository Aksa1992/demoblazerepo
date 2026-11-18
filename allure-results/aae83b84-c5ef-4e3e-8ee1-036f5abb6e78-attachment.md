# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> Verify login with valid credentials
- Location: tests\login.spec.js:5:6

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://www.demoblaze.com/index.html"
Received: "https://www.demoblaze.com/"
Timeout:  5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    13 × locator resolved to <html lang="en">…</html>
       - unexpected value "https://www.demoblaze.com/"

```

```yaml
- navigation:
  - link "PRODUCT STORE":
    - /url: index.html
    - img
    - text: PRODUCT STORE
  - list:
    - listitem:
      - link "Home (current)":
        - /url: index.html
    - listitem:
      - link "Contact":
        - /url: "#"
    - listitem:
      - link "About us":
        - /url: "#"
    - listitem:
      - link "Cart":
        - /url: cart.html
    - listitem:
      - link "Log in":
        - /url: "#"
    - listitem
    - listitem
    - listitem:
      - link "Sign up":
        - /url: "#"
  - list:
    - listitem
    - listitem
    - listitem
  - img "First slide"
  - button "Previous"
  - button "Next"
- link "CATEGORIES":
  - /url: ""
- link "Phones":
  - /url: "#"
- link "Laptops":
  - /url: "#"
- link "Monitors":
  - /url: "#"
- link:
  - /url: prod.html?idp_=1
- heading "Samsung galaxy s6" [level=4]:
  - link "Samsung galaxy s6":
    - /url: prod.html?idp_=1
- heading "$360" [level=5]
- paragraph: The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage cannot be expanded.
- link:
  - /url: prod.html?idp_=2
- heading "Nokia lumia 1520" [level=4]:
  - link "Nokia lumia 1520":
    - /url: prod.html?idp_=2
- heading "$820" [level=5]
- paragraph: The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800 processor and it comes with 2GB of RAM.
- link:
  - /url: prod.html?idp_=3
- heading "Nexus 6" [level=4]:
  - link "Nexus 6":
    - /url: prod.html?idp_=3
- heading "$650" [level=5]
- paragraph: The Motorola Google Nexus 6 is powered by 2.7GHz quad-core Qualcomm Snapdragon 805 processor and it comes with 3GB of RAM.
- link:
  - /url: prod.html?idp_=4
- heading "Samsung galaxy s7" [level=4]:
  - link "Samsung galaxy s7":
    - /url: prod.html?idp_=4
- heading "$800" [level=5]
- paragraph: The Samsung Galaxy S7 is powered by 1.6GHz octa-core it comes with 4GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 200GB via a microSD card.
- link:
  - /url: prod.html?idp_=5
- heading "Iphone 6 32gb" [level=4]:
  - link "Iphone 6 32gb":
    - /url: prod.html?idp_=5
- heading "$790" [level=5]
- paragraph: It comes with 1GB of RAM. The phone packs 16GB of internal storage cannot be expanded. As far as the cameras are concerned, the Apple iPhone 6 packs a 8-megapixel primary camera on the rear and a 1.2-megapixel front shooter for selfies.
- link:
  - /url: prod.html?idp_=6
- heading "Sony xperia z5" [level=4]:
  - link "Sony xperia z5":
    - /url: prod.html?idp_=6
- heading "$320" [level=5]
- paragraph: Sony Xperia Z5 Dual smartphone was launched in September 2015. The phone comes with a 5.20-inch touchscreen display with a resolution of 1080 pixels by 1920 pixels at a PPI of 424 pixels per inch.
- link:
  - /url: prod.html?idp_=7
- heading "HTC One M9" [level=4]:
  - link "HTC One M9":
    - /url: prod.html?idp_=7
- heading "$700" [level=5]
- paragraph: The HTC One M9 is powered by 1.5GHz octa-core Qualcomm Snapdragon 810 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 128GB via a microSD card.
- link:
  - /url: prod.html?idp_=8
- heading "Sony vaio i5" [level=4]:
  - link "Sony vaio i5":
    - /url: prod.html?idp_=8
- heading "$790" [level=5]
- paragraph: Sony is so confident that the VAIO S is a superior ultraportable laptop that the company proudly compares the notebook to Apple's 13-inch MacBook Pro. And in a lot of ways this notebook is better, thanks to a lighter weight.
- link:
  - /url: prod.html?idp_=9
- heading "Sony vaio i7" [level=4]:
  - link "Sony vaio i7":
    - /url: prod.html?idp_=9
- heading "$790" [level=5]
- paragraph: REVIEW Sony is so confident that the VAIO S is a superior ultraportable laptop that the company proudly compares the notebook to Apple's 13-inch MacBook Pro. And in a lot of ways this notebook is better, thanks to a lighter weight, higher-resolution display, more storage space, and a Blu-ray drive.
- list:
  - listitem:
    - button "Previous"
  - listitem:
    - button "Next"
- heading "About Us" [level=4]
- paragraph: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
- heading "Get in Touch" [level=4]
- paragraph: "Address: 2390 El Camino Real"
- paragraph: "Phone: +440 123456"
- paragraph: "Email: demo@blazemeter.com"
- heading "PRODUCT STORE" [level=4]:
  - img
  - text: PRODUCT STORE
- contentinfo:
  - paragraph: Copyright © Product Store
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test'
  2  | import { LoginPage } from '../pages/loginPage'
  3  | import validLoginData from '../utils/loginCredential.json'
  4  | 
  5  | test.only('Verify login with valid credentials', async ({ page }) => {
  6  | 
  7  |     const loginpage = new LoginPage(page)
  8  |     await loginpage.openApplication()
  9  |     const usernameValue = validLoginData.validuser.username
  10 |     const paswwordValue = validLoginData.validuser.password
  11 |     await loginpage.login(usernameValue, paswwordValue)
  12 |     await loginpage.clickLogin()
> 13 |     await expect(page).toHaveURL('https://www.demoblaze.com/index.html')
     |                        ^ Error: expect(page).toHaveURL(expected) failed
  14 |     
  15 | 
  16 | })
  17 | 
  18 | test('Verify login with invalid username and valid password', async({page})=>{
  19 | 
  20 |     const loginpage = new LoginPage(page)
  21 |     await loginpage.openApplication()
  22 |     const usernameValue = validLoginData.invalidUser.invaliduUsername
  23 |     const passwordValue = validLoginData.validuser.password
  24 |     await loginpage.login(usernameValue,passwordValue)
  25 |     await loginpage.clickLogin()
  26 |     page.on('dialog', async dialog=>{ 
  27 |         expect(dialog.message()).toBe('User does not exist.')
  28 |         console.log(dialog.message())
  29 |         await dialog.accept()
  30 |     })
  31 | 
  32 | })
  33 | 
  34 | test('Verify login with valid username and invalid password', async({page})=>{
  35 |     const loginpage = new LoginPage(page)
  36 |     await loginpage.openApplication()
  37 |     const usernameValue = validLoginData.validuser.username
  38 |     const passwordValue = validLoginData.invalidUser.invalidPassword
  39 |     await loginpage.login(usernameValue,passwordValue)
  40 |     await loginpage.clickLogin()
  41 |     page.on('dialog', async dialog=>{ 
  42 |         expect(dialog.message()).toBe('Wrong password.')
  43 |         console.log(dialog.message())
  44 |         await dialog.accept()
  45 |     })
  46 | })
  47 | 
  48 | test('Verify login with invalid username and invalid password', async({page})=>{
  49 |      const loginpage = new LoginPage(page)
  50 |     await loginpage.openApplication()
  51 |     const usernameValue = validLoginData.invalidUser.invaliduUsername
  52 |     const passwordValue = validLoginData.invalidUser.invalidPassword
  53 |     await loginpage.login(usernameValue,passwordValue)
  54 |     await loginpage.clickLogin()
  55 |     page.on('dialog', async dialog=>{ 
  56 |         expect(dialog.message()).toBe('User does not exist.')
  57 |         console.log(dialog.message())
  58 |         await dialog.accept()
  59 |     })
  60 | })
  61 | 
  62 | 
```