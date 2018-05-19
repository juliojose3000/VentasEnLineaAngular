import { VentaenlineaPage } from './app.po';

describe('ventaenlinea App', () => {
  let page: VentaenlineaPage;

  beforeEach(() => {
    page = new VentaenlineaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
