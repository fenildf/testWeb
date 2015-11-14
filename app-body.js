(function(){
	var app=angular.module('app-body', []);
	app.directive('bodyApp', function(){
		return {
			restrict: 'A',
			templateUrl: 'body.html',
			controller: function(){
				var THIS=this;
				//ajax GET json //Test data
				THIS.json=[
					{'user': 'petjelinux', 'time': 054669467,'data': 'heyhey1'},{'user': 'peterlinux', 'time': 054669468, 'data': 'heyhey2'}
				];
				/*
				 *
				 * json > array; json[a].data;
				 * json[a].user;
				 *             .time;
				 *
				 */
			},
			controllerAs: 'bodyCtrl'
		};
	});
})();
