import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {RedirectsService} from '../../_services/redirects.service';
import {LanguageService} from '../../_services/language.service';
// import * as $ from 'jquery';

@Component({
    selector: 'app-basic-admin-panel',
    templateUrl: './basic-admin-panel.component.html'
})
export class BasicAdminPanelComponent {
    constructor(public translate: TranslateService, public redirectsService: RedirectsService, public languageService: LanguageService) {
    }
}
