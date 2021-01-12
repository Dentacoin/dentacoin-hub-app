console.log("( ͡° ͜ʖ ͡°) I see you. 1");

var default_error_message = 'Something went wrong. Please try again later or write a message to admin@dentacoin.com with description of the problem.';
var allowed_imgs_extensions = ['png', 'jpg', 'jpeg'/*, 'gif', 'svg'*/];
var is_hybrid;
var loadedLibs = {};
var civic_iframe_removedEventLoaded = false;

$(document).ready(function() {

});

$(window).on('beforeunload', function() {

});

$(window).on("load", function() {

});

$(window).on('resize', function() {

});

$(window).on('scroll', function() {

});

window.addEventListener('load', function() {

});

document.addEventListener('deviceready', function() {
    console.log('================= deviceready ===================');

    window.open = cordova.InAppBrowser.open;

    //=================================== internet connection check ONLY for MOBILE DEVICES ===================================

    var networkState = navigator.connection.type;
    var states = {};
    states[Connection.NONE] = 'no-internet';

    if (states[networkState] == 'no-internet') {
        console.log('===== we are offline =====');
        $('header .camping-currently-offline').html('<div class="currently-offline">You are currently offline</div>');
    }

    //event to track whenever device lose internet connection
    document.addEventListener('offline', function(e){
        console.log('===== we are offline =====');
        $('header .camping-currently-offline').html('<div class="currently-offline">You are currently offline</div>');
    }, false);

    //event to track whenever device connect to internet
    document.addEventListener('online', function(e){
        console.log('===== we are online =====');
        $('header .camping-currently-offline').html('');
    }, false);

    //=================================== /internet connection check ONLY for MOBILE DEVICES ===================================

    /*
    cordova plugin add cordova-plugin-intent-list
    navigator.IntentList.getList(function(applist) {
        console.log(applist, 'applist');
    }, function(errorMesssage) {
        console.log(errorMesage);
    });*/

    /*
    cordova-plugin-local-notification
    cordova.plugins.notification.local.schedule({
        title: 'My first notification',
        text: 'Thats pretty easy...',
        foreground: true
    });*/

    window.FirebasePlugin.hasPermission(function(hasPermission) {
        console.log(hasPermission, 'hasPermission');
        if (basic.property_exists(hasPermission, 'isEnabled') && !hasPermission.isEnabled) {
            // ask for push notifications permission
            window.FirebasePlugin.grantPermission();
        } else{
            console.log('Permission already granted');
        }
    });

    window.FirebasePlugin.getToken(function(token) {
        // save this server-side and use it to push notifications to this device
        localStorage.setItem('mobile_device_id', token);
    }, function(error) {
        console.error(error);
    });

    /*cordova.plugins.firebase.messaging.getToken().then(function(token) {
        console.log("Got device token: ", token);
    });*/

    /*var push = PushNotification.init({
        android: {}
    });

    console.log(push, 'push');

    push.on('registration', function(data) {
        // data.registrationId
        console.log(data.registrationId, 'data.registrationId');
    });

    push.on('notification', function(data) {
        alert("Title:" + data.title + " Message:" + data.message);
    });

    push.on('error', function(e) {
        console.log(e.message, 'e.message')
    });*/
}, false);

function bindGoogleAlikeButtonsEvents() {
    //google alike style for label/placeholders
    $('body').on('click', '.custom-google-label-style label', function() {
        $(this).addClass('active-label');
        if ($('.custom-google-label-style').attr('data-input-colorful-border') == 'true') {
            $(this).parent().find('input').addClass('colorful-border');
        }
    });

    $('body').on('keyup change focusout', '.custom-google-label-style input', function() {
        var value = $(this).val().trim();
        if (value.length) {
            $(this).closest('.custom-google-label-style').find('label').addClass('active-label');
            if ($(this).closest('.custom-google-label-style').attr('data-input-colorful-border') == 'true') {
                $(this).addClass('colorful-border');
            }
        } else {
            $(this).closest('.custom-google-label-style').find('label').removeClass('active-label');
            if ($(this).closest('.custom-google-label-style').attr('data-input-colorful-border') == 'true') {
                $(this).removeClass('colorful-border');
            }
        }
    });
}
bindGoogleAlikeButtonsEvents();

var clickingOutsideSearchResultInit = true;

