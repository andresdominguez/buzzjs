describe('protractor website', function() {
  it('navigates to protractor website', () => {
    browser.get('http://www.protractortest.org/#/api');
    expect(element(by.css('#title')).getText()).toBe('Protractor API 3.3.0');
  });
});
