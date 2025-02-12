import { Component, effect, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-crud-local-storage',
  imports: [FormsModule],
  templateUrl: './crud-local-storage.component.html',
  styleUrl: './crud-local-storage.component.css'
})
export class CrudLocalStorageComponent implements OnInit {
  isNewUser: boolean = false;
  userObj: User = new User();
  userList: User[] = [];



  ngOnInit(): void {
    const localData = localStorage.getItem('angular19User');
    if (localData != null) {
      this.userList = JSON.parse(localData);
    }
  }

  changeView() {
    this.isNewUser = !this.isNewUser;
  }

  onEdit(data: User) {
    this.userObj = data;
    this.changeView();
  }

  onUpdate() {
    const record = this.userList.find((m) => m.userId == this.userObj.userId);

    if (record != undefined) {
      record.city = this.userObj.city;
      record.fName = this.userObj.fName;
      record.isAgree = this.userObj.isAgree;
      record.lName = this.userObj.lName;
      record.state = this.userObj.state;
      record.uName = this.userObj.uName;
      record.zipCode = this.userObj.zipCode;
      // this.userObj = new User();
      localStorage.setItem('angular19User', JSON.stringify(this.userList));
      this.changeView();
    }
  }

  onDelete(data : number){
    const isDelete = confirm("Are you sure want to delete")
    if(isDelete){
      const index = this.userList.findIndex(m => m.userId == data);
      this.userList.splice(index,1);
      localStorage.setItem('angular19User', JSON.stringify(this.userList));
    }
  }

  onSave() {
    this.userObj.userId = this.userList.length + 1;
    this.userList.push(this.userObj);
    this.userObj = new User();
    localStorage.setItem('angular19User', JSON.stringify(this.userList));
    this.changeView();
  }

}

export class User {
  userId: number;
  fName: string;
  lName: string;
  uName: string;
  city: string;
  state: string;
  zipCode: string;
  isAgree: boolean;

  constructor() {
    this.city = '';
    this.fName = '';
    this.isAgree = false;
    this.lName = '';
    this.state = '';
    this.uName = '';
    this.userId = 0;
    this.zipCode = '';
  }
}