// includes logic separated by pages
var projectData = {
    pages: {
        dentist: {
            basicAdminPanel: function() {
                $('body').addClass('platform-background');
                $('.dentist-logo-btn label[for="dentist-logo"]').html('<svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 90 69.2" style="enable-background:new 0 0 90 69.2;" xml:space="preserve"><style type="text/css">.st0{fill:#8E3146;}</style><metadata><sfw><slices/><sliceSourceBounds bottomLeftOrigin="true" height="69.2" width="90" x="5" y="40.4"/></sfw></metadata><path class="st0 svg-platform-fill-important" d="M7.6,69.2h74.9c4.2,0,7.6-3.4,7.6-7.6V18.8c0-4.2-3.4-7.6-7.6-7.6H71.3c-3.9,0-7.3-2.7-8.1-6.5 c-0.6-2.7-3-4.7-5.8-4.7H32.6c-2.8,0-5.2,1.9-5.8,4.7c-0.8,3.8-4.2,6.5-8.1,6.5H7.6c-4.2,0-7.6,3.4-7.6,7.6c0,0,0,0,0,0v42.9 C0,65.8,3.4,69.2,7.6,69.2C7.6,69.2,7.6,69.2,7.6,69.2z M78.4,16.9c2.6,0,4.8,2.1,4.8,4.8c0,2.6-2.1,4.8-4.8,4.8 c-2.6,0-4.8-2.1-4.8-4.8c0,0,0,0,0,0C73.6,19.1,75.7,16.9,78.4,16.9C78.4,16.9,78.4,16.9,78.4,16.9z M45,15.5 c12.5,0,22.7,10.2,22.7,22.7S57.5,60.9,45,60.9S22.3,50.8,22.3,38.2c0,0,0,0,0,0C22.3,25.7,32.5,15.5,45,15.5L45,15.5z M27.3,38.2 c0-9.8,7.9-17.7,17.7-17.7s17.7,7.9,17.7,17.7S54.8,55.9,45,55.9h0C35.2,55.9,27.3,48,27.3,38.2z"/></svg>');
                $('.dentist-logo-wrapper #dentist-logo').on('change', function() {
                    projectData.general_logic.readURL(this, function(e, filename) {
                        $('.dentist-logo-wrapper').addClass('with-logo').find('img').remove();
                        $('.dentist-logo-wrapper').prepend('<img src="' + e.target.result + '" alt="Dentist logo"/>');

                        //set file input
                        $('.dentist-logo-wrapper  #dentist-logo-media').val(e.target.result);
                        $('.dentist-logo-wrapper  #dentist-logo-media-name').val(filename);
                    }, function() {
                        $('.dentist-logo-wrapper').removeClass('with-logo').find('img').remove();

                        $('.dentist-logo-wrapper  #dentist-logo-media').val('');
                        $('.dentist-logo-wrapper  #dentist-logo-media-name').val('');
                    });
                });

                // refreshing dentist data from DB
                function buildDentistData(dentist_data, build_logo_and_titles, edit_mode) {
                    console.log('buildDentistData');
                    if (build_logo_and_titles != undefined) {
                        // setting up dentist logo
                        if (dentist_data.data.logo != undefined && dentist_data.data.logo != '' && dentist_data.data.logo != null) {
                            $('.dentist-logo-wrapper').addClass('with-logo').find('img').remove();
                            $('.dentist-logo-wrapper').prepend('<img src="' + dentist_data.data.logo + '" alt="Dentist logo"/>');

                            $('.dentist-logo .hide-in-edit-mode').html('<img src="' + dentist_data.data.logo + '" alt="Dentist logo"/>');
                        }

                        // setting up dentist titles
                        $('.hub-title').attr('data-en', dentist_data.data.hub_title_en).attr('data-de', dentist_data.data.hub_title_de);
                        if ($('.main-content').attr('data-lang') == 'en') {
                            $('.hub-title .title-label').html(dentist_data.data.hub_title_en);
                            $('.hub-title #hub-title').val(dentist_data.data.hub_title_en);
                        } else if ($('.main-content').attr('data-lang') == 'de') {
                            $('.hub-title .title-label').html(dentist_data.data.hub_title_de);
                            $('.hub-title #hub-title').val(dentist_data.data.hub_title_de);
                        }
                    }

                    var apps_html = '';
                    for (var key in dentist_data.data.applications) {
                        var column_class = 'col-xs-4';
                        if (Object.keys(dentist_data.data.applications).length >= 6) {
                            $('.basic-admin-panel-apps-wrapper').removeClass('col-lg-6 col-lg-offset-3');
                            $('.single-app.empty').addClass('col-sm-3');
                            column_class = 'col-xs-4 col-sm-3';
                        } else {
                            $('.basic-admin-panel-apps-wrapper').addClass('col-lg-6 col-lg-offset-3');
                            $('.single-app.empty').removeClass('col-sm-3');
                        }

                        if (dentist_data.data.applications.hasOwnProperty(key)) {
                            var app_title;
                            var app_description;
                            var class_name = '';
                            var removable_class_name = '';
                            var editable_class_name = '';

                            if (dentist_data.data.applications[key].removable) {
                                removable_class_name = ' removable ';
                            }

                            if (hasOwnProperty.call(dentist_data.data.applications[key], 'editable')) {
                                if (dentist_data.data.applications[key].editable) {
                                    editable_class_name = ' editable ';
                                }
                            } else {
                                editable_class_name = ' editable ';
                            }

                            if ($('.main-content').attr('data-lang') == 'en') {
                                if ((dentist_data.data.applications[key].name_en == null && dentist_data.data.applications[key].description_en == null) || (dentist_data.data.applications[key].name_en == '' && dentist_data.data.applications[key].description_en == '')) {
                                    class_name = 'hidden-for-this-lang';
                                }
                            } else if ($('.main-content').attr('data-lang') == 'de') {
                                if ((dentist_data.data.applications[key].name_de == null && dentist_data.data.applications[key].description_de == null) || (dentist_data.data.applications[key].name_de == '' && dentist_data.data.applications[key].description_de == '')) {
                                    class_name = 'hidden-for-this-lang';
                                }
                            }

                            apps_html += '<div class="' + column_class + ' text-center padding-bottom-15 inline-block-top single-app sortable-app '+ removable_class_name + editable_class_name + class_name + '"';
                            if (dentist_data.data.applications[key].default_application_id != null) {
                                apps_html += ' data-default-application-id="'+dentist_data.data.applications[key].default_application_id+'"';
                            }

                            if (dentist_data.data.applications[key].name_en == null) {
                                dentist_data.data.applications[key].name_en = '';
                            }
                            if (dentist_data.data.applications[key].description_en == null) {
                                dentist_data.data.applications[key].description_en = '';
                            }
                            if (dentist_data.data.applications[key].name_de == null) {
                                dentist_data.data.applications[key].name_de = '';
                            }
                            if (dentist_data.data.applications[key].description_de == null) {
                                dentist_data.data.applications[key].description_de = '';
                            }

                            if ($('.main-content').attr('data-lang') == 'en') {
                                app_title = dentist_data.data.applications[key].name_en;
                                app_description = dentist_data.data.applications[key].description_en;
                            } else if ($('.main-content').attr('data-lang') == 'de') {
                                app_title = dentist_data.data.applications[key].name_de;
                                app_description = dentist_data.data.applications[key].description_de;
                            }

                            var edit_delete_actions = '';
                            if (edit_mode != undefined) {
                                edit_delete_actions = '<div class="actions-on-edit"><button type="button" class="edit-app platform-color-important"><i class="fa fa-pencil" aria-hidden="true"></i></button><button type="button" class="delete-app platform-color-important"><i class="fa fa-times" aria-hidden="true"></i></button></div>';
                            }

                            var imageHtml = ' data-id="'+dentist_data.data.applications[key].id+'" data-removable="'+dentist_data.data.applications[key].removable+'" data-name-en="'+dentist_data.data.applications[key].name_en+'" data-name-de="'+dentist_data.data.applications[key].name_de+'" data-description-en="'+dentist_data.data.applications[key].description_en+'" data-description-de="'+dentist_data.data.applications[key].description_de+'" data-media="'+dentist_data.data.applications[key].media+'" data-url="'+dentist_data.data.applications[key].url+'"><a href="'+dentist_data.data.applications[key].url+'" data-stop-linking-on-edit="'+dentist_data.data.applications[key].url+'" target="_blank"><div class="app-wrapper platform-border-color-important">'+edit_delete_actions+'<figure itemscope="" itemtype="http://schema.org/ImageObject"><img alt="" class="width-100 app-media" itemprop="contentUrl" src="'+dentist_data.data.applications[key].media+'"/></figure><div class="platform-text-color fs-18 fs-xs-15 padding-top-5 calibri-bold app-name">'+app_title+'</div><div class="platform-text-color fs-16 fs-xs-14 padding-top-5 line-height-20 app-description">'+app_description+'</div></div></a></div>';
                            if (hasOwnProperty.call(dentist_data.data.applications[key], 'resource_type')) {
                                if (dentist_data.data.applications[key].resource_type == 'svg') {
                                    apps_html += ' data-id="'+dentist_data.data.applications[key].id+'" data-removable="'+dentist_data.data.applications[key].removable+'" data-name-en="'+dentist_data.data.applications[key].name_en+'" data-name-de="'+dentist_data.data.applications[key].name_de+'" data-description-en="'+dentist_data.data.applications[key].description_en+'" data-description-de="'+dentist_data.data.applications[key].description_de+'" data-media="'+dentist_data.data.applications[key].media+'" data-url="'+dentist_data.data.applications[key].url+'"><a href="'+dentist_data.data.applications[key].url+'" data-stop-linking-on-edit="'+dentist_data.data.applications[key].url+'" target="_blank"><div class="app-wrapper platform-border-color-important">'+edit_delete_actions+dentist_data.data.applications[key].media+'<div class="platform-text-color fs-18 fs-xs-15 padding-top-5 calibri-bold app-name">'+app_title+'</div><div class="platform-text-color fs-16 fs-xs-14 padding-top-5 line-height-20 app-description">'+app_description+'</div></div></a></div>';
                                } else if(dentist_data.data.applications[key].resource_type == 'image') {
                                    apps_html += imageHtml;
                                }
                            } else {
                                apps_html += imageHtml;
                            }
                        }
                    }
                    $('.apps-list').prepend(apps_html);
                }

                // showing custom popup for editing platform base color and background
                $('.pick-dentist-color').click(function() {
                    var this_btn = $(this);
                    if (this_btn.attr('data-opened') == 'false') {
                        projectData.requests.getDentistData(function(getDentistData_response) {
                            $('body').addClass('overflow-hidden');
                            if ($(window).width() < 1000) {
                                $('.dentist-logo').hide();
                                $('.pick-dentist-color-parent').removeClass('col-xs-7').addClass('col-xs-12');
                            }
                            $('body').removeClass('overflow-hidden');

                            if (getDentistData_response.success) {
                                var hex_code_checked = '';
                                var hex_code_active = '';
                                var background_hex_code = '';

                                var preset_background_checked = '';
                                var preset_background_active = '';

                                var upload_image_checked = '';
                                var upload_image_active = '';
                                var upload_image_option_html = '<button type="button" class="inline-block"><label for="background-image" class="platform-border-color important"><svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 90 69.2" style="enable-background:new 0 0 90 69.2;" xml:space="preserve"><style type="text/css">.st0{fill:#8E3146;}</style><metadata><sfw><slices></slices><slicesourcebounds bottomleftorigin="true" height="69.2" width="90" x="5" y="40.4"></slicesourcebounds></sfw></metadata><path class="st0 svg-platform-fill-important" d="M7.6,69.2h74.9c4.2,0,7.6-3.4,7.6-7.6V18.8c0-4.2-3.4-7.6-7.6-7.6H71.3c-3.9,0-7.3-2.7-8.1-6.5 c-0.6-2.7-3-4.7-5.8-4.7H32.6c-2.8,0-5.2,1.9-5.8,4.7c-0.8,3.8-4.2,6.5-8.1,6.5H7.6c-4.2,0-7.6,3.4-7.6,7.6c0,0,0,0,0,0v42.9 C0,65.8,3.4,69.2,7.6,69.2C7.6,69.2,7.6,69.2,7.6,69.2z M78.4,16.9c2.6,0,4.8,2.1,4.8,4.8c0,2.6-2.1,4.8-4.8,4.8 c-2.6,0-4.8-2.1-4.8-4.8c0,0,0,0,0,0C73.6,19.1,75.7,16.9,78.4,16.9C78.4,16.9,78.4,16.9,78.4,16.9z M45,15.5 c12.5,0,22.7,10.2,22.7,22.7S57.5,60.9,45,60.9S22.3,50.8,22.3,38.2c0,0,0,0,0,0C22.3,25.7,32.5,15.5,45,15.5L45,15.5z M27.3,38.2 c0-9.8,7.9-17.7,17.7-17.7s17.7,7.9,17.7,17.7S54.8,55.9,45,55.9h0C35.2,55.9,27.3,48,27.3,38.2z"></path></svg></label></button>';
                                if (getDentistData_response.data.hub_background_type == undefined || getDentistData_response.data.hub_background_type == 'hex-code') {
                                    hex_code_checked = ' checked ';
                                    hex_code_active = ' active ';
                                    background_hex_code = getDentistData_response.data.hub_background;
                                } else if (getDentistData_response.data.hub_background_type == 'preset-background') {
                                    preset_background_checked = ' checked ';
                                    preset_background_active = ' active ';

                                } else if (getDentistData_response.data.hub_background_type == 'upload-image') {
                                    upload_image_checked = ' checked ';
                                    upload_image_active = ' active ';

                                    upload_image_option_html = '<button type="button" class="inline-block"><label for="background-image" class="platform-border-color important" style="background-image: url('+getDentistData_response.data.hub_background+');"></label></button>';
                                }

                                $('.enableBlur').addClass('active');
                                this_btn.attr('data-opened', 'true');
                                this_btn.closest('.pick-dentist-color-parent').find('.custom-dropdown-with-color-pickers').html('<span class="up-arrow padding-right-xs-10">▲</span><div class="wrapper"><div class="base-color-container"><h2 class="fs-30 calibri-light padding-bottom-10 text-left">Text color</h2><div class="text-color"><div class="color-picker-container"><div class="wheel" id="text-color-picker"></div></div><div class="color-content-container"><div class="color-box"></div><div class="custom-google-label-style module text-left" data-input-colorful-border="true"><label for="text-hex-code" class="platform-color">HEX code:</label><input maxlength="10" type="text" id="text-hex-code" class="full-rounded form-field platform-border-color"/></div></div></div><h2 class="fs-30 calibri-light padding-bottom-10 padding-top-10 text-left">Base color</h2><div class="base-color"><div class="color-picker-container"><div class="wheel" id="base-color-picker"></div></div><div class="color-content-container"><div class="color-box"></div><div class="custom-google-label-style module text-left" data-input-colorful-border="true"><label for="hex-code" class="platform-color">HEX code:</label><input maxlength="10" type="text" id="hex-code" class="full-rounded form-field platform-border-color"/></div></div></div></div><div class="background-color"><h2 class="fs-30 calibri-light padding-top-xs-10 padding-top-sm-10 padding-bottom-10 text-left">Background color</h2><ul><li class="'+hex_code_active+'"><div class="radio-container"><input '+hex_code_checked+' type="radio" name="background-color-type" value="hex-code-option" id="hex-code-option"/><label for="hex-code-option">HEX code</label></div><div class="option-content"><div class="color-picker-container"><div class="wheel" id="background-color-picker"></div></div><div class="color-content-container"><div class="color-box"></div><div class="custom-google-label-style module text-left" data-input-colorful-border="true"><label for="background-hex-code" class="platform-color">HEX code:</label><input maxlength="10" type="text" id="background-hex-code" class="full-rounded form-field platform-border-color" value="'+background_hex_code+'"/></div></div></div></li><li class="'+preset_background_active+'"><div class="radio-container"><input '+preset_background_checked+' type="radio" name="background-color-type" value="preset-background-option" id="preset-background-option"/><label for="preset-background-option">Preset Backgrounds</label></div><div class="option-content presets-container"><button type="button" class="inline-block-top preset"><img src="assets/images/presets/red-preset-background.jpg" alt="Red preset background"/><i class="fa fa-check check-icon" aria-hidden="true"></i></button><button type="button" class="inline-block-top preset"><img src="assets/images/presets/dark-blue-preset-background.jpg" alt="Dark blue preset background"/><i class="fa fa-check check-icon" aria-hidden="true"></i></button><button type="button" class="inline-block-top preset"><img src="assets/images/presets/purple-preset-background.jpg" alt="Purple preset background"/><i class="fa fa-check check-icon" aria-hidden="true"></i></button><button type="button" class="inline-block-top preset"><img src="assets/images/presets/gray-preset-background.jpg" alt="Gray preset background"/><i class="fa fa-check check-icon" aria-hidden="true"></i></button><button type="button" class="inline-block-top preset"><img src="assets/images/presets/green-preset-background.jpg" alt="Green preset background"/><i class="fa fa-check check-icon" aria-hidden="true"></i></button><button type="button" class="inline-block-top preset"><img src="assets/images/presets/lime-preset-background.jpg" alt="Lime preset background"/><i class="fa fa-check check-icon" aria-hidden="true"></i></button></div></li><li class="'+upload_image_active+'"><div class="radio-container"><input '+upload_image_checked+' type="radio" name="background-color-type" value="upload-image-option" id="upload-image-option"/><label for="upload-image-option">Upload Image</label></div><div class="option-content upload-image-container">'+upload_image_option_html+'<div class="inline-block file-text">The image should be in .png, .jpg or .jpeg format. Maximum size 2MB.</div><input type="hidden" id="background-image-base64"/><input type="hidden" id="background-image-filename"/><input type="file" class="hide" accept=".jpg,.jpeg,.png" id="background-image"/></div></li></ul></div><div class="padding-top-50 padding-bottom-20 text-center"><div class="text-center padding-bottom-15"><a href="javascript:void(0);" class="reset-to-default fs-16">Reset to default</a></div><a href="javascript:void(0);" class="module platform-custom-button-opposite-colors margin-right-10 close-color-picker-dropdown platform-color platform-border-color hover">CLOSE</a><a href="javascript:void(0);" class="module platform-custom-button platform-background-color platform-border-color hover save-color-picker-choices">SAVE</a></div></div>');

                                var resetToDefault = true;
                                $('.reset-to-default').click(function() {
                                    if (resetToDefault) {
                                        resetToDefault = false;

                                        projectData.general_logic.showLoader();
                                        projectData.requests.editDentistColors({
                                            token: JSON.parse(window.localStorage.getItem('currentDentist')).token,
                                            id: JSON.parse(window.localStorage.getItem('currentDentist')).id,
                                            base_color: '#00b7e2',
                                            text_color: '#333',
                                            background_type: 'hex-code',
                                            background: '#fff'
                                        }, function(response) {
                                            if (response.success) {
                                                $('body').addClass('overflow-hidden');
                                                if ($(window).width() < 1000) {
                                                    $('.dentist-logo').show();
                                                    $('.pick-dentist-color-parent').addClass('col-xs-7').removeClass('col-xs-12');
                                                }
                                                $('body').removeClass('overflow-hidden');
                                                $('.pick-dentist-color').attr('data-opened', 'false');
                                                $('.enableBlur').removeClass('active');
                                                $('.custom-dropdown-with-color-pickers').html('');

                                                projectData.general_logic.updatePlatformColors(JSON.parse(window.localStorage.getItem('currentDentist')).id);

                                                basic.showAlert('Colors have been restored to their default settings!', '', true);
                                                projectData.general_logic.hideLoader();
                                            } else if (response.errors) {
                                                resetToDefault = true;
                                                basic.showAlert(default_error_message, '', true);
                                                projectData.general_logic.hideLoader();
                                            }
                                        });
                                    }
                                });

                                if (getDentistData_response.data.hub_background_type == 'preset-background') {
                                    for (var i = 0, len = $('button.preset').length; i < len; i+=1) {
                                        if ($('button.preset').eq(i).find('img').attr('src') == getDentistData_response.data.hub_background) {
                                            $('button.preset').eq(i).addClass('checked');
                                        }
                                    }
                                }

                                // radio buttons change login
                                $('.custom-dropdown-with-color-pickers [name="background-color-type"]').on('change', function() {
                                    $('.background-color ul li').removeClass('active');
                                    $('.background-color ul li input[value="'+$(this).val()+'"]').closest('li').addClass('active');
                                });

                                // color picker option logic
                                $('.custom-dropdown-with-color-pickers .close-color-picker-dropdown').click(function() {
                                    $('body').addClass('overflow-hidden');
                                    if ($(window).width() < 1000) {
                                        $('.dentist-logo').show();
                                        $('.pick-dentist-color-parent').addClass('col-xs-7').removeClass('col-xs-12');
                                    }
                                    $('body').removeClass('overflow-hidden');
                                    $('.pick-dentist-color').attr('data-opened', 'false');
                                    $('.enableBlur').removeClass('active');
                                    $(this).closest('.custom-dropdown-with-color-pickers').html('');
                                });

                                var saveColorChanges = true;
                                // color picker option logic
                                $('.custom-dropdown-with-color-pickers .save-color-picker-choices').click(function() {
                                    if (saveColorChanges) {
                                        saveColorChanges = false;

                                        var confirm_obj = {};
                                        confirm_obj.callback = function (result) {
                                            if (result) {
                                                var error_messages = '';
                                                var post_data = {
                                                    token: JSON.parse(window.localStorage.getItem('currentDentist')).token,
                                                    id: JSON.parse(window.localStorage.getItem('currentDentist')).id
                                                };

                                                if (!$('#hex-code').length || $('#hex-code').val().trim() == '') {
                                                    error_messages = 'Please make sure you have entered base color HEX code.<br>';
                                                } else {
                                                    post_data.base_color = $('#hex-code').val().trim();
                                                }

                                                if (!$('#text-hex-code').length || $('#text-hex-code').val().trim() == '') {
                                                    error_messages = 'Please make sure you have entered text color HEX code.<br>';
                                                } else {
                                                    post_data.text_color = $('#text-hex-code').val().trim();
                                                }

                                                switch($('.custom-dropdown-with-color-pickers [name="background-color-type"]:checked').val()) {
                                                    case 'hex-code-option':
                                                        if (!$('#background-hex-code').length || $('#background-hex-code').val().trim() == '') {
                                                            error_messages += 'Please make sure you have entered background color HEX code.<br>';
                                                        } else {
                                                            post_data.background_type = 'hex-code';
                                                            post_data.background = $('#background-hex-code').val().trim();
                                                        }
                                                        break;
                                                    case 'preset-background-option':
                                                        if (!$('.presets-container button.checked').length) {
                                                            error_messages += 'Please make sure you have selected one of the default preset backgrounds.<br>';
                                                        } else {
                                                            post_data.background_type = 'preset-background';
                                                            post_data.background = $('.presets-container button.checked img').attr('src');
                                                        }
                                                        break;
                                                    case 'upload-image-option':
                                                        if (!$('#background-image').length || $('#background-image').val() == '') {
                                                            error_messages += 'Please make sure you have attached image background.<br>';
                                                        } else {
                                                            post_data.background_type = 'upload-image';
                                                            post_data.background = $('.upload-image-container #background-image-base64').val();
                                                            post_data.background_filename = $('.upload-image-container #background-image-filename').val();
                                                        }
                                                        break;
                                                }

                                                if (error_messages != '') {
                                                    saveColorChanges = true;
                                                    basic.showAlert(error_messages, '', true);
                                                } else {
                                                    projectData.general_logic.showLoader();
                                                    setTimeout(function() {
                                                        projectData.requests.editDentistColors(post_data, function(response) {
                                                            if (response.success) {
                                                                $('body').addClass('overflow-hidden');
                                                                if ($(window).width() < 1000) {
                                                                    $('.dentist-logo').show();
                                                                    $('.pick-dentist-color-parent').addClass('col-xs-7').removeClass('col-xs-12');
                                                                }
                                                                $('body').removeClass('overflow-hidden');
                                                                $('.pick-dentist-color').attr('data-opened', 'false');
                                                                $('.enableBlur').removeClass('active');
                                                                $('.custom-dropdown-with-color-pickers').html('');

                                                                projectData.general_logic.updatePlatformColors(JSON.parse(window.localStorage.getItem('currentDentist')).id);

                                                                basic.showAlert('Color changes have been saved successfully!', '', true);
                                                                projectData.general_logic.hideLoader();
                                                            } else if (response.errors) {
                                                                saveColorChanges = true;
                                                                basic.showAlert(default_error_message, '', true);
                                                                projectData.general_logic.hideLoader();
                                                            }
                                                        });
                                                    }, 1000);
                                                }
                                            }
                                        };
                                        basic.showConfirm('Are you sure you want to save the color changes?', '', confirm_obj, true);
                                    }
                                });

                                var colorPickersWidthAndHeight = 150;
                                $('body').addClass('overflow-hidden');
                                if ($(window).width() < 992) {
                                    colorPickersWidthAndHeight = 100;
                                }
                                $('body').removeClass('overflow-hidden');

                                // colorPicker.resize(newWidth);
                                var textColorWheel = iro.ColorPicker('.custom-dropdown-with-color-pickers #text-color-picker', {
                                    width: colorPickersWidthAndHeight,
                                    color: getDentistData_response.data.text_color,
                                    height: colorPickersWidthAndHeight
                                });
                                textColorWheel.on('input:change', function(color){
                                    textColorPickerCallback(color.hexString);
                                });

                                textColorWheel.on('color:init', function(color){
                                    textColorPickerCallback(color.hexString);
                                });

                                function textColorPickerCallback(color) {
                                    //this_btn.attr('data-base-color', color);
                                    $('.text-color label[for="text-hex-code"]').addClass('active-label');
                                    $('.text-color input#text-hex-code').addClass('colorful-border');
                                    $('.text-color #text-hex-code').val(color);
                                    $('.text-color .color-box').css({'background-color' : color});
                                }

                                // colorPicker.resize(newWidth);
                                var baseColorWheel = iro.ColorPicker('.custom-dropdown-with-color-pickers #base-color-picker', {
                                    width: colorPickersWidthAndHeight,
                                    color: getDentistData_response.data.hub_color,
                                    height: colorPickersWidthAndHeight
                                });
                                baseColorWheel.on('input:change', function(color){
                                    baseColorPickerCallback(color.hexString);
                                });

                                baseColorWheel.on('color:init', function(color){
                                    baseColorPickerCallback(color.hexString);
                                });

                                function baseColorPickerCallback(color) {
                                    //this_btn.attr('data-base-color', color);
                                    $('.base-color label[for="hex-code"]').addClass('active-label');
                                    $('.base-color input#hex-code').addClass('colorful-border');
                                    $('.base-color #hex-code').val(color);
                                    $('.base-color .color-box').css({'background-color' : color});
                                }

                                var background_color_picker_options = {
                                    width: colorPickersWidthAndHeight,
                                    color: '#fff',
                                    height: colorPickersWidthAndHeight
                                };

                                if (getDentistData_response.data.hub_background_type == 'hex-code') {
                                    background_color_picker_options.color = getDentistData_response.data.hub_background;
                                }

                                var backgroundColorWheel = iro.ColorPicker('.custom-dropdown-with-color-pickers #background-color-picker', background_color_picker_options);
                                backgroundColorWheel.on('input:change', function(color){
                                    backgroundColorPickerCallback(color.hexString);
                                });

                                backgroundColorWheel.on('color:init', function(color){
                                    backgroundColorPickerCallback(color.hexString);
                                });

                                function backgroundColorPickerCallback(color) {
                                    //this_btn.attr('data-background-color', color);
                                    $('.background-color label[for="background-hex-code"]').addClass('active-label');
                                    $('.background-color input#background-hex-code').addClass('colorful-border');
                                    $('.background-color #background-hex-code').val(color);
                                    $('.background-color .color-box').css({'background-color' : color});
                                }

                                // presets option logic
                                $('.presets-container button').click(function() {
                                    $('.presets-container button').removeClass('checked');
                                    $(this).addClass('checked');
                                });

                                // upload image logic
                                $('.upload-image-container #background-image').on('change', function() {
                                    projectData.general_logic.readURL(this, function(e, filename) {
                                        $('.upload-image-container label').html('');
                                        $('.upload-image-container label').css('background-image', 'url(' + e.target.result + ')');

                                        //set file input
                                        $('.upload-image-container #background-image-base64').val(e.target.result);
                                        $('.upload-image-container #background-image-filename').val(filename);
                                    });
                                });
                            } else {
                                basic.showAlert(default_error_message, '', true);
                            }
                        }, JSON.parse(localStorage.getItem('currentDentist')).id);
                    } else {
                        $('body').addClass('overflow-hidden');
                        if ($(window).width() < 1000) {
                            $('.dentist-logo').show();
                            $('.pick-dentist-color-parent').addClass('col-xs-7').removeClass('col-xs-12');
                        }
                        $('body').removeClass('overflow-hidden');
                        $('.enableBlur').removeClass('active');
                        this_btn.attr('data-opened', 'false');
                        this_btn.closest('.pick-dentist-color-parent').find('.custom-dropdown-with-color-pickers').html('');
                    }
                });

                // binding edit and delete events for all current apps
                function bindEditDeleteAppEvents() {
                    $('.delete-app').click(function() {
                        $(this).closest('.single-app').addClass('hide').removeClass('sortable-app');
                    });

                    $('.edit-app').click(function() {
                        var this_btn = $(this);
                        var this_app = this_btn.closest('.single-app');
                        var this_app_id = this_app.attr('data-id');
                        var upload_app_image_html = '';
                        if ($(this).closest('.single-app').attr('data-media') != '') {
                            upload_app_image_html = '<button type="button"><label class="platform-border-color important" for="application-icon" style="background-image: url(' + $(this).closest('.single-app').attr('data-media') + ');"></label></button>';
                        } else {
                            upload_app_image_html = '<button type="button"><label class="platform-border-color important" for="application-icon"><svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 90 69.2" style="enable-background:new 0 0 90 69.2;" xml:space="preserve"><style type="text/css">.st0{fill:#8E3146;}</style><metadata><sfw><slices/><sliceSourceBounds bottomLeftOrigin="true" height="69.2" width="90" x="5" y="40.4"/></sfw></metadata><path class="st0 svg-platform-fill-important" d="M7.6,69.2h74.9c4.2,0,7.6-3.4,7.6-7.6V18.8c0-4.2-3.4-7.6-7.6-7.6H71.3c-3.9,0-7.3-2.7-8.1-6.5 c-0.6-2.7-3-4.7-5.8-4.7H32.6c-2.8,0-5.2,1.9-5.8,4.7c-0.8,3.8-4.2,6.5-8.1,6.5H7.6c-4.2,0-7.6,3.4-7.6,7.6c0,0,0,0,0,0v42.9 C0,65.8,3.4,69.2,7.6,69.2C7.6,69.2,7.6,69.2,7.6,69.2z M78.4,16.9c2.6,0,4.8,2.1,4.8,4.8c0,2.6-2.1,4.8-4.8,4.8 c-2.6,0-4.8-2.1-4.8-4.8c0,0,0,0,0,0C73.6,19.1,75.7,16.9,78.4,16.9C78.4,16.9,78.4,16.9,78.4,16.9z M45,15.5 c12.5,0,22.7,10.2,22.7,22.7S57.5,60.9,45,60.9S22.3,50.8,22.3,38.2c0,0,0,0,0,0C22.3,25.7,32.5,15.5,45,15.5L45,15.5z M27.3,38.2 c0-9.8,7.9-17.7,17.7-17.7s17.7,7.9,17.7,17.7S54.8,55.9,45,55.9h0C35.2,55.9,27.3,48,27.3,38.2z"/></svg></label></button>';
                        }

                        basic.closeDialog();
                        var add_app_popup_html = '<div class="language-switcher"><button class="inline-block en-version active" data-app-name-en="' + $(this).closest('.single-app').attr('data-name-en') + '" data-app-description-en="' + $(this).closest('.single-app').attr('data-description-en') + '"><img src="assets/images/en-icon.svg" class="max-width-20 margin-right-5" alt="English version icon"/> English Version</button><button class="inline-block de-version" data-app-name-de="' + $(this).closest('.single-app').attr('data-name-de') + '" data-app-description-de="' + $(this).closest('.single-app').attr('data-description-de') + '"><img src="assets/images/de-icon.svg" class="max-width-20 margin-right-5" alt="English version icon"/> German Version</button></div><div class="container-fluid padding-top-30"><div class="fs-30 padding-bottom-15 text-center adding-custom-app-title"></div><div class="col-xs-12 col-sm-5 text-right upload-application-icon"><input type="file" class="hide" accept=".jpg,.jpeg,.png" id="application-icon"/>' + upload_app_image_html + '<div class="inline-block file-text">The image should be in .png, .jpg or .jpeg format. Maximum size 2MB.</div><input type="hidden" id="app-icon-base64"/><input type="hidden" id="app-icon-filename"/></div><div class="col-xs-12 col-sm-7"><div class="custom-google-label-style module max-width-400" data-input-colorful-border="true"><label for="app-name" class="platform-color active-label">Name:</label><input maxlength="255" type="text" id="app-name" class="full-rounded form-field platform-border-color" value="' + $(this).closest('.single-app').attr('data-name-en') + '"/></div><div class="custom-google-label-style module max-width-400 margin-top-15" data-input-colorful-border="true"><label for="app-description" class="platform-color active-label">Description:</label><input maxlength="1000" type="text" id="app-description" class="full-rounded form-field platform-border-color" value="' + $(this).closest('.single-app').attr('data-description-en') + '"/></div><div class="custom-google-label-style module max-width-400 margin-top-15" data-input-colorful-border="true"><label for="app-url" class="platform-color active-label">URL:</label><input maxlength="500" type="text" id="app-url" class="full-rounded form-field platform-border-color" value="' + $(this).closest('.single-app').attr('data-url') + '"/></div></div></div><div class="padding-top-30 padding-bottom-40 padding-left-15 padding-right-15 text-center"><button class="module platform-custom-button-opposite-colors platform-border-color hover margin-right-15 close-popup">CLOSE</button><button class="module platform-custom-button platform-background-color platform-border-color hover edit-app-action">EDIT</button></div>';
                        basic.showDialog(add_app_popup_html, 'add-edit-app-popup', null, true);

                        $('.close-popup').click(function() {
                            basic.closeDialog();
                        });

                        addEditAppPopupLanguageSwitch();

                        $('.add-edit-app-popup #application-icon').on('change', function () {
                            projectData.general_logic.readURL(this, function (e, filename) {
                                $('.add-edit-app-popup .upload-application-icon label').html('');
                                $('.add-edit-app-popup .upload-application-icon label').css('background-image', 'url(' + e.target.result + ')');

                                //set file input
                                $('.add-edit-app-popup .upload-application-icon #app-icon-base64').val(e.target.result);
                                $('.add-edit-app-popup .upload-application-icon #app-icon-filename').val(filename);
                            }, function () {
                                $('.add-edit-app-popup .upload-application-icon label').css('background-image', 'url(' + this_btn.closest('.single-app').attr('data-media') + ')');

                                $('.add-edit-app-popup .upload-application-icon #app-icon-base64').val('');
                                $('.add-edit-app-popup .upload-application-icon #app-icon-filename').val('');
                            });
                        });

                        $('.add-edit-app-popup .edit-app-action').click(function () {
                            if ($('.add-edit-app-popup .language-switcher button.active').hasClass('en-version')) {
                                $('.add-edit-app-popup .en-version').attr('data-app-name-en', $('.add-edit-app-popup #app-name').val().trim());
                                $('.add-edit-app-popup .en-version').attr('data-app-description-en', $('.add-edit-app-popup #app-description').val().trim());
                            } else if ($('.add-edit-app-popup .language-switcher button.active').hasClass('de-version')) {
                                $('.add-edit-app-popup .de-version').attr('data-app-name-de', $('.add-edit-app-popup #app-name').val().trim());
                                $('.add-edit-app-popup .de-version').attr('data-app-description-de', $('.add-edit-app-popup #app-description').val().trim());
                            }

                            if ($('.add-edit-app-popup #app-url').val().trim() == '') {
                                basic.showAlert('Please enter application URL.', '', true);
                                return false;
                            } else if ($('.add-edit-app-popup .en-version').attr('data-app-name-en') == '' && $('.add-edit-app-popup .en-version').attr('data-app-description-en') == '' && $('.add-edit-app-popup .de-version').attr('data-app-name-de') == '' && $('.add-edit-app-popup .de-version').attr('data-app-description-de') == '') {
                                basic.showAlert('Please enter application name and/ or description for at least one language.', '', true);
                                return false;
                            } else {
                                projectData.general_logic.showLoader();

                                var post_data = {
                                    token: JSON.parse(window.localStorage.getItem('currentDentist')).token,
                                    id: JSON.parse(window.localStorage.getItem('currentDentist')).id,
                                    name_en: $('.add-edit-app-popup .en-version').attr('data-app-name-en'),
                                    description_en: $('.add-edit-app-popup .en-version').attr('data-app-description-en'),
                                    name_de: $('.add-edit-app-popup .de-version').attr('data-app-name-de'),
                                    description_de: $('.add-edit-app-popup .de-version').attr('data-app-description-de'),
                                    url: $('.add-edit-app-popup #app-url').val().trim()
                                };

                                if ($('.add-edit-app-popup .upload-application-icon #app-icon-base64').val() != '') {
                                    post_data.media = $('.add-edit-app-popup .upload-application-icon #app-icon-base64').val();
                                    post_data.media_name = $('.add-edit-app-popup .upload-application-icon #app-icon-filename').val();
                                }

                                setTimeout(function () {
                                    projectData.requests.editDentistApplication(this_app_id, post_data, function (response) {
                                        projectData.general_logic.hideLoader();
                                        if (response.success) {
                                            this_app.attr('data-name-en', response.data.name_en);
                                            this_app.attr('data-name-de', response.data.name_de);
                                            this_app.attr('data-description-en', response.data.description_en);
                                            this_app.attr('data-description-de', response.data.description_de);
                                            this_app.attr('data-url', response.data.url);
                                            this_app.attr('data-media', response.data.media);

                                            if ($('.main-content').attr('data-lang') == 'en') {
                                                this_app.find('.app-name').html(response.data.name_en);
                                                this_app.find('.app-description').html(response.data.description_en);
                                            } else if ($('.main-content').attr('data-lang') == 'de') {
                                                this_app.find('.app-name').html(response.data.name_de);
                                                this_app.find('.app-description').html(response.data.description_de);
                                            }
                                            this_app.find('img.app-media').attr('src', response.data.media);

                                            basic.closeDialog();
                                            basic.showAlert('Application changes have been saved successfully.', '', true);
                                        } else {
                                            basic.showAlert(default_error_message, '', true);
                                        }
                                    });
                                }, 1000);
                            }
                        });
                    });
                }

                projectData.requests.getDentistData(function(response) {
                    if (response.success) {
                        projectData.general_logic.updatePlatformColors(JSON.parse(window.localStorage.getItem('currentDentist')).id);
                        buildDentistData(response, true);

                        // turning editing mode on
                        $('.edit-page').unbind().on('click', function() {
                            $('.basic-admin-panel').addClass('edit-mode');

                            $('body').addClass('overflow-hidden');
                            if ($(window).width() < 1000) {
                                $('.pick-dentist-color-parent').removeClass('col-xs-2').addClass('col-xs-7 text-right-sm');
                            }
                            $('body').removeClass('overflow-hidden');

                            for (var i = 0, len = $('.single-app').length; i < len; i+=1) {
                                var editModeHtml = '';
                                if ($('.single-app').eq(i).hasClass('removable') && $('.single-app').eq(i).hasClass('editable')) {
                                    editModeHtml = '<div class="actions-on-edit"><button type="button" class="edit-app platform-color-important"><i class="fa fa-pencil" aria-hidden="true"></i></button><button type="button" class="delete-app platform-color-important"><i class="fa fa-times" aria-hidden="true"></i></button></div>';
                                } else if ($('.single-app').eq(i).hasClass('removable')) {
                                    editModeHtml = '<div class="actions-on-edit"><button type="button" class="delete-app platform-color-important"><i class="fa fa-times" aria-hidden="true"></i></button></div>';
                                } else if ($('.single-app').eq(i).hasClass('editable')) {
                                    editModeHtml = '<div class="actions-on-edit"><button type="button" class="edit-app platform-color-important"><i class="fa fa-pencil" aria-hidden="true"></i></button></div>';
                                }
                                $('.single-app').eq(i).find('.app-wrapper').prepend(editModeHtml);
                            }

                            bindEditDeleteAppEvents();

                            $('.apps-list').sortable({
                                items: "> .sortable-app"
                            });

                            if ($('[data-stop-linking-on-edit]').length) {
                                $('[data-stop-linking-on-edit]').attr('href', 'javascript:void(0);').removeAttr('target');
                            }
                        });

                        // adding app
                        $('.add-app').unbind().on('click', function() {
                            var this_btn = $(this);
                            projectData.requests.getDefaultApplications(JSON.parse(window.localStorage.getItem('currentDentist')).id, function(default_apps_response) {
                                projectData.requests.getDeletedAppsForDentist(JSON.parse(window.localStorage.getItem('currentDentist')).id, function(deleted_apps_response) {
                                    basic.closeDialog();
                                    var add_app_popup_html = '<div class="language-switcher"><button class="inline-block en-version active" data-app-name-en="" data-app-description-en=""><img src="assets/images/en-icon.svg" class="max-width-20 margin-right-5" alt="English version icon"/> English Version</button><button class="inline-block de-version" data-app-name-de="" data-app-description-de=""><img src="assets/images/de-icon.svg" class="max-width-20 margin-right-5" alt="English version icon"/> German Version</button></div>';

                                    // if dentist is missing one of the default apps or he has deleted 'stored' app
                                    if (default_apps_response.data.length > 0 || deleted_apps_response.data.length) {
                                        add_app_popup_html += '<div class="list-with-default-apps"><div class="fs-30 color-white padding-top-15 padding-bottom-15 text-center default-apps-title"></div><ul>';

                                        if (default_apps_response.success) {
                                            for (var i = 0, len = default_apps_response.data.length; i < len; i += 1) {
                                                var imageHtml = '';
                                                var imageHtmlData = '';
                                                if (default_apps_response.data[i].resource_type == 'svg') {
                                                    imageHtml = default_apps_response.data[i].media;
                                                    imageHtmlData = encodeURIComponent(default_apps_response.data[i].media);
                                                } else if (default_apps_response.data[i].resource_type == 'image') {
                                                    imageHtmlData = default_apps_response.data[i].media;
                                                    imageHtml = '<img alt="" class="width-100" itemprop="contentUrl" src="' + default_apps_response.data[i].media + '"/>';
                                                }

                                                add_app_popup_html += '<li><button class="platform-border-color-important" data-name-en="' + default_apps_response.data[i].name_en + '" data-name-de="' + default_apps_response.data[i].name_de + '" data-description-en="' + default_apps_response.data[i].description_en + '" data-description-de="' + default_apps_response.data[i].description_de + '" data-url="' + default_apps_response.data[i].url + '" data-media="' + imageHtmlData + '" data-default-application-id="' + default_apps_response.data[i].id + '" data-id="' + default_apps_response.data[i].id + '"><i class="fa fa-check check-icon" aria-hidden="true"></i>' + imageHtml + '</button></li>';
                                            }
                                        }

                                        if (deleted_apps_response.success) {
                                            for (var i = 0, len = deleted_apps_response.data.length; i < len; i += 1) {
                                                add_app_popup_html += '<li><a href="javascript:void(0);" class="remove-existing-deleted-app platform-color-important"><i class="fa fa-times" aria-hidden="true"></i></a><button class="platform-border-color-important" data-name-en="' + deleted_apps_response.data[i].name_en + '" data-name-de="' + deleted_apps_response.data[i].name_de + '" data-description-en="' + deleted_apps_response.data[i].description_en + '" data-description-de="' + deleted_apps_response.data[i].description_de + '" data-url="' + deleted_apps_response.data[i].url + '" data-media="' + deleted_apps_response.data[i].media + '" data-id="' + deleted_apps_response.data[i].id + '"><i class="fa fa-check check-icon" aria-hidden="true"></i><img alt="" class="width-100" itemprop="contentUrl" src="' + deleted_apps_response.data[i].media + '"/></button></li>';
                                            }
                                        }

                                        add_app_popup_html += '</ul></div>';
                                    }

                                    add_app_popup_html += '<div class="container-fluid padding-top-30"><div class="fs-30 padding-bottom-15 text-center adding-custom-app-title"></div><div class="col-xs-12 col-sm-5 text-right upload-application-icon"><input type="file" class="hide" accept=".jpg,.jpeg,.png" id="application-icon"/><button type="button"><label class="platform-border-color important" for="application-icon"><svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 90 69.2" style="enable-background:new 0 0 90 69.2;" xml:space="preserve"><style type="text/css">.st0{fill:#8E3146;}</style><metadata><sfw><slices/><sliceSourceBounds bottomLeftOrigin="true" height="69.2" width="90" x="5" y="40.4"/></sfw></metadata><path class="st0 svg-platform-fill-important" d="M7.6,69.2h74.9c4.2,0,7.6-3.4,7.6-7.6V18.8c0-4.2-3.4-7.6-7.6-7.6H71.3c-3.9,0-7.3-2.7-8.1-6.5 c-0.6-2.7-3-4.7-5.8-4.7H32.6c-2.8,0-5.2,1.9-5.8,4.7c-0.8,3.8-4.2,6.5-8.1,6.5H7.6c-4.2,0-7.6,3.4-7.6,7.6c0,0,0,0,0,0v42.9 C0,65.8,3.4,69.2,7.6,69.2C7.6,69.2,7.6,69.2,7.6,69.2z M78.4,16.9c2.6,0,4.8,2.1,4.8,4.8c0,2.6-2.1,4.8-4.8,4.8 c-2.6,0-4.8-2.1-4.8-4.8c0,0,0,0,0,0C73.6,19.1,75.7,16.9,78.4,16.9C78.4,16.9,78.4,16.9,78.4,16.9z M45,15.5 c12.5,0,22.7,10.2,22.7,22.7S57.5,60.9,45,60.9S22.3,50.8,22.3,38.2c0,0,0,0,0,0C22.3,25.7,32.5,15.5,45,15.5L45,15.5z M27.3,38.2 c0-9.8,7.9-17.7,17.7-17.7s17.7,7.9,17.7,17.7S54.8,55.9,45,55.9h0C35.2,55.9,27.3,48,27.3,38.2z"/></svg></label></button><div class="inline-block file-text">The image should be in .png, .jpg or .jpeg format. Maximum size 2MB.</div><input type="hidden" id="app-icon-base64"/><input type="hidden" id="app-icon-filename"/></div><div class="col-xs-12 col-sm-7"><div class="custom-google-label-style module max-width-400" data-input-colorful-border="true"><label for="app-name" class="platform-color">Name:</label><input maxlength="255" type="text" id="app-name" class="full-rounded form-field platform-border-color"/></div><div class="custom-google-label-style module max-width-400 margin-top-15" data-input-colorful-border="true"><label for="app-description" class="platform-color">Description:</label><input maxlength="1000" type="text" id="app-description" class="full-rounded form-field platform-border-color"/></div><div class="custom-google-label-style module max-width-400 margin-top-15" data-input-colorful-border="true"><label for="app-url" class="platform-color">URL:</label><input maxlength="500" type="text" id="app-url" class="full-rounded form-field platform-border-color"/></div></div></div><div class="padding-top-30 padding-bottom-40 padding-left-15 padding-right-15 text-center"><button class="module platform-custom-button-opposite-colors platform-border-color hover margin-right-15 close-popup">CLOSE</button><button class="module platform-custom-button platform-background-color platform-border-color hover add-app-action">ADD</button></div>';
                                    basic.showDialog(add_app_popup_html, 'add-edit-app-popup', null, true);

                                    $('.close-popup').click(function() {
                                        basic.closeDialog();
                                    });

                                    addEditAppPopupLanguageSwitch();

                                    $('.add-edit-app-popup #application-icon').on('change', function() {
                                        projectData.general_logic.readURL(this, function(e, filename) {
                                            $('.add-edit-app-popup .upload-application-icon label').html('');
                                            $('.add-edit-app-popup .upload-application-icon label').css('background-image', 'url(' + e.target.result + ')');

                                            //set file input
                                            $('.add-edit-app-popup .upload-application-icon #app-icon-base64').val(e.target.result);
                                            $('.add-edit-app-popup .upload-application-icon #app-icon-filename').val(filename);
                                        }, function() {
                                            $('.add-edit-app-popup .upload-application-icon label').css('background-image', 'none').html('<svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 90 69.2" style="enable-background:new 0 0 90 69.2;" xml:space="preserve"><style type="text/css">.st0{fill:#8E3146;}</style><metadata><sfw><slices/><sliceSourceBounds bottomLeftOrigin="true" height="69.2" width="90" x="5" y="40.4"/></sfw></metadata><path class="st0 svg-platform-fill-important" d="M7.6,69.2h74.9c4.2,0,7.6-3.4,7.6-7.6V18.8c0-4.2-3.4-7.6-7.6-7.6H71.3c-3.9,0-7.3-2.7-8.1-6.5 c-0.6-2.7-3-4.7-5.8-4.7H32.6c-2.8,0-5.2,1.9-5.8,4.7c-0.8,3.8-4.2,6.5-8.1,6.5H7.6c-4.2,0-7.6,3.4-7.6,7.6c0,0,0,0,0,0v42.9 C0,65.8,3.4,69.2,7.6,69.2C7.6,69.2,7.6,69.2,7.6,69.2z M78.4,16.9c2.6,0,4.8,2.1,4.8,4.8c0,2.6-2.1,4.8-4.8,4.8 c-2.6,0-4.8-2.1-4.8-4.8c0,0,0,0,0,0C73.6,19.1,75.7,16.9,78.4,16.9C78.4,16.9,78.4,16.9,78.4,16.9z M45,15.5 c12.5,0,22.7,10.2,22.7,22.7S57.5,60.9,45,60.9S22.3,50.8,22.3,38.2c0,0,0,0,0,0C22.3,25.7,32.5,15.5,45,15.5L45,15.5z M27.3,38.2 c0-9.8,7.9-17.7,17.7-17.7s17.7,7.9,17.7,17.7S54.8,55.9,45,55.9h0C35.2,55.9,27.3,48,27.3,38.2z"/></svg>');

                                            $('.add-edit-app-popup .upload-application-icon #app-icon-base64').val('');
                                            $('.add-edit-app-popup .upload-application-icon #app-icon-filename').val('');
                                        });
                                    });

                                    if ($('.add-edit-app-popup .adding-custom-app-title')) {
                                        $('.add-edit-app-popup .adding-custom-app-title').html(this_btn.attr('data-adding-custom-app-title'));
                                    }

                                    // if dentist is missing one of the default apps or he has deleted 'stored' app
                                    if (default_apps_response.data.length > 0 || deleted_apps_response.data.length) {
                                        $('.add-edit-app-popup .list-with-default-apps .default-apps-title').html(this_btn.attr('data-default-apps-title'));
                                        $('.remove-existing-deleted-app').click(function() {
                                            var this_btn_parent_app = $(this).closest('li');
                                            var confirm_obj = {};
                                            confirm_obj.callback = function (result) {
                                                if (result) {
                                                    // remove deleted app
                                                    projectData.requests.deleteDentistApplication(function(response) {
                                                        if (response.success) {
                                                            this_btn_parent_app.remove();
                                                            basic.showAlert('Selected application has been deleted successfully.', '', true);
                                                        } else {
                                                            basic.showAlert(default_error_message, '', true);
                                                        }
                                                    }, this_btn_parent_app.find('button').attr('data-id'));
                                                }
                                            };
                                            basic.showConfirm('Are you sure you want to remove this existing app?', '', confirm_obj, true);
                                        });

                                        $('.list-with-default-apps button').click(function() {
                                            $(this).toggleClass('checked');
                                        });
                                    }

                                    $('.add-edit-app-popup .add-app-action').click(function() {
                                        var apps_to_be_added = [];

                                        // adding checked default or deleted apps
                                        for (var i = 0, len = $('.add-edit-app-popup .list-with-default-apps button.checked').length; i < len; i+=1) {
                                            var existing_deleted_app_to_be_added = $('.add-edit-app-popup .list-with-default-apps button.checked').eq(i);
                                            var app_title;
                                            var app_description;
                                            if ($('.main-content').attr('data-lang') == 'en') {
                                                app_title = existing_deleted_app_to_be_added.attr('data-name-en');
                                                app_description = existing_deleted_app_to_be_added.attr('data-description-en');
                                            } else if ($('.main-content').attr('data-lang') == 'de') {
                                                app_title = existing_deleted_app_to_be_added.attr('data-name-de');
                                                app_description = existing_deleted_app_to_be_added.attr('data-description-de');
                                            }

                                            var app_to_be_added = {};
                                            if (existing_deleted_app_to_be_added.attr('data-default-application-id') != undefined) {
                                                app_to_be_added.default_application_id = existing_deleted_app_to_be_added.attr('data-default-application-id');
                                            } else {
                                                app_to_be_added.id = existing_deleted_app_to_be_added.attr('data-id');
                                            }

                                            apps_to_be_added.push(app_to_be_added);
                                        }

                                        // adding custom app
                                        if ($('.add-edit-app-popup .language-switcher button.active').hasClass('en-version')) {
                                            $('.add-edit-app-popup .en-version').attr('data-app-name-en', $('.add-edit-app-popup #app-name').val().trim());
                                            $('.add-edit-app-popup .en-version').attr('data-app-description-en', $('.add-edit-app-popup #app-description').val().trim());
                                        } else if ($('.add-edit-app-popup .language-switcher button.active').hasClass('de-version')) {
                                            $('.add-edit-app-popup .de-version').attr('data-app-name-de', $('.add-edit-app-popup #app-name').val().trim());
                                            $('.add-edit-app-popup .de-version').attr('data-app-description-de', $('.add-edit-app-popup #app-description').val().trim());
                                        }

                                        if ($('.add-edit-app-popup .upload-application-icon #app-icon-base64').val() != '' && $('.add-edit-app-popup #app-url').val().trim() == '') {
                                            basic.showAlert('You have attached application icon, but you didn\'t enter application URL.', '', true);
                                            return false;
                                        } else if ($('.add-edit-app-popup .upload-application-icon #app-icon-base64').val() == '' && $('.add-edit-app-popup #app-url').val().trim() != '') {
                                            basic.showAlert('You have entered application URL, but you didn\'t attach application icon.', '', true);
                                            return false;
                                        } else if ($('.add-edit-app-popup .upload-application-icon #app-icon-base64').val() != '' && $('.add-edit-app-popup #app-url').val().trim() != '' && $('.add-edit-app-popup .en-version').attr('data-app-name-en') == '' && $('.add-edit-app-popup .en-version').attr('data-app-description-en') == '' && $('.add-edit-app-popup .de-version').attr('data-app-name-de') == '' && $('.add-edit-app-popup .de-version').attr('data-app-description-de') == '') {
                                            basic.showAlert('You have attached application icon and entered application URL, but you didn\'t enter application name or description for one of the two languages. Please enter application name and/ or description for at least one language.', '', true);
                                            return false;
                                        } else if ($('.add-edit-app-popup .upload-application-icon #app-icon-base64').val() != '' && $('.add-edit-app-popup #app-url').val().trim() != '') {
                                            apps_to_be_added.push({
                                                name_en: $('.add-edit-app-popup .en-version').attr('data-app-name-en'),
                                                description_en: $('.add-edit-app-popup .en-version').attr('data-app-description-en'),
                                                name_de: $('.add-edit-app-popup .de-version').attr('data-app-name-de'),
                                                description_de: $('.add-edit-app-popup .de-version').attr('data-app-description-de'),
                                                media: $('.add-edit-app-popup .upload-application-icon #app-icon-base64').val(),
                                                media_name: $('.add-edit-app-popup .upload-application-icon #app-icon-filename').val(),
                                                url: $('.add-edit-app-popup #app-url').val().trim()
                                            });
                                        }

                                        if (apps_to_be_added.length) {
                                            projectData.requests.addDentistApplication(function(response) {
                                                if (response.success) {
                                                    projectData.requests.getDentistData(function(getDentistData_response) {
                                                        if (getDentistData_response.success) {
                                                            $('.apps-list .single-app.sortable-app').remove();

                                                            if ($('.basic-admin-panel').hasClass('edit-mode')) {
                                                                buildDentistData(getDentistData_response, undefined, true);
                                                                bindEditDeleteAppEvents();
                                                            } else {
                                                                buildDentistData(getDentistData_response);
                                                            }
                                                            basic.closeDialog();
                                                        } else {
                                                            basic.showAlert(default_error_message, '', true);
                                                        }
                                                        projectData.general_logic.hideLoader();
                                                    }, JSON.parse(localStorage.getItem('currentDentist')).id);
                                                } else {
                                                    basic.closeDialog();
                                                    basic.showAlert(default_error_message, '', true);
                                                }
                                            }, apps_to_be_added);
                                        } else {
                                            basic.showAlert('You have not selected any application to be added to your Hub.', '', true);
                                        }
                                    });
                                });
                            });
                        });

                        // saving changes and submitting them to backend
                        $('.save-changes').unbind().on('click', function() {
                            var confirm_obj = {};
                            confirm_obj.callback = function (result) {
                                if (result) {
                                    projectData.general_logic.showLoader();

                                    //REQUEST TO UPDATE DENTIST APPS in hub app db
                                    var post_data = {
                                        token: JSON.parse(window.localStorage.getItem('currentDentist')).token,
                                        id: JSON.parse(window.localStorage.getItem('currentDentist')).id
                                    };

                                    if ($('.main-content').attr('data-lang') == 'en') {
                                        post_data.hub_title_en = $('.hub-title #hub-title').val().trim();
                                        post_data.hub_title_de = $('.hub-title').attr('data-de');
                                    } else if ($('.main-content').attr('data-lang') == 'de') {
                                        post_data.hub_title_en = $('.hub-title').attr('data-en');
                                        post_data.hub_title_de = $('.hub-title #hub-title').val().trim();
                                    }

                                    if ($('.dentist-logo-wrapper  #dentist-logo-media').val() != '' && $('.dentist-logo-wrapper  #dentist-logo-media-name').val() != '') {
                                        post_data.media = $('.dentist-logo-wrapper  #dentist-logo-media').val();
                                        post_data.media_name = $('.dentist-logo-wrapper  #dentist-logo-media-name').val();
                                    }

                                    var apps_list = {};
                                    for (var i = 0, len = $('.apps-list .single-app.sortable-app').length; i < len; i+=1) {
                                        var this_app = $('.apps-list .single-app.sortable-app').eq(i);
                                        apps_list[i] = {
                                            name_en : this_app.attr('data-name-en'),
                                            name_de : this_app.attr('data-name-de'),
                                            description_en : this_app.attr('data-description-en'),
                                            description_de : this_app.attr('data-description-de'),
                                            media : this_app.find('.app-media').attr('src'),
                                            removable : this_app.attr('data-removable'),
                                            url : this_app.attr('data-url')
                                        };

                                        if (this_app.attr('data-default-application-id') != undefined) {
                                            apps_list[i].default_application_id = this_app.attr('data-default-application-id');
                                        }
                                    }

                                    var deleted_apps_list = [];
                                    for (var i = 0, len = $('.apps-list .single-app.hide').length; i < len; i+=1) {
                                        deleted_apps_list.push($('.apps-list .single-app.hide').eq(i).attr('data-id'));
                                    }

                                    post_data.applications = apps_list;
                                    post_data.deleted_applications = deleted_apps_list;

                                    setTimeout(function() {
                                        projectData.requests.editDentistData(post_data, function(response) {
                                            if (response.success) {
                                                projectData.requests.getDentistData(function(getDentistData_response) {
                                                    if (getDentistData_response.success) {
                                                        $('.basic-admin-panel').removeClass('edit-mode');
                                                        $('.apps-list').sortable('destroy');
                                                        $('.single-app .app-wrapper .actions-on-edit').remove();
                                                        $('.apps-list .single-app.hide').remove();
                                                        $('.apps-list .single-app.sortable-app').remove();
                                                        buildDentistData(getDentistData_response, true);

                                                        basic.showAlert('Changes have been saved successfully!', '', true);
                                                    } else {
                                                        basic.showAlert(default_error_message, '', true);
                                                    }
                                                    projectData.general_logic.hideLoader();
                                                }, JSON.parse(localStorage.getItem('currentDentist')).id);
                                            } else if (response.errors) {
                                                if (response.errors.applications) {
                                                    basic.showAlert('You should have at least one application saved in your Hub.', '', true);
                                                } else {
                                                    basic.showAlert(default_error_message, '', true);
                                                }
                                                projectData.general_logic.hideLoader();
                                            }
                                        });
                                    }, 1000);
                                }
                            };
                            basic.showConfirm('Are you sure you want to save the changes?', '', confirm_obj, true);
                        });
                    } else {
                        basic.showAlert('Please make sure you have saved at least 1 application.', '', true);
                    }
                }, JSON.parse(localStorage.getItem('currentDentist')).id);

                // setting up watch on language select
                $('.lang-switcher select').unbind().on('change', function() {
                    if ($(this).val() == 'en') {
                        $('.hub-title').attr('data-de', $('.hub-title #hub-title').val().trim());
                        $('.hub-title .title-label').html($('.hub-title').attr('data-en'));
                        $('.hub-title #hub-title').val($('.hub-title').attr('data-en'));

                        for (var i = 0, len = $('.apps-list .single-app.sortable-app').length; i < len; i+=1) {
                            var this_app = $('.apps-list .single-app.sortable-app').eq(i);
                            if (this_app.attr('data-name-en') == '' && this_app.attr('data-description-en') == '') {
                                this_app.addClass('hidden-for-this-lang');
                            } else {
                                this_app.removeClass('hidden-for-this-lang');
                                this_app.find('.app-name').html(this_app.attr('data-name-en'));
                                this_app.find('.app-description').html(this_app.attr('data-description-en'));
                            }
                        }
                    } else if ($(this).val() == 'de') {
                        $('.hub-title').attr('data-en', $('.hub-title #hub-title').val().trim());
                        $('.hub-title .title-label').html($('.hub-title').attr('data-de'));
                        $('.hub-title #hub-title').val($('.hub-title').attr('data-de'));

                        for (var i = 0, len = $('.apps-list .single-app.sortable-app').length; i < len; i+=1) {
                            var this_app = $('.apps-list .single-app.sortable-app').eq(i);
                            if (this_app.attr('data-name-de') == '' && this_app.attr('data-description-de') == '') {
                                this_app.addClass('hidden-for-this-lang');
                            } else {
                                this_app.removeClass('hidden-for-this-lang');
                                this_app.find('.app-name').html(this_app.attr('data-name-de'));
                                this_app.find('.app-description').html(this_app.attr('data-description-de'));
                            }
                        }
                    }
                });
            },
            advancedAdminPanel: function() {
                console.log('advancedAdminPanel');
            },
            myPatients: function() {
                var now_timestamp = Math.round((new Date()).getTime() / 1000);
                $('.people-invitation .add-invitation-rows').unbind().click(function() {
                    now_timestamp+=1;
                    $('.people-invitation .inputs').append('<div class="inputs-row added-row padding-bottom-10"><div class="remove-row inline-block"><a href="javascript:void(0);" class="lato-regular fs-20">X</a></div><div class="inputs-wrapper inline-block"><div class="input-field inline-block-top"><div class="custom-google-label-style module" data-input-colorful-border="true"><label for="request-account-name-'+now_timestamp+'" class="platform-color">Name</label><input maxlength="100" type="text" id="request-account-name-'+now_timestamp+'" class="full-rounded form-field platform-border-color person-name"/> </div></div><div class="input-field inline-block-top"><div class="custom-google-label-style module" data-input-colorful-border="true"><label for="request-account-email-'+now_timestamp+'" class="platform-color">Email Address</label><input maxlength="100" type="text" id="request-account-email-'+now_timestamp+'" class="full-rounded form-field platform-border-color person-email"/> </div></div> </div></div>');
                    $('.people-invitation .inputs .inputs-row').addClass('more-than-one-row');

                    $('.people-invitation .inputs .inputs-row .remove-row a').unbind().click(function() {
                        $(this).closest('.inputs-row').remove();

                        if ($('.people-invitation .inputs .inputs-row').length == 1) {
                            $('.people-invitation .inputs .inputs-row').removeClass('more-than-one-row');
                        }
                    });
                });

                $('.submit-form-invite-people').unbind().click(function() {
                    $('.title-and-subtitle .alert').remove();
                    $('.people-invitation .error-handle').remove();
                    var submit_error = false;

                    var invited_people_arr = [];
                    for (var i = 0, len = $('.people-invitation .inputs-row').length; i < len; i += 1) {
                        invited_people_arr[i] = {};
                        for (var y = 0, inputs_len = $('.people-invitation .inputs-row').eq(i).find('input').length; y < inputs_len; y += 1) {
                            var current_input = $('.people-invitation .inputs-row').eq(i).find('input').eq(y);
                            if (current_input.val().trim() == '') {
                                projectData.utils.customErrorHandle(current_input.parent().parent(), 'Please enter empty fields.');
                                submit_error = true;
                                break;
                            }

                            if (current_input.hasClass('person-name')) {
                                invited_people_arr[i].name = current_input.val().trim();
                            } else if (current_input.hasClass('person-email')) {
                                if (!basic.validateEmail(current_input.val().trim())) {
                                    projectData.utils.customErrorHandle(current_input.parent().parent(), 'Please enter valid email.');
                                    submit_error = true;
                                    break;
                                }
                                invited_people_arr[i].email = current_input.val().trim();
                            }
                        }
                    }

                    if (!submit_error) {
                        projectData.requests.invitePatients(function(response) {
                            if (response.success) {
                                $('.people-invitation .inputs .added-row').remove();
                                $('.people-invitation #request-account-name-0').val('');
                                $('.people-invitation #request-account-email-0').val('');
                                $('.people-invitation .inputs .inputs-row').removeClass('more-than-one-row');
                                if (response.data.success_invite) {
                                    $('.title-and-subtitle').append('<div class="alert alert-success fs-20 fs-xs-16 margin-top-20">'+response.data.success_invite+'</div>');
                                }
                                if (response.data.already_invited) {
                                    $('.title-and-subtitle').append('<div class="alert alert-info fs-20 fs-xs-16 margin-top-20">'+response.data.already_invited+'</div>');
                                }
                                if (response.data.error_invite) {
                                    $('.title-and-subtitle').append('<div class="alert alert-danger fs-20 fs-xs-16 margin-top-20">'+response.data.error_invite+'</div>');
                                }
                            } else if (response.error) {
                                $('.title-and-subtitle').append('<div class="alert alert-danger fs-20 fs-xs-16 margin-top-20">'+response.data+'</div>');
                            }
                        },
                        JSON.stringify(invited_people_arr));
                    }
                });

                var checkIfInvites = setInterval(function() {
                    if ($('table.table.table-without-reorder').length > 0) {
                        clearInterval(checkIfInvites);
                        $('table.table.table-without-reorder').DataTable({
                            ordering: true,
                            order: [],
                            columnDefs: [{
                                orderable: false,
                                targets: 'no-sort'
                            }],
                            aaSorting: []
                        });
                    }
                }, 500);
            },
            pushNotifications: function() {
                projectData.utils.initDatetimePicker();

                $('.push-notifications-form textarea').on('input', function() {
                    if ($(this).val().trim() != '') {
                        $(this).addClass('colorful-border');
                    } else {
                        $(this).removeClass('colorful-border');
                    }
                });

                $('.schedule-button').click(function() {
                    $(this).toggleClass('active');
                    $(this).find('.inner-dot').toggleClass('platform-background-color');

                    if ($(this).hasClass('active')) {
                        $('.daterangepicker-parent .field').removeClass('hide');
                        $('.daterangepicker-parent label').addClass('active-label');
                        $('.daterangepicker-parent input[type="text"]').addClass('colorful-border');

                        $('.datetimepicker').trigger('focus');
                    } else {
                        $('.daterangepicker-parent .field').addClass('hide');
                    }
                });

                $('.push-notifications-custom-form .send-now').click(function() {
                    $('.push-notifications-custom-form .error-handle').remove();

                    if ($('.push-notifications-custom-form #title').val().trim() == '') {
                        projectData.utils.customErrorHandle($('.push-notifications-custom-form #title').parent().parent(), 'Title is required');
                    } else {
                        if ($('.schedule-button').hasClass('active')) {
                            // schedule push notification
                            if ($('.push-notifications-custom-form #datetimepicker').val().trim() == '') {
                                projectData.utils.customErrorHandle($('.push-notifications-custom-form #datetimepicker').parent().parent(), 'Date is required');
                            } else {
                                var requestData = {
                                    token: JSON.parse(window.localStorage.getItem('currentDentist')).token,
                                    id: JSON.parse(window.localStorage.getItem('currentDentist')).id,
                                    title: $('.push-notifications-custom-form #title').val().trim(),
                                    time: $('.push-notifications-custom-form #datetimepicker').val().trim()
                                };

                                if ($('.push-notifications-custom-form #message').val().trim() != '') {
                                    requestData.message = $('.push-notifications-custom-form #message').val().trim();
                                }
                                projectData.requests.registerPushNotification(function(response) {
                                    if (response.success) {
                                        $('.push-notifications-custom-form #title').val('');
                                        $('.push-notifications-custom-form #message').val('');
                                        $('.push-notifications-custom-form #datetimepicker').val('');

                                        $('.push-notifications-custom-form .custom-response').html('<div class="alert alert-success fs-16 margin-top-10">'+$('.push-notifications-custom-form .custom-response').attr('data-push-notifications-register-success')+'</div>').removeClass('hide');
                                    } else if (response.error) {
                                        $('.push-notifications-custom-form .custom-response').html('<div class="alert alert-danger fs-16 margin-top-10">'+$('.push-notifications-custom-form .custom-response').attr('data-push-notifications-failed')+'</div>').removeClass('hide');
                                    }
                                }, requestData);
                            }
                        } else {
                            // send push notification now
                            var requestData = {
                                token: JSON.parse(window.localStorage.getItem('currentDentist')).token,
                                id: JSON.parse(window.localStorage.getItem('currentDentist')).id,
                                title: $('.push-notifications-custom-form #title').val().trim()
                            };

                            if ($('.push-notifications-custom-form #message').val().trim() != '') {
                                requestData.message = $('.push-notifications-custom-form #message').val().trim();
                            }

                            projectData.requests.sendPushNotification(function(response) {
                                if (response.success) {
                                    $('.push-notifications-custom-form #title').val('');
                                    $('.push-notifications-custom-form #message').val('');
                                    $('.push-notifications-custom-form #datetimepicker').val('');

                                    $('.push-notifications-custom-form .custom-response').html('<div class="alert alert-success fs-16 margin-top-10">'+$('.push-notifications-custom-form .custom-response').attr('data-push-notifications-sent-success')+'</div>').removeClass('hide');
                                } else if (response.error) {
                                    $('.push-notifications-custom-form .custom-response').html('<div class="alert alert-danger fs-16 margin-top-10">'+$('.push-notifications-custom-form .custom-response').attr('data-push-notifications-failed')+'</div>').removeClass('hide');
                                }
                            }, requestData);
                        }
                    }
                });

                var checkIfPushNotifications = setInterval(function() {
                    if ($('table.table.table-without-reorder').length > 0) {
                        clearInterval(checkIfPushNotifications);
                        $('table.table.table-without-reorder').DataTable({
                            ordering: true,
                            order: [],
                            columnDefs: [{
                                orderable: false,
                                targets: 'no-sort'
                            }],
                            aaSorting: []
                        });
                    }
                }, 500);
            }
        },
        patient: {
            homepage: function() {
                console.log('========= homepage ====================');
                $('body').addClass('platform-background');

                if (window.localStorage.getItem('currentPatient') != null) {
                    var checkIfSvgImages = setInterval(function() {
                        if ($('.svg-parent').length > 0) {
                            clearInterval(checkIfSvgImages);
                            for (var i = 0, len = $('.svg-parent').length; i < len; i+=1) {
                                $('.svg-parent').eq(i).html(decodeURIComponent($('.svg-parent').eq(i).attr('data-svg')));
                            }
                        }
                    }, 1000);

                    projectData.general_logic.updatePlatformColors(JSON.parse(window.localStorage.getItem('currentPatient')).patient_of);
                }
            },
            myWallet: function() {
                if (window.localStorage.getItem('currentPatient') != null) {
                    projectData.general_logic.updatePlatformColors(JSON.parse(window.localStorage.getItem('currentPatient')).patient_of);
                }

                if ($('.copy-btn').length) {
                    var clipboard = new ClipboardJS('.copy-btn');
                    var clipboard_timer;
                    clipboard.on('success', function(e) {
                        $('.copy-btn').tooltip('show');

                        clearInterval(clipboard_timer);

                        clipboard_timer = setTimeout(function()   {
                            $('.copy-btn').tooltip('hide');
                        }, 1500);
                    });

                    $('.copy-btn').tooltip({
                        trigger: 'click'
                    });
                }

                if ($('.symbol').length) {
                    if (is_hybrid || basic.isMobile()) {
                        // hybrid or mobile bind click event, because hover makes non sence on mobile devices
                        $('.symbol').click(function(){
                            $('.dropdown-hidden-menu').toggle();

                            // accessibility button attribute toggle
                            if ($(this).attr('aria-pressed') == 'false') {
                                $(this).attr('aria-pressed', 'true');
                            } else {
                                $(this).attr('aria-pressed', 'false');
                            }
                        });
                    } else {
                        // on desktop devices bind hover event
                        $('.symbol').hover(function(){
                            $('.dropdown-hidden-menu').show();
                        }, function(){
                            $('.dropdown-hidden-menu').hide();
                        });
                    }
                }

                $('.search-input').on('focus', function() {
                    $('.search-result').show();
                });

                if (clickingOutsideSearchResultInit) {
                    clickingOutsideSearchResultInit = false;

                    $(document).on('click', checkIfClickedOutsideSearchResult);

                    function checkIfClickedOutsideSearchResult(event) {
                        var specifiedElement = document.getElementById('search-result-parent');
                        if (specifiedElement != null) {
                            var isClickInside = specifiedElement.contains(event.target);
                            if (!isClickInside) {
                                $('.search-result').hide();
                            }
                        }
                    }
                }

                var ajaxSent = false;
                function initAddressDeleteBind() {
                    $('.search-body ul li button').click(function() {
                        var this_btn = $(this);
                        var delete_address_book_wallet_address = {};
                        delete_address_book_wallet_address.callback = function (result) {
                            if (result && !ajaxSent) {
                                ajaxSent = true;
                                $.ajax({
                                    type: 'POST',
                                    url: 'https://dcn-hub-app-api.dentacoin.com/patient/delete-address',
                                    data: {
                                        token: JSON.parse(window.localStorage.getItem('currentPatient')).token,
                                        id: this_btn.closest('li').attr('data-id')
                                    },
                                    dataType: 'json',
                                    headers: {
                                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                                    },
                                    success: function (response) {
                                        ajaxSent = false;
                                        if (response.success) {
                                            this_btn.closest('li').remove();
                                            $('.search-result').hide();
                                            $('.search-input').val('');
                                            basic.showAlert(response.message, '', true);
                                        } else if (response.error) {
                                            basic.showAlert(response.message, '', true);
                                        }
                                    }
                                });
                            }
                        };
                        basic.showConfirm('Are you sure you want to remove this Wallet Address from Address Book?', '', delete_address_book_wallet_address, true);
                    });
                }
                initAddressDeleteBind();

                $('.search-result .search-footer .add-to-address-book').click(function() {
                    basic.closeDialog();
                    basic.showDialog('<h2 class="fs-24 fs-xs-22 fs-xs-18 padding-bottom-20 text-center">Save to Address Book</h2><div class="max-width-350 margin-0-auto"><label for="contact-name" class="fs-16 fs-xs-14">Name:</label><input type="text" id="contact-name" maxlength="50" class="custom-input"></div><div class="max-width-350 margin-0-auto padding-top-15"><label for="wallet-address" class="fs-16 fs-xs-14">Wallet Address:</label><input type="text" id="wallet-address" maxlength="42" class="custom-input"></div><div class="padding-top-20 padding-bottom-15 text-center"><a href="javascript:void(0);" class="platform-custom-button module save-to-address-book min-width-160">Save</a></div>', 'popup-save-to-address-book', null, true);

                    var ajaxSent = false;
                    $('.save-to-address-book').click(function() {
                        if ($('.popup-save-to-address-book #contact-name').val().trim() == '') {
                            basic.showAlert('Please enter name.', '', true);
                        } else if ($('.popup-save-to-address-book #wallet-address').val().trim().length != 42 || $('.popup-save-to-address-book #wallet-address').val().trim().substring(0, 2) != '0x'){
                            basic.showAlert('Please enter valid Wallet Address.', '', true);
                        } else if (!ajaxSent) {
                            ajaxSent = true;
                            var addressName = $('.popup-save-to-address-book #contact-name').val().trim();
                            var walletAddress = $('.popup-save-to-address-book #wallet-address').val().trim();

                            $.ajax({
                                type: 'POST',
                                url: 'https://dcn-hub-app-api.dentacoin.com/patient/save-address',
                                data: {
                                    name: addressName,
                                    address: walletAddress,
                                    token: JSON.parse(window.localStorage.getItem('currentPatient')).token,
                                    id: JSON.parse(window.localStorage.getItem('currentPatient')).id
                                },
                                dataType: 'json',
                                headers: {
                                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                                },
                                success: function (response) {
                                    ajaxSent = false;
                                    if (response.success) {
                                        basic.closeDialog();
                                        basic.showAlert(response.message, '', true);


                                        if (response.addresses) {
                                            var addressesHtml = '';

                                            for (var i = 0, len = response.addresses.length; i < len; i+=1) {
                                                var addressLabel = '';
                                                if (response.addresses[i].dcn_address_label != '' && response.addresses[i].dcn_address_label != undefined && response.addresses[i].dcn_address_label != null) {
                                                    addressLabel = response.addresses[i].dcn_address_label+' ('+response.addresses[i].dcn_address+')';
                                                } else {
                                                    addressLabel = '('+response.addresses[i].dcn_address+')';
                                                }
                                                addressesHtml += '<li class="platform-color removeable-element fs-0" data-id="'+response.addresses[i].id+'"><a href="javascript:void(0);" class="platform-background-on-hover inline-block" data-value="'+response.addresses[i].dcn_address+'">'+addressLabel+'</a><button type="button" class="remove-address-book-element inline-block">×</button></li>';
                                            }

                                            $('#addresses-list').html(addressesHtml);
                                            initAddressDeleteBind();
                                        }
                                    } else if (response.error) {
                                        basic.showAlert(response.message, '', true);
                                    }
                                }
                            });
                        }
                    });
                });
            },
            editAccount: function() {
                if (window.localStorage.getItem('currentPatient') != null) {
                    projectData.general_logic.updatePlatformColors(JSON.parse(window.localStorage.getItem('currentPatient')).patient_of);
                }
            },
            managePrivacy: function() {
                if (window.localStorage.getItem('currentPatient') != null) {
                    projectData.general_logic.updatePlatformColors(JSON.parse(window.localStorage.getItem('currentPatient')).patient_of);
                }

                /*$('.download-data').click(function() {
                    alert('Test download.');
                    var profileDataUrl = 'https://booking.dentaprime.com/api/v1/hub/download-profile?token=' + JSON.parse(window.localStorage.getItem('currentPatient')).token;
                    if (is_hybrid) {
                        if (basic.getMobileOperatingSystem() == 'Android') {
                            setTimeout(function () {
                                //downloading the file in mobile device file system
                                hybridAppFileDownload('hup-app-profile-data.zip', profileDataUrl, function() {
                                    $('.camp-successful-data-download').html('<div class="success-handle margin-bottom-20 margin-top-15">Your profile data has been downloaded to the top-level directory of your device file system.</div>');
                                }, cordova.file.externalRootDirectory);
                            }, 500);
                        } else if (basic.getMobileOperatingSystem() == 'iOS') {
                            //using export plugin, because in iOS there is no such thing as direct file download
                            // window.plugins.socialsharing.share(profileDataUrl);
                            window.open(profileDataUrl, '_system');
                            return false;
                        }
                    } else {
                        $('.camp-successful-data-download').html('<div class="success-handle margin-bottom-20 margin-top-15">Your profile data has been downloaded to the top-level directory of your device file system.</div>');
                        window.open(profileDataUrl, '_blank');
                    }
                });*/
            },
            patientLoginPage: async function() {
                if (is_hybrid) {
                    $('.social-login-btn').addClass('mobile-app');

                    $('.civic-custom-btn').click(function() {
                        if (window.localStorage.getItem('user_civic_email') == null) {
                            // display email field to let user save his civic email into the mobile app
                            $('.form-login-fields').hide();
                            $('.login-parent').append('<div class="padding-bottom-50 mobile-proceeding-to-civic"><div class="padding-bottom-10 field-parent fs-16">Open your Civic Wallet mobile app and paste your account email:</div><div class="padding-bottom-10 field-parent"><div class="custom-google-label-style module" data-input-colorful-border="true"><label for="mobile-logging-civic-email">Civic Wallet email</label><input class="full-rounded form-field" maxlength="100" type="email" id="mobile-logging-civic-email" /></div></div><div class="padding-bottom-20"><a href="javascript:void(0)" class="social-login-btn civic-style lato-regular fs-20 fs-xs-18">Continue with Civic</a></div><div><a href="javascript:void(0);" class="go-back-to-logins fs-16">← Go back</a></div></div>');

                            $('.login-parent .custom-google-label-style label').addClass('active-label');
                            $('.login-parent .custom-google-label-style #mobile-logging-civic-email').focus();

                            var civicMobileProceeded = false;
                            $('.mobile-proceeding-to-civic .social-login-btn').click(function() {
                                //clear prev errors
                                if ($('.mobile-proceeding-to-civic .error-handle').length) {
                                    $('.mobile-proceeding-to-civic .error-handle').remove();
                                }

                                if ($('#mobile-logging-civic-email').val().trim() != '' && basic.validateEmail($('#mobile-logging-civic-email').val().trim())) {
                                    if (!civicMobileProceeded) {
                                        civicMobileProceeded = true;

                                        window.localStorage.setItem('user_civic_email', $('#mobile-logging-civic-email').val().trim());

                                        if (!$('#iframe-civic-popup').length) {
                                            $('body').append('<iframe src="'+$('.main-content').attr('data-dentacoinDomain')+'/iframe-civic-popup?type=login" id="iframe-civic-popup"></iframe>');
                                        }
                                    }
                                } else {
                                    projectData.utils.customErrorHandle($('#mobile-logging-civic-email').closest('.field-parent'), 'Please enter valid email.');
                                }
                            });

                            $('.go-back-to-logins').click(function() {
                                $('.mobile-proceeding-to-civic').remove();
                                $('.form-register-fields, .form-login-fields').show();
                            });
                        } else {
                            if (!$('#iframe-civic-popup').length) {
                                $('body').append('<iframe src="'+$('.main-content').attr('data-dentacoinDomain')+'/iframe-civic-popup?type=login" id="iframe-civic-popup"></iframe>');
                            }
                        }
                    });

                    if (!civic_iframe_removedEventLoaded) {
                        civic_iframe_removedEventLoaded = true;

                        window.addEventListener('message', function(event) {
                            if (event.data.event_id === 'civic_iframe_removed' && $('#iframe-civic-popup').length) {
                                if ($('.mobile-proceeding-to-civic').length) {
                                    $('.mobile-proceeding-to-civic').remove();
                                }
                                if ($('.form-register-fields').length) {
                                    $('.form-register-fields').show();
                                }
                                if ($('.form-login-fields').length) {
                                    $('.form-login-fields').show();
                                }

                                projectData.general_logic.proceedWithMobileAppAuth();
                                $('#iframe-civic-popup').remove();
                            }
                        });
                    }
                } else {
                    if (!hasOwnProperty.call(loadedLibs, 'civic')) {
                        loadedLibs.civic = true;
                        await $.getScript('https://dentacoin.com/assets/libs/civic-login/civic-combined-login.js?v='+new Date().getTime(), function() {});
                    }
                }

                if (!hasOwnProperty.call(loadedLibs, 'facebook')) {
                    loadedLibs.facebook = true;
                    await $.getScript('https://dentacoin.com/assets/libs/facebook-login/facebook-combined-login.js?v='+new Date().getTime(), function() {});
                }

                $(document).off('facebookCustomBtnClicked');
                $(document).on('facebookCustomBtnClicked', function (event) {
                    $('.patient-login .custom-error').addClass('hide');
                });

                $(document).off('cannotLoginBecauseOfMissingCookies');
                $(document).on('cannotLoginBecauseOfMissingCookies', function (event) {
                    $('.patient-login .custom-error').html($('.patient-login').attr('data-cookies-error')).removeClass('hide');
                });

                $('body').removeClass('platform-background');

                if (window.localStorage.getItem('currentPatient') != null) {
                    projectData.general_logic.updatePlatformColors(JSON.parse(window.localStorage.getItem('currentPatient')).patient_of);
                }
            },
            patientRegisterPage: async function() {
                if (is_hybrid) {
                    $('.social-login-btn').addClass('mobile-app');

                    $('.civic-custom-btn').click(function() {
                        var thisBtn = $(this);
                        if ($('.form-register-fields .error-handle').length) {
                            $('.form-register-fields .error-handle').remove();
                        }

                        if (!$('#agree-over-eighteen').is(':checked') || !$('#privacy-policy-registration-patient').is(':checked')) {

                            projectData.utils.customErrorHandle($('.form-register-fields'), 'Please confirm you\'re 18 years of age and agree with our Privacy Policy.');
                            return false;
                        }

                        if (window.localStorage.getItem('user_civic_email') == null) {
                            // display email field to let user save his civic email into the mobile app

                            $('.form-register-fields').hide();
                            $('.register-parent').append('<div class="padding-bottom-50 mobile-proceeding-to-civic"><div class="padding-bottom-10 field-parent fs-16">Open your Civic Wallet mobile app and paste your account email:</div><div class="padding-bottom-10 field-parent"><div class="custom-google-label-style module" data-input-colorful-border="true"><label for="mobile-logging-civic-email">Civic Wallet email</label><input class="full-rounded form-field" maxlength="100" type="email" id="mobile-logging-civic-email" /></div></div><div class="padding-bottom-20"><a href="javascript:void(0)" class="social-login-btn civic-style lato-regular fs-20 fs-xs-18">Continue with Civic</a></div><div><a href="javascript:void(0);" class="go-back-to-logins fs-16">← Go back</a></div></div>');

                            $('.register-parent .custom-google-label-style label').addClass('active-label');
                            $('.register-parent .custom-google-label-style #mobile-logging-civic-email').focus();

                            var civicMobileProceeded = false;
                            $('.mobile-proceeding-to-civic .social-login-btn').click(function() {
                                //clear prev errors
                                if ($('.mobile-proceeding-to-civic .error-handle').length) {
                                    $('.mobile-proceeding-to-civic .error-handle').remove();
                                }

                                if ($('#mobile-logging-civic-email').val().trim() != '' && basic.validateEmail($('#mobile-logging-civic-email').val().trim())) {
                                    if (!civicMobileProceeded) {
                                        civicMobileProceeded = true;

                                        window.localStorage.setItem('user_civic_email', $('#mobile-logging-civic-email').val().trim());
                                        if (!$('#iframe-civic-popup').length) {
                                            $('body').append('<iframe src="'+$('.main-content').attr('data-dentacoinDomain')+'/iframe-civic-popup?type=register" id="iframe-civic-popup"></iframe>');
                                        }
                                    }
                                } else {
                                    projectData.utils.customErrorHandle($('#mobile-logging-civic-email').closest('.field-parent'), 'Please enter valid email.');
                                }
                            });

                            $('.go-back-to-logins').click(function() {
                                $('.mobile-proceeding-to-civic').remove();
                                $('.form-register-fields, .form-login-fields').show();
                            });
                        } else {
                            // civic email already saved in mobile app
                            if (!$('#iframe-civic-popup').length) {
                                $('body').append('<iframe src="'+$('.main-content').attr('data-dentacoinDomain')+'/iframe-civic-popup?type=register" id="iframe-civic-popup"></iframe>');
                            }
                        }
                    });

                    if (!civic_iframe_removedEventLoaded) {
                        civic_iframe_removedEventLoaded = true;

                        window.addEventListener('message', function(event) {
                            if (event.data.event_id === 'civic_iframe_removed' && $('#iframe-civic-popup').length) {
                                if ($('.mobile-proceeding-to-civic').length) {
                                    $('.mobile-proceeding-to-civic').remove();
                                }
                                if ($('.form-register-fields').length) {
                                    $('.form-register-fields').show();
                                }
                                if ($('.form-login-fields').length) {
                                    $('.form-login-fields').show();
                                }

                                projectData.general_logic.proceedWithMobileAppAuth();
                                $('#iframe-civic-popup').remove();
                            }
                        });
                    }
                } else {
                    if (!hasOwnProperty.call(loadedLibs, 'civic')) {
                        loadedLibs.civic = true;
                        await $.getScript('https://dentacoin.com/assets/libs/civic-login/civic-combined-login.js?v='+new Date().getTime(), function() {});
                    }
                }

                if (!hasOwnProperty.call(loadedLibs, 'facebook')) {
                    loadedLibs.facebook = true;
                    await $.getScript('https://dentacoin.com/assets/libs/facebook-login/facebook-combined-login.js?v='+new Date().getTime(), function() {});
                }

                basic.initCustomCheckboxes('.patient-register-by-invite');

                var ageStopper = true;
                var privacyPolicyStopper = true;
                $('.patient-register-by-invite #agree-over-eighteen').on('change', function() {
                    if ($(this).is(':checked')) {
                        ageStopper = false;
                    } else {
                        ageStopper = true;
                    }

                    removeSocialLoginStopper();
                });

                $('.patient-register-by-invite #privacy-policy-registration-patient').on('change', function() {
                    if ($(this).is(':checked')) {
                        privacyPolicyStopper = false;
                    } else {
                        privacyPolicyStopper = true;
                    }

                    removeSocialLoginStopper();
                });

                function removeSocialLoginStopper() {
                    if (ageStopper || privacyPolicyStopper) {
                        $('.social-login-btn').attr('custom-stopper', true);
                    } else {
                        $('.social-login-btn').attr('custom-stopper', false);
                    }
                }

                $(document).off('facebookCustomBtnClicked');
                $(document).on('facebookCustomBtnClicked', function (event) {
                    $('.patient-register-by-invite .custom-error').addClass('hide');
                });

                $(document).off('cannotLoginBecauseOfMissingCookies');
                $(document).on('cannotLoginBecauseOfMissingCookies', function (event) {
                    $('.patient-register-by-invite .custom-error').html($('.patient-register-by-invite').attr('data-cookies-error')).removeClass('hide');
                });

                $(document).off('customCivicFbStopperTriggered');
                $(document).on('customCivicFbStopperTriggered', function (event) {
                    $('.patient-register-by-invite .custom-error').html($('.patient-register-by-invite').attr('data-years-and-privacy-error')).removeClass('hide');
                });
                $('body').removeClass('platform-background');

                if (window.localStorage.getItem('currentPatient') != null) {
                    projectData.general_logic.updatePlatformColors(JSON.parse(window.localStorage.getItem('currentPatient')).patient_of);
                }
            },
            requestAccount: function() {
                $('body').removeClass('platform-background');

                basic.initCustomCheckboxes('.patient-request-account');

                if (window.localStorage.getItem('currentPatient') != null) {
                    projectData.general_logic.updatePlatformColors(JSON.parse(window.localStorage.getItem('currentPatient')).patient_of);
                }
            },
            dentistRequestAccount: function() {
                $('body').removeClass('platform-background');

                basic.initCustomCheckboxes('.dentist-request-account');

                if (window.localStorage.getItem('currentPatient') != null) {
                    projectData.general_logic.updatePlatformColors(JSON.parse(window.localStorage.getItem('currentPatient')).patient_of);
                }
            }
        }
    },
    general_logic: {
        updatePlatformColors: function(id) {
            projectData.requests.getDentistData(function(getDentistData_response) {
                if (getDentistData_response.success) {
                    $('.platform-colors').remove();
                    var platform_text_color = getDentistData_response.data.text_color;
                    var platform_base_color = getDentistData_response.data.hub_color;
                    var platform_color_and_background = '<style class="platform-colors">/*Text color*/.platform-text-color{color:'+platform_text_color+';}.platform-fill-color{fill:'+platform_base_color+';}/*Base color*/ .module.platform-color,.module.custom-google-label-style label.active-label.platform-color,.platform-color{color:'+platform_base_color+';}.platform-color-important{color:'+platform_base_color+' !important;}.bootbox .bootbox-close-button{color:'+platform_base_color+' !important;}.btn-primary{background-color:'+platform_base_color+' !important;border-color: '+platform_base_color+' !important;}.module.hover.platform-color:hover{background-color:'+platform_base_color+';}.module.platform-background-color,.platform-background-color{background-color:'+platform_base_color+';}.module.hover.platform-background-color:hover{color:'+platform_base_color+';}.module.platform-border-color,.platform-border-color,.module.custom-google-label-style input.colorful-border.platform-border-color{border-color: '+platform_base_color+';}.edit-mode .platform-border-color-important, .important.platform-border-color{border-color: '+platform_base_color+' !important;}.svg-platform-fill{fill: '+platform_base_color+';}.svg-platform-fill-important{fill: '+platform_base_color+' !important;}.platform-background-on-hover:hover {background-color:'+platform_base_color+';}/*Background color/ image*/';
                    if (getDentistData_response.data.hub_background_type == 'hex-code') {
                        platform_color_and_background += '.platform-background{background-color:'+getDentistData_response.data.hub_background+';}</style>';
                    } else if (getDentistData_response.data.hub_background_type == 'preset-background' || getDentistData_response.data.hub_background_type == 'upload-image') {
                        platform_color_and_background += '.platform-background{background-image:url('+getDentistData_response.data.hub_background+');background-position:center center;background-repeat:no-repeat;background-size:cover;}</style>';
                    }

                    platform_color_and_background += '</style>';
                    $('head').append(platform_color_and_background);
                }
            }, id);
        },
        showLoader: function() {
            if (!$('.camping-loader').hasClass('loaded')) {
                $('.camping-loader').html('<div class="response-layer"><div class="wrapper"><picture itemscope="" itemtype="http://schema.org/ImageObject"><source media="(max-width: 768px)" srcset="/assets/images/dcn-flipping-coin-logo-loader-v3-mobile.gif"><img itemprop="contentUrl" src="/assets/images/dcn-flipping-coin-logo-loader-v3_desktop.gif" class="max-width-250 max-width-xs-200" alt="Loader"></picture></div></div>').addClass('loaded');
                $('.camping-loader .response-layer').show();
            } else {
                $('.camping-loader .response-layer').show();
            }
        },
        hideLoader: function() {
            $('.camping-loader .response-layer').hide();
        },
        cookie: async function() {
            if (basic.cookies.get('performance_cookies') == '' && basic.cookies.get('performance_cookies') == '' && basic.cookies.get('performance_cookies') == '' && basic.cookies.get('performance_cookies') == '' && !$('body').hasClass('dentacoin-map-iframe')) {
                if (!hasOwnProperty.call(loadedLibs, 'dentacoinPackageJs')) {
                    loadedLibs.dentacoinPackageJs = true;
                    $('head').append('<link rel="stylesheet" type="text/css" href="https://dentacoin.com/assets/libs/dentacoin-package/css/style-cookie.css?v='+new Date().getTime()+'"/>');
                    await $.getScript('https://dentacoin.com/assets/libs/dentacoin-package/js/init.js?v='+new Date().getTime(), function() {});

                    if (typeof(dcnCookie) != 'undefined') {
                        dcnCookie.init({});
                    }
                }
            }
        },
        updateExternalURLsForiOSDevice: function() {
            //Method that check if the device is mobile app and if the project is hybrid and then overwrite all _blank targets to _system. _blank is not working in iOS in WebView
            if ($('.data-external-link').length && is_hybrid) {
                for (var i = 0, len = $('.data-external-link').length; i < len; i+=1) {
                    if (!$('.data-external-link').eq(i).hasClass('passed')) {
                        $('.data-external-link').eq(i).addClass('passed');
                        $('.data-external-link').eq(i).attr('data-href', $('.data-external-link').eq(i).attr('href'));

                        $('.data-external-link').eq(i).click(function() {
                            window.open($(this).attr('data-href'), '_system');
                            return false;
                        });
                        $('.data-external-link').eq(i).removeAttr('target');
                        $('.data-external-link').eq(i).attr('href', '#');
                    }
                }
            }
        },
        setIsHybrid: function() {
            if (is_hybrid == undefined && $('.main-content').length) {
                is_hybrid = $('.main-content').attr('hybrid') == 'true';

                if (is_hybrid) {
                    // opening the external links in app browser
                    $(document).on('click', '.in-app-browser-link', function() {
                        if ($(this).attr('data-phone') == undefined) {
                            event.preventDefault();

                            var currentHref = $(this).attr('href');
                            if (currentHref.includes('wallet')) {
                                /*window.plugins.launcher.canLaunch({uri:'wallet://'}, function() {
                                    console.log('IOS wallet EXISTS');
                                }, function() {
                                    console.log('IOS wallet DOES NOT EXISTS');
                                });*/

                                if (basic.getMobileOperatingSystem() == 'Android') {
                                    window.plugins.launcher.canLaunch({packageName:'com.dentacoin.wallet'}, function() {
                                        console.log('wallet app is installed');
                                        // wallet app is installed
                                        window.plugins.launcher.launch({packageName:'com.dentacoin.wallet'}, function() {

                                        }, function() {
                                            basic.showAlert(default_error_message, '', true);
                                        });
                                    }, function() {
                                        // dentacoin wallet app is not installed
                                        cordova.InAppBrowser.open('https://play.google.com/store/apps/details?id=wallet.dentacoin.com&hl=en', '_blank', 'location=yes,zoom=no,toolbarposition=top,closebuttoncaption=Back,presentationstyle=fullscreen,fullscreen=yes');
                                    });
                                } else if (basic.getMobileOperatingSystem() == 'iOS') {
                                    window.open('https://apps.apple.com/us/app/dentacoin-wallet/id1478732657', '_system');
                                }
                            } else if (currentHref.includes('dentacare')) {
                                /*window.plugins.launcher.canLaunch({uri:'dentacare://'}, function() {
                                    console.log('IOS DENTARE EXISTS');
                                }, function() {
                                    console.log('IOS DENTARE DOES NOT EXISTS');
                                });*/

                                if (basic.getMobileOperatingSystem() == 'Android') {
                                    window.plugins.launcher.canLaunch({packageName:'com.dentacoin.dentacare'}, function() {
                                        console.log('dentacare app is installed');
                                        // dentacare app is installed
                                        window.plugins.launcher.launch({packageName:'com.dentacoin.dentacare'}, function() {

                                        }, function() {
                                            basic.showAlert(default_error_message, '', true);
                                        });
                                    }, function() {
                                        // dentacoin dentacare app is not installed
                                        cordova.InAppBrowser.open('https://play.google.com/store/apps/details?id=com.dentacoin.dentacare&hl=en', '_blank', 'location=yes,zoom=no,toolbarposition=top,closebuttoncaption=Back,presentationstyle=fullscreen,fullscreen=yes');
                                    });
                                } else if (basic.getMobileOperatingSystem() == 'iOS') {
                                    window.open('https://apps.apple.com/bg/app/dentacare-health-training/id1274148338', '_system');
                                }
                            } else {
                                cordova.InAppBrowser.open(currentHref, '_blank', 'location=yes,zoom=no,toolbarposition=top,closebuttoncaption=Back,presentationstyle=fullscreen,fullscreen=yes');
                            }
                        }
                    });
                } else {
                    projectData.general_logic.cookie();
                }
            }
        },
        readURL: function(input, callback, failed_callback) {
            // reading file and check size and extension
            if (input.files && input.files[0]) {
                var filename = input.files[0].name;
                // check file size
                if (2 < basic.bytesToMegabytes(input.files[0].size)) {
                    if (failed_callback != undefined) {
                        failed_callback();
                    }
                    basic.showAlert('The image you selected is large. Max size: 2MB.', '', true);
                    return false;
                } else {
                    //check image extension
                    if (jQuery.inArray(filename.split('.').pop(), allowed_imgs_extensions) !== -1) {
                        var reader = new FileReader();
                        reader.onload = function (e) {
                            console.log(e, 'e');
                            callback(e, filename);
                        };
                        reader.readAsDataURL(input.files[0]);
                    } else {
                        if (failed_callback != undefined) {
                            failed_callback();
                        }
                        basic.showAlert('Please select image in jpg, jpeg, png or svg format.', '', true);
                        return false;
                    }
                }
            }
        },
        proceedWithMobileAppAuth: function() {
            projectData.requests.saveCivicEmailTryingToLoginFromMobileApp({
                email: window.localStorage.getItem('user_civic_email'),
                type: 'dentacoin'
                /*type: 'hubapp'*/
            }, function(response) {
                console.log(response, 'proceedWithMobileAppAuth');
                /*if (response.success) {
                    $('.mobile-proceeding-to-civic').remove();
                    $('.form-login-fields').show();

                    if (thisBtn.hasClass('type-login')) {
                        window.open('https://dentacoin.com/?dcn-gateway-type=patient-login&open-civic-login=true', '_system');
                    } else if (thisBtn.hasClass('type-register')) {
                        window.open('https://dentacoin.com/?dcn-gateway-type=patient-register&open-civic-register=true', '_system');
                    }
                } else {
                    basic.showAlert('Something went wrong with the external login provider, please try again later or contact <a href="mailto:admin@dentacoin.com">admin@dentacoin.com</a>.', '', true);
                }*/
            });
        }
    },
    requests: {
        getDefaultApplications: function (id, callback) {
            $.ajax({
                type: 'GET',
                url: 'https://dcn-hub-app-api.dentacoin.com/dentist/get-default-applications-which-dentist-dont-have-yet/'+id,
                dataType: 'json',
                success: function(response) {
                    callback(response);
                }
            });
        },
        getDeletedAppsForDentist: function (id, callback) {
            $.ajax({
                type: 'GET',
                url: 'https://dcn-hub-app-api.dentacoin.com/dentist/get-deleted-applications-for-dentist/'+id,
                dataType: 'json',
                success: function(response) {
                    callback(response);
                }
            });
        },
        getDentistData: function (callback, id) {
            $.ajax({
                type: 'GET',
                url: 'https://dcn-hub-app-api.dentacoin.com/dentist/get-dentist-data/' + id,
                dataType: 'json',
                success: function(response) {
                    callback(response);
                }
            });
        },
        editDentistData: function (post_data, callback) {
            $.ajax({
                type: 'POST',
                url: 'https://dcn-hub-app-api.dentacoin.com/dentist/edit-dentist-data',
                data: post_data,
                dataType: 'json',
                success: function(response) {
                    callback(response);
                }
            });
        },
        editDentistColors: function (post_data, callback) {
            $.ajax({
                type: 'POST',
                url: 'https://dcn-hub-app-api.dentacoin.com/dentist/edit-dentist-colors',
                data: post_data,
                dataType: 'json',
                success: function(response) {
                    callback(response);
                }
            });
        },
        addDentistApplication: function (callback, apps_to_be_added) {
            $.ajax({
                type: 'POST',
                url: 'https://dcn-hub-app-api.dentacoin.com/dentist/add-dentist-applications',
                dataType: 'json',
                data: {
                    apps_to_be_added: apps_to_be_added,
                    token: JSON.parse(window.localStorage.getItem('currentDentist')).token,
                    id: JSON.parse(window.localStorage.getItem('currentDentist')).id
                },
                success: function(response) {
                    callback(response);
                }
            });
        },
        editDentistApplication: function(id, post_data, callback) {
            $.ajax({
                type: 'POST',
                url: 'https://dcn-hub-app-api.dentacoin.com/dentist/edit-dentist-application/'+id,
                dataType: 'json',
                data: post_data,
                success: function(response) {
                    callback(response);
                }
            });
        },
        deleteDentistApplication: function (callback, id) {
            $.ajax({
                type: 'POST',
                url: 'https://dcn-hub-app-api.dentacoin.com/dentist/delete-dentist-application/'+id,
                dataType: 'json',
                data: {
                    token: JSON.parse(window.localStorage.getItem('currentDentist')).token,
                    id: JSON.parse(window.localStorage.getItem('currentDentist')).id
                },
                success: function(response) {
                    callback(response);
                }
            });
        },
        addMobileDeviceId: function (callback, id) {
            $.ajax({
                type: 'POST',
                url: 'https://dcn-hub-app-api.dentacoin.com/patient/add-mobile-device-id',
                dataType: 'json',
                data: {
                    token: JSON.parse(window.localStorage.getItem('currentPatient')).token,
                    id: JSON.parse(window.localStorage.getItem('currentPatient')).id,
                    dentist_id: JSON.parse(window.localStorage.getItem('currentPatient')).patient_of,
                    mobile_device_id: id
                },
                success: function(response) {
                    callback(response);
                }
            });
        },
        invitePatients: function (callback, data) {
            $.ajax({
                type: 'POST',
                url: 'https://dcn-hub-app-api.dentacoin.com/dentist/invite-patients',
                dataType: 'json',
                data: {
                    data: data,
                    token: JSON.parse(window.localStorage.getItem('currentDentist')).token
                },
                success: function(response) {
                    callback(response);
                }
            });
        },
        sendPushNotification: function (callback, data) {
            $.ajax({
                type: 'POST',
                url: 'https://dcn-hub-app-api.dentacoin.com/dentist/send-push-notification',
                dataType: 'json',
                data: data,
                success: function(response) {
                    callback(response);
                }
            });
        },
        registerPushNotification: function (callback, data) {
            $.ajax({
                type: 'POST',
                url: 'https://dcn-hub-app-api.dentacoin.com/dentist/register-push-notification',
                dataType: 'json',
                data: data,
                success: function(response) {
                    callback(response);
                }
            });
        },
        saveCivicEmailTryingToLoginFromMobileApp: async function(data, callback) {
            $.ajax({
                type: 'POST',
                url: $('.main-content').attr('data-dentacoinDomain') + '/dentacoin-login-gateway/save-civic-email',
                dataType: 'json',
                data: data,
                success: function(response) {
                    callback(response);
                },
                error: function() {
                    console.error('Request to dentacoin.com currently not working.');
                }
            });
        }
    },
    utils: {
        customErrorHandle: function(el, string) {
            el.append('<div class="error-handle">'+string+'</div>');
        },
        initDatetimePicker: function(startDate) {
            if ($('.datetimepicker').length > 0) {
                jQuery('.datetimepicker').datetimepicker({
                    minDate: new Date(),
                    startDate: new Date()
                });
            }
        }
    }
};

