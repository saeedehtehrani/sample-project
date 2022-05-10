import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, Subscription, timer } from 'rxjs';
import { DataService } from 'src/assets/services/data.service';
import * as internal from 'stream';

@Component({
  selector: 'app-alarms',
  templateUrl: './alarms.component.html',
  styleUrls: ['./alarms.component.sass']
})
export class AlarmsComponent implements OnInit {
  alarms: any = [];
  allAlarms: any = [];
  filterTerm!: string;
  timerSubscription!: Subscription;

  q: string = "";

  constructor(private route: ActivatedRoute, private dataService: DataService) {

  }

  ngOnInit() {

    // timer(0, 10000) call the function immediately and every 10 seconds 
    this.timerSubscription = timer(0, 10000).pipe(
      map(() => {
        this.getAllData(); // load data contains the http request 
      })
    ).subscribe();



  }
  ngOnDestroy(): void {
    this.timerSubscription.unsubscribe();
  }


  getAllData() {
    this.dataService.get_alarmData().subscribe((res: any) => {
      this.alarms = res.data.alarms;
      this.allAlarms = res.data.alarms;
    });
  }
  onSearchChange(search: any) {

    // if(searchValue == this.alarms.name){
    //   this.filterTerm = searchValue;
    // }
    if (search.inputType == "insertText") {
      this.q += search.data;
    }
    else {
      this.q = this.q.substring(0, this.q.length - 1)
    }

    
    this.alarms = this.allAlarms.filter(f=>f.name.includes(this.q));
    
  }



}
