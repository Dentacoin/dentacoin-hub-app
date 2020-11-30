import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
    hybrid = environment.hybrid;
    dentacoinDomain = environment.dentacoinDomain;

    constructor(public translate: TranslateService) {

    }

    ngOnInit() {

    }
}
