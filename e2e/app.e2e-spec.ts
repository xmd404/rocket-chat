import { RocketChatPage } from './app.po';

describe('rocket-chat App', () => {
  let page: RocketChatPage;

  beforeEach(() => {
    page = new RocketChatPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
