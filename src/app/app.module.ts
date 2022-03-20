import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { TabsComponent } from './pages/tabs/tabs.component';
import { SelectComponent } from './pages/select/select.component';
import { ListComponent } from './pages/list/list.component';
import { PagesComponent } from './pages/pages/pages.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TabsComponent,
    SelectComponent,
    ListComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
