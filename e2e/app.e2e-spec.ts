import { VideorentPage } from './app.po';

describe('videorent App', () => {
  let page: VideorentPage;

  beforeEach(() => {
    page = new VideorentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
