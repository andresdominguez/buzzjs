describe('protractor website', function() {

  it('navigates to protractor website', () => {
    browser.get('http://www.protractortest.org/#/api');
    $('#searchInput').sendKeys('map');
    element(by.linkText('map')).click();
    expect($('.api-title').getText())
        .toBe('element.all(locator).map(mapFunction) View code');
    browser.sleep(5000);
  });
});
