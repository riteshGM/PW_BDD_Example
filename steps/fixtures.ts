import { test as base, createBdd } from 'playwright-bdd';
import { GooglePage } from '../pages/googlePage';

type Fixtures = {
  // set types of your fixtures
  googlePage: GooglePage;
};

export const test = base.extend<Fixtures>({
  // add your fixtures
  googlePage: async ({page}, use) => {
    await use(new GooglePage(page));
  }
});

export const { Given, When, Then } = createBdd(test);
