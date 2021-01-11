import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import {environment} from './../environments/environment';

import { PatientLoginPageComponent } from './patient-login-page/patient-login-page.component';
import { AdminComponent } from './admin/admin.component';
import { BasicAdminPanelComponent } from './admin/basic-admin-panel/basic-admin-panel.component';
import { AdvancedAdminPanelComponent } from './admin/advanced-admin-panel/advanced-admin-panel.component';
import { PushNotificationsComponent } from './admin/advanced-admin-panel/push-notifications/push-notifications.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FrontEndLanguageComponent } from './front-end-language/front-end-language.component';
import { VerifyAccountComponent } from './verify-account/verify-account.component';
import { HomeComponent } from './home/home.component';
import { MyWalletComponent } from './my-wallet/my-wallet.component';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { ManagePrivacyComponent } from './manage-privacy/manage-privacy.component';
import { LoggedInWrapperComponent } from './logged-in-wrapper/logged-in-wrapper.component';
import { RequestAccountComponent } from './request-account/request-account.component';
import { ForgottenPasswordComponent } from './forgotten-password/forgotten-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { NotLoggedInWrapperComponent } from './not-logged-in-wrapper/not-logged-in-wrapper.component';
import { PatientRegisterByInviteComponent } from './patient-register-by-invite/patient-register-by-invite.component';
import { DentistRequestAccountComponent } from './dentist-request-account/dentist-request-account.component';
import { MyPatientsComponent } from './admin/advanced-admin-panel/my-patients/my-patients.component';

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/' + environment.default_language},
    {path: ':lang', component: FrontEndLanguageComponent, children: [
        {path: '', component: LoggedInWrapperComponent, children: [
            {path: '', component: HomeComponent},
            /*{path: 'my-wallet', component: MyWalletComponent},
            {path: 'edit-account', component: EditAccountComponent},
            {path: 'manage-privacy', component: ManagePrivacyComponent},*/
        ]},
        {path: '', component: NotLoggedInWrapperComponent, children: [
            {path: 'dentist-request-account', component: DentistRequestAccountComponent},
            {path: 'request-account', component: RequestAccountComponent},
            {path: 'login', component: PatientLoginPageComponent},
            {path: 'patient-register-by-invite', component: PatientRegisterByInviteComponent},
            /*{path: 'forgotten-password', component: ForgottenPasswordComponent},
            {path: 'change-password/:token', component: ChangePasswordComponent},
            {path: 'verify-account', children: [
                {path: ':token', component: VerifyAccountComponent}
            ]},*/
        ]},
        {path: 'admin-login', component: AdminLoginComponent},
        {path: 'admin', component: AdminComponent,
            children: [
                {
                    path: '',
                    component: BasicAdminPanelComponent
                },
                {
                    path: 'advanced',
                    component: AdvancedAdminPanelComponent,
                    children: [
                        {
                            path: 'my-patients',
                            component: MyPatientsComponent
                        },
                        {
                            path: 'push-notifications',
                            component: PushNotificationsComponent
                        }
                    ]
                }
            ]
        }
    ]},
    {path: '**', redirectTo: '/' + environment.default_language}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload', preloadingStrategy: PreloadAllModules, useHash: true})],
    exports: [RouterModule]
})

export class AppRoutingModule {}

export const routingComponents = [FrontEndLanguageComponent, PatientLoginPageComponent, BasicAdminPanelComponent, AdminComponent, AdvancedAdminPanelComponent, PushNotificationsComponent, AdminLoginComponent, VerifyAccountComponent, HomeComponent, MyWalletComponent, EditAccountComponent, ManagePrivacyComponent, LoggedInWrapperComponent, RequestAccountComponent, ForgottenPasswordComponent, ChangePasswordComponent, NotLoggedInWrapperComponent, PatientRegisterByInviteComponent, DentistRequestAccountComponent, MyPatientsComponent];
