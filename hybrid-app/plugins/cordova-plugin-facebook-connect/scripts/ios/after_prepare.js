'use strict';

var fs = require('fs');

module.exports = function (context) {
  var getPreferenceValueFromConfig = function (config, name) {
      var value = config.match(new RegExp('name="' + name + '" value="(.*?)"', "i"))
      if(value && value[1]) {
          return value[1]
      } else {
          return null
      }
  }

  var getPreferenceValueFromPackageJson = function (packageJson, name) {
      var value = packageJson.match(new RegExp('"' + name + '":\\s"(.*?)"', "i"))
      if(value && value[1]) {
          return value[1]
      } else {
          return null
      }
  }
  
  var getPreferenceValue = function (name) {
      var config = fs.readFileSync("config.xml").toString()
      var preferenceValue = getPreferenceValueFromConfig(config, name)
      if(!preferenceValue) {
        var packageJson = fs.readFileSync("package.json").toString()
        preferenceValue = getPreferenceValueFromPackageJson(packageJson, name)
      }
      return preferenceValue
  }

  var FACEBOOK_URL_SCHEME_SUFFIX = ' '

  if(process.argv.join("|").indexOf("FACEBOOK_URL_SCHEME_SUFFIX=") > -1) {
  	FACEBOOK_URL_SCHEME_SUFFIX = process.argv.join("|").match(/FACEBOOK_URL_SCHEME_SUFFIX=(.*?)(\||$)/)[1]
  } else {
  	FACEBOOK_URL_SCHEME_SUFFIX = getPreferenceValue("FACEBOOK_URL_SCHEME_SUFFIX")
  }

  if(FACEBOOK_URL_SCHEME_SUFFIX === ' ') {
    FACEBOOK_URL_SCHEME_SUFFIX = ''
  }

  var FACEBOOK_AUTO_LOG_APP_EVENTS = 'true'
  
  if(process.argv.join("|").indexOf("FACEBOOK_AUTO_LOG_APP_EVENTS=") > -1) {
  	FACEBOOK_AUTO_LOG_APP_EVENTS = process.argv.join("|").match(/FACEBOOK_AUTO_LOG_APP_EVENTS=(.*?)(\||$)/)[1]
  } else {
  	FACEBOOK_AUTO_LOG_APP_EVENTS = getPreferenceValue("FACEBOOK_AUTO_LOG_APP_EVENTS")
  }
  
  if(typeof FACEBOOK_AUTO_LOG_APP_EVENTS == 'string' && FACEBOOK_AUTO_LOG_APP_EVENTS.toLowerCase() == 'false') {
    FACEBOOK_AUTO_LOG_APP_EVENTS = 'false'
  } else {
    FACEBOOK_AUTO_LOG_APP_EVENTS = 'true'
  }

  var FACEBOOK_ADVERTISER_ID_COLLECTION = 'true'

  if(process.argv.join("|").indexOf("FACEBOOK_ADVERTISER_ID_COLLECTION=") > -1) {
    FACEBOOK_ADVERTISER_ID_COLLECTION = process.argv.join("|").match(/FACEBOOK_ADVERTISER_ID_COLLECTION=(.*?)(\||$)/)[1]
  } else {
    FACEBOOK_ADVERTISER_ID_COLLECTION = getPreferenceValue("FACEBOOK_ADVERTISER_ID_COLLECTION")
  }

  if(typeof FACEBOOK_ADVERTISER_ID_COLLECTION == 'string' && FACEBOOK_ADVERTISER_ID_COLLECTION.toLowerCase() == 'false') {
    FACEBOOK_ADVERTISER_ID_COLLECTION = 'false'
  } else {
    FACEBOOK_ADVERTISER_ID_COLLECTION = 'true'
  }

  var getPlistPath = function () {
    var common = context.requireCordovaModule('cordova-common'), 
    util = context.requireCordovaModule('cordova-lib/src/cordova/util'), 
    projectName = new common.ConfigParser(util.projectConfig(util.isCordova())).name(), 
    plistPath = './platforms/ios/' + projectName + '/' + projectName + '-Info.plist'
    return plistPath
  }

  var plistPath = getPlistPath()

  var updatePlistContent = function () {
    fs.stat(plistPath, function (error, stat) {
      if(error) {
        return
      }

      var plistContent = fs.readFileSync(plistPath, 'utf8')

      plistContent = plistContent.replace(/FACEBOOK_URL_SCHEME_SUFFIX_PLACEHOLDER/g, FACEBOOK_URL_SCHEME_SUFFIX)

      if(plistContent.indexOf('<key>FacebookAutoLogAppEventsEnabled</key>') == -1) {
        plistContent = plistContent.replace('<key>FacebookAutoLogAppEventsEnabled_PLACEHOLDER</key>', '<key>FacebookAutoLogAppEventsEnabled</key>').replace('<string>FACEBOOK_AUTO_LOG_APP_EVENTS_PLACEHOLDER</string>', '<' + FACEBOOK_AUTO_LOG_APP_EVENTS + ' />')
      } else {
        plistContent = plistContent.replace('<key>FacebookAutoLogAppEventsEnabled_PLACEHOLDER</key>', '').replace('<string>FACEBOOK_AUTO_LOG_APP_EVENTS_PLACEHOLDER</string>', '')
      }

      if(plistContent.indexOf('<key>FacebookAdvertiserIDCollectionEnabled</key>') == -1) {
        plistContent = plistContent.replace('<key>FacebookAdvertiserIDCollectionEnabled_PLACEHOLDER</key>', '<key>FacebookAdvertiserIDCollectionEnabled</key>').replace('<string>FACEBOOK_ADVERTISER_ID_COLLECTION_PLACEHOLDER</string>', '<' + FACEBOOK_ADVERTISER_ID_COLLECTION + ' />')
      } else {
        plistContent = plistContent.replace('<key>FacebookAdvertiserIDCollectionEnabled_PLACEHOLDER</key>', '').replace('<string>FACEBOOK_ADVERTISER_ID_COLLECTION_PLACEHOLDER</string>', '')
      }

      fs.writeFileSync(plistPath, plistContent, 'utf8')
    })
  }

  updatePlistContent()
}