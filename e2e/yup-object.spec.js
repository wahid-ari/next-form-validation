import { test, expect } from '@playwright/test';

test('test Yup Object default valid value and click Submit', async ({ page }) => {
  await page.goto('/yup-object');
  await expect(page).toHaveURL('/yup-object');

  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.getByText('Data Name : John Doe')).toBeVisible();
  await expect(page.getByText('Data Username : johnd')).toBeVisible();
  await expect(page.getByText('Data Email : john.doe@gmail.com')).toBeVisible();
  await expect(page.getByText('Data Password : abc123')).toBeVisible();
  await expect(page.getByText('Data Bio : John Bio')).toBeVisible();
  await expect(page.getByText('Data Gender : male')).toBeVisible();
  await expect(page.getByText('Data Web : https://www.johndoe.com')).toBeVisible();
  await expect(page.getByText('Data Fruit : apple')).toBeVisible();
  await expect(page.getByText('Data Rating : 8')).toBeVisible();
  await expect(page.getByText('Data Age : 25')).toBeVisible();
  await expect(page.getByText('Data Subscribe : true')).toBeVisible();
  await expect(page.getByText('Data Color : red,')).toBeVisible();
  await expect(page.getByText('Data Date of Birth : 1995-10-05')).toBeVisible();

  await page.getByRole('button', { name: 'Reset' }).click();

  await expect(page.getByText('Data Name : John Doe')).not.toBeVisible();
});

test('test Yup Object default invalid value and click Submit', async ({ page }) => {
  await page.goto('/yup-object');
  await expect(page).toHaveURL('/yup-object');

  await page.getByRole('button', { name: 'Use Invalid Data' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.getByText('Name must be alphabet')).toBeVisible();
  await expect(page.getByText('Username length must be 5')).toBeVisible();
  await expect(page.getByText('Email must be valid')).toBeVisible();
  await expect(page.getByText('Password length min 5')).toBeVisible();
  await expect(page.getByText('Bio length max 10')).toBeVisible();
  await expect(page.getByText('Gender is required')).toBeVisible();
  await expect(page.getByText('Web must be valid')).toBeVisible();
  await expect(page.getByText('Rating must be more than 1')).toBeVisible();
  await expect(page.getByText('Age must be a integer number')).toBeVisible();
  await expect(page.getByText('Subscribe must be boolean')).toBeVisible();
  await expect(page.getByText('Red must be boolean')).toBeVisible();
  await expect(page.getByText('Blue must be boolean')).toBeVisible();
  await expect(page.getByText('DOB must be date')).toBeVisible();
  await expect(page.getByText('Fruit is required')).toBeVisible();

  await page.getByRole('button', { name: 'Reset' }).click();

  await expect(page.getByText('Data Name : John Doe')).not.toBeVisible();
});