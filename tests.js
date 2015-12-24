describe('Controller: mainController', function() {

  beforeEach(module('CRUD'));

  var myController, scope;

  var mainList = [{
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

  var productsListAnswerTest1 = [{
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
  }];

  var productsListAnswerTest2 = [{
    id: '1',
    name: 'Item 1',
    price: 1000,
    quantity: 20
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

  var productsListAnswerTest3 = [{
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
  }, {
    id: '5',
    name: 'Item 5',
    price: 2000,
    quantity: 23
  }];

  var prod1 = {
    id: '5',
    name: 'Item 5',
    price: 2000,
    quantity: 23
  };

  beforeEach(inject(function($controller, $rootScope) {

    scope = $rootScope.$new();

    myController = $controller('mainController', {
      $scope: scope
    });

  }));

  it('Testing delete functionality and getSelected functionality', function() {
    expect(scope.delete(4)).toBe(productsListAnswerTest1);
    expect(scope.getSelected()).toBe(mainList);
    expect(scope.delete(2)).toBe(productsListAnswerTest2);
    expect(scope.getSelected()).toBe(mainList);
  });

});
