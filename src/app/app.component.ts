import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'samayesh';
  items: MenuItem[] = [];
  currentUserName: string="Saeedeh";
  userFirstLetter: string="";

  ngOnInit() {


    this.items = [
      {
        icon: 'pi pi-fw pi-home',
      },
      {
        icon: 'pi pi-fw pi-bell',
        routerLink: ['/alarms'],
        routerLinkActiveOptions: { exact: true },
      },
      {
        icon: 'pi pi-fw pi-cog'
      },

    ];


    this.userFirstLetter = this.currentUserName.charAt(0);
  }

}
