import {Component} from '@angular/core';
import {Utility} from "../../../Utility";

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})
export class ActiveComponent extends Utility {
  ip: any;

  addTaskActive() {
    if (this.ip != '') {
      Utility.taskList.push({id: Utility.generateUniqueId(Utility.taskList.length), check: false, name: this.ip});
      console.log(Utility.taskList);
      this.ip = '';
    }
  }

  getListActive() {
    return Utility.taskList;
  }
}
