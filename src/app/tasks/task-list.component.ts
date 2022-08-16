import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';
import { NewTask } from './new-task.dto';
import { TaskItem } from './task-item.dto';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
 
  newTask: NewTask = new NewTask();

  ngOnInit(): void {
    var strDate = this.route.snapshot.params['date'];
    this.newTask = new NewTask(this.newTask.title, new Date(strDate));
  }

  tasks: TaskItem[] = [
    new TaskItem("Visit Ann"),
    new TaskItem("Call Dad"),
    new TaskItem("Go to the gym"),
    new TaskItem("Wash the dishes"),
    new TaskItem("Shop for the party")
  ]

  add(taskNgForm: NgForm){

    if(taskNgForm.touched == false)
      return;

    this.tasks.push(new TaskItem(this.newTask.title))
    taskNgForm.reset({date: this.newTask.date});
  }

  remove(exisitingTask: TaskItem){
    var userConfirmed = confirm(`Are you sure that you want to remove the following task? \n "${exisitingTask.title}"`)
  
    if(userConfirmed){
      this.tasks = this.tasks.filter(task => task != exisitingTask);
    }
  
  }
}

