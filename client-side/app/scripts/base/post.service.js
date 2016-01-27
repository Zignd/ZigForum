(function () {
    'use strict';
    
    angular
        .module('zigforumApp')
        .service('post', post);
    
    post.$inject = ['$http', 'API_URL'];
    
    function post($http, API_URL) {
        var sv = this;
        var endpoint = API_URL + '/post';
        
        /**
         * Retrieves a post by its id
         */
        sv.getById = function (onSuccess, onFail, id) {
            var config = {
                method: 'GET',
                url: endpoint + '/' + id
            };
            
            $http(config)
                .then(function (response) {
                    onSuccess(response.data);
                }, function (response) {
                    onFail(response.statusText);
                });
        };
        
        /**
         * Creates a new post
         */
        sv.createNew = function (onSuccess, onFail, newPost) {
            var config = {
                method: 'POST',
                url: endpoint + '/create',
                data: newPost
            };
            
            $http(config)
                .then(function (response) {
                    onSuccess(response.data);
                }, function (response) {
                    onFail(response.statusText);
                });
        };
        
        /**
         * Edits an existing post
         */
        sv.edit = function (onSuccess, onFail, id, editedPost) {
            var config = {
                method: 'PUT',
                url: endpoint + '/' + id + '/edit',
                data: editedPost
            };
            
            $http(config)
                .then(function (response) {
                    onSuccess(response.data);
                }, function (response) {
                    onFail(response.statusText);
                });
        };
        
        /**
         * Deletes an existing post
         */
        sv.delete = function (onSuccess, onFail, id) {
            var config = {
                method: 'DELETE',
                url: endpoint + '/' + id + '/delete' 
            };
            
            $http(config)
                .then(function (response) {
                    onSuccess(response.data);
                }, function (response) {
                    onFail(response.statusText);
                });
        };
    }
})();