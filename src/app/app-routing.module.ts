import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlarmsComponent } from './alarms/alarms.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'alarms', component: AlarmsComponent },
  { path: '', component: AlarmsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
