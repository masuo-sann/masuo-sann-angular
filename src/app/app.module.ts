import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MyMaterialModule } from './module/my-material-module';
import { AppRoutingModule } from './module/app-routing.module';

import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from "@angular/material/core";

// Componentはdeclarationに含める。
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { ResultComponent } from './result/result.component';
import { SearchRequestComponent } from './search-request/search-request.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SettingComponent } from './setting/setting.component';
import { SearchListComponent } from './search-list/search-list.component';
import { ResultListComponent } from './result-list/result-list.component';

// Dialogに表示されるComponentはentryComponentsにも含める。
import { SearchConfirmComponent } from "./search-confirm/search-confirm.component";

// providersに含める。
import { ValidateService } from "./service/validate.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { EgoSearchInterceptor } from "./interceptor/ego-search";

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchDetailComponent,
    ResultComponent,
    SearchConfirmComponent,
    SearchRequestComponent,
    NotFoundComponent,
    NavBarComponent,
    SettingComponent,
    SearchListComponent,
    ResultListComponent,
    SearchConfirmComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MyMaterialModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule, 
  ],
  providers: [
    ValidateService,
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher},
    {provide: HTTP_INTERCEPTORS, useClass: EgoSearchInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
  entryComponents: [SearchConfirmComponent],  // Dialogに表示される
})
export class AppModule { }
