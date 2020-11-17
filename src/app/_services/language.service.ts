import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {ActivatedRoute, Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class LanguageService {

    constructor(private translate: TranslateService, private activatedRoute: ActivatedRoute, private router: Router) {
    }

    onLangSwitcherChange(lang) {
        this.router.navigateByUrl(this.router.url.substring(0, 1) + lang + this.router.url.substring(3));
    }
}
