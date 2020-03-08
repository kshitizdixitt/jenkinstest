import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TestcComponent } from './testc/testc.component';
import { ScoringService } from './scoring.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [ScoringService],
  bootstrap: [AppComponent]
})
export class AppModule { }
