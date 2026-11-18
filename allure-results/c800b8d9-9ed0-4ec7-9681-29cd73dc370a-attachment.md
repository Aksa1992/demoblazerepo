# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: purchase.spec.js >> Purchase a phone
- Location: tests\purchase.spec.js:8:1

# Error details

```
Error: locator.waitFor: Error: strict mode violation: locator('//a[@href="prod.html?idp_=2"]') resolved to 2 elements:
    1) <a href="prod.html?idp_=2">…</a> aka getByRole('link').filter({ hasText: /^$/ }).nth(1)
    2) <a class="hrefch" href="prod.html?idp_=2">Nokia lumia 1520</a> aka getByRole('link', { name: 'Nokia lumia' })

Call log:
  - waiting for locator('//a[@href="prod.html?idp_=2"]') to be visible

```

# Page snapshot

```yaml
- generic [ref=f1e1]:
  - text:             
  - navigation [ref=f1e2]:
    - link "PRODUCT STORE" [ref=f1e3] [cursor=pointer]:
      - /url: index.html
    - list [ref=f1e6]:
      - listitem [ref=f1e7]:
        - link "Home (current)" [ref=f1e8] [cursor=pointer]:
          - /url: index.html
          - text: Home
          - generic [ref=f1e9]: (current)
      - listitem [ref=f1e10]:
        - link "Contact" [ref=f1e11] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=f1e12]:
        - link "About us" [ref=f1e13] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=f1e14]:
        - link "Cart" [ref=f1e15] [cursor=pointer]:
          - /url: cart.html
      - listitem
      - listitem [ref=f1e16]:
        - link "Log out" [ref=f1e17] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=f1e18]:
        - link "Welcome test123verify" [ref=f1e19] [cursor=pointer]:
          - /url: "#"
      - listitem
    - generic [ref=f1e21]:
      - list [ref=f1e22]:
        - listitem [ref=f1e23] [cursor=pointer]
        - listitem [ref=f1e24] [cursor=pointer]
        - listitem [ref=f1e25] [cursor=pointer]
      - img "Second slide" [ref=f1e28]
      - button "Previous" [ref=f1e29] [cursor=pointer]
      - button "Next" [ref=f1e32] [cursor=pointer]
  - generic [ref=f1e36]:
    - generic [ref=f1e38]:
      - link "CATEGORIES" [ref=f1e39] [cursor=pointer]:
        - /url: ""
      - link "Phones" [active] [ref=f1e40] [cursor=pointer]:
        - /url: "#"
      - link "Laptops" [ref=f1e41] [cursor=pointer]:
        - /url: "#"
      - link "Monitors" [ref=f1e42] [cursor=pointer]:
        - /url: "#"
    - generic [ref=f1e43]:
      - generic [ref=f1e44]:
        - generic [ref=f1e46]:
          - link [ref=f1e47] [cursor=pointer]:
            - /url: prod.html?idp_=1
          - generic [ref=f1e48]:
            - heading [level=4] [ref=f1e49]:
              - link "Samsung galaxy s6" [ref=f1e50] [cursor=pointer]:
                - /url: prod.html?idp_=1
            - heading "$360" [level=5] [ref=f1e51]
            - paragraph [ref=f1e52]: The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage cannot be expanded.
        - generic [ref=f1e54]:
          - link [ref=f1e55] [cursor=pointer]:
            - /url: prod.html?idp_=2
          - generic [ref=f1e56]:
            - heading [level=4] [ref=f1e57]:
              - link "Nokia lumia 1520" [ref=f1e58] [cursor=pointer]:
                - /url: prod.html?idp_=2
            - heading "$820" [level=5] [ref=f1e59]
            - paragraph [ref=f1e60]: The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800 processor and it comes with 2GB of RAM.
        - generic [ref=f1e62]:
          - link [ref=f1e63] [cursor=pointer]:
            - /url: prod.html?idp_=3
          - generic [ref=f1e64]:
            - heading [level=4] [ref=f1e65]:
              - link "Nexus 6" [ref=f1e66] [cursor=pointer]:
                - /url: prod.html?idp_=3
            - heading "$650" [level=5] [ref=f1e67]
            - paragraph [ref=f1e68]: The Motorola Google Nexus 6 is powered by 2.7GHz quad-core Qualcomm Snapdragon 805 processor and it comes with 3GB of RAM.
        - generic [ref=f1e70]:
          - link [ref=f1e71] [cursor=pointer]:
            - /url: prod.html?idp_=4
          - generic [ref=f1e72]:
            - heading [level=4] [ref=f1e73]:
              - link "Samsung galaxy s7" [ref=f1e74] [cursor=pointer]:
                - /url: prod.html?idp_=4
            - heading "$800" [level=5] [ref=f1e75]
            - paragraph [ref=f1e76]: The Samsung Galaxy S7 is powered by 1.6GHz octa-core it comes with 4GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 200GB via a microSD card.
        - generic [ref=f1e78]:
          - link [ref=f1e79] [cursor=pointer]:
            - /url: prod.html?idp_=5
          - generic [ref=f1e80]:
            - heading [level=4] [ref=f1e81]:
              - link "Iphone 6 32gb" [ref=f1e82] [cursor=pointer]:
                - /url: prod.html?idp_=5
            - heading "$790" [level=5] [ref=f1e83]
            - paragraph [ref=f1e84]: It comes with 1GB of RAM. The phone packs 16GB of internal storage cannot be expanded. As far as the cameras are concerned, the Apple iPhone 6 packs a 8-megapixel primary camera on the rear and a 1.2-megapixel front shooter for selfies.
        - generic [ref=f1e86]:
          - link [ref=f1e87] [cursor=pointer]:
            - /url: prod.html?idp_=6
          - generic [ref=f1e88]:
            - heading [level=4] [ref=f1e89]:
              - link "Sony xperia z5" [ref=f1e90] [cursor=pointer]:
                - /url: prod.html?idp_=6
            - heading "$320" [level=5] [ref=f1e91]
            - paragraph [ref=f1e92]: Sony Xperia Z5 Dual smartphone was launched in September 2015. The phone comes with a 5.20-inch touchscreen display with a resolution of 1080 pixels by 1920 pixels at a PPI of 424 pixels per inch.
        - generic [ref=f1e94]:
          - link [ref=f1e95] [cursor=pointer]:
            - /url: prod.html?idp_=7
          - generic [ref=f1e96]:
            - heading [level=4] [ref=f1e97]:
              - link "HTC One M9" [ref=f1e98] [cursor=pointer]:
                - /url: prod.html?idp_=7
            - heading "$700" [level=5] [ref=f1e99]
            - paragraph [ref=f1e100]: The HTC One M9 is powered by 1.5GHz octa-core Qualcomm Snapdragon 810 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 128GB via a microSD card.
      - list [ref=f1e102]:
        - listitem [ref=f1e103]:
          - button "Previous" [ref=f1e104]
        - listitem [ref=f1e105]:
          - button "Next" [ref=f1e106] [cursor=pointer]
  - generic [ref=f1e108]:
    - generic [ref=f1e111]:
      - heading "About Us" [level=4] [ref=f1e112]
      - paragraph [ref=f1e113]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=f1e116]:
      - heading "Get in Touch" [level=4] [ref=f1e117]
      - paragraph [ref=f1e118]: "Address: 2390 El Camino Real"
      - paragraph [ref=f1e119]: "Phone: +440 123456"
      - paragraph [ref=f1e120]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=f1e124]
  - contentinfo [ref=f1e126]:
    - paragraph [ref=f1e127]: Copyright © Product Store
```

