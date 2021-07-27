<a name="2.3.0"></a>
# [2.3.0](https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect/releases/tag/v2.3.0) (2021-04-21)

## Features

* Updated the Facebook SDK to 9.1.1 for Android and 9.2.0 for iOS
* Added new `loginWithLimitedTracking` method to allow for using Limited Login on iOS (closes [#51](https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect/issues/51))
* Added new `getCurrentProfile` method to support retrieving profile information for the currently logged in user

<a name="2.2.0"></a>
# [2.2.0](https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect/releases/tag/v2.2.0) (2021-04-06)

## Features

* Updated the Facebook SDK to 9.1.0 for Android and iOS

## Bug Fixes

* Added a hook to allow variables to be replaced in Podfile when using cordova-ios 5 (closes [#52](https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect/issues/52))

## Documentation

* Updated README to make it clear that an access token must be included when using the `api` method (closes [#50](https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect/issues/50))

<a name="2.1.0"></a>
# [2.1.0](https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect/releases/tag/v2.1.0) (2021-03-06)

## Features

* Updated the `getLoginStatus` method to add the `force` parameter, which allows for fetching fresh data from Facebook rather than using previously cached login information (closes [#47](https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect/issues/47))
* Added new `isDataAccessExpired` and `reauthorizeDataAccess` methods to allow for detecting when data access has expired, and to then request reauthorization from the user (closes [#46](https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect/issues/46))

## Bug Fixes

* Updated the `setAutoLogAppEventsEnabled`, `setAdvertiserIDCollectionEnabled`, and `setAdvertiserTrackingEnabled` methods on iOS to properly handle booleans passed in the `enabled` argument
* Updated the `getAccessToken` and `api` methods on the browser platform to fix an issue that caused errors when the plugin was used before the Facebook SDK was available

<a name="2.0.0"></a>
# [2.0.0](https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect/releases/tag/v2.0.0) (2021-02-25)

## Breaking Changes

* Removed the deprecated `browserInit` method on the browser platform; this method which was previously a no-op is no longer defined (closes [#26](https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect/issues/26))
* Dropped support for cordova-android 6 and below (closes [#23](https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect/issues/23))
* Dropped support for cordova-ios 4 and below (closes [#24](https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect/issues/24))

## Features

* Updated the Facebook SDK to 9.0.0 for Android and 9.0.1 for iOS (closes [#15](https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect/issues/15))
* Updated the `login` method to remove unnecessary checks for read/publish permissions; the plugin will no longer prevent developers from requesting read and publish permissions at the same time, and will rely on the Facebook SDK's own internal logic instead [#34](https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect/pull/34)
* Updated the `showDialog` method to remove the deprecated caption, description, and picture properties (closes [#28](https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect/issues/28))
* Added a new `setAdvertiserTrackingEnabled` method to allow for enabling advertiser tracking on iOS 14+

## Bug Fixes

* Updated the `getAccessToken` method to be consistent on all platforms and return the error message "Session not open." if the user has no current access token
* Updated the `logout` method to be consistent on all platforms and call the success callback even if the user has no current access token (closes [#20](https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect/issues/20))

## Documentation

* Updated README to remove outdated information that suggested that Facebook login uses the native Facebook app, which is no longer true on iOS ([#30](https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect/issues/30))

<a name="1.2.1"></a>
# [1.2.1](https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect/releases/tag/v1.2.1) (2021-02-18)

## Bug Fixes

* Fixed an issue that caused the `setAdvertiserIDCollectionEnabled` method to be undefined (closes [#36](https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect/issues/36))

<a name="1.2.0"></a>
# [1.2.0](https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect/releases/tag/v1.2.0) (2021-02-05)

## Features

* Added the `FACEBOOK_IOS_SDK_VERSION` preference to override the default iOS SDK version
* Added the `FACEBOOK_ADVERTISER_ID_COLLECTION` preference and a new `setAdvertiserIDCollectionEnabled` method to allow for disabling collection of `advertiser-id` (closes [#22](https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect/issues/22))
* Updated the `checkHasCorrectPermissions` method so that it is now supported on all platforms (closes [#25](https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect/issues/25))

## Bug Fixes

* Updated the `activateApp` method to use the callbacks passed to it (closes [#18](https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect/issues/18))
* Fixed an issue that would cause the `showDialog` method to fail on iOS if the `method` property was set to "apprequests" but the `actionType` property was not defined; `actionType` is now optional on all platforms (closes [#29](https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect/issues/29))

## Documentation

* Updated README to include `objectID` property in example configuration object for the `checkHasCorrectPermissions` method; `objectID` is required by the Facebook SDK if `actionType` is non-null (and vice versa)

<a name="1.1.1"></a>
# [1.1.1](https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect/releases/tag/v1.1.1) (2021-01-27)

## Bug Fixes

* Fixed an issue that caused standard events, e.g. App Launches, to be automatically logged on iOS despite `FACEBOOK_AUTO_LOG_APP_EVENTS` being set to "false" (closes [#16](https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect/issues/16))

<a name="1.1.0"></a>
# [1.1.0](https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect/releases/tag/v1.1.0) (2021-01-21)

## Features

* Added the `FACEBOOK_URL_SCHEME_SUFFIX` preference to allow for specifying a unique URL Suffix for cases where multiple apps use the same Facebook app (closes [#3](https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect/issues/3))
* Added the `FACEBOOK_AUTO_LOG_APP_EVENTS` preference and a new `setAutoLogAppEventsEnabled` method to allow for disabling automatic event collection, an important feature for GDPR compliance (closes [#7](https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect/issues/7))
* Updated the `api` method to allow for optionally passing an httpMethod (one of "POST" or "DELETE") in Graph API requests (closes [#10](https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect/issues/10))
* Updated the `logPurchase` method to accept an optional argument for parameters (closes [#6](https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect/issues/6))

<a name="1.0.2"></a>
# [1.0.2](https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect/releases/tag/v1.0.2) (2021-01-16)

## Bug Fixes

* Updated the plugin's `api` method to ensure that Graph API requests on iOS work as expected with the most recent version of the Facebook SDK (closes [#12](https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect/issues/12))

<a name="1.0.1"></a>
# [1.0.1](https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect/releases/tag/v1.0.1) (2021-01-08)

## Bug Fixes

* Updated browser after_prepare hook to properly treat APP_ID as a string (closes [#4](https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect/issues/4))

## Documentation

* Updated README to note that special characters such as ampersands must be escaped to avoid build errors (closes [#5](https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect/issues/5))

<a name="1.0.0"></a>
# [1.0.0](https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect/releases/tag/v1.0.0) (2021-01-03)

v1.0.0 is the initial release of the plugin, created as a fork of the now-deprecated [cordova-plugin-facebook4](https://github.com/jeduan/cordova-plugin-facebook4). Kudos to @jeduan and @peterpeterparker for their years of work maintaining that plugin!

## Features

* Updated the Facebook iOS SDK to 8.2.0
* Updated the Facebook Android SDK to 8.1.0
* Updated the Facebook JavaScript SDK used by the browser platform to v9.0
* Added the `FACEBOOK_BROWSER_SDK_VERSION` preference to override the default JavaScript SDK version

## Bug Fixes

* Fixed an issue that previously caused a loop when logging into Facebook on iOS
* Removed all references to Open Graph Stories, which were [deprecated by Facebook in 2019](https://developers.facebook.com/docs/sharing/opengraph)
* Updated plugin.xml to only run after_prepare hook on the browser platform
* Updated browser after_prepare hook to get preferences including `APP_ID` and the new `FACEBOOK_BROWSER_SDK_VERSION` from package.json