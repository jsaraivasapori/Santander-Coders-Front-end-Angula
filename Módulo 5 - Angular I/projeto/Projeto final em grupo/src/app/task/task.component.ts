import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../models/tasks.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input() task?: Task;

  public taskId = 'asd';

  ngOnInit(): void {
    if (this.task) {
      this.taskId = '#' + this.task._id || '';
    }
  }
}
