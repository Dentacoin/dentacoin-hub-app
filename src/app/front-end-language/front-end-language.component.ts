import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {Router} from '@angular/router';
import {environment} from './../../environments/environment.prod';
import {RedirectsService} from '../_services/redirects.service';

@Component({
    selector: 'app-front-end-language',
    template: '<router-outlet></router-outlet>'
})
export class FrontEndLanguageComponent implements OnInit {
    channelArray: Array<string> = ['de', 'en'];

    constructor(public activatedRoute: ActivatedRoute, public translate: TranslateService, public router: Router, public redirectsService: RedirectsService) {
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe( (params : Params) => {
            console.log(params, 'params');
            if (this.channelArray.indexOf(params['lang']) > -1) {
                this.translate.use(params['lang']);
            } else if (params['lang'] === 'admin') {
                this.translate.use(environment.default_language);
                this.redirectsService.redirectToAdmin();
            } else {
                this.translate.use(environment.default_language);
                if (params.hasOwnProperty('lang')) {
                    this.router.navigateByUrl(this.router.url.replace('/' + params['lang'], '/' + environment.default_language) + '/' + params['lang']);
                } else {
                    this.router.navigateByUrl(environment.default_language);
                }
            }
        });
    }

}