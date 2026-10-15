import { Page, expect } from '@playwright/test';
import { config } from '../config/project.config';

export class GooglePage {
  readonly page: Page;
  readonly searchBoxSelector = 'textarea[aria-label="Search"]';
  readonly googleUrl = config.urls.google;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToGoogle(): Promise<void> {
    await this.page.goto(this.googleUrl);
    await expect(this.page).toHaveTitle(/Google/);
  }

  async searchForTerm(searchTerm: string): Promise<void> {
    await this.page.waitForSelector(this.searchBoxSelector, { timeout: 5000 });
    await this.page.fill(this.searchBoxSelector, searchTerm);
    await Promise.all([
      this.page.waitForNavigation(),
      this.page.press(this.searchBoxSelector, 'Enter'),
    ]);
  }

  async verifyTitleContains(text: string): Promise<void> {
    // Wait for page to be ready
    await this.page.waitForLoadState('networkidle');
    const title = await this.page.title();
    console.log("Current page title: " + title);
    // Check if the text appears anywhere in the title
    expect(title.toLowerCase()).toContain(text.toLowerCase());
  }
}