//method to download files in Download folder in Android device
function hybridAppFileDownload(file_name, fileUrl, callback, location) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', fileUrl, true);
    xhr.responseType = 'blob';
    xhr.onload = function(e) {
        if (this.status == 200) {
            var profileDataBlob = this.response;

            window.resolveLocalFileSystemURL(location, function (fileSystem) {
                fileSystem.getDirectory('Download', {create: true, exclusive: false}, function(dirEntry) {
                    dirEntry.getFile(file_name, {create: true, exclusive: true}, function (fileEntry) {
                        fileEntry.createWriter(function (fileWriter) {
                            fileWriter.onwriteend = function (e) {
                                callback();
                            };

                            fileWriter.onerror = function (e) {
                                console.log(e, 'error');
                                projectData.general_logic.hideLoader();
                                alert('Something went wrong with downloading your profile data (Core error 1). Please contact admin@dentacoin.com.');
                            };

                            fileWriter.write(profileDataBlob);
                        }, function(err) {
                            console.log(err, 'err');
                            projectData.general_logic.hideLoader();
                            alert('Something went wrong with downloading your profile data (Core error 2). Please contact admin@dentacoin.com.');
                        });
                    }, function(err) {
                        console.log(err, 'err');
                        projectData.general_logic.hideLoader();
                        alert('Seems like file with this name already exist in your download directory, move it or delete it and try again.');
                    });
                }, function(err) {
                    console.log(err, 'err');
                    projectData.general_logic.hideLoader();
                    alert('Something went wrong with downloading your profile data (Core error 3). Please contact admin@dentacoin.com.');
                });
            });
        }
    };
    xhr.send();
}

