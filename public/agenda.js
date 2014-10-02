//-------------------------------------MODULO AGENDA-------------------------------------------
var agenda = angular.module("agenda",['ngRoute','agenda.factory','agenda.services','agenda.filters', 'agenda.directivaAgregar' ]);


//******************************* ROUTE PROVIDER **************************************************

agenda.config(["$routeProvider",
    function($routeProvider){
        $routeProvider
            .when('/agregar', {
                templateUrl: '/templates/agregar.html'
                //, controller:'AgendaController'
            })
            .when('/ver', {
                templateUrl: 'templates/ver.html'
                //, controller:'AgendaController'
            })
            .when('/', {
            templateUrl: 'templates/home.html'
            //, controller:'AgendaController'
        });
    }]);


//******************************* CONTROLADOR AgendaController **************************************************

agenda.controller('AgendaController',['$scope','peopleService',
    function ($scope, peopleService){
        $scope.loadPersonas = function(){

            peopleService.getPeopleArray()
            .then(function(data){$scope.personas = data;},
                    function(){alert("Fallo de conexión con Base de Datos!")})
        };

        $scope.persona = {};

        $scope.cargarPersona = function (){
           if(!$scope.persona._id){  //SI NO TIENE ID LLAMO A ADD, SI TIENE ES PARA EDDIT
            peopleService.addPeople($scope.persona);
           }else{
            peopleService.updatePeople($scope.persona);
           }
           $scope.loadPersonas();
           $scope.persona ={};
        };

        $scope.eliminarPersona = function (id){
            peopleService.deletePeople(id);
            $scope.loadPersonas();

        };

        $scope.editarPersona = function (persona){    //CREO UNA INSTANCIA NUEVA Y COPIO LOS ATRIBUTOS EN EL OBJETO PERSONA DEL SCOPE
            var copiape = angular.copy(persona);
            $scope.persona._id = copiape._id;
            $scope.persona.name = copiape.name;
            $scope.persona.email = copiape.email;
            $scope.persona.phone = copiape.phone;
        }
    }]);


