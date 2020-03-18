'use strict';

describe('TodoControllerTest', function() {
    beforeEach(module('todoApp'));
	
	var mockService = {
		phones:['416-344-9999','905-222-3333'],
		get: function (){
			return this.phones;
		},
		put:function(content){
			this.phones.push(content);
		}
	}
	
    it('should return phones array with 2 elements initially',
	
          inject(function($rootScope, $controller) {
              var scope = $rootScope.$new();
              var ctrl = $controller("TodoController", {$scope:scope,phonesFactory:mockService });
              expect(scope.phones.length).toBe(2);
			  scope.phone="647-123-4444";
			  scope.createPhone();
			  expect(scope.phones.length).toBe(3);
    }));
});