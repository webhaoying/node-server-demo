// Based on AngularJS 1.4.2

var IWEB_ACCOUNT    = "test2"; 
var TOOLBOX_ACCOUNT = "test1"; 

var iweb = angular.module('iweb', ['ngRoute']);

iweb.config(['$routeProvider',
  	function($routeProvider) {


    		$routeProvider.
      		when('/i000', {
    			templateUrl: 'i000.html',
    			controller: 'i000'
      		}).
      		when('/i072', {
    			templateUrl: 'i072.html',
    			controller: 'i072'
      		}).
      		when('/main', {
    			templateUrl: 'main.html',
    			controller: 'main'
      		}).
      		otherwise({
    			redirectTo: '/main'
      		});
}]);

// save a handle to the $rootScope obj
var rootScope;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function goto_view(v) {
  	var baseUrl = window.location.href;
	baseUrl = (baseUrl.indexOf('#') > 0 ? baseUrl.substr(0, baseUrl.indexOf('#')) : baseUrl);
	window.location.href = baseUrl + "#/" + v;
}

function logout() {
	sessionStorage.setItem("login_name", "");
	sessionStorage.setItem("login_passwd", "");
	apiconn.lgout();
}

var apiconn = new APIConnection();

apiconn.client_info.clienttype = "web";

apiconn.state_changed_handler = function() {

	rootScope.$apply(function() {
	
		console.log("state: "+apiconn.from_state+" => "+apiconn.conn_state);
	

		if (apiconn.conn_state == "IN_SESSION") {
	
			sessionStorage.setItem("login_name", apiconn.login_name);
			sessionStorage.setItem("login_passwd", apiconn.login_passwd);
				


		} else if (apiconn.conn_state == "LOGIN_SCREEN_ENABLED") {
	
			// auto re login after page refresh

			/*
			if (apiconn.login_name == "" && apiconn.credential_data == null) {
	
				var login_name = sessionStorage.getItem("login_name");
	            var login_passwd = sessionStorage.getItem("login_passwd");
			
				var cred = sessionStorage.getItem("credential_data");
				var cred_obj = null;
				if (cred !== "") cred_obj = JSON.parse(cred);
	
				// reset stored cred to prevent infinite loop in case of failure
				sessionStorage.setItem("login_name", "");
				sessionStorage.setItem("login_passwd", "");
				sessionStorage.setItem("credential_data", "");
	
				if (login_name != "" && login_name != null) {
					apiconn.login(login_name, login_passwd);
	
				} else if (cred_obj != null) {
					apiconn.loginx(cred_obj);
					
				} else {
				}
			}*/
			
		}
		
		rootScope.$broadcast("STATE_CHANGED_HANDLER", {});
	});
};

apiconn.response_received_handler = function(jo) {

	rootScope.$apply(function() {
	
		if (jo.obj == "person" && jo.act == "logout") {
			goto_view("main");
			return;
		}
		
		if (jo.ustr != null && jo.ustr != "") alert(jo.ustr);

		// $scope.$on("RESPONSE_RECEIVED_HANDLER", function(event, jo) {}
		if (jo.obj == "sdk" && jo.act == "switchreq") {
			return goto_view(jo.ixxx);
		}
		
		rootScope.$broadcast("RESPONSE_RECEIVED_HANDLER", jo);
	});
};

apiconn.wsUri = "ws://10.252.200.178/yh_ga";

iweb.run(['$rootScope', function ($rootScope) {
	rootScope = $rootScope;
	apiconn.connect();
}]);


