import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) userId!:string;
  @Input({required:true}) name!:string;

  tasks = [
    {
      id: 't1',
      userId : 'u1',
      title: "Angular Master",
      summary: "lorem10lo lorem10lo lorem10lo lorem10lo lorem10lo lorem10lo",
      dueDate: "2024-02-04",

    },
    {
      id: 't2',
      userId : 'u2',
      title: "Angular Master 2",
      summary: "lorem10lo lorem10lo lorem10lo lorem10lo lorem10lo lorem10lo",
      dueDate: "2024-02-04",

    },
    {
      id: 't3',
      userId : 'u3',
      title: "Angular Master 3",
      summary: "lorem10lo lorem10lo lorem10lo lorem10lo lorem10lo lorem10lo",
      dueDate: "2024-02-04",

    },
    {
      id: 't4',
      userId : 'u4',
      title: "Angular Master 4",
      summary: "lorem10lo lorem10lo lorem10lo lorem10lo lorem10lo lorem10lo",
      dueDate: "2024-02-04",

    }
  ];

  get selectedUserTasks(){
    //console.log(this.tasks.filter((task) => task.userId === this.userId));
    return this.tasks.filter((task) => task.userId === this.userId);
  }
}