function router() {
    var current_route;
    var init_logged_in_wrapper_logic = false;

    $('body').on('DOMSubtreeModified', '.main-content', function() {
        if (window.localStorage.getItem('currentPatient') != null) {
            // LOGGED IN ROUTES
            if ($('app-home').length && current_route != 'home') {
                projectData.general_logic.setIsHybrid();
                current_route = 'home';
                projectData.pages.patient.homepage();
            }/* else if ($('app-my-wallet').length && $('app-my-wallet .my-wallet-container .dropdown-hidden-menu button').length && current_route != 'my-wallet') {
                $('body').removeClass('platform-background');
                projectData.general_logic.setIsHybrid();
                current_route = 'my-wallet';
                projectData.pages.patient.myWallet();
            } else if ($('app-edit-account').length && current_route != 'edit-account') {
                $('body').removeClass('platform-background');
                projectData.general_logic.setIsHybrid();
                current_route = 'edit-account';
                projectData.pages.patient.editAccount();
            } else if ($('app-manage-privacy').length && current_route != 'manage-privacy') {
                $('body').removeClass('platform-background');
                projectData.general_logic.setIsHybrid();
                current_route = 'manage-privacy';
                projectData.pages.patient.managePrivacy();
            }*/

            if ($('app-logged-in-wrapper').length && !init_logged_in_wrapper_logic) {
                init_logged_in_wrapper_logic = true;
                $(document).ready(function() {
                    initLoggedInWrapperLogic();
                });

                // saving mobile_device_id to send push notifications
                if (is_hybrid) {
                    window.FirebasePlugin.hasPermission(function(hasPermission) {
                        if (basic.property_exists(hasPermission, 'isEnabled') && hasPermission.isEnabled) {
                            // if permission is given save the firebase mobile device id
                            projectData.requests.addMobileDeviceId(function() {
                                console.log('Mobile device id saved.');
                            }, window.localStorage.getItem('mobile_device_id'))
                        }
                    });
                }
            }
        } else {
            // NOT LOGGED IN ROUTES
            if ($('app-patient-login-page').length && current_route != 'patient-login-page') {
                current_route = 'patient-login-page';
                projectData.general_logic.setIsHybrid();
                projectData.pages.patient.patientLoginPage();
            } else if ($('app-patient-register-by-invite').length && current_route != 'patient-register-by-invite') {
                current_route = 'patient-register-by-invite';
                projectData.general_logic.setIsHybrid();
                projectData.pages.patient.patientRegisterPage();
            } else if ($('app-request-account').length && current_route != 'request-account') {
                current_route = 'request-account';
                projectData.general_logic.setIsHybrid();
                projectData.pages.patient.requestAccount();
            } else if ($('app-dentist-request-account').length && current_route != 'dentist-request-account') {
                current_route = 'dentist-request-account';
                projectData.general_logic.setIsHybrid();
                projectData.pages.patient.dentistRequestAccount();
            }
        }

        // projectData.general_logic.updateExternalURLsForiOSDevice();
    });
}
router();

