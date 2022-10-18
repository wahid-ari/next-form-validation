import { test, expect } from '@playwright/test';

test('test John Doe', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveURL('/');

  await page.getByPlaceholder('Name').fill('John Doe');
  await page.getByPlaceholder('Email').fill('john.doe@gmail.com');
  await page.getByPlaceholder('Password').fill('abc123');
  await page.getByPlaceholder('Bio').fill('John Doe Bio');
  await page.getByLabel('Red').check();
  await page.locator('select[name="fruit"]').selectOption('apple');

  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.getByText('Data Name : John Doe')).toBeVisible();
  await expect(page.getByText('Data Email : john.doe@gmail.com')).toBeVisible();
  await expect(page.getByText('Data Password : abc123')).toBeVisible();
  await expect(page.getByText('Data Bio : John Doe Bio')).toBeVisible();
  await expect(page.getByText('Data Gender : male')).toBeVisible();
  await expect(page.getByText('Data Color : red,')).toBeVisible();
  await expect(page.getByText('Data Fruit : apple')).toBeVisible();

  await page.getByRole('button', { name: 'Reset' }).click();
  
  await expect(page.getByText('Data Name : John Doe')).not.toBeVisible();
});

test('test Sarah Yen', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveURL('/');
  
  await page.getByPlaceholder('Name').fill('Sarah Yen');
  await page.getByPlaceholder('Email').fill('sarah.yen@yahoo.com');
  await page.getByPlaceholder('Password').fill('123abc');
  await page.getByPlaceholder('Bio').fill('Short Bio Sarah Yen');
  await page.getByText('Female').click();
  await page.getByLabel('Blue').check();
  await page.locator('select[name="fruit"]').selectOption('grape');

  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.getByText('Data Name : Sarah Yen')).toBeVisible();
  await expect(page.getByText('Data Email : sarah.yen@yahoo.com')).toBeVisible();
  await expect(page.getByText('Data Password : 123abc')).toBeVisible();
  await expect(page.getByText('Data Bio : Short Bio Sarah Yen')).toBeVisible();
  await expect(page.getByText('Data Gender : female')).toBeVisible();
  await expect(page.getByText('Data Color : blue')).toBeVisible();
  await expect(page.getByText('Data Fruit : grape')).toBeVisible();
});

test('test Tony Stark', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveURL('/');
  
  await page.getByPlaceholder('Name').fill('Tony Stark');
  await page.getByPlaceholder('Email').fill('tony.stark@ironman.com');
  await page.getByPlaceholder('Password').fill('ironman12345');
  await page.getByPlaceholder('Bio').fill('Tony Stark is Iron Man');
  await page.getByRole('radio', { name: 'Male' }).check();
  await page.getByLabel('Red').check();
  await page.getByLabel('Blue').check();
  await page.locator('select[name="fruit"]').selectOption('apple');

  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.getByText('Data Name : Tony Stark')).toBeVisible();
  await expect(page.getByText('Data Email : tony.stark@ironman.com')).toBeVisible();
  await expect(page.getByText('Data Password : ironman12345')).toBeVisible();
  await expect(page.getByText('Data Bio : Tony Stark is Iron Man')).toBeVisible();
  await expect(page.getByText('Data Gender : male')).toBeVisible();
  await expect(page.getByText('Data Color : red, blue')).toBeVisible();
  await expect(page.getByText('Data Fruit : apple')).toBeVisible();
});

test('test empty name, email, password', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveURL('/');
  
  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.locator('p:has-text("Name is required")')).toBeVisible();
  await expect(page.locator('p:has-text("Email is required")')).toBeVisible();
  await expect(page.locator('p:has-text("Password is required")')).toBeVisible();

  await expect(page.locator('div[role="status"]:has-text("Name is required")')).toBeVisible();
  await expect(page.locator('div[role="status"]:has-text("Email is required")')).toBeVisible();
  await expect(page.locator('div[role="status"]:has-text("Password is required")')).toBeVisible();
});

test('test empty email, password', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveURL('/');
  
  await page.getByPlaceholder('Name').fill('Tony Stark');

  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.locator('p:has-text("Name is required")')).not.toBeVisible();
  await expect(page.locator('p:has-text("Email is required")')).toBeVisible();
  await expect(page.locator('p:has-text("Password is required")')).toBeVisible();

  await expect(page.locator('div[role="status"]:has-text("Name is required")')).not.toBeVisible();
  await expect(page.locator('div[role="status"]:has-text("Email is required")')).toBeVisible();
  await expect(page.locator('div[role="status"]:has-text("Password is required")')).toBeVisible();
});

test('test empty password', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveURL('/');
  
  await page.getByPlaceholder('Name').fill('Tony Stark');
  await page.getByPlaceholder('Email').fill('tony@gmail.com');

  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.locator('p:has-text("Name is required")')).not.toBeVisible();
  await expect(page.locator('p:has-text("Email is required")')).not.toBeVisible();
  await expect(page.locator('p:has-text("Password is required")')).toBeVisible();

  await expect(page.locator('div[role="status"]:has-text("Name is required")')).not.toBeVisible();
  await expect(page.locator('div[role="status"]:has-text("Email is required")')).not.toBeVisible();
  await expect(page.locator('div[role="status"]:has-text("Password is required")')).toBeVisible();
});

test('test valid input', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveURL('/');
  
  await page.getByPlaceholder('Name').fill('Tony Stark');
  await page.getByPlaceholder('Email').fill('tony.stark@ironman.com');
  await page.getByPlaceholder('Password').fill('ironman12345');

  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.getByText('Data Name : Tony Stark')).toBeVisible();
  await expect(page.getByText('Data Email : tony.stark@ironman.com')).toBeVisible();
  await expect(page.getByText('Data Password : ironman12345')).toBeVisible();

  await expect(page.locator('p:has-text("Name is required")')).not.toBeVisible();
  await expect(page.locator('p:has-text("Email is required")')).not.toBeVisible();
  await expect(page.locator('p:has-text("Password is required")')).not.toBeVisible();

  await expect(page.locator('div[role="status"]:has-text("Name is required")')).not.toBeVisible();
  await expect(page.locator('div[role="status"]:has-text("Email is required")')).not.toBeVisible();
  await expect(page.locator('div[role="status"]:has-text("Password is required")')).not.toBeVisible();
});