# cordova-plugin-facebook-connect

> Use Facebook SDK in Cordova projects

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Sample repo](#sample-repo)
- [Compatibility](#compatibility)
- [Facebook SDK](#facebook-sdk)
- [API](#api)

## Installation

See npm package for versions - https://www.npmjs.com/package/cordova-plugin-facebook-connect

Make sure you've registered your Facebook app with Facebook and have an `APP_ID` [https://developers.facebook.com/apps](https://developers.facebook.com/apps).

```bash
$ cordova plugin add cordova-plugin-facebook-connect --save --variable APP_ID="123456789" --variable APP_NAME="myApplication"
```

As the `APP_NAME` is used as a string in XML files, if your app name contains any special characters like "&", make sure you escape them, e.g. "&amp;".

If you need to change your `APP_ID` after installation, it's recommended that you remove and then re-add the plugin as above. Note that changes to the `APP_ID` value in your `config.xml` file will *not* be propagated to the individual platform builds.

### Installation Guides

- [iOS Guide](docs/ios/README.md)

- [Android Guide](docs/android/README.md)

- [Browser Guide](docs/browser/README.md)

- [Troubleshooting Guide | F.A.Q.](docs/TROUBLESHOOTING.md)

## Usage

This is a fork of the [official plugin for Facebook](https://github.com/Wizcorp/phonegap-facebook-plugin/) in Apache Cordova that implements the latest Facebook SDK. Unless noted, this is a drop-in replacement. You don't have to replace your client code.

The Facebook plugin for [Apache Cordova](http://cordova.apache.org/) allows you to use the same JavaScript code in your Cordova application as you use in your web application.

## Sample Repo

If you are looking to test the plugin, would like to reproduce a bug or build issues, there is a demo project for such purpose: [cordova-plugin-facebook-connect-lab](https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect-lab).

## Compatibility

  * Cordova >= 5.0.0
  * cordova-android >= 7.0.0
  * cordova-ios >= 5.0.0
  * cordova-browser >= 3.6

## Facebook SDK

This plugin use the SDKs provided by Facebook. More information about these in their documentation for [iOS](https://developers.facebook.com/docs/ios/) or [Android](https://developers.facebook.com/docs/android/)

### Facebook SDK version

This plugin will always be released for iOS and for Android with a synchronized usage of the Facebook SDKs.

### Graph API version

Please note that this plugin itself does not specify which Graph API version is used. The Graph API version is set by the Facebook SDK for iOS and Android (see [Facebook documentation about versioning](https://developers.facebook.com/docs/apps/versions/))

## API

### Login

`facebookConnectPlugin.login(Array strings of permissions, Function success, Function failure)`

Success function returns an Object like:

	{
		status: "connected",
		authResponse: {
			session_key: true,
			accessToken: "<long string>",
			expiresIn: 5183979,
			sig: "...",
			secret: "...",
			userID: "634565435"
		}
	}

Failure function returns an error String.

### Limited Login (iOS Only)

`facebookConnectPlugin.loginWithLimitedTracking(Array strings of permissions, String nonce, Function success, Function failure)`

Success function returns an Object like:

	{
		status: "connected",
		authResponse: {
			authenticationToken: "<long string>",
			nonce: "foo",
			userID: "634565435"
		}
	}

Failure function returns an error String.

See the [Facebook Developer documentation](https://developers.facebook.com/docs/facebook-login/limited-login/ios/) for more details.

### Logout

`facebookConnectPlugin.logout(Function success, Function failure)`

### Get Current Profile

`facebookConnectPlugin.getCurrentProfile(Function success, Function failure)`

Success function returns an Object like:

	{
		userID: "634565435",
		firstName: "Woodrow",
		lastName: "Derenberger"
	}

**Note: The profile object contains a different set of properties when using Limited Login on iOS.**

Failure function returns an error String.

### Check permissions

`facebookConnectPlugin.checkHasCorrectPermissions(Array strings of permissions, Function success, Function failure)`

Success function returns a success string if all passed permissions are granted.

Failure function returns an error String if any passed permissions are not granted.

### Get Status

`facebookConnectPlugin.getLoginStatus(Boolean force, Function success, Function failure)`

Setting the force parameter to true clears any previously cached status and fetches fresh data from Facebook.

Success function returns an Object like:

```
{
	authResponse: {
		userID: "12345678912345",
		accessToken: "kgkh3g42kh4g23kh4g2kh34g2kg4k2h4gkh3g4k2h4gk23h4gk2h34gk234gk2h34AndSoOn",
		session_Key: true,
		expiresIn: "5183738",
		sig: "..."
	},
	status: "connected"
}
```

For more information see: [Facebook Documentation](https://developers.facebook.com/docs/reference/javascript/FB.getLoginStatus)

### Check if data access is expired

`facebookConnectPlugin.isDataAccessExpired(Function success, Function failure)`

Success function returns a String indicating if data access is expired.

Failure function returns an error String.

For more information see: [Facebook Documentation](https://developers.facebook.com/docs/facebook-login/auth-vs-data/#testing-when-access-to-user-data-expires)

### Reauthorize data access

`facebookConnectPlugin.reauthorizeDataAccess(Function success, Function failure)`

Success function returns an Object like:

	{
		status: "connected",
		authResponse: {
			session_key: true,
			accessToken: "<long string>",
			expiresIn: 5183979,
			sig: "...",
			secret: "...",
			userID: "634565435"
		}
	}

Failure function returns an error String.

For more information see: [Facebook Documentation](https://developers.facebook.com/docs/facebook-login/auth-vs-data/#data-access-expiration)

### Show a Dialog

`facebookConnectPlugin.showDialog(Object options, Function success, Function failure)`

Example options -
Share Dialog:

	{
		method: "share",
		href: "http://example.com",
		hashtag: '#myHashtag',
		share_feedWeb: true, // iOS only
	}

#### iOS

The default dialog mode is [`FBSDKShareDialogModeAutomatic`](https://developers.facebook.com/docs/reference/ios/current/constants/FBSDKShareDialogMode/). You can share that by adding a specific dialog mode parameter. The available share dialog modes are: `share_sheet`, `share_feedBrowser`, `share_native` and `share_feedWeb`. [Read more about share dialog modes](https://developers.facebook.com/docs/reference/ios/current/constants/FBSDKShareDialogMode/)

Game request:

	{
		method: "apprequests",
		message: "Come on man, check out my application.",
		data: data,
		title: title,
		actionType: 'askfor',
		objectID: 'YOUR_OBJECT_ID', 
		filters: 'app_non_users'
	}

Send Dialog:

	{
		method: "send",
		link: "http://example.com"
	}


For options information see: [Facebook share dialog documentation](https://developers.facebook.com/docs/sharing/reference/share-dialog) [Facebook send dialog documentation](https://developers.facebook.com/docs/sharing/reference/send-dialog)

Success function returns an Object or `from` and `to` information when doing `apprequest`.
Failure function returns an error String.

### The Graph API

`facebookConnectPlugin.api(String requestPath, Array permissions, String httpMethod, Function success, Function failure)`

Allows access to the Facebook Graph API. This API allows for additional permission because, unlike login, the Graph API can accept multiple permissions.

Example permissions:

	["public_profile", "user_birthday"]

`httpMethod` is optional and defaults to "GET".

Success function returns an Object.

Failure function returns an error String.

**Note: "In order to make calls to the Graph API on behalf of a user, the user has to be logged into your app using Facebook login, and you must include the access_token parameter in your requestPath. "**

For more information see:

- Calling the Graph API - [https://developers.facebook.com/docs/ios/graph](https://developers.facebook.com/docs/ios/graph)
- Graph Explorer - [https://developers.facebook.com/tools/explorer](https://developers.facebook.com/tools/explorer)
- Graph API - [https://developers.facebook.com/docs/graph-api/](https://developers.facebook.com/docs/graph-api/)

### Events

App events allow you to understand the makeup of users engaging with your app, measure the performance of your Facebook mobile app ads, and reach specific sets of your users with Facebook mobile app ads.

- [iOS] [https://developers.facebook.com/docs/ios/app-events](https://developers.facebook.com/docs/ios/app-events)
- [Android] [https://developers.facebook.com/docs/android/app-events](https://developers.facebook.com/docs/android/app-events)
- [JS] Does not have an Events API, so the plugin functions are empty and will return an automatic success

Activation events are automatically tracked for you in the plugin.

Events are listed on the [insights page](https://www.facebook.com/insights/)

#### Log an Event

`logEvent(String name, Object params, Number valueToSum, Function success, Function failure)`

- **name**, name of the event
- **params**, extra data to log with the event (is optional)
- **valueToSum**, a property which is an arbitrary number that can represent any value (e.g., a price or a quantity). When reported, all of the valueToSum properties will be summed together. For example, if 10 people each purchased one item that cost $10 (and passed in valueToSum) then they would be summed to report a number of $100. (is optional)

#### Log a Purchase

`logPurchase(Number value, String currency, Object params, Function success, Function failure)`

**NOTE:** Both `value` and `currency` are required. The currency specification is expected to be an [ISO 4217 currency code](http://en.wikipedia.org/wiki/ISO_4217). `params` is optional.

#### Manually log activation events

`activateApp(Function success, Function failure)`

### Login

In your `onDeviceReady` event add the following

```js
var fbLoginSuccess = function (userData) {
  console.log("UserInfo: ", userData);
}

facebookConnectPlugin.login(["public_profile"], fbLoginSuccess,
  function loginError (error) {
    console.error(error)
  }
);
```

### Get Access Token

If you need the Facebook access token (for example, for validating the login on server side), do:
```js
var fbLoginSuccess = function (userData) {
  console.log("UserInfo: ", userData);
  facebookConnectPlugin.getAccessToken(function(token) {
    console.log("Token: " + token);
  });
}

facebookConnectPlugin.login(["public_profile"], fbLoginSuccess,
  function (error) {
    console.error(error)
  }
);
```

### Get Status and Post-to-wall

For a more instructive example change the above `fbLoginSuccess` to;

```js
var fbLoginSuccess = function (userData) {
  console.log("UserInfo: ", userData);
  facebookConnectPlugin.getLoginStatus(false, function onLoginStatus (status) {
    console.log("current status: ", status);
    facebookConnectPlugin.showDialog({
      method: "share"
    }, function onShareSuccess () {
      console.log("Posted.");
    });
  });
};
```

### Getting a User's Birthday

Using the graph api this is a very simple task:

```js
facebookConnectPlugin.api("me/?fields=id,birthday&access_token=" + myAccessToken, ["user_birthday"],
  function onSuccess (result) {
    console.log("Result: ", result);
    /* logs:
      {
        "id": "000000123456789",
        "birthday": "01/01/1985"
      }
    */
  }, function onError (error) {
    console.error("Failed: ", error);
  }
);
```

## Hybrid Mobile App Events

Starting from Facebook SDK v4.34 for both iOS and Android, there is a new way of converting pixel events into mobile app events. For more information: [https://developers.facebook.com/docs/app-events/hybrid-app-events/](https://developers.facebook.com/docs/app-events/hybrid-app-events/)

In order to enable this feature in your Cordova app, please set the *FACEBOOK_HYBRID_APP_EVENTS* variable to "true" (default is false):

```bash
$ cordova plugin add cordova-plugin-facebook-connect --save --variable APP_ID="123456789" --variable APP_NAME="myApplication" --variable FACEBOOK_HYBRID_APP_EVENTS="true"
```

Please check [this repo](https://github.com/msencer/fb_hybrid_app_events_sample) for an example app using this feature.

**NOTE(iOS):** This feature only works with WKWebView so if using an old version of Cordova, an additional plugin (e.g cordova-plugin-wkwebview-engine) is needed.

## GDPR Compliance

This Plugin supports Facebook's [GDPR Compliance](https://developers.facebook.com/docs/app-events/gdpr-compliance/) **Delaying Automatic Event Collection**.

In order to enable this feature in your Cordova app, please set the *FACEBOOK_AUTO_LOG_APP_EVENTS* variable to "false" (default is true).

```bash
$ cordova plugin add cordova-plugin-facebook-connect --save --variable APP_ID="123456789" --variable APP_NAME="myApplication" --variable FACEBOOK_AUTO_LOG_APP_EVENTS="false"
```

Then, re-enable auto-logging after an end User provides consent by calling the `setAutoLogAppEventsEnabled` method and set it to true.

```js
facebookConnectPlugin.setAutoLogAppEventsEnabled(true, function() {
  console.log('setAutoLogAppEventsEnabled success');
}, function() {
  console.error('setAutoLogAppEventsEnabled failure');
});
```

## Collection of Advertiser IDs

To disable collection of `advertiser-id`, please set the *FACEBOOK_ADVERTISER_ID_COLLECTION* variable to "false" (default is true).

```bash
$ cordova plugin add cordova-plugin-facebook-connect --save --variable APP_ID="123456789" --variable APP_NAME="myApplication" --variable FACEBOOK_ADVERTISER_ID_COLLECTION="false"
```

Then, re-enable collection by calling the `setAdvertiserIDCollectionEnabled` method and set it to true.

```js
facebookConnectPlugin.setAdvertiserIDCollectionEnabled(true, function() {
  console.log('setAdvertiserIDCollectionEnabled success');
}, function() {
  console.error('setAdvertiserIDCollectionEnabled failure');
});
```

## Advertiser Tracking Enabled (iOS Only)

To enable advertiser tracking, call the `setAdvertiserTrackingEnabled` method.

```js
facebookConnectPlugin.setAdvertiserTrackingEnabled(true, function() {
  console.log('setAdvertiserTrackingEnabled success');
}, function() {
  console.error('setAdvertiserTrackingEnabled failure');
});
```

See the [Facebook Developer documentation](https://developers.facebook.com/docs/app-events/guides/advertising-tracking-enabled/) for more details.

## URL Suffixes for Multiple Apps

When using the same Facebook app with multiple iOS apps, use the *FACEBOOK_URL_SCHEME_SUFFIX* variable to set a unique URL Suffix for each app. This ensures that Facebook redirects back to the correct app after closing the login window.

```bash
$ cordova plugin add cordova-plugin-facebook-connect --save --variable APP_ID="123456789" --variable APP_NAME="myApplication" --variable FACEBOOK_URL_SCHEME_SUFFIX="mysecondapp"
```
