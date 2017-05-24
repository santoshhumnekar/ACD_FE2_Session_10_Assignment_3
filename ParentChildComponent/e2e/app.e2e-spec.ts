import { ParentChildComponentPage } from './app.po';

describe('parent-child-component App', function() {
  let page: ParentChildComponentPage;

  beforeEach(() => {
    page = new ParentChildComponentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
