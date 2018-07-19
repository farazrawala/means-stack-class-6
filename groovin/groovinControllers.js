var groovin = angular.module("groovin", []);

groovin.controller('headerController', function($scope){
    $scope.printOnConsole = function(){
        console.log("Navbar Controller");
    }
});

groovin.controller('introController', function($scope){
    $scope.printOnConsole = function(){
        console.log("Intro Section Controller");
    }
});

groovin.controller('aboutController', function($scope){
    $scope.printOnConsole = function(){
        console.log("About Section Controller")
    }
});

groovin.controller('worksController', function($scope){
    $scope.printOnConsole = function(){
        console.log("Works Section Controller");
    }
});

groovin.controller('contactController', function($scope){
    $scope.printOnConsole = function(){
        console.log("Contact Section Controller");
    }
});

groovin.controller('footerController', function($scope){
    $scope.printOnConsole = function(){
        console.log("Footer Controller");
    }
});