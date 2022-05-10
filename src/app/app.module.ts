import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarModule } from 'primeng/sidebar';
import {MenubarModule} from 'primeng/menubar';
import {TabViewModule} from 'primeng/tabview';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import { AlarmsComponent } from './alarms/alarms.component';
import {CardModule} from 'primeng/card';
import { HttpClientModule } from '@angular/common/http';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchFilterPipe } from './search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AlarmsComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    SidebarModule,
    MenubarModule,
    TabViewModule,
    AvatarModule,
    AvatarGroupModule,
    CardModule,
    ButtonModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
