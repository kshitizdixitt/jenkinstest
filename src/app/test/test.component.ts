import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { ScoringService } from '../scoring.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
public obs;
  constructor(private router: Router,private scoringService: ScoringService) { }

  ngOnInit() {
    this.obs = this.scoringService.check();
  }

  func(){
    console.log('jkjkjkjkjkjkjjkjk');

  this.scoringService.userSubject.next('talli');
    this.router.navigate(['/test'], { replaceUrl: true });
  }

}
