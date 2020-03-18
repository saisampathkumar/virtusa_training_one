var todoApp=angular.module('todoApp',[]);

todoApp.controller('TodoController', function($scope,phonesFactory) {
      
	 $scope.phones=phonesFactory.get();
	
	 $scope.$on("newPhone", function(event) {
	  $scope.phones=phonesFactory.get();
	 });

	
	 $scope.createPhone=function(){
		  phonesFactory.put($scope.phone);
		  $scope.phone="";
	 }
});
 
todoApp.directive('customColor', function () {
  return {
    restrict: 'A',
    link: function (scope, elem, attrs) {
      elem.css({"background-color":attrs.customColor});
    }
  }
});
 
todoApp.filter('truncate',function(){
	return function(input,length){
		return (input.length>length?input.substring(0,length):input);
	};
}); 
 
todoApp.factory('phonesFactory',function($rootScope){
       return {
              put:function(phone){
                localStorage.setItem('todo'+(Object.keys(localStorage).length+1),phone);
				$rootScope.$broadcast("newPhone");
              },
              get:function(){
					var phones=[];
                    var keys=Object.keys(localStorage);
					for(var i=0;i<keys.length;i++){
						phones.push(localStorage.getItem(keys[i]));
					}
                    return phones;
              }
       }
});  