function admin_router() {
    var current_route;

    $('body').on('DOMSubtreeModified', '.admin-main-content', function() {
        if ($('app-basic-admin-panel').length && current_route != 'basic-admin-panel' && window.localStorage.getItem('currentDentist') != null) {
            $('body').removeClass('platform-background');
            current_route = 'basic-admin-panel';
            projectData.pages.dentist.basicAdminPanel();
        } else if ($('app-advanced-admin-panel').length && window.localStorage.getItem('currentDentist') != null) {
            $('body').removeClass('platform-background');

            if ($('app-my-patients').length && current_route != 'my-patients') {
                current_route = 'my-patients';
                projectData.general_logic.setIsHybrid();
                projectData.pages.dentist.myPatients();
            } else if ($('app-push-notifications').length && current_route != 'push-notifications') {
                current_route = 'push-notifications';
                projectData.general_logic.setIsHybrid();
                projectData.pages.dentist.pushNotifications();
            }
        }
    });
}
admin_router();

function initLoggedInWrapperLogic() {
    $(document).on('click', 'header .logged-nav', function() {
        $('.logged-mobile-profile-menu').addClass('active');
    });

    $(document).on('click', '.logged-mobile-profile-menu nav ul li a', function() {
        $('.logged-mobile-profile-menu').removeClass('active');
    });

    $(document).on('click', '.close-logged-mobile-profile-menu', function() {
        $('.logged-mobile-profile-menu').removeClass('active');
    });
}

