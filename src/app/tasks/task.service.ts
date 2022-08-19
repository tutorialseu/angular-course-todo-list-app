import { Injectable } from '@angular/core';
import { NewTask } from './new-task.dto';
import { TaskItem } from './task-item.dto';
import { Observable, BehaviorSubject, tap, map } from 'rxjs';
import {HttpClient} from '@angular/common/http';

const resourceURL = 'http://localhost:3001/tasks'

@Injectable()
export class TaskService {

  constructor(private httpClient: HttpClient) { }

  private tasks = new BehaviorSubject<TaskItem[]>([])

  getAllTasks(date: Date): Observable<TaskItem[]>{
    this.httpClient.get<TaskItem[]>(`${resourceURL}/${date}`)
      .pipe(map(TaskService.mapTaskItems))  
      .subscribe(t => this.tasks.next(t))

      return this.tasks
  }

  private static mapTaskItems(items: {title: string}[]){
    return items.map(item => new TaskItem(item.title))
  }

  addTask(date:Date, newTask: NewTask){
    var updatedTasks = this.tasks.value.concat(new TaskItem(newTask.title))
    
    this.httpClient.post(`${resourceURL}/${newTask.date}`, newTask)
    .subscribe(() => this.tasks.next(updatedTasks))
  }

  removeTask(date: Date, existingTask: TaskItem){
    var updatedTasks = this.tasks.value.filter(task => task != existingTask);
    
    this.httpClient.delete(`${resourceURL}/${date}/${existingTask.title}`)
      .subscribe(() => this.tasks.next(updatedTasks));
    
  }
}
