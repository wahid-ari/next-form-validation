// @ts-check
const { test, expect } = require('@playwright/test');

test('should navigate to the index, zod and rhf page', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('/')
  // The url should be "/" (baseURL is used there)
  await expect(page).toHaveURL('/');
  // The page should contain an heading with "Yup Validation"
  await expect(page.getByRole('heading', { name: 'Yup Validation' })).toBeVisible()

  // Find an element with the text 'Yup Object' and click on it
  await page.getByRole('link', { name: 'Yup Object' }).click();
  await expect(page).toHaveURL('/yup-object');
  await expect(page.getByRole('heading', { name: 'Yup Validation Object' })).toBeVisible()
  
  // Find an element with the text 'Zod' and click on it
  await page.getByRole('link', { name: 'Zod' }).click();
  await expect(page).toHaveURL('/zod');
  await expect(page.getByRole('heading', { name: 'Zod Validation' })).toBeVisible()
  
  // Find an element with the text 'Zod Object' and click on it
  await page.getByRole('link', { name: 'Zod Object' }).click();
  await expect(page).toHaveURL('/zod-object');
  await expect(page.getByRole('heading', { name: 'Zod Validation Object' })).toBeVisible()
  
  // Find an element with the text 'Reach Hook Form' and click on it
  await page.getByRole('link', { name: 'React Hook Form' }).click();
  await expect(page).toHaveURL('/rhf');
  await expect(page.getByRole('heading', { name: 'React Hook Form Validation' })).toBeVisible()
  
  // Find an element with the text 'Reach Hook Form Filled' and click on it
  await page.getByRole('link', { name: 'React Hook Form Filled' }).click();
  await expect(page).toHaveURL('/rhf-filled');
  await expect(page.getByRole('heading', { name: 'React Hook Form Filled Validation' })).toBeVisible()
})