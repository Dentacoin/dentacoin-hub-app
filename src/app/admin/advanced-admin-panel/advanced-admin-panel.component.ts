import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthenticationServiceService} from '../../_services/authentication-service.service';
import {RedirectsService} from '../../_services/redirects.service';

@Component({
    selector: 'app-advanced-admin-panel',
    templateUrl: './advanced-admin-panel.component.html'
})

export class AdvancedAdminPanelComponent implements OnInit {
    public isDentistLoggedIn: Observable<boolean>;

    constructor(public authenticationServiceService: AuthenticationServiceService, public redirectsService: RedirectsService) {
        this.isDentistLoggedIn = authenticationServiceService.isDentistLoggedSubject;
    }

    ngOnInit() {

    }
}
