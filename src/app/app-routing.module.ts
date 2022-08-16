import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { TaskListComponent } from './tasks/task-list.component';

const routes: Routes = [
  {component: CalendarComponent, path: ''},
  {component: TaskListComponent, path:'tasks'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
