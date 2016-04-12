'use strict';

// Declare app level module which depends on views, and components
angular
    .module('myApp', ['directivas'])
    .controller('controlador', controlador);

function controlador($http) {
    var vm = this;

    vm.seleccion;
    vm.consulta = consulta;

    function consulta(val) {
        return $http.get('//maps.googleapis.com/maps/api/geocode/json', {
            params: {
                address: val,
                sensor: false
            }
        }).then(function(response){
            return response.data.results.map(function(item){
                return item.formatted_address;
            });
        });
    }
}