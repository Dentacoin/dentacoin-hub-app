(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin-login/admin-login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin-login/admin-login.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container padding-top-200\">\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <h1 class=\"fs-30 calibri-bold text-center title-label padding-top-40 padding-bottom-30\">Dentaprime Hub admin panel</h1>\n        </div>\n        <div class=\"col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4\">\n            <form [formGroup]=\"dentistsLoginForm\" (ngSubmit)=\"onDentistsFormSubmit()\">\n                <div>\n                    <div class=\"custom-google-label-style module\" data-input-colorful-border=\"true\">\n                        <label for=\"dentist-login-email\" class=\"platform-color\">Email address:</label>\n                        <input maxlength=\"100\" type=\"text\" id=\"dentist-login-email\" value=\"miroslav.nedelchev@dentacoin1.com\" formControlName=\"email\" class=\"full-rounded form-field platform-border-color\"/>\n                    </div>\n                    <div *ngIf=\"dentistsFormSubmitted && dentists_form_data.email.errors\">\n                        <div class=\"error-handle\" *ngIf=\"dentists_form_data.email.errors.required\">Email is required.</div>\n                        <div class=\"error-handle\" *ngIf=\"dentists_form_data.email.errors.email\">Please enter valid email.</div>\n                    </div>\n                </div>\n                <div class=\"padding-top-10\">\n                    <div class=\"custom-google-label-style module\" data-input-colorful-border=\"true\">\n                        <label for=\"dentist-login-password\" class=\"platform-color\">Password:</label>\n                        <input type=\"password\" maxlength=\"50\" id=\"dentist-login-password\" value=\"uniquepass\" formControlName=\"password\" class=\"full-rounded form-field platform-border-color\"/>\n                    </div>\n                    <div *ngIf=\"dentistsFormSubmitted && dentists_form_data.password.errors\">\n                        <div class=\"error-handle\" *ngIf=\"dentists_form_data.password.errors.required\">Password is required.</div>\n                    </div>\n                </div>\n                <div class=\"padding-top-30 padding-bottom-10 text-center\">\n                    <button class=\"module platform-custom-button platform-background-color platform-border-color hover\">LOGIN</button>\n                </div>\n                <div class=\"padding-top-20 padding-bottom-10 text-center fs-16 calibri-light\">\n                    <div>{{'having-trouble-login' | translate}}</div>\n                    <a [routerLink]=\"['/'+translate.currentLang+'/forgotten-password']\" itemprop=\"url\" class=\"text-decoration-underline padding-left-5 padding-right-5\">{{'forgotten-password-redirect' | translate}}</a>\n                </div>\n                <div class=\"error-handle margin-bottom-20\" *ngIf=\"authenticationServiceService.generalError\">{{'general-error' | translate}}</div>\n                <div class=\"error-handle margin-bottom-20\" *ngIf=\"authenticationServiceService.notAPartner\">{{'not-a-partner-error' | translate}}</div>\n                <div class=\"error-handle margin-bottom-20\" *ngIf=\"authenticationServiceService.dentistAuthFailed\">{{'dentist-auth-failed' | translate}}</div>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admin.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admin.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"admin-main-content\">\r\n    <router-outlet></router-outlet>\r\n</main>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/advanced-admin-panel/advanced-admin-panel.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/advanced-admin-panel/advanced-admin-panel.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"admin-content\">\n    <div class=\"wrapper\">\n        <div class=\"main-header\">\n            <figure class=\"logo\">\n                <img src=\"https://www.dentaprime.com/wp-content/themes/dentaprime2019/style/images/logo-swiss-dentaprime.svg\" alt=\"Logo\"/>\n            </figure>\n            <!-- Header Navbar: style can be found in header.less -->\n            <nav class=\"navbar navbar-static-top\">\n                <!-- Sidebar toggle button-->\n                <a href=\"#\" class=\"sidebar-toggle fs-18\" data-toggle=\"offcanvas\" role=\"button\">\n                    <span class=\"sr-only\">Toggle navigation</span>\n                </a>\n                <div class=\"text-right top-right-menu\">\n                    <ul class=\"parent-menu\">\n                        <li>\n                            <a href=\"javascript:void(0);\">Admin</a>\n                            <ul class=\"submenu\">\n                                <li><a href=\"javascript:void(0)\" class=\"cursor-pointer\" (click)=\"this.authenticationServiceService.logout('dentist')\">Logout</a></li>\n                            </ul>\n                        </li>\n                    </ul>\n                </div>\n            </nav>\n        </div>\n        <!-- =============================================== -->\n        <!-- Left side column. contains the sidebar -->\n        <aside class=\"main-sidebar\">\n            <!-- sidebar: style can be found in sidebar.less -->\n            <section class=\"sidebar\">\n                <!-- sidebar menu: : style can be found in sidebar.less -->\n                <ul class=\"sidebar-menu\">\n                    <li>\n                        <a [routerLink]=\"['applications']\"><i class=\"fa fa-list-ul\" aria-hidden=\"true\"></i> Applications</a>\n                    </li>\n                    <li>\n                        <a [routerLink]=\"['push-notifications']\"><i class=\"fa fa-star\" aria-hidden=\"true\"></i> Push nofitications</a>\n                    </li>\n                    <li>\n                        <a (click)=\"this.redirectsService.redirectToAdmin()\"><i class=\"fa fa-list-ul\" aria-hidden=\"true\"></i> User friendly admin</a>\n                    </li>\n                </ul>\n            </section>\n            <!-- /.sidebar -->\n        </aside>\n        <!-- =============================================== -->\n        <!-- Content Wrapper. Contains page content -->\n        <div class=\"content-wrapper\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/advanced-admin-panel/applications/applications.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/advanced-admin-panel/applications/applications.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "Applications"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/advanced-admin-panel/push-notifications/push-notifications.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/advanced-admin-panel/push-notifications/push-notifications.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "Push notifications"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/basic-admin-panel/basic-admin-panel.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/basic-admin-panel/basic-admin-panel.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container basic-admin-panel padding-top-20 padding-bottom-15\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-5 padding-right-0 enableBlur dentist-logo\">\r\n            <div class=\"dentist-logo-wrapper platform-border-color important show-in-edit-mode inline-block-mode\">\r\n                <button type=\"button\" class=\"dentist-logo-btn\">\r\n                    <label for=\"dentist-logo\"></label>\r\n                </button>\r\n                <input type=\"file\" accept=\".jpg,.jpeg,.png\" class=\"hide\" id=\"dentist-logo\"/>\r\n                <input type=\"hidden\" class=\"hide\" id=\"dentist-logo-media\"/>\r\n                <input type=\"hidden\" class=\"hide\" id=\"dentist-logo-media-name\"/>\r\n            </div>\r\n            <figure itemscope=\"\" itemtype=\"http://schema.org/ImageObject\" class=\"hide-in-edit-mode max-width-200\"></figure>\r\n        </div>\r\n        <div class=\"col-xs-2 text-center pick-dentist-color-parent disableBlur\">\r\n            <a href=\"javascript:void(0);\" class=\"pick-dentist-color show-in-edit-mode\" data-opened=\"false\">\r\n                <figure itemscope=\"\" itemtype=\"http://schema.org/ImageObject\" class=\"platform-border-color important\">\r\n                    <img src=\"assets/images/change-color-icon.png\" alt=\"Change color icon\"/>\r\n                </figure>\r\n            </a>\r\n            <div class=\"custom-dropdown-with-color-pickers\"></div>\r\n        </div>\r\n        <div class=\"col-sm-5 col-xs-7 text-right basic-admin-panel-navigation enableBlur padding-left-0 hide-in-edit-mode-sm\">\r\n            <div class=\"hide-in-edit-mode\">\r\n                <a (click)=\"this.redirectsService.redirectToAdvancedAdmin()\" class=\"module platform-custom-button-opposite-colors inline-block platform-color platform-border-color hover hide-sm\">Admin</a>\r\n                <a href=\"javascript:void(0);\" class=\"module platform-custom-button platform-background-color platform-border-color hover margin-left-10 edit-page inline-block hide-sm\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> {{'edit-page' | translate}}</a>\r\n                <div class=\"lang-switcher inline-block hide-in-edit-mode\">\r\n                    <select (change)=\"this.languageService.onLangSwitcherChange($event.target.value)\" class=\"platform-text-color fix-selects-for-ios\">\r\n                        <option class=\"color-main\" value=\"en\" *ngIf=\"(translate.currentLang == 'en')\" selected>EN</option>\r\n                        <option class=\"color-main\" value=\"de\" *ngIf=\"(translate.currentLang == 'en')\">DE</option>\r\n                        <option class=\"color-main\" value=\"en\" *ngIf=\"(translate.currentLang == 'de')\">EN</option>\r\n                        <option class=\"color-main\" value=\"de\" *ngIf=\"(translate.currentLang == 'de')\" selected>DE</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n            <div class=\"show-in-edit-mode hide-sm\">\r\n                <a href=\"javascript:void(0);\" class=\"module platform-custom-button platform-background-color platform-border-color hover save-changes\">SAVE CHANGES</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row enableBlur\">\r\n        <div class=\"col-xs-12 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3 basic-admin-panel-apps-wrapper\">\r\n            <div class=\"hub-title\">\r\n                <div class=\"hide-in-edit-mode padding-top-40 padding-top-xs-20 padding-bottom-30\">\r\n                    <h1 class=\"fs-30 fs-xs-22 calibri-bold text-center title-label platform-text-color\"></h1>\r\n                </div>\r\n                <div class=\"show-in-edit-mode padding-top-40 padding-top-xs-20 padding-bottom-30\">\r\n                    <div class=\"custom-google-label-style module\" data-input-colorful-border=\"true\">\r\n                        <label for=\"hub-title\" class=\"active-label platform-color\">Title:</label>\r\n                        <input type=\"text\" id=\"hub-title\" class=\"full-rounded form-field colorful-border platform-border-color\"/>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row fs-0 apps-list\">\r\n                <div class=\"col-xs-4 text-center padding-bottom-15 inline-block-top single-app empty\">\r\n                    <div class=\"wrapper\">\r\n                        <button class=\"fs-60 line-height-60 calibri-bold add-app platform-color-important platform-border-color important\" [attr.data-default-apps-title]=\"'default-apps-title' | translate\" [attr.data-adding-custom-app-title]=\"'adding-custom-app-title' | translate\">+</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row mobile-btns-row show-on-sm padding-top-30 padding-bottom-20 enableBlur\">\r\n        <div class=\"col-xs-6 padding-right-5 text-right hide-in-edit-mode\">\r\n            <a (click)=\"this.redirectsService.redirectToAdvancedAdmin()\" class=\"module platform-custom-button-opposite-colors inline-block platform-color platform-border-color hover padding-left-10 padding-right-10\">Admin</a>\r\n        </div>\r\n        <div class=\"col-xs-6 padding-left-5 hide-in-edit-mode\">\r\n            <a href=\"javascript:void(0);\" class=\"module platform-custom-button platform-background-color platform-border-color hover edit-page inline-block padding-left-10 padding-right-10\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> {{'edit-page' | translate}}</a>\r\n        </div>\r\n        <div class=\"col-xs-12 text-center show-in-edit-mode\">\r\n            <a href=\"javascript:void(0);\" class=\"module platform-custom-button platform-background-color platform-border-color hover save-changes\">SAVE CHANGES</a>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\" [attr.data-lang]=\"translate.currentLang\" [attr.hybrid]=\"hybrid ? 'true' : null\">\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/change-password/change-password.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/change-password/change-password.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row padding-top-60\">\n    <div class=\"col-xs-12 text-center\">\n        <h1 class=\"fs-40 padding-bottom-50 padding-top-30\">{{'change-password-title' | translate}}</h1>\n    </div>\n    <div class=\"col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4\">\n        <form [formGroup]=\"changePasswordForm\" (ngSubmit)=\"onchangePasswordFormSubmit()\">\n            <div class=\"error-handle margin-bottom-20\" *ngIf=\"failedChangePassword\">{{'change-password-response-error' | translate}}</div>\n            <div class=\"custom-google-label-style module\" data-input-colorful-border=\"true\">\n                <label for=\"change-password\" class=\"platform-color\">{{'password-label' | translate}}</label>\n                <input type=\"password\" maxlength=\"50\" id=\"change-password\" formControlName=\"password\" class=\"full-rounded form-field platform-border-color\"/>\n            </div>\n            <div *ngIf=\"changePasswordFormSubmitted && change_password_form_data.password.errors\">\n                <div class=\"error-handle\" *ngIf=\"change_password_form_data.password.errors.required\">{{'password-required-validation' | translate}}</div>\n                <div class=\"error-handle\" *ngIf=\"change_password_form_data.password.hasError('minlength')\">{{'password-min-length-validation' | translate}}</div>\n                <div class=\"error-handle\" *ngIf=\"change_password_form_data.password.hasError('maxlength')\">{{'password-max-length-validation' | translate}}</div>\n            </div>\n            <div class=\"padding-top-10\">\n                <div class=\"custom-google-label-style module\" data-input-colorful-border=\"true\">\n                    <label for=\"change-password-repeat\" class=\"platform-color\">{{'repeat-password-label' | translate}}</label>\n                    <input type=\"password\" maxlength=\"50\" id=\"change-password-repeat\" formControlName=\"repeat_password\" class=\"full-rounded form-field platform-border-color\"/>\n                </div>\n                <div *ngIf=\"changePasswordFormSubmitted && change_password_form_data.repeat_password.errors\">\n                    <div class=\"error-handle\" *ngIf=\"change_password_form_data.repeat_password.errors.required\">{{'repeat-password-required-validation' | translate}}</div>\n                    <div class=\"error-handle\" *ngIf=\"change_password_form_data.repeat_password.hasError('minlength')\">{{'password-min-length-validation' | translate}}.</div>\n                    <div class=\"error-handle\" *ngIf=\"change_password_form_data.repeat_password.hasError('maxlength')\">{{'password-max-length-validation' | translate}}</div>\n                </div>\n            </div>\n            <div class=\"padding-top-30 padding-bottom-10 text-center\">\n                <button class=\"module platform-custom-button platform-background-color platform-border-color hover\">{{'change-password-btn' | translate}}</button>\n            </div>\n            <div *ngIf=\"changePasswordFormSubmitted && differentPasswords\">\n                <div class=\"error-handle\" *ngIf=\"differentPasswords\">{{'passwords-not-match' | translate}}</div>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/edit-account/edit-account.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/edit-account/edit-account.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"edit-account-container account-page padding-top-30 padding-bottom-50\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-12 fs-0 padding-left-0 padding-right-0 padding-left-sm-15 padding-right-sm-15 padding-left-xs-15 padding-right-xs-15\">\r\n                <app-account-sidebar></app-account-sidebar>\r\n                <div class=\"my-profile-page-content inline-block-top\">\r\n                    <div class=\"profile-page-title padding-bottom-50\">\r\n                        <figure itemscope=\"\" itemtype=\"http://schema.org/ImageObject\" class=\"inline-block\">\r\n                            <img alt=\"Edit account icon\" src=\"assets/images/edit-account-icon.svg\"/>\r\n                        </figure>\r\n                        <h2 class=\"fs-24 lato-bold inline-block\">{{'edit-account' | translate}}</h2>\r\n                    </div>\r\n                    <div class=\"success-handle margin-bottom-20\" *ngIf=\"editAccountSuccess\">{{'account-saved-successfully' | translate}}</div>\r\n                    <div class=\"error-handle margin-bottom-20\" *ngIf=\"editAccountFailed\">{{'account-saving-failed' | translate}}</div>\r\n                    <div class=\"error-handle margin-bottom-20\" *ngIf=\"editPasswordFailed\">{{'password-change-failed' | translate}}</div>\r\n                    <div class=\"error-handle margin-bottom-20\" *ngIf=\"passwordsNotMatching\">{{'passwords-not-match' | translate}}</div>\r\n                    <form [formGroup]=\"this.patientsEditAccountForm\" (ngSubmit)=\"this.onPatientsEditAccountFormSubmit()\" id=\"user-update-profile\">\r\n                        <div class=\"form-row padding-bottom-15 fs-0\" *ngIf=\"(showTitles == true)\">\r\n                            <label class=\"inline-block fs-16\" for=\"title\">{{'title-label' | translate}}</label>\r\n                            <select id=\"title\" class=\"custom-input fix-selects-for-ios\" formControlName=\"title\">\r\n                                <ng-container *ngFor=\"let item of titlesList | keyvalue\">\r\n                                    <option value=\"{{item.key}}\">{{item.value}}</option>\r\n                                </ng-container>\r\n                            </select>\r\n                        </div>\r\n                        <div *ngIf=\"patientsEditAccountFormSubmitted && this.patients_edit_account_form_data.title.errors\" class=\"margin-bottom-20\">\r\n                            <div class=\"error-handle\" *ngIf=\"this.patients_edit_account_form_data.title.errors.required\">{{'title-validation' | translate}}</div>\r\n                        </div>\r\n                        <div class=\"form-row padding-bottom-15 fs-0\">\r\n                            <label class=\"inline-block fs-16\" for=\"first-name\">{{'fname-label' | translate}}</label>\r\n                            <input class=\"inline-block fs-16 custom-input required\" formControlName=\"firstName\" maxlength=\"100\" type=\"text\" id=\"first-name\"/>\r\n                        </div>\r\n                        <div *ngIf=\"patientsEditAccountFormSubmitted && this.patients_edit_account_form_data.firstName.errors\" class=\"margin-bottom-20\">\r\n                            <div class=\"error-handle\" *ngIf=\"this.patients_edit_account_form_data.firstName.errors.required\">{{'fname-required' | translate}}</div>\r\n                            <div class=\"error-handle\" *ngIf=\"this.patients_edit_account_form_data.firstName.hasError('maxlength')\">{{'fname-max-length' | translate}}</div>\r\n                        </div>\r\n                        <div class=\"form-row padding-bottom-15 fs-0\">\r\n                            <label class=\"inline-block fs-16\" for=\"last-name\">{{'lname-label' | translate}}</label>\r\n                            <input class=\"inline-block fs-16 custom-input required\" formControlName=\"lastName\" maxlength=\"100\" type=\"text\" id=\"last-name\"/>\r\n                        </div>\r\n                        <div *ngIf=\"patientsEditAccountFormSubmitted && this.patients_edit_account_form_data.lastName.errors\" class=\"margin-bottom-20\">\r\n                            <div class=\"error-handle\" *ngIf=\"this.patients_edit_account_form_data.lastName.errors.required\">{{'lname-required' | translate}}</div>\r\n                            <div class=\"error-handle\" *ngIf=\"this.patients_edit_account_form_data.lastName.hasError('maxlength')\">{{'lname-max-length' | translate}}</div>\r\n                        </div>\r\n                        <div class=\"form-row padding-bottom-15 fs-0\">\r\n                            <label class=\"inline-block fs-16\" for=\"password\">{{'password-label' | translate}}</label>\r\n                            <input class=\"inline-block fs-16 custom-input required\" formControlName=\"password\" maxlength=\"20\" type=\"password\" id=\"password\"/>\r\n                        </div>\r\n                        <div *ngIf=\"patientsEditAccountFormSubmitted && this.patients_edit_account_form_data.password.errors\">\r\n                            <div class=\"error-handle\" *ngIf=\"this.patients_edit_account_form_data.password.hasError('minlength')\">>{{'password-min-length-validation' | translate}}</div>\r\n                            <div class=\"error-handle\" *ngIf=\"this.patients_edit_account_form_data.password.hasError('maxlength')\">>{{'password-max-length-validation' | translate}}</div>\r\n                        </div>\r\n                        <div class=\"form-row padding-bottom-15 fs-0\">\r\n                            <label class=\"inline-block fs-16\" for=\"repeat-password\">{{'repeat-password-label' | translate}}</label>\r\n                            <input class=\"inline-block fs-16 custom-input required\" formControlName=\"repeatPassword\" maxlength=\"20\" type=\"password\" id=\"repeat-password\"/>\r\n                        </div>\r\n                        <div *ngIf=\"patientsEditAccountFormSubmitted && this.patients_edit_account_form_data.repeatPassword.errors\">\r\n                            <div class=\"error-handle\" *ngIf=\"this.patients_edit_account_form_data.repeatPassword.hasError('minlength')\">{{'password-min-length-validation' | translate}}</div>\r\n                            <div class=\"error-handle\" *ngIf=\"this.patients_edit_account_form_data.repeatPassword.hasError('maxlength')\">{{'password-max-length-validation' | translate}}</div>\r\n                        </div>\r\n                        <div class=\"form-row padding-bottom-15 fs-0\">\r\n                            <label class=\"inline-block fs-16\" for=\"phone\">{{'phone-label' | translate}}</label>\r\n                            <input class=\"inline-block fs-16 custom-input required\" formControlName=\"phone\" maxlength=\"20\" type=\"text\" id=\"phone\"/>\r\n                        </div>\r\n                        <div *ngIf=\"patientsEditAccountFormSubmitted && this.patients_edit_account_form_data.phone.errors\" class=\"margin-bottom-20\">\r\n                            <div class=\"error-handle\" *ngIf=\"this.patients_edit_account_form_data.phone.errors.required\">{{'phone-required' | translate}}</div>\r\n                            <div class=\"error-handle\" *ngIf=\"this.patients_edit_account_form_data.phone.hasError('maxlength')\">{{'phone-max-length-validation' | translate}}</div>\r\n                        </div>\r\n                        <div class=\"form-row padding-bottom-15 fs-0\" *ngIf=\"(showCountries == true)\">\r\n                            <label class=\"inline-block fs-16\" for=\"country\">{{'country-label' | translate}}</label>\r\n                            <select id=\"country\" class=\"custom-input fix-selects-for-ios\" formControlName=\"country\">\r\n                                <ng-container *ngFor=\"let item of countriesList | keyvalue\">\r\n                                    <option value=\"{{item.key}}\">{{item.value.name}}</option>\r\n                                </ng-container>\r\n                            </select>\r\n                        </div>\r\n                        <div *ngIf=\"patientsEditAccountFormSubmitted && this.patients_edit_account_form_data.country.errors\" class=\"margin-bottom-20\">\r\n                            <div class=\"error-handle\" *ngIf=\"this.patients_edit_account_form_data.country.errors.required\">{{'country-required' | translate}}</div>\r\n                        </div>\r\n                        <div class=\"padding-top-30 text-center\">\r\n                            <button class=\"module platform-custom-button platform-background-color platform-border-color hover\">{{'update-profile-btn' | translate}}</button>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/forgotten-password/forgotten-password.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/forgotten-password/forgotten-password.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row padding-top-60\">\n    <div class=\"col-xs-12 text-center\">\n        <h1 class=\"fs-40 fs-xs-26\">{{'forgotten-password-title' | translate}}</h1>\n        <p class=\"fs-22 fs-xs-16 calibri-light padding-bottom-35\">{{'forgotten-password-subtitle' | translate}}</p>\n    </div>\n    <div class=\"col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4\">\n        <form [formGroup]=\"forgottenPasswordForm\" (ngSubmit)=\"onForgottenPasswordFormSubmit()\">\n            <div class=\"success-handle margin-bottom-20\" *ngIf=\"sendFormSucceed\">{{'forgotten-password-response-success' | translate}}</div>\n            <div class=\"error-handle margin-bottom-20\" *ngIf=\"sendFormFailed\">{{'forgotten-password-response-error' | translate}}</div>\n            <div class=\"padding-top-10\">\n                <div class=\"custom-google-label-style module\" data-input-colorful-border=\"true\">\n                    <label for=\"forgotten-password-email\" class=\"platform-color\">{{'email-label' | translate}}</label>\n                    <input maxlength=\"100\" type=\"text\" id=\"forgotten-password-email\" formControlName=\"email\" class=\"full-rounded form-field platform-border-color\"/>\n                </div>\n                <div *ngIf=\"forgottenPasswordFormSubmitted && forgotten_password_form_data.email.errors\">\n                    <div class=\"error-handle\" *ngIf=\"forgotten_password_form_data.email.errors.required\">{{'email-required' | translate}}</div>\n                    <div class=\"error-handle\" *ngIf=\"forgotten_password_form_data.email.errors.email\">{{'valid-email' | translate}}</div>\n                </div>\n            </div>\n            <div class=\"padding-top-30 text-center\">\n                <button class=\"module platform-custom-button platform-background-color platform-border-color hover\">{{'forgotten-password-btn' | translate}}</button>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container homepage-container\">\r\n    <div class=\"row\">\r\n        <div class=\"{{pageColumnClass}}\">\r\n            <h1 class=\"platform-text-color fs-30 fs-xs-22 calibri-bold text-center title-label padding-top-40 padding-top-xs-20 padding-bottom-30\" *ngIf=\"(translate.currentLang == 'en')\" [innerHTML]=\"hubTitleEn\"></h1>\r\n            <h1 class=\"platform-text-color fs-30 fs-xs-22 calibri-bold text-center title-label padding-top-40 padding-top-xs-20 padding-bottom-30\" *ngIf=\"(translate.currentLang == 'de')\" [innerHTML]=\"hubTitleDe\">}</h1>\r\n            <div class=\"row fs-0 apps-list\">\r\n                <ng-container *ngFor=\"let application of applications; index as i;\">\r\n                    <div class=\"{{applicationsColumnClass}} text-center padding-bottom-20 padding-left-20 padding-right-20 padding-left-xs-10 padding-right-xs-10 inline-block-top single-app\" data-id=\"{{application.id}}\"  *ngIf=\"(translate.currentLang == 'en' && (application.name_en != '' || application.description_en != ''))\">\r\n                        <a href=\"{{application.url}}\" [attr.data-phone]=\"application.type == 'phone' ? 'true' : null\" target=\"_blank\" class=\"platform-text-color in-app-browser-link\">\r\n                            <figure itemscope=\"\" itemtype=\"http://schema.org/ImageObject\">\r\n                                <img alt=\"\" class=\"width-100 app-media\" itemprop=\"contentUrl\" src=\"{{application.media}}\"/>\r\n                            </figure>\r\n                            <h2 class=\"platform-text-color fs-18 fs-xs-15 padding-top-10 calibri-bold app-name\">{{application.name_en}}</h2>\r\n                            <p class=\"platform-text-color fs-16 fs-xs-14 line-height-16 app-description\">{{application.description_en}}</p>\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"{{applicationsColumnClass}} text-center padding-bottom-20 padding-left-20 padding-right-20 padding-left-xs-10 padding-right-xs-10 inline-block-top single-app\" data-id=\"{{application.id}}\"  *ngIf=\"(translate.currentLang == 'de' && (application.name_de != '' || application.description_de != ''))\">\r\n                        <a href=\"{{application.url}}\" [attr.data-phone]=\"application.type == 'phone' ? 'true' : null\" target=\"_blank\" class=\"platform-text-color in-app-browser-link\">\r\n                            <figure itemscope=\"\" itemtype=\"http://schema.org/ImageObject\">\r\n                                <img alt=\"\" class=\"width-100 app-media\" itemprop=\"contentUrl\" src=\"{{application.media}}\"/>\r\n                            </figure>\r\n                            <h2 class=\"platform-text-color fs-18 fs-xs-15 padding-top-10 calibri-bold app-name\">{{application.name_de}}</h2>\r\n                            <p class=\"platform-text-color fs-16 fs-xs-14 line-height-16 app-description\">{{application.description_de}}</p>\r\n                        </a>\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/logged-in-wrapper/logged-in-wrapper.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/logged-in-wrapper/logged-in-wrapper.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"logged-mobile-profile-menu\">\r\n    <nav class=\"profile-menu module\">\r\n        <a href=\"javascript:void(0)\" class=\"close-logged-mobile-profile-menu\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></a>\r\n        <ul itemscope=\"\" itemtype=\"http://schema.org/SiteNavigationElement\">\r\n            <!--<li>\r\n                <a (click)=\"this.redirectsService.redirectToLoggedHome()\" itemprop=\"url\">\r\n                    <figure itemscope=\"\" itemtype=\"http://schema.org/ImageObject\" class=\"inline-block\">\r\n                        <img alt=\"Home icon\" src=\"assets/images/home.svg\"/>\r\n                    </figure>\r\n                    <span itemprop=\"name\">{{'home-btn' | translate}}</span>\r\n                </a>\r\n            </li>-->\r\n            <li>\r\n                <a href=\"{{myAccountLink}}\" itemprop=\"url\" class=\"in-app-browser-link\">\r\n                    <figure itemscope=\"\" itemtype=\"http://schema.org/ImageObject\" class=\"inline-block\">\r\n                        <img alt=\"Wallet icon\" src=\"assets/images/wallet-icon.svg\"/>\r\n                    </figure>\r\n                    <span itemprop=\"name\">{{'my-wallet-btn' | translate}}</span>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href=\"{{myAccountLink}}&route=edit-account\" itemprop=\"url\" class=\"in-app-browser-link\">\r\n                    <figure itemscope=\"\" itemtype=\"http://schema.org/ImageObject\" class=\"inline-block\">\r\n                        <img alt=\"Edit account icon\" src=\"assets/images/edit-account-icon.svg\"/>\r\n                    </figure>\r\n                    <span itemprop=\"name\">{{'edit-account-btn' | translate}}</span>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href=\"{{myAccountLink}}&route=manage-privacy\" itemprop=\"url\" class=\"in-app-browser-link\">\r\n                    <figure itemscope=\"\" itemtype=\"http://schema.org/ImageObject\" class=\"inline-block\">\r\n                        <img alt=\"Privacy icon\" src=\"assets/images/privacy-icon.svg\"/>\r\n                    </figure>\r\n                    <span itemprop=\"name\">{{'manage-privacy-btn' | translate}}</span>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a (click)=\"this.authenticationServiceService.logout('patient')\" itemprop=\"url\">\r\n                    <figure itemscope=\"\" itemtype=\"http://schema.org/ImageObject\" class=\"inline-block\">\r\n                        <img alt=\"Logout icon\" src=\"assets/images/logout-icon.svg\"/>\r\n                    </figure>\r\n                    <span itemprop=\"name\">{{'log-out-btn' | translate}}</span>\r\n                </a>\r\n            </li>\r\n            <li class=\"lang-switcher\">\r\n                <div class=\"border-top\">\r\n                    <select (change)=\"this.languageService.onLangSwitcherChange($event.target.value)\" class=\"fix-selects-for-ios\">\r\n                        <option value=\"en\" *ngIf=\"(translate.currentLang == 'en')\" selected>EN</option>\r\n                        <option value=\"de\" *ngIf=\"(translate.currentLang == 'en')\">DE</option>\r\n                        <option value=\"en\" *ngIf=\"(translate.currentLang == 'de')\">EN</option>\r\n                        <option value=\"de\" *ngIf=\"(translate.currentLang == 'de')\" selected>DE</option>\r\n                    </select>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n    </nav>\r\n</div>\r\n<header>\r\n    <div class=\"container\">\r\n        <div class=\"row fs-0\">\r\n            <figure itemscope=\"\" itemtype=\"http://schema.org/Organization\" class=\"col-xs-5 inline-block padding-left-xs-10 padding-right-xs-10\">\r\n                <a itemprop=\"url\" routerLink=\"/\">\r\n                    <img src=\"{{dentistData.logo}}\" itemprop=\"logo\" class=\"dentist-logo-img\" alt=\"Dentaprime logo\"/>\r\n                </a>\r\n            </figure>\r\n            <div class=\"col-xs-7 logged-user-right-nav inline-block text-right padding-left-xs-10 padding-right-xs-10\">\r\n                <!--<div class=\"hidden-box-parent\">\r\n                    <div class=\"\" [ngClass]=\"(this.isAccountPage() === false) ? 'inline-block fs-14 fs-xs-13 padding-right-10 padding-right-xs-5 color-white-on-hub platform-text-color' : 'inline-block fs-14 fs-xs-13 padding-right-10 padding-right-xs-5 color-white-on-hub'\">\r\n                        <span class=\"user-name\">{{patientData.first_name}} {{patientData.last_name}}</span>\r\n                        <div>{{dcnAmount}} DCN | $ {{usdAmount}}</div>\r\n                    </div>\r\n                    <span [ngClass]=\"(showApplications === true) ? 'up-arrow platform-background' : 'up-arrow background-white'\"></span>\r\n                    <div class=\"hidden-box\">\r\n                        <div class=\"hidden-box-hub container-fluid platform-background\" *ngIf=\"(showApplications === true)\">\r\n                            <div class=\"row close-btn\">\r\n                                <div class=\"col-xs-12\"><a href=\"javascript:void(0)\">Close <span><i class=\"fa fa-times fs-24\" aria-hidden=\"true\"></i></span></a></div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <ng-container *ngFor=\"let application of applications; index as i;\">\r\n                                    <a class=\"col-md-3 col-xs-4 application inline-block-top\" target=\"_blank\" href=\"{{application.url}}\" *ngIf=\"(translate.currentLang == 'en' && (application.name_en != '' || application.description_en != ''))\">\r\n                                        <figure class=\"text-center\" itemtype=\"http://schema.org/ImageObject\">\r\n                                            <img src=\"{{application.media}}\" itemprop=\"contentUrl\" alt=\"\"/>\r\n                                            <figcaption class=\"color-white fs-14 fs-xs-20 padding-bottom-15 platform-text-color\">{{application.name_en}}</figcaption>\r\n                                        </figure>\r\n                                    </a>\r\n                                    <a class=\"col-md-3 col-xs-4 application inline-block-top\" target=\"_blank\" href=\"{{application.url}}\" *ngIf=\"(translate.currentLang == 'de' && (application.name_de != '' || application.description_de != ''))\">\r\n                                        <figure class=\"text-center\" itemtype=\"http://schema.org/ImageObject\">\r\n                                            <img src=\"{{application.media}}\" itemprop=\"contentUrl\" alt=\"\"/>\r\n                                            <figcaption class=\"color-white fs-14 fs-xs-20 padding-bottom-15 platform-text-color\">{{application.name_de}}</figcaption>\r\n                                        </figure>\r\n                                    </a>\r\n                                </ng-container>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"container-fluid text-center hidden-box-footer\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-xs-6 padding-left-10 padding-right-10 inline-block\">\r\n                                    <a (click)=\"this.authenticationServiceService.logout('patient')\" class=\"logout\"><i class=\"fa fa-power-off\" aria-hidden=\"true\"></i> Log out</a>\r\n                                </div>\r\n                                <div class=\"col-xs-6 padding-left-10 padding-right-10 inline-block\">\r\n                                    <a [routerLink]=\"['my-wallet']\" class=\"fs-16 module platform-custom-button platform-background-color platform-border-color hover padding-left-10 padding-right-10\">My Account</a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <a href=\"javascript:void(0)\" class=\"hamburger\"><i class=\"fa fa-bars\" aria-hidden=\"true\"></i></a>\r\n                <div [ngClass]=\"(this.isAccountPage() === true) ? 'account-page lang-switcher inline-block' : 'lang-switcher inline-block'\">\r\n                    <select (change)=\"this.languageService.onLangSwitcherChange($event.target.value)\" [ngClass]=\"(this.isAccountPage() === false) ? 'platform-text-color' : ''\">\r\n                        <option class=\"color-main\" value=\"en\" *ngIf=\"(translate.currentLang == 'en')\" selected>EN</option>\r\n                        <option class=\"color-main\" value=\"de\" *ngIf=\"(translate.currentLang == 'en')\">DE</option>\r\n                        <option class=\"color-main\" value=\"en\" *ngIf=\"(translate.currentLang == 'de')\">EN</option>\r\n                        <option class=\"color-main\" value=\"de\" *ngIf=\"(translate.currentLang == 'de')\" selected>DE</option>\r\n                    </select>\r\n                </div>-->\r\n                <div [ngClass]=\"(this.isAccountPage() === false) ? 'inline-block fs-14 fs-xs-13 padding-right-10 padding-right-xs-5 padding-top-10 padding-bottom-10 platform-text-color' : 'inline-block fs-14 fs-xs-13 padding-right-10 padding-right-xs-5 padding-top-10 padding-bottom-10'\">\r\n                    <span class=\"user-name\">{{patientData.first_name}} {{patientData.last_name}}</span>\r\n                    <div>{{dcnAmount}} DCN | $ {{usdAmount}}</div>\r\n                </div>\r\n                <div class=\"logged-nav inline-block\">\r\n                    <a href=\"javascript:void(0);\"><i class=\"fa fa-bars\" [ngClass]=\"(this.isAccountPage() === false) ? 'color-white-on-hub platform-text-color' : 'color-white-on-hub'\" aria-hidden=\"true\"></i></a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"camping-currently-offline\"></div>\r\n</header>\r\n<main>\r\n    <router-outlet></router-outlet>\r\n</main>\r\n<footer class=\"text-center padding-top-40 padding-bottom-10 padding-top-xs-30 padding-top-sm-20\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-12\">\r\n                <a href=\"https://dentacoin.com\" target=\"_blank\" class=\"inline-block in-app-browser-link\">\r\n                    <figure itemscope=\"\" itemtype=\"http://schema.org/ImageObject\">\r\n                        <img src=\"assets/images/dentacoin-logo.png\" alt=\"Dentacoin logo\" itemprop=\"contentUrl\"/>\r\n                        <figcaption class=\"fs-14 padding-top-5\">{{'powered-by-dcn' | translate}}</figcaption>\r\n                    </figure>\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/manage-privacy/manage-privacy.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/manage-privacy/manage-privacy.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"manage-privacy-container account-page padding-top-30 padding-bottom-50\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-12 fs-0 padding-left-0 padding-right-0 padding-left-sm-15 padding-right-sm-15 padding-left-xs-15 padding-right-xs-15\">\r\n                <app-account-sidebar></app-account-sidebar>\r\n                <div class=\"my-profile-page-content inline-block-top\">\r\n                    <div class=\"profile-page-title\">\r\n                        <figure itemscope=\"\" itemtype=\"http://schema.org/ImageObject\" class=\"inline-block\">\r\n                            <img alt=\"Privacy icon\" src=\"assets/images/privacy-icon.svg\"/>\r\n                        </figure>\r\n                        <h2 class=\"fs-24 lato-bold inline-block\">{{'manage-privacy' | translate}}</h2>\r\n                    </div>\r\n                    <div class=\"delete-local-storage fs-0\"></div>\r\n                    <div class=\"delete padding-bottom-50 padding-top-60 padding-top-xs-30 padding-bottom-xs-30 fs-0\">\r\n                        <figure itemscope=\"\" itemtype=\"http://schema.org/ImageObject\" class=\"inline-block\">\r\n                            <img alt=\"Cancel icon\" src=\"assets/images/cancel.svg\"/>\r\n                        </figure>\r\n                        <div class=\"text inline-block\">\r\n                            <h3 class=\"fs-20 padding-bottom-20 lato-bold dark-color\">{{'delete-profile-heading' | translate}}</h3>\r\n                            <div class=\"fs-18 dark-color\">{{'delete-profile-text' | translate}}</div>\r\n                        </div>\r\n                        <div class=\"btn-container inline-block padding-top-30 text-center-xs\">\r\n                            <a (click)=\"deleteAccountMethod()\" class=\"module platform-custom-button platform-background-color platform-border-color hover\">{{'delete-profile-btn' | translate}}</a>\r\n                        </div>\r\n                        <div class=\"error-handle margin-bottom-20\" *ngIf=\"accountDeletionFailed\">{{'request-account-deletion-failed' | translate}}</div>\r\n                    </div>\r\n                    <div class=\"download padding-top-60 padding-bottom-50 padding-top-xs-30 padding-bottom-xs-30 fs-0\">\r\n                        <figure itemscope=\"\" itemtype=\"http://schema.org/ImageObject\" class=\"inline-block\">\r\n                            <img alt=\"Download icon\" src=\"assets/images/download.svg\"/>\r\n                        </figure>\r\n                        <div class=\"text inline-block\">\r\n                            <h3 class=\"fs-20 padding-bottom-20 lato-bold dark-color\">{{'download-data-heading' | translate}}</h3>\r\n                            <div class=\"fs-18 dark-color\">{{'download-data-text' | translate}}</div>\r\n                        </div>\r\n                        <div class=\"btn-container inline-block padding-top-30\">\r\n                            <a (click)=\"downloadGDPRDataMethod()\" class=\"module platform-custom-button platform-background-color platform-border-color hover\">{{'download-data-btn' | translate}}</a>\r\n                        </div>\r\n                        <div class=\"error-handle margin-bottom-20\" *ngIf=\"downloadingGDPRDataFailed\">{{'request-account-data-download-failed' | translate}}</div>\r\n                        <div class=\"camp-successful-data-download\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/my-wallet/my-wallet.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/my-wallet/my-wallet.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"my-wallet-container account-page padding-top-30 padding-bottom-50\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-12 fs-0 padding-left-0 padding-right-0 padding-left-sm-15 padding-right-sm-15 padding-left-xs-15 padding-right-xs-15\">\r\n                <app-account-sidebar></app-account-sidebar>\r\n                <div class=\"my-profile-page-content inline-block-top\">\r\n                    <div class=\"profile-page-title padding-bottom-50\">\r\n                        <figure itemscope=\"\" itemtype=\"http://schema.org/ImageObject\" class=\"inline-block\">\r\n                            <img alt=\"Wallet icon\" src=\"assets/images/wallet-icon.svg\"/>\r\n                        </figure>\r\n                        <h2 class=\"fs-24 lato-bold inline-block\">{{'my-wallet' | translate}}</h2>\r\n                    </div>\r\n                    <h3 class=\"line-crossed-title margin-bottom-25 fs-20 lato-bold black-color\"><span>{{'dcn-balance' | translate}}</span></h3>\r\n                    <div class=\"fs-38 lato-bold black-color\"><span class=\"current-dcn-amount\">{{dcnAmount}}</span> DCN</div>\r\n                    <div class=\"fs-28 lato-bold current-converted-price\">\r\n                        = <div class=\"amount inline-block-top\">{{usdAmount}}</div>\r\n                        <div class=\"symbol inline-block-top\" role=\"button\" aria-pressed=\"false\">\r\n                            <span> USD</span>\r\n                            <ul class=\"dropdown-hidden-menu\">\r\n                                <li><button [attr.data-multiple-with]=\"usdVal\">USD</button></li>\r\n                                <li><button [attr.data-multiple-with]=\"eurVal\">EUR</button></li>\r\n                                <li><button [attr.data-multiple-with]=\"gbpVal\">GBP</button></li>\r\n                                <li><button [attr.data-multiple-with]=\"rubVal\">RUB</button></li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                    <h3 class=\"line-crossed-title margin-bottom-20 fs-20 margin-top-50 lato-bold black-color\"><span>{{'withdraw-dcn' | translate}}</span></h3>\r\n                    <form [formGroup]=\"this.withdrawForm\" (ngSubmit)=\"this.onWithdrawSubmit()\" id=\"withdraw\">\r\n                        <h4 class=\"fs-16 lato-bold padding-bottom-15\"><span class=\"platform-color-important\">•</span> {{'dcn-address' | translate}}</h4>\r\n                        <div class=\"parent-to-display-error padding-bottom-25\">\r\n                            <div class=\"copy-link module\">\r\n                                <!--<input type=\"text\" class=\"custom-input address required\" formControlName=\"address\" maxlength=\"42\" placeholder=\"Your Wallet Address\" id=\"link-to-be-copied\"/>\r\n                                <a href=\"javascript:void(0)\" class=\"lato-bold fs-20 copy-btn platform-custom-button-no-hover module padding-left-5 padding-right-5\" data-toggle=\"tooltip\" title=\"\" data-clipboard-target=\"#link-to-be-copied\" data-original-title=\"Copied.\"><figure itemscope=\"\" itemtype=\"http://schema.org/ImageObject\" class=\"inline-block fs-0\"><img alt=\"Copy icon\" src=\"assets/images/copy-icon.svg\" class=\"width-100 max-width-20\"/></figure> COPY</a>-->\r\n                                <div class=\"dropdown-content next-to-copy-btn\" id=\"search-result-parent\">\r\n                                    <input autocomplete=\"off\" readonly type=\"text\" class=\"custom-input input-field address required search-input\" formControlName=\"address\" maxlength=\"42\" placeholder=\"{{'select-address' | translate}}\" id=\"link-to-be-copied\"/>\r\n                                    <div class=\"search-result module\">\r\n                                        <div class=\"search-body\">\r\n                                            <ul class=\"addresses-list\" id=\"addresses-list\">\r\n                                                <ng-container *ngIf=\"addresses.length\">\r\n                                                    <ng-container  *ngFor=\"let address of addresses; index as i;\">\r\n                                                        <li class=\"platform-color removeable-element fs-0\" [attr.data-id]=\"address.id\">\r\n                                                            <a href=\"javascript:void(0);\" class=\"platform-background-on-hover inline-block\" [attr.data-value]=\"address.dcn_address\">\r\n                                                                <ng-container *ngIf=\"address.dcn_address_label != ''\">\r\n                                                                    {{address.dcn_address_label}} ({{address.dcn_address}})\r\n                                                                </ng-container>\r\n                                                                <ng-container *ngIf=\"address.dcn_address_label == ''\">\r\n                                                                    {{address.dcn_address}}\r\n                                                                </ng-container>\r\n                                                            </a>\r\n                                                            <button type=\"button\" class=\"remove-address-book-element inline-block\">×</button>\r\n                                                        </li>\r\n                                                    </ng-container>\r\n                                                </ng-container>\r\n                                            </ul>\r\n                                        </div>\r\n                                        <div class=\"search-footer\">\r\n                                            <a href=\"javascript:void(0)\" class=\"platform-color add-to-address-book lato-bold\">{{'add-to-book' | translate}}</a>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <a href=\"javascript:void(0)\" class=\"lato-bold fs-20 copy-btn platform-custom-button-no-hover module padding-left-5 padding-right-5 padding-top-0 padding-bottom-0\" data-toggle=\"tooltip\" title=\"\" data-clipboard-target=\"#link-to-be-copied\" data-original-title=\"Copied.\"><figure itemscope=\"\" itemtype=\"http://schema.org/ImageObject\" class=\"inline-block fs-0\"><img alt=\"Copy icon\" src=\"assets/images/copy-icon.svg\" class=\"width-100 max-width-20\"/></figure> {{'copy-btn' | translate}}</a>\r\n                            </div>\r\n                        </div>\r\n                        <div *ngIf=\"withdrawFormSubmitted && this.withdraw_form_data.address.errors\" class=\"margin-bottom-20\">\r\n                            <div class=\"error-handle\" *ngIf=\"this.withdraw_form_data.address.errors.required\">{{'address-required' | translate}}</div>\r\n                            <div class=\"error-handle\" *ngIf=\"this.withdraw_form_data.address.hasError('minlength') || this.withdraw_form_data.address.hasError('maxlength')\">{{'address-validation' | translate}}</div>\r\n                        </div>\r\n                        <div class=\"width-50 padding-bottom-20\">\r\n                            <hr/>\r\n                        </div>\r\n                        <h4 class=\"fs-16 lato-bold padding-bottom-15\"><span class=\"platform-color-important\">•</span> {{'withdraw-rewards' | translate}}</h4>\r\n                        <div class=\"padding-bottom-25 fs-0 withdraw-input-parent parent-to-display-error\">\r\n                            <input type=\"number\" formControlName=\"amount\" class=\"custom-input inline-block amount required\" max=\"{{dcnAmount}}\"/>\r\n                            <div class=\"disabled-amount custom-input inline-block\">{{dcnAmount}} DCN</div>\r\n                            <input type=\"submit\" value=\"WITHDRAW\" class=\"platform-custom-button inline-block withdraw-button module\"/>\r\n                        </div>\r\n                        <div class=\"error-handle margin-bottom-20\" *ngIf=\"withdrawFailed\" [innerHTML]=\"errorMessage\"></div>\r\n                        <div class=\"success-handle margin-bottom-20\" *ngIf=\"withdrawSucceed\" [innerHTML]=\"successMessage\"></div>\r\n                        <div *ngIf=\"withdrawFormSubmitted && this.withdraw_form_data.amount.errors\" class=\"margin-bottom-20\">\r\n                            <div class=\"error-handle\" *ngIf=\"this.withdraw_form_data.amount.errors.required\">{{'amount-required' | translate}}</div>\r\n                            <div class=\"error-handle\" *ngIf=\"this.withdraw_form_data.amount.hasError('min')\">{{'amount-min-validation' | translate}}</div>\r\n                        </div>\r\n                    </form>\r\n                    <div class=\"transaction-history\" *ngIf=\"showWithdrawHistory\">\r\n                        <h3 class=\"line-crossed-title margin-bottom-40 fs-20 margin-top-50 lato-bold black-color\"><span>{{'withdraw-history' | translate}}</span></h3>\r\n                        <div class=\"scrollable-table module\">\r\n                            <div class=\"table-wrapper\">\r\n                                <table class=\"withdraw-table\">\r\n                                    <thead>\r\n                                    <tr>\r\n                                        <th>{{'withdraw-history-date-label' | translate}}</th>\r\n                                        <th>{{'withdraw-history-amount-label' | translate}}</th>\r\n                                        <th>{{'withdraw-history-address-label' | translate}}</th>\r\n                                        <th>{{'withdraw-history-status-label' | translate}}</th>\r\n                                    </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <ng-container *ngFor=\"let withdraw of withdrawHistory; index as i;\">\r\n                                            <tr>\r\n                                                <td>{{withdraw.created_at}}</td>\r\n                                                <td>{{withdraw.amount}} DCN</td>\r\n                                                <td>{{withdraw.address}}</td>\r\n                                                <td>{{withdraw.status}}</td>\r\n                                            </tr>\r\n                                        </ng-container>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                            <figure itemscope=\"\" itemtype=\"http://schema.org/ImageObject\" class=\"mobile-slide text-center\">\r\n                                <img src=\"assets/images/slide.gif\" alt=\"Slide gif\" class=\"max-width-120\"/>\r\n                            </figure>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/not-logged-in-wrapper/not-logged-in-wrapper.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/not-logged-in-wrapper/not-logged-in-wrapper.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"padding-top-15 padding-top-xs-25\">\r\n    <div class=\"container\">\r\n        <div class=\"row fs-0\">\r\n            <div class=\"col-xs-6 inline-block\">\r\n                <figure itemscope=\"\" itemtype=\"http://schema.org/ImageObject\">\r\n                    <a [routerLink]=\"['/'+translate.currentLang+'/login']\" itemprop=\"url\">\r\n                        <img src=\"{{dentistLogo}}\" alt=\"Dentaprime logo\" class=\"dentist-logo-img {{dentistLogoClass}}\"/>\r\n                    </a>\r\n                </figure>\r\n            </div>\r\n            <div class=\"col-xs-6 text-right inline-block\">\r\n                <div class=\"lang-switcher inline-block\">\r\n                    <select (change)=\"this.languageService.onLangSwitcherChange($event.target.value)\" class=\"platform-text-color fix-selects-for-ios\">\r\n                        <option class=\"color-main\" value=\"en\" *ngIf=\"(translate.currentLang == 'en')\" selected>EN</option>\r\n                        <option class=\"color-main\" value=\"de\" *ngIf=\"(translate.currentLang == 'en')\">DE</option>\r\n                        <option class=\"color-main\" value=\"en\" *ngIf=\"(translate.currentLang == 'de')\">EN</option>\r\n                        <option class=\"color-main\" value=\"de\" *ngIf=\"(translate.currentLang == 'de')\" selected>DE</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"camping-currently-offline\"></div>\r\n</header>\r\n<main class=\"container\">\r\n    <router-outlet></router-outlet>\r\n</main>\r\n<footer class=\"text-center padding-top-100 padding-top-xs-40 padding-bottom-10\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-12\">\r\n                <a href=\"https://dentacoin.com\" target=\"_blank\" class=\"inline-block in-app-browser-link\">\r\n                    <figure itemscope=\"\" itemtype=\"http://schema.org/ImageObject\">\r\n                        <img src=\"assets/images/dentacoin-logo.png\" alt=\"Dentacoin logo\" itemprop=\"contentUrl\"/>\r\n                        <figcaption class=\"fs-14 padding-top-5\">{{'powered-by-dcn' | translate}}</figcaption>\r\n                    </figure>\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/partials/account-sidebar/account-sidebar.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/partials/account-sidebar/account-sidebar.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"my-profile-menu inline-block-top\">\n    <div class=\"wrapper\">\n        <div class=\"avatar-and-name padding-bottom-15 fs-0\">\n            <div class=\"welcome-name inline-block fs-16 lato-bold\">Welcome, {{patientData.first_name}} {{patientData.last_name}}</div>\n        </div>\n        <nav class=\"profile-menu module\">\n            <ul itemscope=\"\" itemtype=\"http://schema.org/SiteNavigationElement\">\n                <li>\n                    <a (click)=\"this.redirectsService.redirectToLoggedHome()\" itemprop=\"url\">\n                        <figure itemscope=\"\" itemtype=\"http://schema.org/ImageObject\" class=\"inline-block\">\n                            <img alt=\"Home icon\" src=\"assets/images/home.svg\"/>\n                        </figure>\n                        <span itemprop=\"name\">{{'home-btn' | translate}}</span>\n                    </a>\n                </li>\n                <li>\n                    <a (click)=\"this.redirectsService.redirectToMyWallet()\" itemprop=\"url\" [ngClass]=\"(this.router.url.indexOf('my-wallet') !== -1) ? 'active important platform-border-color' : ''\">\n                        <figure itemscope=\"\" itemtype=\"http://schema.org/ImageObject\" class=\"inline-block\">\n                            <img alt=\"Wallet icon\" src=\"assets/images/wallet-icon.svg\"/>\n                        </figure>\n                        <span itemprop=\"name\">{{'my-wallet-btn' | translate}}</span>\n                    </a>\n                </li>\n                <li>\n                    <a (click)=\"this.redirectsService.redirectToEditAccount()\" itemprop=\"url\" [ngClass]=\"(this.router.url.indexOf('edit-account') !== -1) ? 'active important platform-border-color' : ''\">\n                        <figure itemscope=\"\" itemtype=\"http://schema.org/ImageObject\" class=\"inline-block\">\n                            <img alt=\"Edit account icon\" src=\"assets/images/edit-account-icon.svg\"/>\n                        </figure>\n                        <span itemprop=\"name\">{{'edit-account-btn' | translate}}</span>\n                    </a>\n                </li>\n                <li>\n                    <a (click)=\"this.redirectsService.redirectToManagePrivacy()\" itemprop=\"url\" [ngClass]=\"(this.router.url.indexOf('manage-privacy') !== -1) ? 'active important platform-border-color' : ''\">\n                        <figure itemscope=\"\" itemtype=\"http://schema.org/ImageObject\" class=\"inline-block\">\n                            <img alt=\"Privacy icon\" src=\"assets/images/privacy-icon.svg\"/>\n                        </figure>\n                        <span itemprop=\"name\">{{'manage-privacy-btn' | translate}}</span>\n                    </a>\n                </li>\n                <li>\n                    <a (click)=\"this.authenticationServiceService.logout('patient')\" itemprop=\"url\">\n                        <figure itemscope=\"\" itemtype=\"http://schema.org/ImageObject\" class=\"inline-block\">\n                            <img alt=\"Logout icon\" src=\"assets/images/logout-icon.svg\"/>\n                        </figure>\n                        <span itemprop=\"name\">{{'log-out-btn' | translate}}</span>\n                    </a>\n                </li>\n            </ul>\n        </nav>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/patient-login-page/patient-login-page.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/patient-login-page/patient-login-page.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row padding-top-70 padding-top-sm-50 padding-top-xs-30\">\n    <div class=\"col-xs-12 text-center\">\n        <figure itemscope=\"\" itemtype=\"http://schema.org/ImageObject\" class=\"max-width-150 margin-0-auto\">\n            <img alt=\"Hub icon\" class=\"width-100\" src=\"assets/images/hub-icon-white.png\"/>\n        </figure>\n        <h1 class=\"fs-20 lato-light padding-top-15 padding-bottom-30\">{{'patients-login-title' | translate}}</h1>\n    </div>\n    <div class=\"col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4\">\n        <div class=\"error-handle margin-bottom-20 hide\" id=\"patient-login-failed\">{{'general-error' | translate}}</div>\n        <div class=\"error-handle margin-bottom-20 hide\" id=\"patient-login-failed-missing-email\">{{'patient-login-failed-missing-email' | translate}}</div>\n        <div class=\"error-handle margin-bottom-20 hide\" id=\"patient-login-failed-not-a-patient-of-any-dentist\">{{'patient-login-failed-not-a-patient-of-any-dentist' | translate}}</div>\n        <div class=\"padding-top-20 text-center\">\n            <a href=\"javascript:void(0)\" [attr.data-platform]=\"'dentacoin'\" [attr.data-url]=\"coreDbApiDomain + '/api/login'\" class=\"facebook-custom-btn social-login-btn calibri-regular fs-20 fs-xs-18 max-width-400\">Log in with Facebook</a>\n        </div>\n        <div class=\"padding-top-10 text-center\">\n            <a href=\"javascript:void(0)\" onclick=\"alert('Coming soon!');\" class=\"civic-custom-btn social-login-btn calibri-regular fs-20 fs-xs-18 max-width-400\">Log in with Civic</a>\n        </div>\n        <div class=\"padding-top-40 padding-bottom-10 text-center fs-16\">\n            <div>{{'no-account-yet' | translate}}</div>\n            <a [routerLink]=\"['/'+translate.currentLang+'/request-account']\" itemprop=\"url\" class=\"text-decoration-underline padding-left-5 padding-right-5 fs-18 lato-bold platform-color\">{{'request-account-btn' | translate}}</a>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/request-account/request-account.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/request-account/request-account.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row padding-top-60\">\n    <div class=\"col-xs-12 text-center\">\n        <h1 class=\"fs-40 fs-xs-26\">{{'request-account-title' | translate}}</h1>\n        <p class=\"fs-22 fs-xs-16 lato-light padding-bottom-35\">{{'request-account-subtitle' | translate}}</p>\n    </div>\n    <div class=\"col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4\">\n        <form [formGroup]=\"requestAccountForm\" (ngSubmit)=\"onAccountRequestFormSubmit()\">\n            <div class=\"success-handle margin-bottom-20\" *ngIf=\"sendRequestSucceed\">{{'request-account-thank-you' | translate}}</div>\n            <div class=\"error-handle margin-bottom-20\" *ngIf=\"sendRequestFailed\">{{'request-account-saving-failed' | translate}}</div>\n            <div class=\"padding-top-10\">\n                <div class=\"custom-google-label-style module\" data-input-colorful-border=\"true\">\n                    <label for=\"request-account-firstName\" class=\"platform-color\">{{'fname-label' | translate}}</label>\n                    <input type=\"text\" maxlength=\"100\" id=\"request-account-firstName\" formControlName=\"firstName\" class=\"full-rounded form-field platform-border-color\"/>\n                </div>\n                <div *ngIf=\"requestAccountFormSubmitted && request_form_data.firstName.errors\">\n                    <div class=\"error-handle\" *ngIf=\"request_form_data.firstName.errors.required\">{{'fname-required' | translate}}</div>\n                    <div class=\"error-handle\" *ngIf=\"request_form_data.firstName.hasError('maxlength')\">{{'fname-max-length' | translate}}</div>\n                </div>\n            </div>\n            <div class=\"padding-top-10\">\n                <div class=\"custom-google-label-style module\" data-input-colorful-border=\"true\">\n                    <label for=\"request-account-lastName\" class=\"platform-color\">{{'lname-label' | translate}}</label>\n                    <input type=\"text\" maxlength=\"100\" id=\"request-account-lastName\" formControlName=\"lastName\" class=\"full-rounded form-field platform-border-color\"/>\n                </div>\n                <div *ngIf=\"requestAccountFormSubmitted && request_form_data.lastName.errors\">\n                    <div class=\"error-handle\" *ngIf=\"request_form_data.lastName.errors.required\">{{'lname-required' | translate}}</div>\n                    <div class=\"error-handle\" *ngIf=\"request_form_data.lastName.hasError('maxlength')\">{{'lname-max-length' | translate}}</div>\n                </div>\n            </div>\n            <div class=\"padding-top-10\">\n                <div class=\"custom-google-label-style module\" data-input-colorful-border=\"true\">\n                    <label for=\"request-account-email\" class=\"platform-color\">{{'email-label' | translate}}</label>\n                    <input maxlength=\"100\" type=\"text\" id=\"request-account-email\" formControlName=\"email\" class=\"full-rounded form-field platform-border-color\"/>\n                </div>\n                <div *ngIf=\"requestAccountFormSubmitted && request_form_data.email.errors\">\n                    <div class=\"error-handle\" *ngIf=\"request_form_data.email.errors.required\">{{'email-required' | translate}}</div>\n                    <div class=\"error-handle\" *ngIf=\"request_form_data.email.errors.email\">{{'valid-email' | translate}}</div>\n                </div>\n            </div>\n            <div class=\"padding-top-10\">\n                <div class=\"custom-google-label-style module\" data-input-colorful-border=\"true\">\n                    <label for=\"request-account-phone\" class=\"platform-color\">{{'phone-label' | translate}}</label>\n                    <input type=\"text\" maxlength=\"20\" id=\"request-account-phone\" formControlName=\"phone\" class=\"full-rounded form-field platform-border-color\"/>\n                </div>\n                <div *ngIf=\"requestAccountFormSubmitted && request_form_data.phone.errors\">\n                    <div class=\"error-handle\" *ngIf=\"request_form_data.phone.errors.required\">{{'phone-required' | translate}}</div>\n                    <div class=\"error-handle\" *ngIf=\"request_form_data.phone.hasError('maxlength')\">{{'phone-max-length-validation' | translate}}</div>\n                </div>\n            </div>\n            <div class=\"padding-top-30 text-center\">\n                <button class=\"module platform-custom-button platform-background-color platform-border-color hover\">{{'request-account-button' | translate}}</button>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/verify-account/verify-account.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/verify-account/verify-account.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row padding-top-60\">\n    <div class=\"col-xs-12 text-center\">\n        <h1 class=\"fs-40\">{{'verify-account-title' | translate}}</h1>\n        <p class=\"fs-22 calibri-light padding-bottom-35\">{{'verify-account-text' | translate}}</p>\n    </div>\n    <div class=\"col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4\">\n        <form [formGroup]=\"verifyAccountForm\" (ngSubmit)=\"onVerifyAccountFormSubmit()\">\n            <div class=\"error-handle margin-bottom-20\" *ngIf=\"failedVerifiedAccount\">{{'verify-account-failed' | translate}}</div>\n            <div class=\"custom-google-label-style module\" data-input-colorful-border=\"true\">\n                <label for=\"patient-verify-password\" class=\"platform-color\">{{'password-label' | translate}}</label>\n                <input type=\"password\" maxlength=\"50\" id=\"patient-verify-password\" formControlName=\"password\" class=\"full-rounded form-field platform-border-color\"/>\n            </div>\n            <div *ngIf=\"verifyAccountFormSubmitted && verify_account_form_data.password.errors\">\n                <div class=\"error-handle\" *ngIf=\"verify_account_form_data.password.errors.required\">{{'password-required-validation' | translate}}</div>\n                <div class=\"error-handle\" *ngIf=\"verify_account_form_data.password.hasError('minlength')\">{{'password-min-length-validation' | translate}}</div>\n                <div class=\"error-handle\" *ngIf=\"verify_account_form_data.password.hasError('maxlength')\">{{'password-max-length-validation' | translate}}</div>\n            </div>\n            <div class=\"padding-top-10\">\n                <div class=\"custom-google-label-style module\" data-input-colorful-border=\"true\">\n                    <label for=\"patient-verify-password-repeat\" class=\"platform-color\">{{'repeat-password-label' | translate}}</label>\n                    <input type=\"password\" maxlength=\"50\" id=\"patient-verify-password-repeat\" formControlName=\"repeat_password\" class=\"full-rounded form-field platform-border-color\"/>\n                </div>\n                <div *ngIf=\"verifyAccountFormSubmitted && verify_account_form_data.repeat_password.errors\">\n                    <div class=\"error-handle\" *ngIf=\"verify_account_form_data.repeat_password.errors.required\">{{'repeat-password-required-validation' | translate}}</div>\n                    <div class=\"error-handle\" *ngIf=\"verify_account_form_data.repeat_password.hasError('minlength')\">{{'password-min-length-validation' | translate}}</div>\n                    <div class=\"error-handle\" *ngIf=\"verify_account_form_data.repeat_password.hasError('maxlength')\">{{'password-max-length-validation' | translate}}</div>\n                </div>\n            </div>\n            <div class=\"padding-top-30 padding-bottom-10 text-center\">\n                <button class=\"module platform-custom-button platform-background-color platform-border-color hover\">{{'setup-password-btn' | translate}}</button>\n            </div>\n            <div *ngIf=\"verifyAccountFormSubmitted && differentPasswords\">\n                <div class=\"error-handle\" *ngIf=\"differentPasswords\">{{'passwords-not-match' | translate}}</div>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/_services/additional.service.ts":
/*!*************************************************!*\
  !*** ./src/app/_services/additional.service.ts ***!
  \*************************************************/
/*! exports provided: AdditionalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdditionalService", function() { return AdditionalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



var AdditionalService = /** @class */ (function () {
    function AdditionalService() {
    }
    // showing front end loader
    AdditionalService.prototype.showLoader = function () {
        if (!jquery__WEBPACK_IMPORTED_MODULE_2__('.camping-loader').hasClass('loaded')) {
            jquery__WEBPACK_IMPORTED_MODULE_2__('.camping-loader').html('<div class="response-layer"><div class="wrapper"><picture itemscope="" itemtype="http://schema.org/ImageObject"><source media="(max-width: 768px)" srcset="assets/images/dcn-flipping-coin-logo-loader-v3-mobile.gif"><img itemprop="contentUrl" src="assets/images/dcn-flipping-coin-logo-loader-v3_desktop.gif" class="max-width-250 max-width-xs-200" alt="Loader"></picture></div></div>').addClass('loaded');
            jquery__WEBPACK_IMPORTED_MODULE_2__('.camping-loader .response-layer').show();
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_2__('.camping-loader .response-layer').show();
        }
    };
    // hiding front end loader
    AdditionalService.prototype.hideLoader = function () {
        jquery__WEBPACK_IMPORTED_MODULE_2__('.camping-loader .response-layer').hide();
    };
    AdditionalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AdditionalService);
    return AdditionalService;
}());



