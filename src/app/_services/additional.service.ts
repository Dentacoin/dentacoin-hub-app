import {Injectable} from '@angular/core';
import * as $ from 'jquery';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AdditionalService {

    constructor() {
    }

    // showing front end loader
    showLoader() {
        if (!$('.camping-loader').hasClass('loaded')) {
            $('.camping-loader').html('<div class="response-layer"><div class="wrapper"><picture itemscope="" itemtype="http://schema.org/ImageObject"><source media="(max-width: 768px)" srcset="assets/images/dcn-flipping-coin-logo-loader-v3-mobile.gif"><img itemprop="contentUrl" src="assets/images/dcn-flipping-coin-logo-loader-v3_desktop.gif" class="max-width-250 max-width-xs-200" alt="Loader"></picture></div></div>').addClass('loaded');
            $('.camping-loader .response-layer').show();
        } else {
            $('.camping-loader .response-layer').show();
        }
    }

    // hiding front end loader
    hideLoader() {
        $('.camping-loader .response-layer').hide();
    }

    dateObjToFormattedDate(object) {
        let date;
        let month;
        if (object.getDate() < 10) {
            date = '0' + object.getDate();
        } else {
            date = object.getDate();
        }

        if (object.getMonth() + 1 < 10) {
            month = '0' + (object.getMonth() + 1);
        } else {
            month = object.getMonth() + 1;
        }
        return date + '/' + month + '/' + object.getFullYear();
    }

    generateAccountLink() {
        if (environment.hybrid === true) {
            return environment.accountDomain + '/custom-cookie?mobile-app=hubapp&slug=' + encodeURIComponent(JSON.parse(window.localStorage.getItem('currentDentist')).encrypted_id) + '&type=' + encodeURIComponent(JSON.parse(window.localStorage.getItem('currentDentist')).encrypted_type) + '&token=' + encodeURIComponent(JSON.parse(window.localStorage.getItem('currentDentist')).encrypted_token);
        } else {
            return environment.accountDomain + '/custom-cookie?slug=' + encodeURIComponent(JSON.parse(window.localStorage.getItem('currentDentist')).encrypted_id) + '&type=' + encodeURIComponent(JSON.parse(window.localStorage.getItem('currentDentist')).encrypted_type) + '&token=' + encodeURIComponent(JSON.parse(window.localStorage.getItem('currentDentist')).encrypted_token);
        }
    }
}
