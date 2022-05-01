import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainBoardComponent } from './main-board/main-board.component';

const routes: Routes = [
  {path: '', redirectTo: '/showUser', pathMatch:'full'},
  {path: 'showUser', component:MainBoardComponent, children: [
  ]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