/***/ }),

/***/ "./src/app/_services/authentication-service.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/_services/authentication-service.service.ts ***!
  \*************************************************************/
/*! exports provided: AuthenticationServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationServiceService", function() { return AuthenticationServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _redirects_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./redirects.service */ "./src/app/_services/redirects.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");







var AuthenticationServiceService = /** @class */ (function () {
    function AuthenticationServiceService(router, http, redirectsService) {
        this.router = router;
        this.http = http;
        this.redirectsService = redirectsService;
        this.isDentistLoggedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.hasDentistStorageSession());
        this.isPatientLoggedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.hasPatientStorageSession());
        this.generalError = false;
        this.dentistAuthFailed = false;
        this.notAPartner = false;
    }
    AuthenticationServiceService.prototype.dentistLogin = function (email, password, type) {
        var _this = this;
        console.log('dentistLogin');
        var ParseHeaders = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        };
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('email', email).set('password', password).set('platform', 'assurance').set('type', type);
        // const body = new HttpParams().set('email', 'miroslav.nedelchev@dentacoin.com').set('password', 'uniquepass').set('platform', 'assurance').set('type', type);
        this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].coreDbApiDomain + '/api/login', body.toString(), ParseHeaders).subscribe({
            next: function (response) {
                console.log(response, 'dentistLogin');
                if (response.success) {
                    if (response.data.is_partner == true) {
                        console.log('partner');
                        localStorage.setItem('currentDentist', JSON.stringify({
                            id: response.data.id,
                            token: response.token
                        }));
                        _this.isDentistLoggedSubject.next(true);
                        _this.redirectsService.redirectToAdmin();
                    }
                    else {
                        console.log('not partner');
                        _this.notAPartner = true;
                    }
                }
                else {
                    _this.dentistAuthFailed = true;
                }
            },
            error: function (error) {
                _this.generalError = true;
            }
        });
    };
    AuthenticationServiceService.prototype.logout = function (redirect) {
        localStorage.clear();
        this.isPatientLoggedSubject.next(false);
        this.isDentistLoggedSubject.next(false);
        if (redirect === 'dentist') {
            this.redirectsService.redirectToAdminLogin();
        }
        else if (redirect === 'patient') {
            this.redirectsService.redirectToPatientLogin('login');
        }
    };
    AuthenticationServiceService.prototype.hasDentistStorageSession = function () {
        return !!localStorage.getItem('currentDentist');
    };
    AuthenticationServiceService.prototype.hasPatientStorageSession = function () {
        return !!localStorage.getItem('currentPatient');
    };
    AuthenticationServiceService.prototype.isDentistLoggedIn = function () {
        return this.isDentistLoggedSubject.asObservable();
    };
    AuthenticationServiceService.prototype.isPatientLoggedIn = function () {
        return this.isPatientLoggedSubject.asObservable();
    };
    AuthenticationServiceService.prototype.redirectToLoginIfNotLoggedIn = function () {
        if (!this.hasDentistStorageSession()) {
            this.redirectsService.redirectToAdminLogin();
        }
    };
    AuthenticationServiceService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _redirects_service__WEBPACK_IMPORTED_MODULE_5__["RedirectsService"] }
    ]; };
    AuthenticationServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthenticationServiceService);
    return AuthenticationServiceService;
}());



