import { Angular2MoviesPage } from './app.po';

describe('angular2-movies App', function() {
  let page: Angular2MoviesPage;

  beforeEach(() => {
    page = new Angular2MoviesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
