# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: monitorPurchase.spec.js >> Purchase a monitor
- Location: tests\monitorPurchase.spec.js:7:1

# Error details

```
ReferenceError: cartPage is not defined
```

# Page snapshot

```yaml
- generic [ref=f2e1]:
  - text:             
  - navigation [ref=f2e2]:
    - generic [ref=f2e3]:
      - link "PRODUCT STORE" [ref=f2e4] [cursor=pointer]:
        - /url: index.html
      - list [ref=f2e7]:
        - listitem [ref=f2e8]:
          - link "Home (current)" [ref=f2e9] [cursor=pointer]:
            - /url: index.html
            - text: Home
            - generic [ref=f2e10]: (current)
        - listitem [ref=f2e11]:
          - link "Contact" [ref=f2e12] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=f2e13]:
          - link "About us" [ref=f2e14] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=f2e15]:
          - link "Cart" [ref=f2e16] [cursor=pointer]:
            - /url: cart.html
        - listitem
        - listitem [ref=f2e17]:
          - link "Log out" [ref=f2e18] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=f2e19]:
          - link "Welcome test123verify" [ref=f2e20] [cursor=pointer]:
            - /url: "#"
        - listitem
  - generic [ref=f2e22]:
    - generic [ref=f2e25]:
      - list [ref=f2e26]:
        - listitem [ref=f2e27] [cursor=pointer]
        - listitem [ref=f2e28] [cursor=pointer]
        - listitem [ref=f2e29] [cursor=pointer]
      - link:
        - /url: "#myCarousel-2"
      - link:
        - /url: "#myCarousel-2"
    - generic [ref=f2e32]:
      - heading "Apple monitor 24" [level=2] [ref=f2e33]
      - separator [ref=f2e34]
      - heading "$400 *includes tax" [level=3] [ref=f2e35]
      - separator [ref=f2e36]
      - generic [ref=f2e37]:
        - list:
          - listitem
        - generic [ref=f2e39]:
          - strong [ref=f2e40]: Product description
          - paragraph [ref=f2e41]: LED Cinema Display features a 27-inch glossy LED-backlit TFT active-matrix LCD display with IPS technology and an optimum resolution of 2560x1440. It has a 178 degree horizontal and vertical viewing angle, a "typical" brightness of 375 cd/m2, contrast ratio of 1000:1, and a 12 ms response time.
      - separator [ref=f2e42]
      - link "Add to cart" [active] [ref=f2e45] [cursor=pointer]:
        - /url: "#"
  - generic [ref=f2e47]:
    - generic [ref=f2e50]:
      - heading "About Us" [level=4] [ref=f2e51]
      - paragraph [ref=f2e52]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=f2e55]:
      - heading "Get in Touch" [level=4] [ref=f2e56]
      - paragraph [ref=f2e57]: "Address: 2390 El Camino Real"
      - paragraph [ref=f2e58]: "Phone: +440 123456"
      - paragraph [ref=f2e59]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=f2e63]
  - contentinfo [ref=f2e65]:
    - paragraph [ref=f2e66]: Copyright © Product Store
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test'
  2  | import { LoginPage } from '../pages/loginPage'
  3  | import { MonitorPurchasePage } from '../pages/monitorPurchasePage'
  4  | import validLoginData from '../utils/loginCredential.json'
  5  | import cartData from '../utils/cartDetails.json'
  6  | 
  7  | test('Purchase a monitor', async ({ page }) => {
  8  | 
  9  |     const loginpage = new LoginPage(page)
  10 |     const purchasePage = new MonitorPurchasePage(page)
  11 | 
  12 |     const usernameValue = validLoginData.validuser.username
  13 |     const passwordValue = validLoginData.validuser.password
  14 | 
  15 |     await loginpage.openApplication()
  16 |     await loginpage.login(usernameValue, passwordValue)
  17 |     await loginpage.clickLogin()
  18 |     await expect(page.locator('#nameofuser')).toContainText(usernameValue)
  19 | 
  20 | 
  21 |     await purchasePage.selectMonitor()
  22 |      page.on('dialog', async dialog=>{ 
  23 |         expect(dialog.message()).toBe('Product added')
  24 |         console.log(dialog.message())
  25 |         await dialog.accept()
  26 |         })
> 27 |     await cartPage.clickCartButton()
     |     ^ ReferenceError: cartPage is not defined
  28 |     await cartPage.clickPlaceOrderButton()
  29 |     await cartPage.enterDetails(cartData.name, cartData.country, cartData.city, cartData.creditCard, cartData.month, cartData.year)
  30 |     await cartPage.clickPurchaseButton()
  31 |     await cartPage.verifyPurchaseSuccess()
  32 | })
```