//describe('test setCreds', function () {
//    var $rootScope;
//    var setCreds;
//
//    beforeEach(module('blogBusinessServices'));
//
//    beforeEach(inject(function ($injector) {
//        $rootScope = $injector.get('$rootScope');
//        setCreds = $injector.get('setCreds');
//        setCreds("test", "test");
//    }));
//
//    it('should test setCreds service exist', function () {
//        expect(setCreds).toBeDefined();
//    });
//});

describe('test checkCreds', function () {
    var $rootScope;
    var checkCreds;
    var setCreds;

    beforeEach(module('blogBusinessServices'));
    beforeEach(inject(function ($injector) {
        $rootScope = $injector.get('$rootScope');
        checkCreds = $injector.get('checkCreds');
        setCreds = $injector.get('setCreds');
        setCreds("test", "test");
    }));
    it('should test setCreds service exist', function () {
        expect(checkCreds()).toEqual(true);
    });
});