# Test source

```ts
  1  | 
  2  | export class PurchasePage {
  3  | 
  4  |     constructor(page) {
  5  |         this.page = page;
  6  | 
  7  |         // Category locators
  8  |         this.phone = page.locator('//a[@onclick="byCat(\'phone\')"]');
  9  |         this.monitor = page.locator('//a[@onclick="byCat(\'monitor\')"]');
  10 | 
  11 |         // Product locators
  12 |         this.selectOnePhone = page.locator('//a[@href="prod.html?idp_=2"]');
  13 |         this.selectOneMonitor = page.locator('//a[@href="prod.html?idp_=10"]');
  14 | 
  15 |         // Add to cart locators
  16 |         this.phoneAddtoCart = page.locator('//a[@onclick="addToCart(2)"]');
  17 |         this.monitorAddtoCart = page.locator('//a[@onclick="addToCart(10)"]');
  18 |     }
  19 | 
  20 |     async selectphone() {
  21 | 
  22 |         await this.phone.click();
  23 | 
  24 |         // Wait until the phone product is visible
> 25 |         await this.selectOnePhone.waitFor({ state: 'visible' });
     |                                   ^ Error: locator.waitFor: Error: strict mode violation: locator('//a[@href="prod.html?idp_=2"]') resolved to 2 elements:
  26 | 
  27 |         await this.selectOnePhone.click();
  28 | 
  29 |         // Wait for product details page
  30 |         await this.phoneAddtoCart.waitFor({ state: 'visible' });
  31 | 
  32 |         // Capture the alert before clicking Add to Cart
  33 |         const dialogPromise = this.page.waitForEvent('dialog');
  34 | 
  35 |         await this.phoneAddtoCart.click();
  36 | 
  37 |         const dialog = await dialogPromise;
  38 | 
  39 |         console.log(dialog.message());
  40 | 
  41 |         await dialog.accept();
  42 |     }
  43 | 
  44 |     async selectMonitor() {
  45 | 
  46 |         await this.monitor.click();
  47 | 
  48 |         // Wait until the monitor product is visible
  49 |         await this.selectOneMonitor.waitFor({ state: 'visible' });
  50 | 
  51 |         await this.selectOneMonitor.click();
  52 | 
  53 |         await this.monitorAddtoCart.waitFor({ state: 'visible' });
  54 | 
  55 |         const dialogPromise = this.page.waitForEvent('dialog');
  56 | 
  57 |         await this.monitorAddtoCart.click();
  58 | 
  59 |         const dialog = await dialogPromise;
  60 | 
  61 |         console.log(dialog.message());
  62 | 
  63 |         await dialog.accept();
  64 |     }
  65 | }
  66 | 
```