/***/ }),

/***/ "./src/app/_services/language.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_services/language.service.ts ***!
  \***********************************************/
/*! exports provided: LanguageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageService", function() { return LanguageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LanguageService = /** @class */ (function () {
    function LanguageService(translate, activatedRoute, router) {
        this.translate = translate;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    LanguageService.prototype.onLangSwitcherChange = function (lang) {
        this.router.navigateByUrl(this.router.url.substring(0, 1) + lang + this.router.url.substring(3));
    };
    LanguageService.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    LanguageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], LanguageService);
    return LanguageService;
}());



/***/ }),

/***/ "./src/app/_services/redirects.service.ts":
/*!************************************************!*\
  !*** ./src/app/_services/redirects.service.ts ***!
  \************************************************/
/*! exports provided: RedirectsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedirectsService", function() { return RedirectsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");




var RedirectsService = /** @class */ (function () {
    function RedirectsService(router, translate, ngZone) {
        this.router = router;
        this.translate = translate;
        this.ngZone = ngZone;
    }
    RedirectsService.prototype.redirectToAdminLogin = function () {
        this.router.navigateByUrl(this.translate.currentLang + '/admin-login');
    };
    RedirectsService.prototype.redirectToAdmin = function () {
        this.router.navigateByUrl(this.translate.currentLang + '/admin');
    };
    RedirectsService.prototype.redirectToAdvancedAdmin = function () {
        this.router.navigateByUrl(this.translate.currentLang + '/admin/advanced');
    };
    RedirectsService.prototype.redirectToLoggedHome = function () {
        var _this = this;
        console.log('redirectToLoggedHome');
        this.ngZone.run(function () { return _this.router.navigateByUrl(_this.translate.currentLang); }).then();
    };
    RedirectsService.prototype.redirectToPatientLogin = function (type) {
        console.log('redirectToPatientLogin');
        if (type === 'account-verification') {
            this.router.navigate([this.translate.currentLang + '/login'], { state: { successfullyVerifiedAccount: true } });
        }
        else if (type === 'change-password') {
            this.router.navigate([this.translate.currentLang + '/login'], { state: { successfullyChangePassword: true } });
        }
        else if (type === 'login') {
            this.router.navigateByUrl(this.translate.currentLang + '/login');
        }
    };
    RedirectsService.prototype.redirectToMyWallet = function () {
        this.router.navigateByUrl(this.translate.currentLang + '/my-wallet');
    };
    RedirectsService.prototype.redirectToEditAccount = function () {
        this.router.navigateByUrl(this.translate.currentLang + '/edit-account');
    };
    RedirectsService.prototype.redirectToManagePrivacy = function () {
        this.router.navigateByUrl(this.translate.currentLang + '/manage-privacy');
    };
    RedirectsService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    RedirectsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], RedirectsService);
    return RedirectsService;
}());



