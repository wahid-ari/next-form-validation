import { test, expect } from '@playwright/test';

test('test RHF empty value and click Submit', async ({ page }) => {
  await page.goto('/rhf');
  await expect(page).toHaveURL('/rhf');

  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.getByText('Name is required').first()).toBeVisible();
  await expect(page.getByText('Username is required')).toBeVisible();
  await expect(page.getByText('Email is required')).toBeVisible();
  await expect(page.getByText('Password is required')).toBeVisible();
  await expect(page.getByText('Bio is required')).toBeVisible();
  await expect(page.getByText('Gender is required')).toBeVisible();
  await expect(page.getByText('Web is required')).toBeVisible();
  await expect(page.getByText('Rating is required')).toBeVisible();
  await expect(page.getByText('Age is required')).toBeVisible();
  await expect(page.getByText('Subscribe is required')).toBeVisible();
  await expect(page.getByText('Date of Birth is required')).toBeVisible();
  await expect(page.getByText('Fruit is required')).toBeVisible();
});

test('test RHF fill with valid value and click Submit', async ({ page }) => {
  await page.goto('/rhf');
  await expect(page).toHaveURL('/rhf');

  await page.getByRole('textbox', { name: 'Name' }).fill('John Doe');
  await page.getByPlaceholder('Username').fill('john');
  await page.getByPlaceholder('Email').fill('johndoe@gmail.com');
  await page.getByPlaceholder('Password').fill('abcd1234');
  await page.getByPlaceholder('Bio').fill('John Doe Bio');
  await page.getByRole('radio', { name: 'Male' }).check();
  await page.getByPlaceholder('Web').fill('https://johndoe.com');
  await page.getByPlaceholder('Rating').fill('8');
  await page.getByPlaceholder('Age').fill('20');
  await page.getByLabel('Subscribe').check();
  await page.getByLabel('Red').check();
  await page.getByLabel('Blue').check();
  await page.getByLabel('Date of Birth').fill('2022-10-18');
  await page.locator('select[name="fruit"]').selectOption('apple');

  await page.getByRole('button', { name: 'Submit' }).click();
 
  await expect(page.getByText('Data Name : John Doe')).toBeVisible();
  await expect(page.getByText('Data Username : john')).toBeVisible();
  await expect(page.getByText('Data Email : johndoe@gmail.com')).toBeVisible();
  await expect(page.getByText('Data Password : abcd1234')).toBeVisible();
  await expect(page.getByText('Data Bio : John Doe Bio')).toBeVisible();
  await expect(page.getByText('Data Gender : male')).toBeVisible();
  await expect(page.getByText('Data Web : https://johndoe.com')).toBeVisible();
  await expect(page.getByText('Data Fruit : apple')).toBeVisible();
  await expect(page.getByText('Data Rating : 8')).toBeVisible();
  await expect(page.getByText('Data Age : 20')).toBeVisible();
  await expect(page.getByText('Data Subscribe : true')).toBeVisible();
  await expect(page.getByText('Data Color : red, blue')).toBeVisible();
  await expect(page.getByText('Data Color :')).toBeVisible();
  await expect(page.getByText('Data Date of Birth : 2022-10-18')).toBeVisible();
});