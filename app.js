(function(){
	var app=angular.module('app', []);
	//app.controller();
	app.directive('header', function(){
		return {
			restrict: 'E',
			templateUrl: 'header.html',
			controller: function(){
				/*
				 *
				 * Where should I use var THIS=this; ?
				 *
				 */
				var THIS=this;
				THIS.user='';
				THIS.pw='';
				THIS.isLogin=false;
				THIS.setLogin=function(is){
					THIS.isLogin=is;
				};
				THIS.Login=function(user,pw){
					/*
					 *
					 * Things to do...
					 *
					 */
				};
			},
			controllerAs: 'headerCtrl'
		};
	});
})();
