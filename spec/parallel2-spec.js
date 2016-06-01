describe('protractor website', function() {

  it('navigates to protractor website', () => {
    browser.get('http://www.protractortest.org/#/api');
    $('#searchInput').sendKeys('cssContainingText');
    element(by.linkText('cssContainingText')).click();
    expect($('.api-title').getText()).toBe('by.cssContainingText View code');
    browser.sleep(5000);
  });
});
