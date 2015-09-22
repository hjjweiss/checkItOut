angular
  .module('example')
  .controller('LoginController', function($scope, supersonic) {
    Parse.initialize("k1T408MnB5dAKxS8WWOcvqGcpr6HMPbt1vIS6xjo", "oxjZUHQS1G9QpYVydaI0oDknpRFa4YsMG6BxhhrG");

    $scope.navbarTitle = "Login";
    $scope.testData = function(){
     supersonic.logger.info("data connect started.");
     var TestObject = Parse.Object.extend("TestObject");
     //supersonic.logger.info(TestObject);
     var testObject = new TestObject();
       testObject.save({foo: "bar"}).then(function(object) {
         supersonic.logger.info("data connect worked.");
});
   }
  });
