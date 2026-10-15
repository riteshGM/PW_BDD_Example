import { Given, When, Then } from '../steps/fixtures';
import { GooglePage } from '../pages/googlePage';

Given('I am on Google Search Page', async ({ page, googlePage }) => {
  await googlePage.navigateToGoogle();
});

When('I search {string}', async ({ page, googlePage }, searchTerm: string) => {
  await googlePage.searchForTerm(searchTerm);
});

Then('I see in title contains {string}', async ({ page, googlePage }, text: string) => {
  await googlePage.verifyTitleContains(text);
});