/***/ }),

/***/ "./src/app/_services/requests.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_services/requests.service.ts ***!
  \***********************************************/
/*! exports provided: RequestsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsService", function() { return RequestsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var RequestsService = /** @class */ (function () {
    function RequestsService(http) {
        this.http = http;
    }
    RequestsService.prototype.getDentacoinDataByExternalProvider = function (currency) {
        return this.http.get('https://indacoin.com/api/GetCoinConvertAmount/' + currency + '/DCN/100/dentacoin');
    };
    // ===================================== HubApp api methods =====================================
    RequestsService.prototype.getDentistData = function (id) {
        return this.http.get('https://dcn-hub-app-api.dentacoin.com/dentist/get-dentist-data/' + id);
    };
    RequestsService.prototype.sendRequestAccountMail = function (body) {
        return this.http.post('https://dcn-hub-app-api.dentacoin.com/patient/send-request-account-mail', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        });
    };
    RequestsService.prototype.withdraw = function (body) {
        return this.http.post('https://dcn-hub-app-api.dentacoin.com/patient/withdraw', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            })
        });
    };
    RequestsService.prototype.coreDbLogin = function (body) {
        return this.http.post('https://dcn-hub-app-api.dentacoin.com/patient/coredb-login', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            })
        });
    };
    RequestsService.prototype.getWithdrawHistory = function (body) {
        return this.http.post('https://dcn-hub-app-api.dentacoin.com/patient/get-dcn-withdraw-history', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        });
    };
    RequestsService.prototype.requestForgottenPasswordToken = function (body) {
        return this.http.post('https://dcn-hub-app-api.dentacoin.com/patient/request-forgotten-password', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        });
    };
    // ===================================== CoreDB api methods =====================================
    RequestsService.prototype.getTitles = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].coreDbApiDomain + '/api/enums');
    };
    RequestsService.prototype.getCountries = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].coreDbApiDomain + '/api/countries');
    };
    RequestsService.prototype.downloadGDPRData = function (token) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].coreDbApiDomain + '/api/gdpr/', null, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            })
        });
    };
    RequestsService.prototype.deleteProfile = function (body, token) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].coreDbApiDomain + '/api/user/', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            })
        });
    };
    RequestsService.prototype.editProfile = function (body, token) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].coreDbApiDomain + '/api/user/', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            })
        });
    };
    RequestsService.prototype.getUserData = function (token) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].coreDbApiDomain + '/api/user/', {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            })
        });
    };
    RequestsService.prototype.getDCNBalance = function (token) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].coreDbApiDomain + '/api/balance', null, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            })
        });
    };
    RequestsService.prototype.getAddresses = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].coreDbApiDomain + '/api/wallet-addresses/' + id);
    };
    RequestsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    RequestsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], RequestsService);
    return RequestsService;
}());



