# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: purchase.spec.js >> Purchase a phone
- Location: tests\purchase.spec.js:8:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://www.demoblaze.com/index.html"
Received: "https://www.demoblaze.com/prod.html?idp_=2#"

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    9 × locator resolved to <html lang="en">…</html>
      - unexpected value "https://www.demoblaze.com/prod.html?idp_=2#"
  - Test timeout of 30000ms exceeded.

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
    - listitem
    - listitem:
      - link "Log out":
        - /url: "#"
    - listitem:
      - link "Welcome test123verify":
        - /url: "#"
    - listitem
- list:
  - listitem
  - listitem
  - listitem
- link:
  - /url: "#myCarousel-2"
- link:
  - /url: "#myCarousel-2"
- heading "Nokia lumia 1520" [level=2]
- separator
- heading "$820 *includes tax" [level=3]
- separator
- list:
  - listitem
- strong: Product description
- paragraph: The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800 processor and it comes with 2GB of RAM.
- separator
- link "Add to cart":
  - /url: "#"
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
  1  | 
  2  | import { test, expect } from '@playwright/test';
  3  | import { LoginPage } from '../pages/loginPage';
  4  | import { PurchasePage } from '../pages/purchasePage';
  5  | import validLoginData from '../utils/loginCredential.json';
  6  | 
  7  | // TC08: Purchase a phone
  8  | test('Purchase a phone', async ({ page }) => {
  9  | 
  10 |     const loginpage = new LoginPage(page);
  11 |     const purchasePage = new PurchasePage(page);
  12 | 
  13 |     const usernameValue = validLoginData.validuser.username;
  14 |     const passwordValue = validLoginData.validuser.password;
  15 | 
  16 |     // Open application
  17 |     await loginpage.openApplication();
  18 | 
  19 |     // Login
  20 |     await loginpage.login(usernameValue, passwordValue);
  21 |     await loginpage.clickLogin();
  22 | 
  23 |     // Verify successful login
  24 |     await expect(page.locator('#nameofuser'))
  25 |         .toContainText(usernameValue);
  26 | 
  27 |     // Select phone and add to cart
  28 |     await purchasePage.selectphone();
  29 | 
  30 |     // Verify navigation back to home page
> 31 |     await expect(page).toHaveURL('https://www.demoblaze.com/index.html');
     |                        ^ Error: expect(page).toHaveURL(expected) failed
  32 | });
  33 | 
  34 | 
  35 | // TC09: Purchase a monitor
  36 | test('Purchase a monitor', async ({ page }) => {
  37 | 
  38 |     const loginpage = new LoginPage(page);
  39 |     const purchasePage = new PurchasePage(page);
  40 | 
  41 |     const usernameValue = validLoginData.validuser.username;
  42 |     const passwordValue = validLoginData.validuser.password;
  43 | 
  44 |     // Open application
  45 |     await loginpage.openApplication();
  46 | 
  47 |     // Login
  48 |     await loginpage.login(usernameValue, passwordValue);
  49 |     await loginpage.clickLogin();
  50 | 
  51 |     // Verify successful login
  52 |     await expect(page.locator('#nameofuser'))
  53 |         .toContainText(usernameValue);
  54 | 
  55 |     // Select monitor and add to cart
  56 |     await purchasePage.selectMonitor();
  57 | 
  58 |     // Verify navigation back to home page
  59 |     await expect(page).toHaveURL('https://www.demoblaze.com/index.html');
  60 | });
  61 | 
```