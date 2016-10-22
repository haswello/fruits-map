angular
    .module("fruitsMap",["ngMaterial"])
    .config(function($mdThemingProvider){
    
    $mdThemingProvider.theme('default')
        .primaryPalette('teal')
        .accentPalette('orange');
});