import { test } from '@playwright/test';

// => doc PlayWrite https://playwright.dev/docs/selectors
// => tuto Graphikart
// https://www.youtube.com/watch?v=UgF2LwlNnC8

test('check if title site include interim +', async ({ page }) => {
	await page.goto('/');
});


// Créer un test pour s'assuré que les noms sont bien formattés

test('check if name and lastname is formated correctly', async ({ page }) => {
	await page.goto('/');
	await page.locator('nameFormat', { hasText: `${/^[A-Z][a-z]+ [A-Z]+$/d}` });

});
