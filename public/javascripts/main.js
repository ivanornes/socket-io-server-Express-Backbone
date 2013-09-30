var myApp = angular.module('myApp',[]);

function FirstController($scope){
    $scope.emitText = function () {
        var socket = io.connect('http://localhost');
        console.log("Emitiendo: "+$scope.data.message);
        socket.emit('emit', $scope.data.message);
    };
    $scope.receivedText = function () {
        console.log("Recivido: "+texto);
        $scope.data.label= texto;
    };
}