import { test, expect } from '@playwright/test';

test('test Zod default valid value and click Submit', async ({ page }) => {
  await page.goto('/zod');
  await expect(page).toHaveURL('/zod');

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

test('test Zod default invalid value and click Submit', async ({ page }) => {
  await page.goto('/zod');
  await expect(page).toHaveURL('/zod');

  await page.getByRole('button', { name: 'Use Invalid Data' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.locator('p:has-text("Username must be alphanumeric, without space")')).toBeVisible();
  await expect(page.locator('p:has-text("Username length must be 5")')).toBeVisible();
  await expect(page.locator('p:has-text("Name must be alphabet")')).toBeVisible();
  await expect(page.locator('p:has-text("Email must be valid")')).toBeVisible();
  await expect(page.locator('p:has-text("Password length min 5")')).toBeVisible();
  await expect(page.locator('p:has-text("Bio length max 10")')).toBeVisible();
  await expect(page.locator('p:has-text("Gender is required")')).toBeVisible();
  await expect(page.locator('p:has-text("Web must be valid")')).toBeVisible();
  await expect(page.locator('p:has-text("Fruit is required")')).toBeVisible();
  await expect(page.locator('p:has-text("Rating must be more than 1")')).toBeVisible();
  await expect(page.locator('p:has-text("Age must be a integer number")')).toBeVisible();
  await expect(page.locator('p:has-text("Subscribe must be boolean")')).toBeVisible();
  await expect(page.locator('p:has-text("Red must be boolean")')).toBeVisible();
  await expect(page.locator('p:has-text("Blue must be boolean")')).toBeVisible();
  await expect(page.locator('p:has-text("invalid date")')).toBeVisible();

  await page.getByRole('button', { name: 'Reset' }).click();

  await expect(page.getByText('Data Name : John Doe')).not.toBeVisible();
});