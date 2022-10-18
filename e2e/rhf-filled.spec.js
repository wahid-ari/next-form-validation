import { test, expect } from '@playwright/test';

test('test RHF filled some value and click Submit', async ({ page }) => {
  await page.goto('/rhf-filled');
  await expect(page).toHaveURL('/rhf-filled');

  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.getByText('Gender is required')).toBeVisible();
  await expect(page.getByText('Subscribe is required')).toBeVisible();
});

test('test RHF fillled with valid value and click Submit', async ({ page }) => {
  await page.goto('/rhf-filled');
  await expect(page).toHaveURL('/rhf-filled');

  await page.getByRole('radio', { name: 'Male' }).check();
  await page.getByLabel('Subscribe').check();

  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.getByText('Gender is required')).not.toBeVisible();
  await expect(page.getByText('Subscribe is required')).not.toBeVisible();
 
  await expect(page.getByText('Data Name : John Doe')).toBeVisible();
  await expect(page.getByText('Data Username : johndoe')).toBeVisible();
  await expect(page.getByText('Data Email : john.doe@gmail.com')).toBeVisible();
  await expect(page.getByText('Data Password : abcd1234')).toBeVisible();
  await expect(page.getByText('Data Bio : John Doe Bio')).toBeVisible();
  await expect(page.getByText('Data Gender : male')).toBeVisible();
  await expect(page.getByText('Data Web : https://www.johndoe.com')).toBeVisible();
  await expect(page.getByText('Data Fruit : apple')).toBeVisible();
  await expect(page.getByText('Data Rating : 8')).toBeVisible();
  await expect(page.getByText('Data Age : 25')).toBeVisible();
  await expect(page.getByText('Data Subscribe : true')).toBeVisible();
  await expect(page.getByText('Data Color :')).toBeVisible();
  await expect(page.getByText('Data Date of Birth : 2022-10-16')).toBeVisible();
});