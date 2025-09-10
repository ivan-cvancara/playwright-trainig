import { test, expect } from '@playwright/test';

test('TS7 - Verify Test Cases Page', async ({ page }) => {
// Test Case 7: Verify Test Cases Page

//Navigate to url 'http://automationexercise.com'
  await page.goto('https://automationexercise.com/');

//Verify that home page is visible successfully
  await expect(page).toHaveTitle('Automation Exercise');
  await page.getByRole('button', { name: 'Consent' }).click();

//Click on 'Test Cases' button
  await page.getByRole('button', { name: 'Test Cases' }).click();

//Verify user is navigated to test cases page successfully
  await expect(page).toHaveTitle('Automation Practice Website for UI Testing - Test Cases');

});

test('TS8 - Verify All Products and product detail page', async ({ page }) => {
// Test Case 8: Verify All Products and product detail page

//Navigate to url 'http://automationexercise.com'
  await page.goto('https://automationexercise.com/');

//Verify that home page is visible successfully
  await expect(page).toHaveTitle('Automation Exercise');
  await page.getByRole('button', { name: 'Consent' }).click();

//Click on 'Products' button
  await page.getByRole('link', { name: ' Products' }).click();

//Verify user is navigated to ALL PRODUCTS page successfully
  await expect(page).toHaveTitle('Automation Exercise - All Products');

//The products list is visible
  await page.locator('.features_items').isVisible();

//Click on 'View Product' of first product
  await page.locator('.choose > .nav > li > a').first().click();

//User is landed to product detail page
  await expect(page).toHaveTitle('Automation Exercise - Product Details');
  
//Verify that detail detail is visible: product name, category, price, availability, condition, brand
  await expect(page.getByRole('heading', { name: 'Blue Top' })).toBeVisible();
  await expect(page.getByText('Category: Women > Tops')).toBeVisible();
  await expect(page.getByText('Rs. 500')).toBeVisible();
  await expect(page.getByText('Availability:')).toBeVisible();
  await expect(page.getByText('Condition:')).toBeVisible();
  await expect(page.getByText('Brand:')).toBeVisible();
 
});

test('TS9 - Search Product', async ({ page }) => {
// Test Case 9: Search Product

//Navigate to url 'http://automationexercise.com'
  await page.goto('https://automationexercise.com/');

//Verify that home page is visible successfully
  await expect(page).toHaveTitle('Automation Exercise');
  await page.getByRole('button', { name: 'Consent' }).click();

//Click on 'Products' button
  await page.getByRole('link', { name: ' Products' }).click();

//Verify user is navigated to ALL PRODUCTS page successfully
  await expect(page).toHaveTitle('Automation Exercise - All Products');

//Enter product name in search input and click search button
//await page.locator('[id="search_product]').click();
  await page.locator('.input-lg').click();
  await page.locator('.input-lg').fill('Blue');
  await page.locator('.btn-lg').click()

//Verify 'SEARCHED PRODUCTS' is visible
  await expect(page.getByText('Searched Products')).toBeVisible();

//Verify all the products related to search are visible
  const products = page.locator('.col-sm-4');
  const count = await products.count();

  for (let i = 1; i < count; i++) {
    const product = products.nth(i);

    const text = await product.locator('.productinfo p').textContent();
    expect(text?.toLowerCase()).toContain('blue');
  }

});

test('TS10 - Verify Subscription in home page', async ({page}) => {
// Test Case 10: Verify Subscription in home page

//Navigate to url 'http://automationexercise.com'
  await page.goto('https://automationexercise.com/');

//Verify that home page is visible successfully
  await expect(page).toHaveTitle('Automation Exercise')
  await page.getByRole('button', { name: 'Consent' }).click();

//Scroll down to footer
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

//Verify text 'SUBSCRIPTION'
  await expect(page.getByText('SUBSCRIPTION')).toBeVisible();

//Enter email address in input and click arrow button
  await page.getByPlaceholder('Your email address').click();
  await page.getByPlaceholder('Your email address').fill('test@zkouska.com');
  await page.locator('[id="subscribe"]').click();

//Verify success message 'You have been successfully subscribed!' is visible
  await expect(page.getByText('You have been successfully subscribed!')).toBeVisible();

});

