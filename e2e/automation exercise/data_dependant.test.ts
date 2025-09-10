import { test, expect } from '@playwright/test';

test('TS1 - Register User', async ({ page }) => {
// Test Case 1: Register User

// Navigate to url 'http://automationexercise.com'
  await page.goto('https://automationexercise.com/');

// Verify that home page is visible successfully
  await expect(page).toHaveTitle('Automation Exercise');
  await page.getByRole('button', { name: 'Consent' }).click();

// Click on 'Signup / Login' button
  await page.getByRole('link', { name: ' Signup / Login' }).click();

// Verify 'New User Signup!' is visible
  await expect(page.getByRole('heading', { name: 'New User Signup!' })).toBeVisible();

// Enter name and email address
  await page.locator('[data-qa="signup-name"]').click();
  await page.locator('[data-qa="signup-name"]').fill('John Doe');
  await page.locator('[data-qa="signup-email"]').click();
  await page.locator('[data-qa="signup-email"]').fill('john.doe@testmail.com');

// Click 'Signup' button
  await page.locator('[data-qa="signup-button"]').click();
  
// Verify that 'ENTER ACCOUNT INFORMATION' is visible
  await expect(page.locator('h2.title.text-center').getByText(/Enter/)).toBeVisible();

// Fill details: Title, Name, Email, Password, Date of birth
  await page.getByRole('radio', { name: 'Mr.' }).check();
  await page.locator('[data-qa="password"]').click();
  await page.locator('[data-qa="password"]').fill('testPassword123');
  await page.locator('#days').selectOption('2');
  await page.locator('#months').selectOption('January');
  await page.locator('#years').selectOption('1981');

// Select checkbox 'Sign up for our newsletter!'
  await page.getByRole('checkbox', { name: 'Sign up for our newsletter!' }).check();

// Select checkbox 'Receive special offers from our partners!'
  await page.getByRole('checkbox', { name: 'Receive special offers from our partners!' }).check();

// Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
  await page.locator('[data-qa="first_name"]').click();
  await page.locator('[data-qa="first_name"]').fill('John');
  await page.locator('[data-qa="last_name"]').click();
  await page.locator('[data-qa="last_name"]').fill('Doe');
  await page.locator('[data-qa="address"]').click();
  await page.locator('[data-qa="address"]').fill('Pražská 12');
  await page.locator('#country').selectOption('India');
  await page.locator('[data-qa="state"]').click();
  await page.locator('[data-qa="state"]').fill('Tamil Nadu');
  await page.locator('[data-qa="city"]').click();
  await page.locator('[data-qa="city"]').fill('Chennai');
  await page.locator('[data-qa="zipcode"]').click();
  await page.locator('[data-qa="zipcode"]').fill('160 00');
  await page.locator('[data-qa="mobile_number"]').click();
  await page.locator('[data-qa="mobile_number"]').fill('+91 123 456 789');

// Click 'Create Account button'
  await page.locator('[data-qa="create-account"]').click();

// Verify that 'ACCOUNT CREATED!' is visible
  await expect(page.locator('h2.title.text-center').getByText(/Account Created!/)).toBeVisible();

// Click 'Continue' button
  await page.locator('[data-qa="continue-button"]').click();

// Verify that 'Logged in as username' is visible
  await expect(page.locator('i.fa.fa-user')).toBeVisible();

// Click 'Delete Account' button
  await page.getByRole('link', { name: ' Delete Account' }).click();

// Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
  await expect(page.locator('h2.title.text-center').getByText(/Account Deleted!/)).toBeVisible();

});

test('TS2 - Login User with correct email and password', async ({ page }) => {
// Test Case 2: Login User with correct email and password

// Navigate to url 'http://automationexercise.com'
  await page.goto('https://automationexercise.com/');

// Verify that home page is visible successfully
  await expect(page).toHaveTitle('Automation Exercise');
  await page.getByRole('button', { name: 'Consent' }).click();

// Click on 'Signup / Login' button
  await page.getByRole('link', { name: ' Signup / Login' }).click();

// Verify 'Login to your account' is visible
  await expect(page.getByRole('heading', { name: 'Login to your account' })).toBeVisible();

// Enter correct email address and password
  await page.locator('[data-qa="login-email"]').click();
  await page.locator('[data-qa="login-email"]').fill('john.doe@testmail.com');
  await page.locator('[data-qa="login-password"]').click();
  await page.locator('[data-qa="login-password"]').fill('testPassword123');

// Click 'login' button
  await page.locator('[data-qa="login-button"]').click();

// Verify that 'Logged in as username' is visible
  await expect(page.getByText(/Logged in as/)).toBeVisible();

// Click 'Delete Account' button
  await page.getByRole('link', { name: ' Delete Account' }).click();

// Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
  await expect(page.locator('h2.title.text-center').getByText(/Account Deleted!/)).toBeVisible();

});

