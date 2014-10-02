angular.module("agenda.directivaAgregar", [])
    .directive('directivaAgregar', function(){
    return{
        restrict: 'EA',
        templateUrl: '/templates/directivaAgregar.html',
        scope:{
            persona: "=persona",
            funcion: "="
        }
    }
});