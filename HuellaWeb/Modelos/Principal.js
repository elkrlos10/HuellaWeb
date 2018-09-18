// create the module and name it scotchApp
var HuellaApp = angular.module('HuellaApp', ['ngRoute']);


HuellaApp.config(function ($routeProvider) {

    $routeProvider

       .when('/Prue', {
           templateUrl: 'Views/Prueba.html',
           controller: 'PruebaController'
       })

});


HuellaApp.run(['$rootScope', '$location', '$http', '$templateCache',
    function ($rootScope, $location, $http, $templateCache) {
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
        //    $rootScope.globals = $cookieStore.get('username');
        //    //Variable global para asignar el Id del programa transversal
        //    $rootScope.ProgramaTransversal = 1414;
        //    //----------------------------------------------------------
        //    if ($location.path() == "/Solicitud" && !$rootScope.globals) {
        //        var url = $location.search();
        //        if (url != "") {
        //            $cookies.put("solicitud", url.GUID);
        //            $location.url("/Login");
        //            return;
        //        }
        //    }

        //    if ($rootScope.globals != undefined) {
        //        if ($location.path() == '/Login' && $rootScope.globals) {
        //            $location.path('/Vista');
        //        } else {
        //            if ($location.path() !== '/Login' && !$rootScope.globals) {
        //                if ($location.path() == "/Solicitud") {
        //                    var url = $location.search();
        //                    if (url != "") {
        //                        $cookies.put("solicitud", url.GUID);
        //                        $location.url("/Login");
        //                        return;
        //                    }
        //                }
        //                $cookies.put("solicitud", undefined);
        //            } else {
        //                $("#username").text($rootScope.globals.currentUser.nombre + " " + $rootScope.globals.currentUser.apellido);
        //                $("#Tipo").text($rootScope.globals.currentUser.rol);
        //                $('#rol').text($rootScope.globals.currentUser.rol);
        //                $('#nombre').text($rootScope.globals.currentUser.nombre + " " + $rootScope.globals.currentUser.apellido);
        //                if ($rootScope.globals.currentUser.tipousuario != 1) {
        //                    for (var i = 0; i < $rootScope.globals.Permiso.length; i++) {
        //                        $('#' + $rootScope.globals.Permiso[i].Nombre).hide();
        //                    }
        //                    var validar = false;
        //                    for (var i = 0; i < $rootScope.globals.Permiso.length; i++) {
        //                        if ("/" + $rootScope.globals.Permiso[i].Nombre == $location.path() || $location.path() == "/Login") {
        //                            $location.path('/Vista');
        //                        }
        //                    }
        //                }
        //            }
        //        }
        //    }

        //    if ($location.path() !== '/Login' && !$rootScope.globals) {
        //        $location.path('/Login');
        //    }
       });
    }]);


// create the controller and inject Angular's $scope
HuellaApp.controller('PrincipalController',
    ['$scope', '$rootScope', '$http', '$location',
    function ($scope, $rootScope, $http, $location) {

        //$scope.UsuarioCambiarPass = {
        //    Password: "",
        //    newPass: "",
        //    reingreso:""
        //};

        //    $scope.CerrarSesion = function () {
        //        LoginService.ConsultarModulosM().then(function (response) {
        //            if (response.data.success) {
        //                for (var i = 0; i < response.data.datos.length; i++) {
        //                    $('#' + response.data.datos[i].Nombre).show();
        //                }
        //            }
        //        })
        //    $cookies.remove("username");
        //    $location.url('/Login');
        //    };

        //    $scope.MPerfil = {
        //        IdPersona: "",
        //        TipoDocumento: "",
        //        NumeroDocumento: "",
        //        Nombres: "",
        //        Apellidos: "",
        //        Telefono: "",
        //        Correo: "",
        //        Tipo: ""
        //    };

        //    $scope.ModificarPerfil = function () {
        //        LoginService.ModificarPerfil().then(function (response) {
        //            if (response.data.success) {
        //                variable = 0;
        //                $('#ModificarPerfil').modal("show");
        //                $('#ModalPerfil').modal("hide");
        //                $scope.MPerfil = response.data.Datos;
        //                var st = $('#TP');
        //                st.val(response.data.Datos.TipoDocumento).trigger("change");
        //            } else {
        //                swal("Algo anda mal!", "Por favor actualiza la pagina", "warning");
        //            };
        //        });
        //    };

        //    $scope.ActualizarPerfil = function () {
        //        LoginService.ActualizarPerfil($scope.MPerfil).then(function (response) {
        //            if (response.data.success) {
        //                swal("Correcto!", "Se actualizo su perfil satisfactoriamente", "success");
        //                $("#username").text($scope.MPerfil.Nombres + " " + $scope.MPerfil.Apellidos);
        //                $('#nombre').text($scope.MPerfil.Nombres + " " + $scope.MPerfil.Apellidos);
        //            } else {
        //                swal("Algo anda mal!", "Por favor actualiza la pagina", "warning");
        //            }
        //        });
        //    };

        //$scope.cerrar = function () {
        //    $('#ModalPerfil').modal("hide");
        //};

        //$scope.cerrarp = function () {
        //    $('#ModificarPerfil').modal("hide");
        //};

        //$scope.modificarPerfil = function () {
        //    alert("Hola Carola")
        //    variable = 0;
        //};

        //$scope.AbrirVisita = function () {
        //    $location.url("/Visita");
        //};
        //$scope.AbrirCentro = function () {
        //    $location.url("/Centro");
        //};
        //$scope.AbrirLider = function () {
        //    $location.url("/Lider");
        //};
        //$scope.AbrirArea = function () {
        //    $location.url("/Area");
        //};

        //$scope.AbrirPersona = function () {
        //    $location.url("/Persona");
        //};


        //$scope.AbrirVista= function () {
        //    $location.url("/Vista");
        //};

        //$scope.AbrirCoordinacion = function () {
        //    $location.url("/Coordinacion");
        //};
        //$scope.AbrirPrograma = function () {
        //    $location.url("/Programa");
        //};
        //$scope.AbrirInstructor = function () {
        //    $location.url("/Instructor");
        //};
        //$scope.AbrirFicha = function () {
        //    $location.url("/Ficha");
        //};
        //$scope.AbrirAprendiz = function () {
        //    $location.url("/Aprendiz");
        //};
        //$scope.AbrirPermiso = function () {
        //    $location.url("/Permiso");
        //};
        //$scope.AbrirEmpresa = function () {
        //    $location.url("/Empresa");
        //};
        //$scope.AbrirModalCambiarPass = function () {
        //    variable = 0;
        //    $("#ModalCambiarPass").modal("show");
        //    $('#ModalPerfil').modal("hide");
        //};


        //$scope.CambiarPass = function () {
        //    if ($scope.UsuarioCambiarPass.newPass == $scope.UsuarioCambiarPass.reingreso) {
        //        LoginService.CambiarPassword($scope.UsuarioCambiarPass, $rootScope.globals.currentUser.id).then(function (response) {
        //            if (response.data.success) {
        //                swal("Correcto!", "Contraseña modificada satisfactoriamente", "success");
        //                $("#ModalCambiarPass").modal("hide");
        //            } else {
        //                swal("Cuidado!", "La contraseña ingresada no concuerda con la actual", "warning");
        //            }
        //        })
        //    } else {
        //        swal("Error!", "Las contraseñas son iguales reingreselas", "error");
        //    }
        //};
    }]);