/***/ }),

/***/ "./src/app/admin-login/admin-login.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin-login/admin-login.component.ts ***!
  \******************************************************/
/*! exports provided: AdminLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLoginComponent", function() { return AdminLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/authentication-service.service */ "./src/app/_services/authentication-service.service.ts");
/* harmony import */ var _services_redirects_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/redirects.service */ "./src/app/_services/redirects.service.ts");






var AdminLoginComponent = /** @class */ (function () {
    function AdminLoginComponent(router, formBuilder, authenticationServiceService, redirectsService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.authenticationServiceService = authenticationServiceService;
        this.redirectsService = redirectsService;
        this.dentistsFormSubmitted = false;
        this.isDentistLoggedIn = authenticationServiceService.isDentistLoggedSubject;
    }
    AdminLoginComponent.prototype.ngOnInit = function () {
        if (this.authenticationServiceService.hasDentistStorageSession()) {
            // logged-in logic
            this.redirectsService.redirectToAdmin();
        }
        else {
            // not logged-in logic
            this.dentistsLoginForm = this.formBuilder.group({
                email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
                ])),
                password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            });
        }
    };
    Object.defineProperty(AdminLoginComponent.prototype, "dentists_form_data", {
        // convenience getter for easy access to form fields
        get: function () {
            return this.dentistsLoginForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    // dentist trying to log in
    AdminLoginComponent.prototype.onDentistsFormSubmit = function () {
        this.dentistsFormSubmitted = true;
        // stop here if form is invalid
        if (this.dentistsLoginForm.invalid) {
            return;
        }
        this.authenticationServiceService.dentistLogin(this.dentists_form_data.email.value.trim(), this.dentists_form_data.password.value.trim(), 'dentist');
    };
    AdminLoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationServiceService"] },
        { type: _services_redirects_service__WEBPACK_IMPORTED_MODULE_5__["RedirectsService"] }
    ]; };
    AdminLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-login',
            template: __webpack_require__(/*! raw-loader!./admin-login.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin-login/admin-login.component.html")
        })
    ], AdminLoginComponent);
    return AdminLoginComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/authentication-service.service */ "./src/app/_services/authentication-service.service.ts");



var AdminComponent = /** @class */ (function () {
    function AdminComponent(authenticationServiceService) {
        this.authenticationServiceService = authenticationServiceService;
        this.authenticationServiceService.redirectToLoginIfNotLoggedIn();
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent.ctorParameters = function () { return [
        { type: _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationServiceService"] }
    ]; };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-panel',
            template: __webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin.component.html")
        })
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/advanced-admin-panel/advanced-admin-panel.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/admin/advanced-admin-panel/advanced-admin-panel.component.ts ***!
  \******************************************************************************/
/*! exports provided: AdvancedAdminPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedAdminPanelComponent", function() { return AdvancedAdminPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/authentication-service.service */ "./src/app/_services/authentication-service.service.ts");
/* harmony import */ var _services_redirects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/redirects.service */ "./src/app/_services/redirects.service.ts");




var AdvancedAdminPanelComponent = /** @class */ (function () {
    function AdvancedAdminPanelComponent(authenticationServiceService, redirectsService) {
        this.authenticationServiceService = authenticationServiceService;
        this.redirectsService = redirectsService;
        this.isDentistLoggedIn = authenticationServiceService.isDentistLoggedSubject;
    }
    AdvancedAdminPanelComponent.prototype.ngOnInit = function () {
    };
    AdvancedAdminPanelComponent.ctorParameters = function () { return [
        { type: _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationServiceService"] },
        { type: _services_redirects_service__WEBPACK_IMPORTED_MODULE_3__["RedirectsService"] }
    ]; };
    AdvancedAdminPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-advanced-admin-panel',
            template: __webpack_require__(/*! raw-loader!./advanced-admin-panel.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/advanced-admin-panel/advanced-admin-panel.component.html")
        })
    ], AdvancedAdminPanelComponent);
    return AdvancedAdminPanelComponent;
}());



/***/ }),

/***/ "./src/app/admin/advanced-admin-panel/applications/applications.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/admin/advanced-admin-panel/applications/applications.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ApplicationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationsComponent", function() { return ApplicationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ApplicationsComponent = /** @class */ (function () {
    function ApplicationsComponent() {
    }
    ApplicationsComponent.prototype.ngOnInit = function () {
    };
    ApplicationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-applications',
            template: __webpack_require__(/*! raw-loader!./applications.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/advanced-admin-panel/applications/applications.component.html")
        })
    ], ApplicationsComponent);
    return ApplicationsComponent;
}());



/***/ }),

/***/ "./src/app/admin/advanced-admin-panel/push-notifications/push-notifications.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/admin/advanced-admin-panel/push-notifications/push-notifications.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: PushNotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushNotificationsComponent", function() { return PushNotificationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PushNotificationsComponent = /** @class */ (function () {
    function PushNotificationsComponent() {
    }
    PushNotificationsComponent.prototype.ngOnInit = function () {
    };
    PushNotificationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-push-notifications',
            template: __webpack_require__(/*! raw-loader!./push-notifications.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/advanced-admin-panel/push-notifications/push-notifications.component.html")
        })
    ], PushNotificationsComponent);
    return PushNotificationsComponent;
}());



/***/ }),

/***/ "./src/app/admin/basic-admin-panel/basic-admin-panel.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/admin/basic-admin-panel/basic-admin-panel.component.ts ***!
  \************************************************************************/
/*! exports provided: BasicAdminPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicAdminPanelComponent", function() { return BasicAdminPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_redirects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/redirects.service */ "./src/app/_services/redirects.service.ts");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/language.service */ "./src/app/_services/language.service.ts");





// import * as $ from 'jquery';
var BasicAdminPanelComponent = /** @class */ (function () {
    function BasicAdminPanelComponent(translate, redirectsService, languageService) {
        this.translate = translate;
        this.redirectsService = redirectsService;
        this.languageService = languageService;
    }
    BasicAdminPanelComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
        { type: _services_redirects_service__WEBPACK_IMPORTED_MODULE_3__["RedirectsService"] },
        { type: _services_language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"] }
    ]; };
    BasicAdminPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-basic-admin-panel',
            template: __webpack_require__(/*! raw-loader!./basic-admin-panel.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/basic-admin-panel/basic-admin-panel.component.html")
        })
    ], BasicAdminPanelComponent);
    return BasicAdminPanelComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _patient_login_page_patient_login_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./patient-login-page/patient-login-page.component */ "./src/app/patient-login-page/patient-login-page.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _admin_advanced_admin_panel_applications_applications_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/advanced-admin-panel/applications/applications.component */ "./src/app/admin/advanced-admin-panel/applications/applications.component.ts");
/* harmony import */ var _admin_basic_admin_panel_basic_admin_panel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/basic-admin-panel/basic-admin-panel.component */ "./src/app/admin/basic-admin-panel/basic-admin-panel.component.ts");
/* harmony import */ var _admin_advanced_admin_panel_advanced_admin_panel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/advanced-admin-panel/advanced-admin-panel.component */ "./src/app/admin/advanced-admin-panel/advanced-admin-panel.component.ts");
/* harmony import */ var _admin_advanced_admin_panel_push_notifications_push_notifications_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/advanced-admin-panel/push-notifications/push-notifications.component */ "./src/app/admin/advanced-admin-panel/push-notifications/push-notifications.component.ts");
/* harmony import */ var _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin-login/admin-login.component */ "./src/app/admin-login/admin-login.component.ts");
/* harmony import */ var _front_end_language_front_end_language_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./front-end-language/front-end-language.component */ "./src/app/front-end-language/front-end-language.component.ts");
/* harmony import */ var _verify_account_verify_account_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./verify-account/verify-account.component */ "./src/app/verify-account/verify-account.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _my_wallet_my_wallet_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./my-wallet/my-wallet.component */ "./src/app/my-wallet/my-wallet.component.ts");
/* harmony import */ var _edit_account_edit_account_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./edit-account/edit-account.component */ "./src/app/edit-account/edit-account.component.ts");
/* harmony import */ var _manage_privacy_manage_privacy_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./manage-privacy/manage-privacy.component */ "./src/app/manage-privacy/manage-privacy.component.ts");
/* harmony import */ var _logged_in_wrapper_logged_in_wrapper_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./logged-in-wrapper/logged-in-wrapper.component */ "./src/app/logged-in-wrapper/logged-in-wrapper.component.ts");
/* harmony import */ var _request_account_request_account_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./request-account/request-account.component */ "./src/app/request-account/request-account.component.ts");
/* harmony import */ var _forgotten_password_forgotten_password_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./forgotten-password/forgotten-password.component */ "./src/app/forgotten-password/forgotten-password.component.ts");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/change-password/change-password.component.ts");
/* harmony import */ var _not_logged_in_wrapper_not_logged_in_wrapper_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./not-logged-in-wrapper/not-logged-in-wrapper.component */ "./src/app/not-logged-in-wrapper/not-logged-in-wrapper.component.ts");






















var routes = [
    { path: '', pathMatch: 'full', redirectTo: '/' + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].default_language },
    { path: ':lang', component: _front_end_language_front_end_language_component__WEBPACK_IMPORTED_MODULE_11__["FrontEndLanguageComponent"], children: [
            { path: '', component: _logged_in_wrapper_logged_in_wrapper_component__WEBPACK_IMPORTED_MODULE_17__["LoggedInWrapperComponent"], children: [
                    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"] },
                    { path: 'my-wallet', component: _my_wallet_my_wallet_component__WEBPACK_IMPORTED_MODULE_14__["MyWalletComponent"] },
                    { path: 'edit-account', component: _edit_account_edit_account_component__WEBPACK_IMPORTED_MODULE_15__["EditAccountComponent"] },
                    { path: 'manage-privacy', component: _manage_privacy_manage_privacy_component__WEBPACK_IMPORTED_MODULE_16__["ManagePrivacyComponent"] },
                ] },
            { path: '', component: _not_logged_in_wrapper_not_logged_in_wrapper_component__WEBPACK_IMPORTED_MODULE_21__["NotLoggedInWrapperComponent"], children: [
                    { path: 'forgotten-password', component: _forgotten_password_forgotten_password_component__WEBPACK_IMPORTED_MODULE_19__["ForgottenPasswordComponent"] },
                    { path: 'request-account', component: _request_account_request_account_component__WEBPACK_IMPORTED_MODULE_18__["RequestAccountComponent"] },
                    { path: 'change-password/:token', component: _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_20__["ChangePasswordComponent"] },
                    { path: 'verify-account', children: [
                            { path: ':token', component: _verify_account_verify_account_component__WEBPACK_IMPORTED_MODULE_12__["VerifyAccountComponent"] }
                        ] },
                    { path: 'login', component: _patient_login_page_patient_login_page_component__WEBPACK_IMPORTED_MODULE_4__["PatientLoginPageComponent"] }
                ] },
            { path: 'admin-login', component: _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_10__["AdminLoginComponent"] },
            { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"],
                children: [
                    {
                        path: '',
                        component: _admin_basic_admin_panel_basic_admin_panel_component__WEBPACK_IMPORTED_MODULE_7__["BasicAdminPanelComponent"]
                    },
                    {
                        path: 'advanced',
                        component: _admin_advanced_admin_panel_advanced_admin_panel_component__WEBPACK_IMPORTED_MODULE_8__["AdvancedAdminPanelComponent"],
                        children: [
                            {
                                path: 'applications',
                                component: _admin_advanced_admin_panel_applications_applications_component__WEBPACK_IMPORTED_MODULE_6__["ApplicationsComponent"]
                            },
                            {
                                path: 'push-notifications',
                                component: _admin_advanced_admin_panel_push_notifications_push_notifications_component__WEBPACK_IMPORTED_MODULE_9__["PushNotificationsComponent"]
                            }
                        ]
                    }
                ]
            }
        ] },
    { path: '**', redirectTo: '/' + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].default_language }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [_front_end_language_front_end_language_component__WEBPACK_IMPORTED_MODULE_11__["FrontEndLanguageComponent"], _patient_login_page_patient_login_page_component__WEBPACK_IMPORTED_MODULE_4__["PatientLoginPageComponent"], _admin_advanced_admin_panel_applications_applications_component__WEBPACK_IMPORTED_MODULE_6__["ApplicationsComponent"], _admin_basic_admin_panel_basic_admin_panel_component__WEBPACK_IMPORTED_MODULE_7__["BasicAdminPanelComponent"], _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"], _admin_advanced_admin_panel_advanced_admin_panel_component__WEBPACK_IMPORTED_MODULE_8__["AdvancedAdminPanelComponent"], _admin_advanced_admin_panel_push_notifications_push_notifications_component__WEBPACK_IMPORTED_MODULE_9__["PushNotificationsComponent"], _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_10__["AdminLoginComponent"], _verify_account_verify_account_component__WEBPACK_IMPORTED_MODULE_12__["VerifyAccountComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"], _my_wallet_my_wallet_component__WEBPACK_IMPORTED_MODULE_14__["MyWalletComponent"], _edit_account_edit_account_component__WEBPACK_IMPORTED_MODULE_15__["EditAccountComponent"], _manage_privacy_manage_privacy_component__WEBPACK_IMPORTED_MODULE_16__["ManagePrivacyComponent"], _logged_in_wrapper_logged_in_wrapper_component__WEBPACK_IMPORTED_MODULE_17__["LoggedInWrapperComponent"], _request_account_request_account_component__WEBPACK_IMPORTED_MODULE_18__["RequestAccountComponent"], _forgotten_password_forgotten_password_component__WEBPACK_IMPORTED_MODULE_19__["ForgottenPasswordComponent"], _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_20__["ChangePasswordComponent"], _not_logged_in_wrapper_not_logged_in_wrapper_component__WEBPACK_IMPORTED_MODULE_21__["NotLoggedInWrapperComponent"]];


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(translate) {
        this.translate = translate;
        this.hybrid = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].hybrid;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _partials_account_sidebar_account_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./partials/account-sidebar/account-sidebar.component */ "./src/app/partials/account-sidebar/account-sidebar.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["routingComponents"],
                _partials_account_sidebar_account_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["AccountSidebarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                // ngx-translate and the loader module
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
                    }
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

// required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__["TranslateHttpLoader"](http, 'assets/languages/');
}


