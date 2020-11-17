import { Component, OnInit } from '@angular/core';
import {AuthenticationServiceService} from '../_services/authentication-service.service';
import {RedirectsService} from '../_services/redirects.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpParams} from '../../../node_modules/@angular/common/http';
import {RequestsService} from '../_services/requests.service';
import {AdditionalService} from '../_services/additional.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-my-wallet',
  templateUrl: './my-wallet.component.html'
})
export class MyWalletComponent implements OnInit {
    withdrawForm: FormGroup;
    withdrawFormSubmitted = false;
    dcnAmount: number;
    usdAmount: number;
    currenciesList: {};
    showCurrenciesList: boolean = false;
    showWithdrawHistory: boolean = false;
    withdrawHistory = [];
    withdrawFailed: boolean = false;
    withdrawSucceed: boolean = false;
    errorMessage: string;
    successMessage: string;
    usdVal: number = 0;
    eurVal: number = 0;
    gbpVal: number = 0;
    rubVal: number = 0;
    public addresses = [];
    public currencies = ['USD', 'EUR', 'GBP', 'RUB'];

    constructor(public authenticationServiceService: AuthenticationServiceService, public redirectsService: RedirectsService, public formBuilder: FormBuilder, public requestsService: RequestsService, public additionalService: AdditionalService) {
    }

    ngOnInit() {
        if (!this.authenticationServiceService.hasPatientStorageSession()) {
            this.redirectsService.redirectToPatientLogin('login');
        } else {
            this.withdrawForm = this.formBuilder.group({
                address: new FormControl('', Validators.compose([
                    Validators.required, Validators.minLength(42), Validators.maxLength(42)
                ])),
                amount: new FormControl('', Validators.compose([
                    Validators.required, Validators.min(10000)
                ]))
            });

            $('form#withdraw .disabled-amount').on('click', (e) => {
                $(e.currentTarget).hide();
                $('form#withdraw .amount').show().focus();
            });

            $(document).on('click', '.search-result .search-body ul li a', (e) => {
                this.withdrawForm.controls['address'].setValue($(e.currentTarget).attr('data-value'));
                $('.search-result').hide();
            });

            this.requestsService.getAddresses(JSON.parse(window.localStorage.getItem('currentPatient')).id).subscribe((response: any) => {
                if (response.success) {
                    if (response.data.length) {
                        this.addresses = Object.keys(response.data).map(i => response.data[i]);
                        if (this.addresses.length) {
                            this.withdrawForm.controls['address'].setValue(this.addresses[0].dcn_address);
                        }
                    }
                }
            });

            this.updateDCNBalance();
            this.updateDCNWithdrawHistory();
        }
    }

    updateDCNBalance() {
        this.requestsService.getDCNBalance(JSON.parse(window.localStorage.getItem('currentPatient')).token).subscribe({
            next: async (response:any) => {
                if (response.success) {
                    this.withdrawForm.controls['amount'].setValue(response.data);
                    this.dcnAmount = response.data;

                    for (let i = 0, len = this.currencies.length; i < len; i++) {
                        this.requestsService.getDentacoinDataByExternalProvider(this.currencies[i]).subscribe((coingeckoResponse: any) => {
                            if (this.currencies[i] === 'USD') {
                                this.usdVal = 1 / Number(Number(coingeckoResponse) / 100);

                                this.usdAmount = Number((this.usdVal * this.dcnAmount).toFixed(4));
                            } else if (this.currencies[i] === 'EUR') {
                                this.eurVal = 1 / Number(Number(coingeckoResponse) / 100);
                            } else if (this.currencies[i] === 'GBP') {
                                this.gbpVal = 1 / Number(Number(coingeckoResponse) / 100);
                            } else if (this.currencies[i] === 'RUB') {
                                this.rubVal = 1 / Number(Number(coingeckoResponse) / 100);
                            }
                        });
                    }

                    let checkingIfRequestsFinished = setInterval(() => {
                        console.log('checkingIfRequestsFinished');
                        if (this.usdVal !== 0 && this.eurVal !== 0 && this.gbpVal !== 0 && this.rubVal !== 0) {
                            clearInterval(checkingIfRequestsFinished);

                            $(document).ready(function() {
                                $('.my-wallet-container .dropdown-hidden-menu button').on('click', (e) => {
                                    var this_btn = $(e.currentTarget);
                                    $('.my-wallet-container .current-converted-price .amount').html((parseFloat($('.current-dcn-amount').html()) * parseFloat(this_btn.attr('data-multiple-with'))).toFixed(2));
                                    $('.my-wallet-container .current-converted-price .symbol span').html(this_btn.html());
                                });
                            });
                        }
                    }, 500);
                }
            },
            error: error => this.authenticationServiceService.logout('patient')
        });
    }
    
    updateDCNWithdrawHistory() {
        const withdrawHistoryBody = new HttpParams().set('id', JSON.parse(window.localStorage.getItem('currentPatient')).id).set('token', JSON.parse(window.localStorage.getItem('currentPatient')).token);
        this.requestsService.getWithdrawHistory(withdrawHistoryBody.toString()).subscribe({
            next: (withdrawHistoryResponse:any) => {
                if (withdrawHistoryResponse.success) {
                    this.withdrawHistory = Object.keys(withdrawHistoryResponse.data).map(i => withdrawHistoryResponse.data[i]);
                    this.showWithdrawHistory = true;
                }
            },
            error: error => this.authenticationServiceService.logout('patient')
        });
    }

    // convenience getter for easy access to form fields
    get withdraw_form_data() { return this.withdrawForm.controls; }

    withdraw(body) {
        this.requestsService.withdraw(body).subscribe((withdrawResponse: any) => {
            this.additionalService.hideLoader();

            if (withdrawResponse.success) {
                this.updateDCNBalance();
                this.updateDCNWithdrawHistory();
                this.successMessage = withdrawResponse.message;
                this.withdrawSucceed = true;
            } else {
                this.errorMessage = withdrawResponse.error;
                this.withdrawFailed = true;
            }
        });
    }

    // patient saving his DCN addess in CoreDB
    onWithdrawSubmit() {
        this.additionalService.showLoader();

        this.withdrawFormSubmitted = true;

        // stop here if form is invalid
        if (this.withdrawForm.invalid) {
            this.additionalService.hideLoader();
            return;
        }


        // if the withdraw to address is the same as the last time withdrawing
        const withdrawBody = new HttpParams().set('amount', this.withdraw_form_data.amount.value).set('address', this.withdraw_form_data.address.value.trim()).set('id', JSON.parse(window.localStorage.getItem('currentPatient')).id).set('token', JSON.parse(window.localStorage.getItem('currentPatient')).token);

        this.withdraw(withdrawBody.toString());
        return;
    }
}
