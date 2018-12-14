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
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchComponent } from './search/search.component';
import { SearchListComponent } from './search-list/search-list.component';
import { SearchRequestComponent } from './search-request/search-request.component';
import { ResultComponent } from './result/result.component';
import { ResultListComponent } from './result-list/result-list.component';
import { SettingComponent } from './setting/setting.component';
import { SettingSearchEngineComponent } from './setting-search-engine/setting-search-engine.component';
import { NotFoundComponent } from './not-found/not-found.component';

// Dialogに表示されるComponentはentryComponentsにも含める。
import { SearchConfirmComponent } from "./search-confirm/search-confirm.component";
import { SearchDetailComponent } from './search-detail/search-detail.component';

// providersに含める。
import { ValidateService } from "./service/validate.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { EgoSearchInterceptor } from "./interceptor/ego-search";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SearchComponent,
    SearchDetailComponent,
    SearchRequestComponent,
    SearchConfirmComponent,
    SearchListComponent,
    ResultComponent,
    ResultListComponent,
    SettingComponent,
    SettingSearchEngineComponent,
    NotFoundComponent,
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
  entryComponents: [SearchConfirmComponent, SearchDetailComponent],  // Dialogに表示される
})
export class AppModule { }
