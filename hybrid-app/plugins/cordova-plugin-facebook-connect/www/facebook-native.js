var exec = require('cordova/exec')

exports.getLoginStatus = function (force, s, f) {
  if (typeof force === 'function') {
    s = force;
    f = s;
    force = false;
  }
  exec(s, f, 'FacebookConnectPlugin', 'getLoginStatus', [force])
}

exports.showDialog = function (options, s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'showDialog', [options])
}

exports.login = function (permissions, s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'login', permissions)
}

exports.loginWithLimitedTracking = function (permissions, nonce, s, f) {
  if (!nonce) {
    exec(s, f, 'FacebookConnectPlugin', 'loginWithLimitedTracking', [permissions])
  } else {
    exec(s, f, 'FacebookConnectPlugin', 'loginWithLimitedTracking', [permissions, nonce])
  }
}

exports.checkHasCorrectPermissions = function (permissions, s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'checkHasCorrectPermissions', permissions)
}

exports.isDataAccessExpired = function (s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'isDataAccessExpired', [])
}

exports.reauthorizeDataAccess = function (s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'reauthorizeDataAccess', [])
}

exports.setAutoLogAppEventsEnabled = function (enabled, s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'setAutoLogAppEventsEnabled', [enabled]);
}

exports.setAdvertiserIDCollectionEnabled = function (enabled, s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'setAdvertiserIDCollectionEnabled', [enabled]);
}

exports.setAdvertiserTrackingEnabled = function (enabled, s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'setAdvertiserTrackingEnabled', [enabled]);
}

exports.logEvent = function (name, params, valueToSum, s, f) {
  // Prevent NSNulls getting into iOS, messes up our [command.argument count]
  if (!params && !valueToSum) {
    exec(s, f, 'FacebookConnectPlugin', 'logEvent', [name])
  } else if (params && !valueToSum) {
    exec(s, f, 'FacebookConnectPlugin', 'logEvent', [name, params])
  } else if (params && valueToSum) {
    exec(s, f, 'FacebookConnectPlugin', 'logEvent', [name, params, valueToSum])
  } else {
    f('Invalid arguments')
  }
}

exports.logPurchase = function (value, currency, params, s, f) {
  if (typeof params === 'function') {
    s = params;
    f = s;
    params = undefined;
  }
  if (!params) {
    exec(s, f, 'FacebookConnectPlugin', 'logPurchase', [value, currency])
  } else {
    exec(s, f, 'FacebookConnectPlugin', 'logPurchase', [value, currency, params])
  }
}

exports.getAccessToken = function (s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'getAccessToken', [])
}

exports.logout = function (s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'logout', [])
}

exports.getCurrentProfile = function (s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'getCurrentProfile', [])
}

exports.api = function (graphPath, permissions, httpMethod, s, f) {
  permissions = permissions || []
  if (typeof httpMethod === 'function') {
    s = httpMethod;
    f = s;
    httpMethod = undefined;
  }
  if (httpMethod) {
    httpMethod = httpMethod.toUpperCase();
    if (httpMethod != 'POST' && httpMethod != 'DELETE') {
      httpMethod = undefined;
    }
  }
  if (!httpMethod) {
    exec(s, f, 'FacebookConnectPlugin', 'graphApi', [graphPath, permissions])
  } else {
    exec(s, f, 'FacebookConnectPlugin', 'graphApi', [graphPath, permissions, httpMethod])
  }
}

exports.getDeferredApplink = function (s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'getDeferredApplink', [])
}

exports.activateApp = function (s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'activateApp', [])
}