/***/ }),

/***/ "./src/app/change-password/change-password.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/change-password/change-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/authentication-service.service */ "./src/app/_services/authentication-service.service.ts");
/* harmony import */ var _services_redirects_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/redirects.service */ "./src/app/_services/redirects.service.ts");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_additional_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_services/additional.service */ "./src/app/_services/additional.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_services/language.service */ "./src/app/_services/language.service.ts");










var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(formBuilder, authenticationServiceService, http, activatedRoute, redirectsService, additionalService, translate, languageService) {
        this.formBuilder = formBuilder;
        this.authenticationServiceService = authenticationServiceService;
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.redirectsService = redirectsService;
        this.additionalService = additionalService;
        this.translate = translate;
        this.languageService = languageService;
        this.changePasswordFormSubmitted = false;
        this.differentPasswords = false;
        this.failedChangePassword = false;
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        if (this.authenticationServiceService.hasPatientStorageSession()) {
            // redirect to home if logged in
            this.redirectsService.redirectToLoggedHome();
        }
        else {
            this.changePasswordForm = this.formBuilder.group({
                password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)
                ])),
                repeat_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)
                ]))
            });
        }
    };
    Object.defineProperty(ChangePasswordComponent.prototype, "change_password_form_data", {
        // convenience getter for easy access to form fields
        get: function () {
            return this.changePasswordForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    // dentist trying to log in
    ChangePasswordComponent.prototype.onchangePasswordFormSubmit = function () {
        var _this = this;
        this.differentPasswords = false;
        this.changePasswordFormSubmitted = true;
        // stop here if form is invalid
        if (this.changePasswordForm.invalid) {
            return;
        }
        if (this.change_password_form_data.password.value.trim() !== this.change_password_form_data.repeat_password.value.trim()) {
            this.differentPasswords = true;
            return;
        }
        var ParseHeaders = {
            headers: new _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        };
        this.activatedRoute.params.subscribe(function (params) {
            _this.additionalService.showLoader();
            var body = new _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpParams"]().set('recoverToken', '123').set('password', _this.change_password_form_data.password.value.trim());
            _this.http.post('https://dcn-hub-app-api.dentacoin.com/patient/change-password', body.toString(), ParseHeaders).subscribe({
                next: function (response) {
                    _this.additionalService.hideLoader();
                    if (response.success) {
                        _this.redirectsService.redirectToPatientLogin('change-password');
                    }
                    else if (response.errors) {
                        _this.failedChangePassword = true;
                    }
                },
                error: function (error) { return _this.authenticationServiceService.logout('patient'); }
            });
        });
    };
    ChangePasswordComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationServiceService"] },
        { type: _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _services_redirects_service__WEBPACK_IMPORTED_MODULE_5__["RedirectsService"] },
        { type: _services_additional_service__WEBPACK_IMPORTED_MODULE_7__["AdditionalService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
        { type: _services_language_service__WEBPACK_IMPORTED_MODULE_9__["LanguageService"] }
    ]; };
    ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! raw-loader!./change-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/change-password/change-password.component.html")
        })
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/edit-account/edit-account.component.ts":
/*!********************************************************!*\
  !*** ./src/app/edit-account/edit-account.component.ts ***!
  \********************************************************/
/*! exports provided: EditAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAccountComponent", function() { return EditAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/authentication-service.service */ "./src/app/_services/authentication-service.service.ts");
/* harmony import */ var _services_redirects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/redirects.service */ "./src/app/_services/redirects.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_requests_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/requests.service */ "./src/app/_services/requests.service.ts");
/* harmony import */ var _services_additional_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_services/additional.service */ "./src/app/_services/additional.service.ts");








var EditAccountComponent = /** @class */ (function () {
    function EditAccountComponent(authenticationServiceService, redirectsService, formBuilder, requestsService, additionalService) {
        this.authenticationServiceService = authenticationServiceService;
        this.redirectsService = redirectsService;
        this.formBuilder = formBuilder;
        this.requestsService = requestsService;
        this.additionalService = additionalService;
        this.patientsEditAccountFormSubmitted = false;
        this.showCountries = false;
        this.countriesList = {};
        this.showTitles = false;
        this.titlesList = {};
        this.patientData = {};
        this.editAccountSuccess = false;
        this.editAccountFailed = false;
        this.editPasswordFailed = false;
        this.passwordsNotMatching = false;
        this.updateCoreDBData = false;
    }
    EditAccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.authenticationServiceService.hasPatientStorageSession()) {
            this.redirectsService.redirectToPatientLogin('login');
        }
        else {
            this.additionalService.showLoader();
            this.patientsEditAccountForm = this.formBuilder.group({
                title: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
                ])),
                firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(100)
                ])),
                lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(100)
                ])),
                phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(20)
                ])),
                country: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
                ])),
                password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(20)
                ])),
                repeatPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(20)
                ]))
            });
            this.requestsService.getCountries().subscribe(function (response) {
                if (response.success && response.data) {
                    _this.countriesList = response.data;
                    _this.showCountries = true;
                }
            });
            this.requestsService.getTitles().subscribe({
                next: function (response) {
                    if (response.success && response.data) {
                        _this.titlesList = response.data.titles;
                        _this.showTitles = true;
                    }
                },
                error: function (error) { return _this.authenticationServiceService.logout('patient'); }
            });
            this.requestsService.getUserData(JSON.parse(window.localStorage.getItem('currentPatient')).token).subscribe({
                next: function (response) {
                    _this.additionalService.hideLoader();
                    if (response.success && response.data) {
                        _this.patientData = response.data;
                        _this.patientName = response.data.first_name + ' ' + response.data.last_name;
                        _this.patientEncryptedPassword = response.data.password;
                        if (response.data.title !== '' && response.data.title !== null) {
                            _this.patientsEditAccountForm.controls['title'].setValue(response.data.title);
                        }
                        if (response.data.first_name !== '' && response.data.first_name !== null) {
                            _this.patientsEditAccountForm.controls['firstName'].setValue(response.data.first_name);
                        }
                        if (response.data.last_name !== '' && response.data.last_name !== null) {
                            _this.patientsEditAccountForm.controls['lastName'].setValue(response.data.last_name);
                        }
                        if (response.data.phone !== '' && response.data.phone !== null) {
                            _this.patientsEditAccountForm.controls['phone'].setValue(response.data.phone);
                        }
                        if (response.data.country !== '' && response.data.country !== null) {
                            _this.patientsEditAccountForm.controls['country'].setValue(response.data.country);
                        }
                    }
                },
                error: function (error) { return _this.authenticationServiceService.logout('patient'); }
            });
        }
    };
    Object.defineProperty(EditAccountComponent.prototype, "patients_edit_account_form_data", {
        // convenience getter for easy access to form fields
        get: function () { return this.patientsEditAccountForm.controls; },
        enumerable: true,
        configurable: true
    });
    // patient trying to log in
    EditAccountComponent.prototype.onPatientsEditAccountFormSubmit = function () {
        var _this = this;
        this.additionalService.showLoader();
        this.patientsEditAccountFormSubmitted = true;
        var paramsMap = new Map();
        paramsMap.set('title', this.patients_edit_account_form_data.title.value);
        paramsMap.set('first_name', this.patients_edit_account_form_data.firstName.value);
        paramsMap.set('last_name', this.patients_edit_account_form_data.lastName.value);
        paramsMap.set('phone', this.patients_edit_account_form_data.phone.value);
        paramsMap.set('country', this.patients_edit_account_form_data.country.value);
        var coreDBparamsMap = new Map();
        if (this.patients_edit_account_form_data.password.value.trim() !== '' || this.patients_edit_account_form_data.repeatPassword.value.trim() !== '') {
            if (this.patients_edit_account_form_data.password.value.trim() !== this.patients_edit_account_form_data.repeatPassword.value.trim()) {
                this.passwordsNotMatching = true;
            }
            else {
                this.passwordsNotMatching = false;
                this.updateCoreDBData = true;
                paramsMap.set('password', this.patients_edit_account_form_data.password.value.trim());
                coreDBparamsMap.set('password', this.patients_edit_account_form_data.password.value.trim());
                coreDBparamsMap.set('repeat-password', this.patients_edit_account_form_data.repeatPassword.value.trim());
            }
        }
        if (this.patients_edit_account_form_data.firstName.value.trim() !== '' || this.patients_edit_account_form_data.lastName.value.trim() !== '') {
            this.updateCoreDBData = true;
            coreDBparamsMap.set('name', this.patients_edit_account_form_data.firstName.value.trim() + ' ' + this.patients_edit_account_form_data.lastName.value.trim());
        }
        // stop here if form is invalid
        if (this.patientsEditAccountForm.invalid || this.passwordsNotMatching) {
            window.scrollTo(0, 0);
            this.additionalService.hideLoader();
            return;
        }
        var params = new _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]();
        paramsMap.forEach(function (value, key) {
            params = params.set(key, value);
        });
        var coreDBparams = new _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]();
        coreDBparamsMap.forEach(function (value, key) {
            coreDBparams = coreDBparams.set(key, value);
        });
        this.requestsService.editProfile(coreDBparams.toString(), JSON.parse(window.localStorage.getItem('currentPatient')).token).subscribe({
            next: function (response) {
                if (response.success) {
                    _this.additionalService.hideLoader();
                    _this.patientsEditAccountForm.controls['password'].setValue('');
                    _this.patientsEditAccountForm.controls['repeatPassword'].setValue('');
                    _this.editAccountSuccess = true;
                    window.scrollTo(0, 0);
                }
                else {
                    _this.additionalService.hideLoader();
                    _this.patientsEditAccountForm.controls['password'].setValue('');
                    _this.patientsEditAccountForm.controls['repeatPassword'].setValue('');
                    _this.editPasswordFailed = true;
                    window.scrollTo(0, 0);
                }
            },
            error: function (error) { return _this.authenticationServiceService.logout('patient'); }
        });
    };
    EditAccountComponent.ctorParameters = function () { return [
        { type: _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationServiceService"] },
        { type: _services_redirects_service__WEBPACK_IMPORTED_MODULE_3__["RedirectsService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _services_requests_service__WEBPACK_IMPORTED_MODULE_6__["RequestsService"] },
        { type: _services_additional_service__WEBPACK_IMPORTED_MODULE_7__["AdditionalService"] }
    ]; };
    EditAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-account',
            template: __webpack_require__(/*! raw-loader!./edit-account.component.html */ "./node_modules/raw-loader/index.js!./src/app/edit-account/edit-account.component.html")
        })
    ], EditAccountComponent);
    return EditAccountComponent;
}());



/***/ }),

/***/ "./src/app/forgotten-password/forgotten-password.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/forgotten-password/forgotten-password.component.ts ***!
  \********************************************************************/
/*! exports provided: ForgottenPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgottenPasswordComponent", function() { return ForgottenPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/authentication-service.service */ "./src/app/_services/authentication-service.service.ts");
/* harmony import */ var _services_redirects_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/redirects.service */ "./src/app/_services/redirects.service.ts");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_requests_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_services/requests.service */ "./src/app/_services/requests.service.ts");
/* harmony import */ var _services_additional_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_services/additional.service */ "./src/app/_services/additional.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_services/language.service */ "./src/app/_services/language.service.ts");











var ForgottenPasswordComponent = /** @class */ (function () {
    function ForgottenPasswordComponent(router, formBuilder, authenticationServiceService, redirectsService, http, requestsService, additionalService, translate, languageService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.authenticationServiceService = authenticationServiceService;
        this.redirectsService = redirectsService;
        this.http = http;
        this.requestsService = requestsService;
        this.additionalService = additionalService;
        this.translate = translate;
        this.languageService = languageService;
        this.forgottenPasswordFormSubmitted = false;
        this.sendFormSucceed = false;
        this.sendFormFailed = false;
    }
    ForgottenPasswordComponent.prototype.ngOnInit = function () {
        if (this.authenticationServiceService.hasPatientStorageSession()) {
            // redirect to home if logged in
            this.redirectsService.redirectToLoggedHome();
        }
        else {
            this.forgottenPasswordForm = this.formBuilder.group({
                email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
                ]))
            });
        }
    };
    Object.defineProperty(ForgottenPasswordComponent.prototype, "forgotten_password_form_data", {
        // convenience getter for easy access to form fields
        get: function () {
            return this.forgottenPasswordForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    // on request form account submit
    ForgottenPasswordComponent.prototype.onForgottenPasswordFormSubmit = function () {
        var _this = this;
        this.additionalService.showLoader();
        this.forgottenPasswordFormSubmitted = true;
        // stop here if form is invalid
        if (this.forgottenPasswordForm.invalid) {
            this.additionalService.hideLoader();
            return;
        }
        var paramsMap = new Map();
        paramsMap.set('email', this.forgotten_password_form_data.email.value);
        paramsMap.set('type_language', this.translate.currentLang);
        var params = new _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpParams"]();
        paramsMap.forEach(function (value, key) {
            params = params.set(key, value);
        });
        this.requestsService.requestForgottenPasswordToken(params.toString()).subscribe(function (response) {
            if (response.success) {
                _this.forgottenPasswordForm.reset();
                Object.keys(_this.forgottenPasswordForm.controls).forEach(function (key) {
                    _this.forgottenPasswordForm.get(key).setErrors(null);
                });
                _this.sendFormSucceed = true;
                _this.sendFormFailed = false;
                _this.additionalService.hideLoader();
            }
            else {
                _this.sendFormFailed = true;
                _this.sendFormSucceed = false;
                _this.additionalService.hideLoader();
            }
        });
    };
    ForgottenPasswordComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationServiceService"] },
        { type: _services_redirects_service__WEBPACK_IMPORTED_MODULE_5__["RedirectsService"] },
        { type: _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
        { type: _services_requests_service__WEBPACK_IMPORTED_MODULE_7__["RequestsService"] },
        { type: _services_additional_service__WEBPACK_IMPORTED_MODULE_8__["AdditionalService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] },
        { type: _services_language_service__WEBPACK_IMPORTED_MODULE_10__["LanguageService"] }
    ]; };
    ForgottenPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgotten-password',
            template: __webpack_require__(/*! raw-loader!./forgotten-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/forgotten-password/forgotten-password.component.html")
        })
    ], ForgottenPasswordComponent);
    return ForgottenPasswordComponent;
}());



/***/ }),

/***/ "./src/app/front-end-language/front-end-language.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/front-end-language/front-end-language.component.ts ***!
  \********************************************************************/
/*! exports provided: FrontEndLanguageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontEndLanguageComponent", function() { return FrontEndLanguageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _services_redirects_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/redirects.service */ "./src/app/_services/redirects.service.ts");







var FrontEndLanguageComponent = /** @class */ (function () {
    function FrontEndLanguageComponent(activatedRoute, translate, router, redirectsService) {
        this.activatedRoute = activatedRoute;
        this.translate = translate;
        this.router = router;
        this.redirectsService = redirectsService;
        this.channelArray = ['de', 'en'];
    }
    FrontEndLanguageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            if (_this.channelArray.indexOf(params['lang']) > -1) {
                _this.translate.use(params['lang']);
            }
            else if (params['lang'] === 'admin') {
                _this.translate.use(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].default_language);
                _this.redirectsService.redirectToAdmin();
            }
            else {
                _this.translate.use(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].default_language);
                if (params.hasOwnProperty('lang')) {
                    _this.router.navigateByUrl(_this.router.url.replace('/' + params['lang'], '/' + _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].default_language));
                }
                else {
                    _this.router.navigateByUrl(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].default_language);
                }
            }
        });
    };
    FrontEndLanguageComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_redirects_service__WEBPACK_IMPORTED_MODULE_5__["RedirectsService"] }
    ]; };
    FrontEndLanguageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-front-end-language',
            template: '<router-outlet></router-outlet>'
        })
    ], FrontEndLanguageComponent);
    return FrontEndLanguageComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/authentication-service.service */ "./src/app/_services/authentication-service.service.ts");
