angular.module("agenda.filters", [])
    .filter('tel', function() {
    return function(tel) {
        if (!tel) { //si es vacio no hace nada
            return '';
        }
        var value = tel.toString().trim().replace(/^\+/, '');

       /* if (value.match(/[^0-9]/)) {
            return tel;
        }*/

        var city, number; //numero, prefijo, codigo de area
        switch (value.length) { //Case por longitud del numero 10,11 o 12.
            case 10:
                city = value.slice(0, 3);
                number = value.slice(3);
                break;

            case 11:
                city = value.slice(0, 4);
                number = value.slice(4);
                break;
            case 12:
                city = value.slice(0, 4);
                number = value.slice(4);
                break;

            default: //cualquier otro caso, devuelvo el num sin hacer nada.
                return tel;
        }

        number = number.slice(0, 3) + '-' + number.slice(3);
        return (" (" + city + ") " + number).trim();
    };
});
