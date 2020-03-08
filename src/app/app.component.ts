import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstapp';
  @ViewChild('focusField', {static: false}) el : ElementRef;
  test(){
    this.el.nativeElement.focus();
  }
 // ngAfterViewInit(){
   // this.el.nativeElement.focus();
  //}
}