/* harmony import */ var _services_redirects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/redirects.service */ "./src/app/_services/redirects.service.ts");
/* harmony import */ var _services_requests_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/requests.service */ "./src/app/_services/requests.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");






var HomeComponent = /** @class */ (function () {
    function HomeComponent(authenticationServiceService, redirectsService, requestsService, translate) {
        this.authenticationServiceService = authenticationServiceService;
        this.redirectsService = redirectsService;
        this.requestsService = requestsService;
        this.translate = translate;
        this.applications = [];
        this.pageColumnClass = 'col-xs-12 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3';
        this.applicationsColumnClass = 'col-xs-4';
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.authenticationServiceService.hasPatientStorageSession()) {
            console.log('===== 1 =====');
            this.redirectsService.redirectToPatientLogin('login');
        }
        else {
            console.log('===== 2 =====');
            this.requestsService.getDentistData(JSON.parse(localStorage.getItem('currentPatient')).patient_of).subscribe(function (response) {
                console.log('getDentistData');
                _this.hubTitleEn = response.data.hub_title_en;
                _this.hubTitleDe = response.data.hub_title_de;
                _this.applications = Object.keys(response.data.applications).map(function (i) { return response.data.applications[i]; });
                if (_this.applications.length >= 7) {
                    _this.pageColumnClass = 'col-xs-12 col-md-8 col-md-offset-2';
                    _this.applicationsColumnClass = 'col-xs-4 col-sm-3';
                }
            });
        }
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationServiceService"] },
        { type: _services_redirects_service__WEBPACK_IMPORTED_MODULE_3__["RedirectsService"] },
        { type: _services_requests_service__WEBPACK_IMPORTED_MODULE_4__["RequestsService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html")
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/logged-in-wrapper/logged-in-wrapper.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/logged-in-wrapper/logged-in-wrapper.component.ts ***!
  \******************************************************************/
/*! exports provided: LoggedInWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedInWrapperComponent", function() { return LoggedInWrapperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/authentication-service.service */ "./src/app/_services/authentication-service.service.ts");
/* harmony import */ var _services_redirects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/redirects.service */ "./src/app/_services/redirects.service.ts");
/* harmony import */ var _services_requests_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/requests.service */ "./src/app/_services/requests.service.ts");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/language.service */ "./src/app/_services/language.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");









var LoggedInWrapperComponent = /** @class */ (function () {
    function LoggedInWrapperComponent(authenticationServiceService, redirectsService, requestsService, languageService, translate, router) {
        this.authenticationServiceService = authenticationServiceService;
        this.redirectsService = redirectsService;
        this.requestsService = requestsService;
        this.languageService = languageService;
        this.translate = translate;
        this.router = router;
        this.dentistData = {
            logo: ''
        };
        this.patientData = {
            first_name: '',
            last_name: ''
        };
        /*public applications = [];
        public showApplications: boolean = false;*/
        this.dcnAmount = 0;
        this.usdAmount = 0;
    }
    LoggedInWrapperComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('WASD');
        if (!this.authenticationServiceService.hasPatientStorageSession()) {
            console.log('WASD1');
            this.redirectsService.redirectToPatientLogin('login');
        }
        else {
            console.log('WASD2');
            this.myAccountLink = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].accountDomain + '/custom-cookie?slug=' + encodeURIComponent(JSON.parse(localStorage.getItem('currentPatient')).encrypted_id) + '&type=' + encodeURIComponent(JSON.parse(localStorage.getItem('currentPatient')).encrypted_type) + '&token=' + encodeURIComponent(JSON.parse(localStorage.getItem('currentPatient')).encrypted_token);
            this.requestsService.getDentistData(JSON.parse(localStorage.getItem('currentPatient')).patient_of).subscribe(function (response) {
                console.log('logged in wrapper getDentistData');
                _this.dentistData.logo = response.data.logo;
                /*if(this.router.url.length > 3) {
                    this.showApplications = true;
                    this.applications = Object.keys(response.data.applications).map(i => response.data.applications[i]);
                }*/
            });
            this.requestsService.getUserData(JSON.parse(window.localStorage.getItem('currentPatient')).token).subscribe({
                next: function (response) {
                    _this.patientData.first_name = response.data.first_name;
                    _this.patientData.last_name = response.data.last_name;
                },
                error: function (error) { return _this.authenticationServiceService.logout('patient'); }
            });
            this.updateDcnAndUsdBalance();
            if (typeof (this.updateDcnAndUsdBalanceTimer) !== 'undefined') {
                clearInterval(this.updateDcnAndUsdBalanceTimer);
                this.updateDcnAndUsdBalanceTimer = undefined;
            }
            this.updateDcnAndUsdBalanceTimer = setInterval(function () {
                if (!_this.authenticationServiceService.hasPatientStorageSession()) {
                    clearInterval(_this.updateDcnAndUsdBalanceTimer);
                    _this.updateDcnAndUsdBalanceTimer = undefined;
                }
                else {
                    _this.updateDcnAndUsdBalance();
                }
            }, 5000);
        }
    };
    LoggedInWrapperComponent.prototype.updateDcnAndUsdBalance = function () {
        var _this = this;
        console.log('updateDcnAndUsdBalance');
        this.requestsService.getDCNBalance(JSON.parse(window.localStorage.getItem('currentPatient')).token).subscribe({
            next: function (response) {
                if (response.success) {
                    _this.dcnAmount = response.data;
                    _this.requestsService.getDentacoinDataByExternalProvider('USD').subscribe(function (coingeckoResponse) {
                        _this.usdAmount = Number(((1 / Number(Number(coingeckoResponse) / 100)) * _this.dcnAmount).toFixed(2));
                    });
                }
            },
            error: function (error) { return _this.authenticationServiceService.logout('patient'); }
        });
    };
    LoggedInWrapperComponent.prototype.isAccountPage = function () {
        if (this.router.url.indexOf('my-wallet') !== -1 || this.router.url.indexOf('edit-account') !== -1 || this.router.url.indexOf('manage-privacy') !== -1) {
            return true;
        }
        else {
            return false;
        }
    };
    LoggedInWrapperComponent.ctorParameters = function () { return [
        { type: _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationServiceService"] },
        { type: _services_redirects_service__WEBPACK_IMPORTED_MODULE_3__["RedirectsService"] },
        { type: _services_requests_service__WEBPACK_IMPORTED_MODULE_4__["RequestsService"] },
        { type: _services_language_service__WEBPACK_IMPORTED_MODULE_5__["LanguageService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
    ]; };
    LoggedInWrapperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logged-in-wrapper',
            template: __webpack_require__(/*! raw-loader!./logged-in-wrapper.component.html */ "./node_modules/raw-loader/index.js!./src/app/logged-in-wrapper/logged-in-wrapper.component.html")
        })
    ], LoggedInWrapperComponent);
    return LoggedInWrapperComponent;
}());



/***/ }),

/***/ "./src/app/manage-privacy/manage-privacy.component.ts":
/*!************************************************************!*\
  !*** ./src/app/manage-privacy/manage-privacy.component.ts ***!
  \************************************************************/
/*! exports provided: ManagePrivacyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagePrivacyComponent", function() { return ManagePrivacyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/authentication-service.service */ "./src/app/_services/authentication-service.service.ts");
/* harmony import */ var _services_redirects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/redirects.service */ "./src/app/_services/redirects.service.ts");
/* harmony import */ var _services_requests_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/requests.service */ "./src/app/_services/requests.service.ts");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var ManagePrivacyComponent = /** @class */ (function () {
    function ManagePrivacyComponent(authenticationServiceService, redirectsService, requestsService) {
        this.authenticationServiceService = authenticationServiceService;
        this.redirectsService = redirectsService;
        this.requestsService = requestsService;
        this.accountDataDownloadingFailed = false;
        this.accountDeletionFailed = false;
        this.downloadingGDPRDataFailed = false;
    }
    ManagePrivacyComponent.prototype.ngOnInit = function () {
        if (!this.authenticationServiceService.hasPatientStorageSession()) {
            this.redirectsService.redirectToPatientLogin('login');
        }
    };
    ManagePrivacyComponent.prototype.deleteAccountMethod = function () {
        var _this = this;
        var deleteAccount = confirm('Warning! Are you sure you want to delete your account? Deleting your account is permanent action.');
        if (deleteAccount === true) {
            this.requestsService.deleteProfile(new _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]().set('self_deleted', 'true').toString(), JSON.parse(window.localStorage.getItem('currentPatient')).token).subscribe({
                next: function (response) {
                    if (response.success && response.data) {
                        _this.authenticationServiceService.logout('patient');
                    }
                    else {
                        _this.accountDeletionFailed = true;
                    }
                },
                error: function (error) { return _this.authenticationServiceService.logout('patient'); }
            });
        }
    };
    ManagePrivacyComponent.prototype.downloadGDPRDataMethod = function () {
        var _this = this;
        console.log('downloadGDPRDataMethod');
        this.requestsService.downloadGDPRData(JSON.parse(window.localStorage.getItem('currentPatient')).token).subscribe({
            next: function (response) {
                if (response.success && response.data) {
                    window.open(response.data, '_system');
                    return false;
                }
                else {
                    _this.downloadingGDPRDataFailed = true;
                }
            },
            error: function (error) { return _this.authenticationServiceService.logout('patient'); }
        });
    };
    ManagePrivacyComponent.ctorParameters = function () { return [
        { type: _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationServiceService"] },
        { type: _services_redirects_service__WEBPACK_IMPORTED_MODULE_3__["RedirectsService"] },
        { type: _services_requests_service__WEBPACK_IMPORTED_MODULE_4__["RequestsService"] }
    ]; };
    ManagePrivacyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manage-privacy',
            template: __webpack_require__(/*! raw-loader!./manage-privacy.component.html */ "./node_modules/raw-loader/index.js!./src/app/manage-privacy/manage-privacy.component.html")
        })
    ], ManagePrivacyComponent);
    return ManagePrivacyComponent;
}());



/***/ }),

/***/ "./src/app/my-wallet/my-wallet.component.ts":
/*!**************************************************!*\
  !*** ./src/app/my-wallet/my-wallet.component.ts ***!
  \**************************************************/
/*! exports provided: MyWalletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyWalletComponent", function() { return MyWalletComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/authentication-service.service */ "./src/app/_services/authentication-service.service.ts");
/* harmony import */ var _services_redirects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/redirects.service */ "./src/app/_services/redirects.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_requests_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/requests.service */ "./src/app/_services/requests.service.ts");
/* harmony import */ var _services_additional_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_services/additional.service */ "./src/app/_services/additional.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_8__);









var MyWalletComponent = /** @class */ (function () {
    function MyWalletComponent(authenticationServiceService, redirectsService, formBuilder, requestsService, additionalService) {
        this.authenticationServiceService = authenticationServiceService;
        this.redirectsService = redirectsService;
        this.formBuilder = formBuilder;
        this.requestsService = requestsService;
        this.additionalService = additionalService;
        this.withdrawFormSubmitted = false;
        this.showCurrenciesList = false;
        this.showWithdrawHistory = false;
        this.withdrawHistory = [];
        this.withdrawFailed = false;
        this.withdrawSucceed = false;
        this.usdVal = 0;
        this.eurVal = 0;
        this.gbpVal = 0;
        this.rubVal = 0;
        this.addresses = [];
        this.currencies = ['USD', 'EUR', 'GBP', 'RUB'];
    }
    MyWalletComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.authenticationServiceService.hasPatientStorageSession()) {
            this.redirectsService.redirectToPatientLogin('login');
        }
        else {
            this.withdrawForm = this.formBuilder.group({
                address: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(42), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(42)
                ])),
                amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(10000)
                ]))
            });
            jquery__WEBPACK_IMPORTED_MODULE_8__('form#withdraw .disabled-amount').on('click', function (e) {
                jquery__WEBPACK_IMPORTED_MODULE_8__(e.currentTarget).hide();
                jquery__WEBPACK_IMPORTED_MODULE_8__('form#withdraw .amount').show().focus();
            });
            jquery__WEBPACK_IMPORTED_MODULE_8__(document).on('click', '.search-result .search-body ul li a', function (e) {
                _this.withdrawForm.controls['address'].setValue(jquery__WEBPACK_IMPORTED_MODULE_8__(e.currentTarget).attr('data-value'));
                jquery__WEBPACK_IMPORTED_MODULE_8__('.search-result').hide();
            });
            this.requestsService.getAddresses(JSON.parse(window.localStorage.getItem('currentPatient')).id).subscribe(function (response) {
                if (response.success) {
                    if (response.data.length) {
                        _this.addresses = Object.keys(response.data).map(function (i) { return response.data[i]; });
                        if (_this.addresses.length) {
                            _this.withdrawForm.controls['address'].setValue(_this.addresses[0].dcn_address);
                        }
                    }
                }
            });
            this.updateDCNBalance();
            this.updateDCNWithdrawHistory();
        }
    };
    MyWalletComponent.prototype.updateDCNBalance = function () {
        var _this = this;
        this.requestsService.getDCNBalance(JSON.parse(window.localStorage.getItem('currentPatient')).token).subscribe({
            next: function (response) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var _loop_1, this_1, i, len, checkingIfRequestsFinished_1;
                var _this = this;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    if (response.success) {
                        this.withdrawForm.controls['amount'].setValue(response.data);
                        this.dcnAmount = response.data;
                        _loop_1 = function (i, len) {
                            this_1.requestsService.getDentacoinDataByExternalProvider(this_1.currencies[i]).subscribe(function (coingeckoResponse) {
                                if (_this.currencies[i] === 'USD') {
                                    _this.usdVal = 1 / Number(Number(coingeckoResponse) / 100);
                                    _this.usdAmount = Number((_this.usdVal * _this.dcnAmount).toFixed(4));
                                }
                                else if (_this.currencies[i] === 'EUR') {
                                    _this.eurVal = 1 / Number(Number(coingeckoResponse) / 100);
                                }
                                else if (_this.currencies[i] === 'GBP') {
                                    _this.gbpVal = 1 / Number(Number(coingeckoResponse) / 100);
                                }
                                else if (_this.currencies[i] === 'RUB') {
                                    _this.rubVal = 1 / Number(Number(coingeckoResponse) / 100);
                                }
                            });
                        };
                        this_1 = this;
                        for (i = 0, len = this.currencies.length; i < len; i++) {
                            _loop_1(i, len);
                        }
                        checkingIfRequestsFinished_1 = setInterval(function () {
                            console.log('checkingIfRequestsFinished');
                            if (_this.usdVal !== 0 && _this.eurVal !== 0 && _this.gbpVal !== 0 && _this.rubVal !== 0) {
                                clearInterval(checkingIfRequestsFinished_1);
                                jquery__WEBPACK_IMPORTED_MODULE_8__(document).ready(function () {
                                    jquery__WEBPACK_IMPORTED_MODULE_8__('.my-wallet-container .dropdown-hidden-menu button').on('click', function (e) {
                                        var this_btn = jquery__WEBPACK_IMPORTED_MODULE_8__(e.currentTarget);
                                        jquery__WEBPACK_IMPORTED_MODULE_8__('.my-wallet-container .current-converted-price .amount').html((parseFloat(jquery__WEBPACK_IMPORTED_MODULE_8__('.current-dcn-amount').html()) * parseFloat(this_btn.attr('data-multiple-with'))).toFixed(2));
                                        jquery__WEBPACK_IMPORTED_MODULE_8__('.my-wallet-container .current-converted-price .symbol span').html(this_btn.html());
                                    });
                                });
                            }
                        }, 500);
                    }
                    return [2 /*return*/];
                });
            }); },
            error: function (error) { return _this.authenticationServiceService.logout('patient'); }
        });
    };
    MyWalletComponent.prototype.updateDCNWithdrawHistory = function () {
        var _this = this;
        var withdrawHistoryBody = new _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]().set('id', JSON.parse(window.localStorage.getItem('currentPatient')).id).set('token', JSON.parse(window.localStorage.getItem('currentPatient')).token);
        this.requestsService.getWithdrawHistory(withdrawHistoryBody.toString()).subscribe({
            next: function (withdrawHistoryResponse) {
                if (withdrawHistoryResponse.success) {
                    _this.withdrawHistory = Object.keys(withdrawHistoryResponse.data).map(function (i) { return withdrawHistoryResponse.data[i]; });
                    _this.showWithdrawHistory = true;
                }
            },
            error: function (error) { return _this.authenticationServiceService.logout('patient'); }
        });
    };
    Object.defineProperty(MyWalletComponent.prototype, "withdraw_form_data", {
        // convenience getter for easy access to form fields
        get: function () { return this.withdrawForm.controls; },
        enumerable: true,
        configurable: true
    });
    MyWalletComponent.prototype.withdraw = function (body) {
        var _this = this;
        this.requestsService.withdraw(body).subscribe(function (withdrawResponse) {
            _this.additionalService.hideLoader();
            if (withdrawResponse.success) {
                _this.updateDCNBalance();
                _this.updateDCNWithdrawHistory();
                _this.successMessage = withdrawResponse.message;
                _this.withdrawSucceed = true;
            }
            else {
                _this.errorMessage = withdrawResponse.error;
                _this.withdrawFailed = true;
            }
        });
    };
    // patient saving his DCN addess in CoreDB
    MyWalletComponent.prototype.onWithdrawSubmit = function () {
        this.additionalService.showLoader();
        this.withdrawFormSubmitted = true;
        // stop here if form is invalid
        if (this.withdrawForm.invalid) {
            this.additionalService.hideLoader();
            return;
        }
        // if the withdraw to address is the same as the last time withdrawing
        var withdrawBody = new _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]().set('amount', this.withdraw_form_data.amount.value).set('address', this.withdraw_form_data.address.value.trim()).set('id', JSON.parse(window.localStorage.getItem('currentPatient')).id).set('token', JSON.parse(window.localStorage.getItem('currentPatient')).token);
        this.withdraw(withdrawBody.toString());
        return;
    };
    MyWalletComponent.ctorParameters = function () { return [
        { type: _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationServiceService"] },
        { type: _services_redirects_service__WEBPACK_IMPORTED_MODULE_3__["RedirectsService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _services_requests_service__WEBPACK_IMPORTED_MODULE_6__["RequestsService"] },
        { type: _services_additional_service__WEBPACK_IMPORTED_MODULE_7__["AdditionalService"] }
    ]; };
    MyWalletComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-wallet',
            template: __webpack_require__(/*! raw-loader!./my-wallet.component.html */ "./node_modules/raw-loader/index.js!./src/app/my-wallet/my-wallet.component.html")
        })
    ], MyWalletComponent);
    return MyWalletComponent;
}());



