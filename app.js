(function(){
	var app=angular.module('app-header', ['app-body','app-footer']);
	//app.controller();
	app.directive('headerApp', function(){
		return {
			restrict: 'A',
			templateUrl: 'header.html',
			controller: function(){
				/*
				 *
				 * Where should I use var THIS=this; ?
				 *
				 */
				var THIS=this;
				THIS.isLogin=false;
				THIS.goRegister=false;
				THIS.setLogin=function(is){
					THIS.isLogin=is;
				};
				THIS.Login=function(userobj){
					/*
					 * Things to do...
					 *
					 * userobj.name
					 *        .pw
					 */
				};
				THIS.setgoRegister=function(){
					THIS.goRegister=!THIS.goRegister;
				};
			},
			controllerAs: 'headerCtrl'
		};
	});
})();
