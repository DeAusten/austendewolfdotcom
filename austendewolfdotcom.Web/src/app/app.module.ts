import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoadingComponent} from './components/loading/loading.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {SplashComponent} from './components/splash/splash.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgFlatFormModule} from 'ng-flat-form';
import {ContactService} from './services/contact.service';
import {UtilityService} from './services/utility.service';
import {ModalComponent} from './components/modal/modal.component';
import {ModalContainerComponent} from './components/modal/modal-container.component';
import {ModalDirective} from './components/modal/modal.directive';
import {ModalContainerDirective} from './components/modal/modal-container.directive';
import {ModalHeaderComponent} from './components/modal/modal-header/modal-header.component';
import {ModalFooterComponent} from './components/modal/modal-footer/modal-footer.component';
import {ModalService} from './components/modal/modal.service';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import {ClickOutsideModule} from 'ng-click-outside';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { CookieComponent } from './components/cookie/cookie.component';
import {OutreachModalComponent} from './components/outreach/outreach-modal.component';

@NgModule({
    declarations: [
        AppComponent,
        LoadingComponent,
        NavbarComponent,
        SplashComponent,
        ModalDirective,
        ModalContainerDirective,
        ModalComponent,
        ModalContainerComponent,
        ModalHeaderComponent,
        ModalFooterComponent,
        OutreachModalComponent,
        PrivacyPolicyComponent,
        CookieComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        NgFlatFormModule,
        LoadingBarHttpClientModule,
        ClickOutsideModule
    ],
    providers: [
        ContactService,
        UtilityService,
        ModalService,
    ],
    entryComponents: [
        ModalComponent,
        OutreachModalComponent,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
