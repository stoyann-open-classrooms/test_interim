import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	timeout:2_000,
	webServer: {
		command: 'npm run build && npm run preview',
		port: 4173
	}
};

export default config;
