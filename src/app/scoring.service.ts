import { Injectable } from '@angular/core';
import { Observable, of, Subscription, BehaviorSubject } from 'rxjs';

@Injectable()
export class ScoringService {

  private static readonly RISK_SCORES = '/client/scoring/risk/v2';
  private static RISK_GROUPS = ['months', 'weeks', 'days'];
  private static RISK_TYPES = ['rms', 'as', 'ms'];
   userSubject = new BehaviorSubject('');
  //public obs;
  constructor(
        ) { }

  public check() {
    return this.userSubject.asObservable();
    
    
  }

 
}
