import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { SelectComponent } from './components/select/select.component';
import { ListComponent } from './components/list/list.component';
import { PagesComponent } from './components/pages/pages.component';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { PagesService } from './Services/pages.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TabsComponent,
    SelectComponent,
    ListComponent,
    PagesComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
		HttpClientModule,
  ],
  providers: [PagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
