'use strict';

angular.module("agenda.factory", []).
    factory('contactFactory', function($http){
        return {
            addContact: function(contact) {
                return $http.post('/api/contact/', contact);
            },
            getContacts: function() {

                return $http.get('/api/contact/');
            },
            updateContact: function(id, contact) {
                return $http.put('/api/contact/' + id, contact);
            },
            deleteContact: function(id) {
                return $http.delete('/api/contact/' + id);
            }
        }
    });