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

  var FACEBOOK_IOS_SDK_VERSION

  if(process.argv.join("|").indexOf("FACEBOOK_IOS_SDK_VERSION=") > -1) {
  	FACEBOOK_IOS_SDK_VERSION = process.argv.join("|").match(/FACEBOOK_IOS_SDK_VERSION=(.*?)(\||$)/)[1]
  } else {
  	FACEBOOK_IOS_SDK_VERSION = getPreferenceValue("FACEBOOK_IOS_SDK_VERSION")
  }
  
  if(!FACEBOOK_IOS_SDK_VERSION) {
    FACEBOOK_IOS_SDK_VERSION = '9.1.0'
  }

  var podfilePath = './platforms/ios/Podfile'

  var updatePodfileContent = function () {
    fs.stat(podfilePath, function (error, stat) {
      if(error) {
        return
      }

      var podfileContent = fs.readFileSync(podfilePath, 'utf8')

      podfileContent = podfileContent.replace(/\$FACEBOOK_IOS_SDK_VERSION/g, FACEBOOK_IOS_SDK_VERSION)

      fs.writeFileSync(podfilePath, podfileContent, 'utf8')
    })
  }

  updatePodfileContent()
}