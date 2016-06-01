describe('protractor website', function() {

  it('navigates to protractor website', () => {
    browser.get('http://www.protractortest.org/#/api');
    $('#searchInput').sendKeys('by.binding');
    element(by.linkText('binding')).click();
    expect($('.api-title').getText()).toBe('by.binding View code');
    browser.sleep(5000);
  });
});
