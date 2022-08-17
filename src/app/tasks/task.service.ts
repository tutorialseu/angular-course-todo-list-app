import { Injectable } from '@angular/core';
import { NewTask } from './new-task.dto';
import { TaskItem } from './task-item.dto';
import { Observable, BehaviorSubject } from 'rxjs';

//@Injectable({
 // providedIn: 'root'
//})
export class TaskService {

  constructor() { }

  private tasks = new BehaviorSubject([
    new TaskItem("Visit Ann"),
    new TaskItem("Call Dad"),
    new TaskItem("Go to the gym"),
    new TaskItem("Wash the dishes"),
    new TaskItem("Shop for the party")
  ])

  getAllTasks(): Observable<TaskItem[]>{
    return this.tasks;
  }

  addTask(newTask: NewTask){
    var updatedTasks = this.tasks.value.concat(new TaskItem(newTask.title))
    this.tasks.next(updatedTasks);
  }

  removeTask(existingTask: TaskItem){
    var updatedTasks = this.tasks.value.filter(task => task != existingTask);
    this.tasks.next(updatedTasks);
  }
}