test('TS3 - Login User with incorrect email and password', async ({ page }) => {
// Test Case 3: Login User with incorrect email and password

// Navigate to url 'http://automationexercise.com'
  await page.goto('https://automationexercise.com/');

// Verify that home page is visible successfully
  await expect(page).toHaveTitle('Automation Exercise');
  await page.getByRole('button', { name: 'Consent' }).click();

// Click on 'Signup / Login' button
  await page.getByRole('link', { name: ' Signup / Login' }).click();

// Verify 'Login to your account' is visible
  await expect(page.getByRole('heading', { name: 'Login to your account' })).toBeVisible();

// Enter correct email address and password
  await page.locator('[data-qa="login-email"]').click();
  await page.locator('[data-qa="login-email"]').fill('john.doe@testmail.com');
  await page.locator('[data-qa="login-password"]').click();
  await page.locator('[data-qa="login-password"]').fill('neexistujici heslo');

// Click 'login' button
  await page.locator('[data-qa="login-button"]').click();

// Verify error 'Your email or password is incorrect!' is visible
  await expect(page.getByText(/Your email or password is incorrect!/)).toBeVisible();

});

test('TS4 - Logout User', async ({ page }) => {
// Test Case 4: Logout User

// Navigate to url 'http://automationexercise.com'
  await page.goto('https://automationexercise.com/');

// Verify that home page is visible successfully
  await expect(page).toHaveTitle('Automation Exercise');
  await page.getByRole('button', { name: 'Consent' }).click();

// Click on 'Signup / Login' button
  await page.getByRole('link', { name: ' Signup / Login' }).click();

// Verify 'Login to your account' is visible
  await expect(page.getByRole('heading', { name: 'Login to your account' })).toBeVisible();

// Enter correct email address and password
  await page.locator('[data-qa="login-email"]').click();
  await page.locator('[data-qa="login-email"]').fill('john.doe@testmail.com');
  await page.locator('[data-qa="login-password"]').click();
  await page.locator('[data-qa="login-password"]').fill('testPassword123');

// Click 'login' button
  await page.locator('[data-qa="login-button"]').click();

// Verify that 'Logged in as username' is visible
  await expect(page.getByText(/Logged in as/)).toBeVisible();

// Click 'Logout' button
  await page.getByRole('link', { name: ' Logout' }).click();

// Verify that user is navigated to login page
  await expect(page).toHaveTitle('Automation Exercise - Signup / Login');

});

test('TS5 - Register User with existing email', async ({ page }) => {  
// Test Case 5: Register User with existing email

// Navigate to url 'http://automationexercise.com'
  await page.goto('https://automationexercise.com/');

// Verify that home page is visible successfully
  await expect(page).toHaveTitle('Automation Exercise');
  await page.getByRole('button', { name: 'Consent' }).click();

// Click on 'Signup / Login' button
  await page.getByRole('link', { name: ' Signup / Login' }).click();

// Verify 'New User Signup!' is visible
  await expect(page.getByRole('heading', { name: 'New User Signup!' })).toBeVisible();

// Enter name and already registered email address
  await page.locator('[data-qa="signup-name"]').click();
  await page.locator('[data-qa="signup-name"]').fill('John Doe');
  await page.locator('[data-qa="signup-email"]').click();
  await page.locator('[data-qa="signup-email"]').fill('john.doe@testmail.com');

// Click 'Signup' button
  await page.locator('[data-qa="signup-button"]').click();

// Verify error 'Email Address already exist!' is visible
  await expect(page.getByText(/Email Address already exist!/)).toBeVisible();

});

test('TS14 - Place Order: Register while Checkout', async ({page}) => {
// Test Case 14: Place Order: Register while Checkout

//Navigate to url 'http://automationexercise.com'
  await page.goto('http://automationexercise.com');

//Verify that home page is visible successfully
  await expect(page).toHaveTitle('Automation Exercise');
  await page.getByRole('button', { name: 'Consent' }).click();

//Add products to cart

  const products = page.locator('.col-sm-4');
  const product_count = await products.count();
//console.log(product_count);

  for (let i = 1; i < product_count; i++) {

    let product = page.locator('[class="col-sm-4"]').nth(i);

    let product_name = await product.locator('.productinfo p').textContent();
    if (product_name == 'Sleeveless Dress') {

      //console.log(await product.locator('.productinfo h2').textContent())
      await product.hover();
      await product.locator('.overlay-content > .btn').first().click();
      await page.getByRole('button', { name: 'Continue Shopping'}).click();
      break;

    };

  };

});