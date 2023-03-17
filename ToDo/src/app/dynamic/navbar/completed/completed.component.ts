import {Component} from '@angular/core';
import {Utility} from "../../../Utility";

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent {

  getListCompleted() {
    return Utility.taskList;
  }

  deleteItem(id: number) {
    for (let i = 0; i < Utility.taskList.length; i++) {
      if (id === Utility.taskList[i].id) {
        Utility.taskList.splice(i, 1);
        break;
      }
    }
    console.log('deleted');
  }

  deleteAll() {
    for (let i = 0; i < Utility.taskList.length; i++) {
      if (Utility.taskList[i].check) {
        Utility.taskList.splice(i, 1);
      }
    }
    for (let i = 0; i < Utility.taskList.length; i++) {
      if (Utility.taskList[i].check) {
        Utility.taskList.splice(i, 1);
      }
    }
  }
}
