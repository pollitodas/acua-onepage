import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { MnFullpageModule } from 'ngx-fullpage';
import { IndexComponent } from './index/index.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MnFullpageModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBbxQeoh0VF9eOrLvuD4_IQ-x9xd88MrBs'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
