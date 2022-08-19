import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskListComponent } from './task-list.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { TaskService } from './task.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    TaskListComponent
  ],
  providers: [TaskService],
  imports: [
    CommonModule,
    MatDatepickerModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    TaskListComponent
  ]
})
export class TasksModule { }
