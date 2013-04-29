'use strict';

/* Controllers */


function SeedCtrl1() {}


function MyCtrl2() {
}

function AppInputCtrl($scope) {
    $scope.application = {
        number: '000000001',
        regdate: '01/01/2013',
        decisionterm:'',
        product: 'А/м с пробегом',
        salespoint: 'Точка продаж',
        sum: 100
    };

    $scope.myData = [
        {name: "Иванов Иван Иванович", age: 43},
        {name: "Иванов Андрей Иванович", age: 43},
        {name: "Петров Петр Петрович", age: 27}
    ];
    $scope.gridOptions = { data: 'myData',
        columnDefs: [
            {field:'name', displayName:'Имя'},
            {field:'age', displayName:'Возраст'}
        ]};

    $scope.calc = function() {
        $scope.myData = [
            {name: "Петров Петр Петрович", age: 27}
        ];
    }

}