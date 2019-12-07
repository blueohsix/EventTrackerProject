import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteSearchComponent } from './components/site-search/site-search.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SiteService} from './services/site.service';
import { HttpClientModule } from '@angular/common/http';
import { TypeaheadComponent } from './components/typeahead/typeahead.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteSearchComponent,
    TypeaheadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SiteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
