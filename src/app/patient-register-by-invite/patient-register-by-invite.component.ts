import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {AuthenticationServiceService} from '../_services/authentication-service.service';
import {ActivatedRoute, Params} from '@angular/router';
import {RedirectsService} from '../_services/redirects.service';
import {HttpClient} from '../../../node_modules/@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-patient-register-by-invite',
  templateUrl: './patient-register-by-invite.component.html'
})
export class PatientRegisterByInviteComponent implements OnInit {
    public coreDbApiDomain = environment.coreDbApiDomain;
    public inviteId: string;

  constructor(public authenticationServiceService: AuthenticationServiceService, public redirectsService: RedirectsService, public activatedRoute: ActivatedRoute, public translate: TranslateService) { }

  ngOnInit() {
      if (this.authenticationServiceService.hasPatientStorageSession()) {
          // redirect to home if logged in
          this.redirectsService.redirectToLoggedHome();
      } else {
          if (this.activatedRoute.snapshot.queryParamMap.get('invite') == null) {
              this.redirectsService.redirectToPatientLogin('login');
          } else {
              this.inviteId = this.activatedRoute.snapshot.queryParamMap.get('invite');
          }
      }
  }

}
