/* jshint -W117, -W030 */
describe('Controller: AboutCtrl', function() {

  // load the controller's module
  beforeEach(module('app'));

  var AboutCtrl;
  var scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutCtrl = $controller('AboutCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(AboutCtrl.awesomeThings.length).toEqual(3);
  });
});
