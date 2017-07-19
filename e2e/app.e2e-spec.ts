import { MinutesAppPage } from './app.po';

describe('minutes-app App', () => {
  let page: MinutesAppPage;

  beforeEach(() => {
    page = new MinutesAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
