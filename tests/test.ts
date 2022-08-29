import { test } from '@playwright/test';

// => doc PlayWrite https://playwright.dev/docs/selectors




test('check if name and lastname is correctly formated ', async ({ page }) => {
	await page.goto('/');
	await page.locator('nameFormat', { hasText: `${/^[A-Z][a-z]+ [A-Z]+$/d}` });

});