// method for tracking current active language insie add/ edit app popuo
function addEditAppPopupLanguageSwitch() {
    if ($('.main-content').attr('data-lang') == 'de') {
        $('.add-edit-app-popup .language-switcher button').removeClass('active');
        $('.add-edit-app-popup .language-switcher button.de-version').addClass('active');

        $('.add-edit-app-popup .en-version').attr('data-app-name-en', $('.add-edit-app-popup #app-name').val().trim());
        $('.add-edit-app-popup .en-version').attr('data-app-description-en', $('.add-edit-app-popup #app-description').val().trim());

        $('.add-edit-app-popup #app-name').val($('.add-edit-app-popup .de-version').attr('data-app-name-de'));
        if ($('.add-edit-app-popup .de-version').attr('data-app-name-de') != '') {
            $('.add-edit-app-popup #app-name').prev().addClass('active-label');
        }
        $('.add-edit-app-popup #app-description').val($('.add-edit-app-popup .de-version').attr('data-app-description-de'));
        if ($('.add-edit-app-popup .de-version').attr('data-app-description-de') != '') {
            $('.add-edit-app-popup #app-description').prev().addClass('active-label');
        }
    }

    $('.add-edit-app-popup .language-switcher button').click(function() {
        $('.add-edit-app-popup .language-switcher button').removeClass('active');
        $(this).addClass('active');

        if ($(this).hasClass('en-version')) {
            $('.add-edit-app-popup .de-version').attr('data-app-name-de', $('.add-edit-app-popup #app-name').val().trim());
            $('.add-edit-app-popup .de-version').attr('data-app-description-de', $('.add-edit-app-popup #app-description').val().trim());

            $('.add-edit-app-popup #app-name').val($('.add-edit-app-popup .en-version').attr('data-app-name-en'));
            if ($('.add-edit-app-popup .en-version').attr('data-app-name-en') != '') {
                $('.add-edit-app-popup #app-name').prev().addClass('active-label');
            }
            $('.add-edit-app-popup #app-description').val($('.add-edit-app-popup .en-version').attr('data-app-description-en'));
            if ($('.add-edit-app-popup .en-version').attr('data-app-description-en') != '') {
                $('.add-edit-app-popup #app-description').prev().addClass('active-label');
            }
        } else if ($(this).hasClass('de-version')) {
            $('.add-edit-app-popup .en-version').attr('data-app-name-en', $('.add-edit-app-popup #app-name').val().trim());
            $('.add-edit-app-popup .en-version').attr('data-app-description-en', $('.add-edit-app-popup #app-description').val().trim());

            $('.add-edit-app-popup #app-name').val($('.add-edit-app-popup .de-version').attr('data-app-name-de'));
            if ($('.add-edit-app-popup .de-version').attr('data-app-name-de') != '') {
                $('.add-edit-app-popup #app-name').prev().addClass('active-label');
            }
            $('.add-edit-app-popup #app-description').val($('.add-edit-app-popup .de-version').attr('data-app-description-de'));
            if ($('.add-edit-app-popup .de-version').attr('data-app-description-de') != '') {
                $('.add-edit-app-popup #app-description').prev().addClass('active-label');
            }
        }
    });
}

function handleOpenURL(url) {
    var token = new URL(url).searchParams.get('token');

    const event = new CustomEvent('receiveCoredbTokenFromCivicAuth', {
        detail: {
            platform_type: 'civic',
            response_data: token,
            time: new Date()
        }
    });

    document.dispatchEvent(event);
}