import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig, cucumberReporter } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: 'features/*.feature',
  steps: 'steps/*.ts',
});

export default defineConfig({
  // Global test timeout
  //timeout: 60000,
  // Expect assertion timeout - by default 5s
 /* expect: {
    timeout: 10000,
  },*/
  testDir,
  reporter: [
    cucumberReporter('html', {
      outputFile: 'cucumber-report/index.html',
      externalAttachments: true,
    }),
    ['html', { open: 'never' }],
  ],
  use: {
    screenshot: 'on',
    trace: 'on',
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        // Browser launch options
        headless: false, // Set to false to run in headed mode (see browser)
        viewport: { width: 1280, height: 720 }, // Custom viewport size
        // Channel options: 'chromium', 'chrome', 'chrome-beta', 'chrome-dev'
        // Or use executablePath for specific Chrome installation
        //channel: process.env.CHROME_CHANNEL || 'chromium', // Example to use environment variable
        //channel: 'chrome',
        // Uncomment to use specific Chrome executable path when you want to use a specific chrome version installed on your system
        executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
        // Additional launch options
        // ignoreHTTPSErrors: true,
        // javaScriptEnabled: true,
        // bypassCSP: true,
      },
    },
  ],
});
