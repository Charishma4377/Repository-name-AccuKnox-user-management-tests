const { test } = require('@playwright/test');

test('OrangeHRM User Flow', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');

  await page.click('button[type="submit"]');

  await page.waitForTimeout(3000);

  await page.getByRole('link', { name: 'Admin' }).click();

  await page.getByRole('button', { name: 'Add' }).click();
});