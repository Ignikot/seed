'use strict';

/* Controllers */


function SeedCtrl1() {
}


function MyCtrl2() {
}

function AppInputCtrl($scope) {
    $scope.application = {
        number: '000000001',
        regdate: '01/01/2013',
        decisionterm: '',
        product: 'А/м с пробегом',
        salespoint: 'Точка продаж',
        sum: 100.05556
    };
}

function LoginCtrl($scope, $http, authService) {
    $scope.isLogged = false;
    $scope.username = '';
    $scope.password = '';
    $scope.login = function () {
        $scope.isLogged = true;
        /*
         $http.post('auth/login').success(function () {
         authService.loginConfirmed();
         });
         */
    }
    $scope.logout = function () {
        $scope.isLogged = false;
    }

}

function TaskCtrl($scope, Task) {

    $scope.pagingOptions = {
        pageSizes: [20, 50, 100, 1000],
        pageSize: 20,
        totalServerItems: 0,
        currentPage: 1
    };

    $scope.filterOptions = {
        filterText: "",
        useExternalFilter: true
    };

    $scope.taskGridOptions = { data: 'taskListData',
        columnDefs: [
            {field: 'name', displayName: 'Наименование'},
            {field: 'tkiid', displayName: 'ID'}
        ],
        enablePaging: true,
        showFooter: true,
        pagingOptions: $scope.pagingOptions,
        filterOptions: $scope.filterOptions
    };

    $scope.updateTaskData = function () {
        $scope.taskListData = undefined;
        var taskData = Task.get({userId: 123},
            function () {
                $scope.taskListData = taskData.items;
            },
            function () {
                $scope.taskListData = undefined;
            }
        );
    };

    $scope.cleanTaskData = function () {
        $scope.taskListData = undefined;
    };

    $scope.updateTaskData();

}

function AppPartyCtrl($scope) {
    $scope.myData = [
        {lastName: "Иванов", firstName: "Иван", middleName: "Иванович", age: 43},
        {lastName: "Иванов", firstName: "Андрей", middleName: "Иванович", age: 35},
        {lastName: "Петров", firstName: "Петр", middleName: "Петрович", age: 27}
    ];

    $scope.partySelections = [];
    $scope.isNew = false;

    $scope.gridOptions = { data: 'myData',
        columnDefs: [
            {field: 'lastName', displayName: 'Фамилия'},
            {field: 'firstName', displayName: 'Имя'},
            {field: 'middleName', displayName: 'Отчество'},
            {field: 'age', displayName: 'Возраст'}
        ],
        enableRowSelection: true,
        selectedItems: $scope.partySelections,
        multiSelect: false
    };

    $scope.remove = function () {
        if($scope.partySelections != undefined) {
            var indx = $scope.myData.indexOf($scope.partySelections[0]);
            $scope.myData.splice(indx, 1);
        }
    }

    $scope.edit = function () {
        if($scope.partySelections[0] != undefined) {
            $scope.currentParty = $scope.partySelections[0];
            $('#addModal').modal('show');
        }
    }

    $scope.save = function () {
        if($scope.isNew) {
            $scope.myData.push($scope.currentParty);
        } else {
            var indx = $scope.myData.indexOf($scope.partySelections[0]);
            $scope.myData[indx] = $scope.currentParty;
        }
        $scope.isNew = false;
        $('#addModal').modal('hide');
    }

    $scope.cancel = function () {
        $scope.isNew = false;
        $('#addModal').modal('hide');
    }

    $scope.create = function () {
        $scope.isNew = true;
        $scope.currentParty = {lastName: "", firstName: "", middleName: "", age: 0};
        $('#addModal').modal('show');
    }

}