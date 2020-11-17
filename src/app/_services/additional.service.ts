import {Injectable} from '@angular/core';
import * as $ from 'jquery';

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

}
