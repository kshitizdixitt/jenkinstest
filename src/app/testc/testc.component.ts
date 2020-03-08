import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { ScoringService } from '../scoring.service';

@Component({
  selector: 'app-testc',
  templateUrl: './testc.component.html',
  styleUrls: ['./testc.component.css']
})
export class TestcComponent implements OnInit {
  public groupBy = 'days';
  public obs;

  constructor(private route: ActivatedRoute,private scoringService: ScoringService) { }

  ngOnInit() {
    this.obs = this.scoringService.check();
    this.route.params.subscribe((params) => {
      this.groupBy = params['groupBy'];
     // this.handleSize(window.innerWidth);
      if (this.groupBy === 'months') {
        //this.selectedDateFormat = 'MMM';
      } else {
        console.log("mera kam ho gaya");
        //this.selectedDateFormat = 'MM/DD';
      }
    });
  }

}
