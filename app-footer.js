(function(){
	var app=angular.module('app-footer', []);
	app.directive('footerApp', function(){
		return {
			restrict: 'A',
			templateUrl: 'footer.html',
			controller: function(){
				var THIS=this;
				THIS.information='Author: petjelinux';
			},
			controllerAs: 'footerCtrl'
		};
	});
})();
