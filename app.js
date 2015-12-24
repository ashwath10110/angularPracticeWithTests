var myApp = angular.module('CRUD', []);

myApp.controller('mainController', function($scope) {

  $scope.listProducts = [{
    id: '1',
    name: 'Item 1',
    price: 1000,
    quantity: 20
  }, {
    id: '2',
    name: 'Item 2',
    price: 1000,
    quantity: 23
  }, {
    id: '3',
    name: 'Item 3',
    price: 1000,
    quantity: 21
  }, {
    id: '4',
    name: 'Item 4',
    price: 1000,
    quantity: 24
  }];

  $scope.edit = function() {

    var index = getSelected($scope.id);

    $scope.listProducts[index].id = $scope.id;
    $scope.listProducts[index].name = $scope.name;
    $scope.listProducts[index].price = $scope.price;
    $scope.listProducts[index].quantity = $scope.quantity;

  };

  $scope.del = function(id) {

    var result = confirm('Are you sure?');

    if (result) {

      var index = getSelected(id);

      $scope.listProducts.splice(index, 1);

      $scope.id = '';
      $scope.name = '';
      $scope.price = '';
      $scope.quantity = '';
    }

  };

  $scope.selectEdit = function(id) {

    var index = getSelected(id);

    var currentProduct = $scope.listProducts[index];

    $scope.id = currentProduct.id;
    $scope.name = currentProduct.name;
    $scope.price = currentProduct.price;
    $scope.quantity = currentProduct.quantity;
  };

  $scope.add = function() {

    var tempProduct = {
      id: $scope.id,
      name: $scope.name,
      price: $scope.price,
      quantity: $scope.quantity
    };

    $scope.listProducts.push(tempProduct);

    $scope.id = '';
    $scope.name = '';
    $scope.price = '';
    $scope.quantity = '';
  };

  $scope.save = function() {

    var index = getSelected($scope.id);

    $scope.listProducts[index].id = $scope.id;
    $scope.listProducts[index].name = $scope.name;
    $scope.listProducts[index].price = $scope.price;
    $scope.listProducts[index].quantity = $scope.quantity;
  };

  function getSelected(id) {
    var array = $scope.listProducts;

    for (var i = 0; i < array.length; i++) {
      if (array[i].id === id) {
        return i;
      }
    }
    return -1;
  }

});
