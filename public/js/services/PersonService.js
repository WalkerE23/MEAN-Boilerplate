//NerdService.js



angular.module('PersonService', []).factory('Person', ['$http', function($http){
	return{

		get: function(){
			return $http.get('/api/person');
		},

		create: function(personData){
			return $http.post('/api/person', personData);
		},

		delete: function(id){
			return $http.delete('/api/person',id);
		}

	}
}]);