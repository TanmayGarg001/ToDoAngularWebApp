import {Component} from '@angular/core';
import {Utility} from "../../../Utility";

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent extends Utility {
  ipString: any;

  addTask() {
    if (this.ipString != '') {
      Utility.taskList.push({id: Utility.generateUniqueId(Utility.taskList.length), check: false, name: this.ipString});
      console.log(Utility.taskList);
      this.ipString = '';
    }
  }

  getList() {
    return Utility.taskList;
  }
}