test('TS11 - Verify Subscription in Cart page', async ({page}) => {
// Test Case 11: Verify Subscription in Cart page

//Navigate to url 'http://automationexercise.com'
  await page.goto('http://automationexercise.com');

//Verify that home page is visible successfully
  await expect(page).toHaveTitle('Automation Exercise');
  await page.getByRole('button', { name: 'Consent'} ).click();
  
//Click 'Cart' button
  await page.getByRole('link', { name: ' Cart' }).click();
  await expect(page).toHaveTitle('Automation Exercise - Checkout');

//Scroll down to footer
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

//Verify text 'SUBSCRIPTION'
  await expect(page.getByText('SUBSCRIPTION')).toBeVisible();

//Enter email address in input and click arrow button
  await page.getByPlaceholder('Your email address').click();
  await page.getByPlaceholder('Your email address').fill('test@zkouska.com');
  await page.locator('[id="subscribe"]').click();

//Verify success message 'You have been successfully subscribed!' is visible
  await expect(page.getByText('You have been successfully subscribed!')).toBeVisible();

});

test('TS12 - Add Products in Cart', async ({page}) => {
// Test Case 12: Add Products in Cart

//Navigate to url 'http://automationexercise.com'
  await page.goto('http://automationexercise.com');

//Verify that home page is visible successfully
  await expect(page).toHaveTitle('Automation Exercise');
  await page.getByRole('button', { name: 'Consent'}).click();

//Click 'Products' button
  await page.getByRole('link', { name: ' Products'}).click();
//await expect(page).toHaveTitle('Automation Exercise - All Products');

//Hover over first product and click 'Add to cart'
  const product1 = page.locator('.col-sm-4').nth(1);
  const product1_name = await product1.locator('.productinfo p').textContent() ?? '';
  const product1_cost = await product1.locator('.productinfo h2').textContent() ?? '';
  await product1.hover();
  await product1.locator('.overlay-content > .btn').first().click();
  
//Click 'Continue Shopping' button
  await page.getByRole('button', { name: 'Continue Shopping'}).click();

//Hover over second product and click 'Add to cart'
  const product2 = page.locator('.col-sm-4').nth(2);
  const product2_name = await product2.locator('.productinfo p').textContent() ?? '';
  const product2_cost = await product2.locator('.productinfo h2').textContent() ?? '';
  await product2.hover();
  await product2.locator('.overlay-content > .btn').first().click();
  await page.getByRole('button', { name: 'Continue Shopping'}).click();

//Click 'View Cart' button
  await page.getByRole('link', { name: ' Cart' }).click();
  await expect(page).toHaveTitle('Automation Exercise - Checkout');

//Verify both products are added to Cart
  await expect(page.locator('[id="product-1"]')).toContainText(product1_name);
  await expect(page.locator('[id="product-2"]')).toContainText(product2_name);

//Verify their prices, quantity and total price
  await expect(page.locator('[id="product-1"]').locator('[class=cart_price]')).toContainText(product1_cost);
  await expect(page.locator('[id="product-2"]').locator('[class=cart_price]')).toContainText(product2_cost);

  await expect(page.locator('[id="product-1"]').locator('[class=cart_quantity]')).toContainText('1');
  await expect(page.locator('[id="product-2"]').locator('[class=cart_quantity]')).toContainText('1');

  await expect(page.locator('[id="product-1"]').locator('[class=cart_total]')).toContainText(product1_cost);
  await expect(page.locator('[id="product-2"]').locator('[class=cart_total]')).toContainText(product2_cost);

});

test('TS13 - Verify Product quantity in Cart', async ({page}) => {
// Test Case 13: Verify Product quantity in Cart

//Navigate to url 'http://automationexercise.com'
  await page.goto('http://automationexercise.com');

//Verify that home page is visible successfully
  await expect(page).toHaveTitle('Automation Exercise');
  await page.getByRole('button', { name: "Consent" }).click();

//Click 'View Product' for any product on home page
//await page.locator('.col-sm-4').locator('').nth(1)
  await page.locator('[href="/product_details/1"]').click();

//Verify product detail is opened
  await expect(page).toHaveTitle('Automation Exercise - Product Details');

  const product_name = await page.locator('.product-information h2').textContent() ?? '';

//Increase quantity to 4
  await page.locator('#quantity').click();
  await page.locator('#quantity').fill('4');

//Click 'Add to cart' button
  await page.getByRole('button', { name: 'Add to cart' }).click();

//Click 'View Cart' button
  await page.getByRole('link', { name: 'View Cart'}).click();

//Verify that product is displayed in cart page with exact quantity
  await expect(page.locator('[id="product-1"]')).toContainText(product_name);
  await expect(page.locator('[id="product-1"]').locator('[class="cart_quantity"]')).toContainText('4');

});