/***/ }),

/***/ "./src/app/not-logged-in-wrapper/not-logged-in-wrapper.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/not-logged-in-wrapper/not-logged-in-wrapper.component.ts ***!
  \**************************************************************************/
/*! exports provided: NotLoggedInWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotLoggedInWrapperComponent", function() { return NotLoggedInWrapperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/authentication-service.service */ "./src/app/_services/authentication-service.service.ts");
/* harmony import */ var _services_requests_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/requests.service */ "./src/app/_services/requests.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/language.service */ "./src/app/_services/language.service.ts");






var NotLoggedInWrapperComponent = /** @class */ (function () {
    function NotLoggedInWrapperComponent(authenticationServiceService, requestsService, translate, languageService) {
        this.authenticationServiceService = authenticationServiceService;
        this.requestsService = requestsService;
        this.translate = translate;
        this.languageService = languageService;
        this.dentistLogo = '';
        this.dentistLogoClass = '';
    }
    NotLoggedInWrapperComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.authenticationServiceService.hasPatientStorageSession()) {
            if (localStorage.getItem('currentDentist') != null) {
                this.requestsService.getDentistData(JSON.parse(localStorage.getItem('currentPatient')).patient_of).subscribe(function (response) {
                    if (response.success) {
                        _this.dentistLogo = response.data.logo;
                    }
                });
            }
            else {
                this.dentistLogo = 'assets/images/one-line-logo-black.svg';
                this.dentistLogoClass = 'max-width-140';
            }
        }
    };
    NotLoggedInWrapperComponent.ctorParameters = function () { return [
        { type: _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationServiceService"] },
        { type: _services_requests_service__WEBPACK_IMPORTED_MODULE_3__["RequestsService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: _services_language_service__WEBPACK_IMPORTED_MODULE_5__["LanguageService"] }
    ]; };
    NotLoggedInWrapperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-logged-in-wrapper',
            template: __webpack_require__(/*! raw-loader!./not-logged-in-wrapper.component.html */ "./node_modules/raw-loader/index.js!./src/app/not-logged-in-wrapper/not-logged-in-wrapper.component.html")
        })
    ], NotLoggedInWrapperComponent);
    return NotLoggedInWrapperComponent;
}());



/***/ }),

/***/ "./src/app/partials/account-sidebar/account-sidebar.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/partials/account-sidebar/account-sidebar.component.ts ***!
  \***********************************************************************/
/*! exports provided: AccountSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountSidebarComponent", function() { return AccountSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_redirects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/redirects.service */ "./src/app/_services/redirects.service.ts");
/* harmony import */ var _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/authentication-service.service */ "./src/app/_services/authentication-service.service.ts");
/* harmony import */ var _services_requests_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/requests.service */ "./src/app/_services/requests.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var AccountSidebarComponent = /** @class */ (function () {
    function AccountSidebarComponent(redirectsService, authenticationServiceService, router, requestsService) {
        this.redirectsService = redirectsService;
        this.authenticationServiceService = authenticationServiceService;
        this.router = router;
        this.requestsService = requestsService;
        this.patientData = {
            first_name: '',
            last_name: ''
        };
    }
    AccountSidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.authenticationServiceService.hasPatientStorageSession()) {
            this.redirectsService.redirectToPatientLogin('login');
        }
        else {
            this.requestsService.getUserData(JSON.parse(window.localStorage.getItem('currentPatient')).token).subscribe({
                next: function (response) {
                    _this.patientData.first_name = response.data.first_name;
                    _this.patientData.last_name = response.data.last_name;
                },
                error: function (error) { return _this.authenticationServiceService.logout('patient'); }
            });
        }
    };
    AccountSidebarComponent.ctorParameters = function () { return [
        { type: _services_redirects_service__WEBPACK_IMPORTED_MODULE_2__["RedirectsService"] },
        { type: _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationServiceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _services_requests_service__WEBPACK_IMPORTED_MODULE_4__["RequestsService"] }
    ]; };
    AccountSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account-sidebar',
            template: __webpack_require__(/*! raw-loader!./account-sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/partials/account-sidebar/account-sidebar.component.html")
        })
    ], AccountSidebarComponent);
    return AccountSidebarComponent;
}());



/***/ }),

/***/ "./src/app/patient-login-page/patient-login-page.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/patient-login-page/patient-login-page.component.ts ***!
  \********************************************************************/
/*! exports provided: PatientLoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientLoginPageComponent", function() { return PatientLoginPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/authentication-service.service */ "./src/app/_services/authentication-service.service.ts");
/* harmony import */ var _services_redirects_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/redirects.service */ "./src/app/_services/redirects.service.ts");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_services/language.service */ "./src/app/_services/language.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_requests_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_services/requests.service */ "./src/app/_services/requests.service.ts");
/* harmony import */ var _services_additional_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_services/additional.service */ "./src/app/_services/additional.service.ts");











var PatientLoginPageComponent = /** @class */ (function () {
    function PatientLoginPageComponent(router, authenticationServiceService, redirectsService, http, translate, languageService, requestsService, additionalService) {
        this.router = router;
        this.authenticationServiceService = authenticationServiceService;
        this.redirectsService = redirectsService;
        this.http = http;
        this.translate = translate;
        this.languageService = languageService;
        this.requestsService = requestsService;
        this.additionalService = additionalService;
        this.coreDbApiDomain = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].coreDbApiDomain;
    }
    PatientLoginPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.authenticationServiceService.hasPatientStorageSession()) {
            // redirect to home if logged in
            this.redirectsService.redirectToLoggedHome();
        }
        else {
            document.addEventListener('patientAuthSuccessResponse', function (e) {
                console.log(e, 'patientAuthSuccessResponse');
                console.log(e.detail.response_data.data.patient_of, 'e.detail.response_data.data.patient_of');
                if (e.detail.response_data.data.patient_of !== null && e.detail.response_data.data.patient_of !== undefined) {
                    _this.requestsService.coreDbLogin(new _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]().set('token', e.detail.response_data.token).set('id', e.detail.response_data.data.id).toString()).subscribe({
                        next: function (coredbResponse) {
                            console.log(_this.authenticationServiceService.hasPatientStorageSession(), 'this.authenticationServiceService.isPatientLoggedSubject');
                            localStorage.setItem('currentPatient', JSON.stringify({
                                token: e.detail.response_data.token,
                                id: e.detail.response_data.data.id,
                                patient_of: e.detail.response_data.data.patient_of,
                                encrypted_id: coredbResponse.encrypted_id,
                                encrypted_token: coredbResponse.encrypted_token,
                                encrypted_type: coredbResponse.encrypted_type
                            }));
                            localStorage.setItem('dentist', String(e.detail.response_data.data.patient_of));
                            console.log(_this.authenticationServiceService.hasPatientStorageSession(), 'this.authenticationServiceService.isPatientLoggedSubject');
                            _this.authenticationServiceService.isPatientLoggedSubject.next(true);
                            console.log(_this.authenticationServiceService.hasPatientStorageSession(), 'this.authenticationServiceService.isPatientLoggedSubject');
                            _this.redirectsService.redirectToLoggedHome();
                            _this.additionalService.hideLoader();
                        },
                        error: function (error) {
                            document.getElementById('patient-login-failed').classList.remove('hide');
                        }
                    });
                }
                else {
                    document.getElementById('patient-login-failed-not-a-patient-of-any-dentist').classList.remove('hide');
                }
            });
            document.addEventListener('registeredAccountMissingEmail', function (e) {
                document.getElementById('patient-login-failed-missing-email').classList.remove('hide');
            });
            document.addEventListener('patientAuthErrorResponse', function (e) {
                document.getElementById('patient-login-failed').classList.remove('hide');
            });
            document.addEventListener('noCoreDBApiConnection', function (e) {
                document.getElementById('patient-login-failed').classList.remove('hide');
            });
            document.addEventListener('noExternalLoginProviderConnection', function (e) {
                document.getElementById('patient-login-failed').classList.remove('hide');
            });
        }
    };
    PatientLoginPageComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationServiceService"] },
        { type: _services_redirects_service__WEBPACK_IMPORTED_MODULE_4__["RedirectsService"] },
        { type: _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: _services_language_service__WEBPACK_IMPORTED_MODULE_7__["LanguageService"] },
        { type: _services_requests_service__WEBPACK_IMPORTED_MODULE_9__["RequestsService"] },
        { type: _services_additional_service__WEBPACK_IMPORTED_MODULE_10__["AdditionalService"] }
    ]; };
    PatientLoginPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-patient-login-page',
            template: __webpack_require__(/*! raw-loader!./patient-login-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/patient-login-page/patient-login-page.component.html")
        })
    ], PatientLoginPageComponent);
    return PatientLoginPageComponent;
}());



/***/ }),

/***/ "./src/app/request-account/request-account.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/request-account/request-account.component.ts ***!
  \**************************************************************/
/*! exports provided: RequestAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestAccountComponent", function() { return RequestAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/authentication-service.service */ "./src/app/_services/authentication-service.service.ts");
/* harmony import */ var _services_redirects_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/redirects.service */ "./src/app/_services/redirects.service.ts");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_requests_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_services/requests.service */ "./src/app/_services/requests.service.ts");
/* harmony import */ var _services_additional_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_services/additional.service */ "./src/app/_services/additional.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_services/language.service */ "./src/app/_services/language.service.ts");











var RequestAccountComponent = /** @class */ (function () {
    function RequestAccountComponent(router, formBuilder, authenticationServiceService, redirectsService, http, requestsService, additionalService, translate, languageService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.authenticationServiceService = authenticationServiceService;
        this.redirectsService = redirectsService;
        this.http = http;
        this.requestsService = requestsService;
        this.additionalService = additionalService;
        this.translate = translate;
        this.languageService = languageService;
        this.requestAccountFormSubmitted = false;
        this.sendRequestSucceed = false;
        this.sendRequestFailed = false;
    }
    RequestAccountComponent.prototype.ngOnInit = function () {
        if (this.authenticationServiceService.hasPatientStorageSession()) {
            // redirect to home if logged in
            this.redirectsService.redirectToLoggedHome();
        }
        else {
            this.requestAccountForm = this.formBuilder.group({
                firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100)
                ])),
                lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100)
                ])),
                email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
                ])),
                phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)
                ])),
            });
        }
    };
    Object.defineProperty(RequestAccountComponent.prototype, "request_form_data", {
        // convenience getter for easy access to form fields
        get: function () { return this.requestAccountForm.controls; },
        enumerable: true,
        configurable: true
    });
    // on request form account submit
    RequestAccountComponent.prototype.onAccountRequestFormSubmit = function () {
        var _this = this;
        this.additionalService.showLoader();
        this.requestAccountFormSubmitted = true;
        // stop here if form is invalid
        if (this.requestAccountForm.invalid) {
            this.additionalService.hideLoader();
            return;
        }
        var paramsMap = new Map();
        paramsMap.set('firstName', this.request_form_data.firstName.value);
        paramsMap.set('lastName', this.request_form_data.lastName.value);
        paramsMap.set('email', this.request_form_data.email.value);
        paramsMap.set('phone', this.request_form_data.phone.value);
        /*paramsMap.set('captcha', this.request_form_data.captcha.value);*/
        var params = new _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpParams"]();
        paramsMap.forEach(function (value, key) {
            params = params.set(key, value);
        });
        this.requestsService.sendRequestAccountMail(params.toString()).subscribe(function (response) {
            if (response.success) {
                _this.requestAccountForm.reset();
                Object.keys(_this.requestAccountForm.controls).forEach(function (key) {
                    _this.requestAccountForm.get(key).setErrors(null);
                });
                _this.sendRequestSucceed = true;
                _this.sendRequestFailed = false;
                _this.additionalService.hideLoader();
            }
            else {
                _this.sendRequestFailed = true;
                _this.sendRequestSucceed = false;
                _this.additionalService.hideLoader();
            }
        });
    };
    RequestAccountComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationServiceService"] },
        { type: _services_redirects_service__WEBPACK_IMPORTED_MODULE_5__["RedirectsService"] },
        { type: _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
        { type: _services_requests_service__WEBPACK_IMPORTED_MODULE_7__["RequestsService"] },
        { type: _services_additional_service__WEBPACK_IMPORTED_MODULE_8__["AdditionalService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] },
        { type: _services_language_service__WEBPACK_IMPORTED_MODULE_10__["LanguageService"] }
    ]; };
    RequestAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-request-account',
            template: __webpack_require__(/*! raw-loader!./request-account.component.html */ "./node_modules/raw-loader/index.js!./src/app/request-account/request-account.component.html")
        })
    ], RequestAccountComponent);
    return RequestAccountComponent;
}());



/***/ }),

/***/ "./src/app/verify-account/verify-account.component.ts":
/*!************************************************************!*\
  !*** ./src/app/verify-account/verify-account.component.ts ***!
  \************************************************************/
/*! exports provided: VerifyAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyAccountComponent", function() { return VerifyAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/authentication-service.service */ "./src/app/_services/authentication-service.service.ts");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_redirects_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/redirects.service */ "./src/app/_services/redirects.service.ts");
/* harmony import */ var _services_additional_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_services/additional.service */ "./src/app/_services/additional.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_services/language.service */ "./src/app/_services/language.service.ts");










var VerifyAccountComponent = /** @class */ (function () {
    function VerifyAccountComponent(formBuilder, authenticationServiceService, http, activatedRoute, redirectsService, additionalService, translate, languageService) {
        this.formBuilder = formBuilder;
        this.authenticationServiceService = authenticationServiceService;
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.redirectsService = redirectsService;
        this.additionalService = additionalService;
        this.translate = translate;
        this.languageService = languageService;
        this.verifyAccountFormSubmitted = false;
        this.differentPasswords = false;
        this.failedVerifiedAccount = false;
    }
    VerifyAccountComponent.prototype.ngOnInit = function () {
        if (this.authenticationServiceService.hasPatientStorageSession()) {
            // redirect to home if logged in
            this.redirectsService.redirectToLoggedHome();
        }
        else {
            this.verifyAccountForm = this.formBuilder.group({
                password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)
                ])),
                repeat_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)
                ]))
            });
        }
    };
    Object.defineProperty(VerifyAccountComponent.prototype, "verify_account_form_data", {
        // convenience getter for easy access to form fields
        get: function () {
            return this.verifyAccountForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    // dentist trying to log in
    VerifyAccountComponent.prototype.onVerifyAccountFormSubmit = function () {
        var _this = this;
        this.differentPasswords = false;
        this.verifyAccountFormSubmitted = true;
        // stop here if form is invalid
        if (this.verifyAccountForm.invalid) {
            return;
        }
        if (this.verify_account_form_data.password.value.trim() !== this.verify_account_form_data.repeat_password.value.trim()) {
            this.differentPasswords = true;
            return;
        }
        var ParseHeaders = {
            headers: new _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        };
        this.activatedRoute.params.subscribe(function (params) {
            _this.additionalService.showLoader();
            var body = new _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set('password', _this.verify_account_form_data.password.value.trim()).set('type_language', _this.translate.currentLang);
            _this.http.post('https://dcn-hub-app-api.dentacoin.com/external-api/validate-token/' + params['token'], body.toString(), ParseHeaders).subscribe(function (response) {
                _this.additionalService.hideLoader();
                if (response.success) {
                    _this.redirectsService.redirectToPatientLogin('account-verification');
                }
                else if (response.errors) {
                    _this.failedVerifiedAccount = true;
                }
            });
        });
    };
    VerifyAccountComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationServiceService"] },
        { type: _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _services_redirects_service__WEBPACK_IMPORTED_MODULE_6__["RedirectsService"] },
        { type: _services_additional_service__WEBPACK_IMPORTED_MODULE_7__["AdditionalService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
        { type: _services_language_service__WEBPACK_IMPORTED_MODULE_9__["LanguageService"] }
    ]; };
    VerifyAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-verify-account',
            template: __webpack_require__(/*! raw-loader!./verify-account.component.html */ "./node_modules/raw-loader/index.js!./src/app/verify-account/verify-account.component.html")
        })
    ], VerifyAccountComponent);
    return VerifyAccountComponent;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    hybrid: false,
    default_language: 'en',
    coreDbApiDomain: 'https://dev-api.dentacoin.com',
    accountDomain: 'https://dev-account.dentacoin.com'
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: false,
    hybrid: true,
    default_language: 'en',
    coreDbApiDomain: 'https://dev-api.dentacoin.com',
    accountDomain: 'https://dev-account.dentacoin.com'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\wamp\www\dcn-hub-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map