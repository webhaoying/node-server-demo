iweb.controller('i107', function($scope,$routeParams) {
//alert(window.location.href);
var arr = /news2\/(o\d+)/.exec(window.location.href);
var oid = arr[1];
 
  $scope.entity={}
  $scope.close=function(){
    history.go(-1)
  }
  setTimeout(function () {
    window.ajax({
      obj:'user',
      act:'newsdetail',
      //id:$routeParams.id,
      id:oid,
      location:'pc',
    },function (jo) {
      $scope.detail=jo.info
    })
    window.ajax({
      obj:'user',
      act:'newsbannerread',
      //id:$routeParams.id,
      id:oid,
      location:'pc',
    },function (jo) {
      $scope.entity=jo.info
    })
  },300)
})
