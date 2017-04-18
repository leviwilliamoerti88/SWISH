(function () {
    'use strict';

    angular
        .module('app')
        .factory('SearchService', Service);

    function Service($http, $localStorage) {
        var service = {};

        service.Search = Search;
        service.Business = Business;

        return service;

        function Search(term, location, categories, price, callback) {
            return $http.get('/search', {

            })
              .then(handleSuccess, handleError('Error searching'));
            // $http.get('/search', {
            //   params: {
            //     term: term,
            //     location: location
            //   },
            //   query: {
            //       categories: categories,
            //       price: price
            //   },
            //   headers: {
            //     Authorization: $localStorage.currentUser.token
            //   }
            // })
            //     .success(function (response) {
            //         // register successful if response returns success boolean
            //         if (response.data) {
            //             // return callback to indicate successful search
            //             return response.data;
            //         } else {
            //             // execute callback with false to indicate failed search
            //             callback(false);
            //         }
            //     });
        }

        function Business(business) {
            return $http.get('/business', {
                params: { id: business }
            })
              .then(handleSuccess, handleError('Error finding business'));
            // $http.get('/business', { params: { id: business }}, {headers: {Authorization: $localStorage.currentUser.token}})
            //     .success(function (response) {
            //         // login successful if there's a token in the response
            //         if (response.data) {
            //             // return callback to indicate successful search
            //             return response.data;
            //         } else {
            //             // execute callback with false to indicate failed business search
            //             callback(false);
            //         }
            //     });
        }

        function handleSuccess(response){
            return response.data;
        }

        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }

    }
})();
