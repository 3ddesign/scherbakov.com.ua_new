import { ScherbakovPage } from './app.po';

describe('scherbakov App', () => {
  let page: ScherbakovPage;

  beforeEach(() => {
    page = new ScherbakovPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
