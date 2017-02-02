import { TwoWayBindingPage } from './app.po';

describe('two-way-binding App', function() {
  let page: TwoWayBindingPage;

  beforeEach(() => {
    page = new TwoWayBindingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
