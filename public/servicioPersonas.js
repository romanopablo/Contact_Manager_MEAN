angular.module("agenda.services", ['agenda.factory'])
    .service('peopleService',function peopleService($http,$q, contactFactory){

        this.addPeople = function(person){      //RECIBE UN OBJ PERSONA.
            contactFactory.addContact(person).success(function(data) {
                console.log("contacto guardado");
            });
        };

        this.deletePeople = function(id){       //RECIBE  ID
            contactFactory.deleteContact(id).success(function() {
                console.log("contacto eliminado");
            });
        };

        this.updatePeople = function(person){ //RECIBE UN OBJ PERSONA.
            contactFactory.updateContact(person._id,person).success(function() {
                console.log("contacto editado");
            });
        };

        this.getPeopleArray = function() { //NO RECIBE PARAMETROS, DEVUELVE EL ARRAY CON PERSONAS
            var deferred = $q.defer();
            try{
                contactFactory.getContacts().success(function(contacts) {
                    deferred.resolve(contacts);
                });
            }catch(e){
                deferred.reject(e);
            }

            return deferred.promise;
        };
    });

