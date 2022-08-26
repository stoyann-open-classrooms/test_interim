import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h1')).toBe('Welcome to SvelteKit');
});


// TODO = tester le formatage du nom et prenom
// doc PlayWrite https://playwright.dev/docs/selectors
// Lancer les tests : npx playwright test


