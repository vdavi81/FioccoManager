import { RegistrazioniFioccoPage } from './app.po';

describe('registrazioni-fiocco App', function() {
  let page: RegistrazioniFioccoPage;

  beforeEach(() => {
    page = new RegistrazioniFioccoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
