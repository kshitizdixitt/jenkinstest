// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';


// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestComponent } from './test/test.component';
import { TestcComponent } from './testc/testc.component';

const routes: Routes = [{
  path: 'test',
  component: TestComponent,
  
  children: [{
    path: '',
    redirectTo: 'group/days',
    pathMatch: 'full'
  },{
    path: 'group/:groupBy',
    component: TestcComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

