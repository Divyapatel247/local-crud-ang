import { Component, signal, OnInit, model } from '@angular/core';
import { User } from '../crud-local-storage/crud-local-storage.component';
import { PopupComponent } from '../popup/popup.component';


@Component({
  selector: 'app-crud-local-storage-signal',
  imports: [PopupComponent],
  templateUrl: './crud-local-storage-signal.component.html',
  styleUrl: './crud-local-storage-signal.component.css'
})
export class CrudLocalStorageSignalComponent implements OnInit {
  userList = signal<User[]>([]);
  isSidePanelVisiable = signal<boolean>(false);

  userForm = signal<User>(new User());

  ngOnInit(): void {
    const localData = localStorage.getItem("angular19User");

    if(localData != null){
         const userParseData = JSON.parse(localData);
         this.userList.set(userParseData)
    }
  }

  changeView(){
       this.isSidePanelVisiable.set(!this.isSidePanelVisiable())
  }
  onSave(){
    if(this.userForm().userId == 0){
      this.userForm().userId = this.userList().length + 1;
      this.userList.update(oldArry =>([...oldArry,this.userForm()]))
    }
    else{
      const record = this.userList().find(m=>m.userId == this.userForm().userId);
      if(record != undefined){
        record.fName = this.userForm().fName;
        record.lName = this.userForm().lName;
        record.city = this.userForm().city;
        record.state = this.userForm().state;
        record.uName = this.userForm().uName;
        record.zipCode = this.userForm().zipCode;
      }
    }
    localStorage.setItem("angular19User",JSON.stringify(this.userList()))
    this.userForm.set(new User());
  }
  onEdit(item:User){
    this.userForm.set(item)
    this.changeView()
  }

  onDelete(userId : number){
    const isDelete = confirm("Are you sure want to delete");
    if(isDelete){
      const index = this.userList().findIndex(m=>m.userId == userId);
      this.userList().splice(index,1);
    }
    localStorage.setItem("angular19User",JSON.stringify(this.userList()))
  }

  updateUserObj(fieldName: string, event:any){
    if(fieldName == 'isAgree' ){
      this.userForm.update(oldObj=>({...oldObj,[fieldName]:event.target.checked}))

    }else{
      this.userForm.update(oldObj=>({...oldObj,[fieldName]:event.target.value}))
    }
  }
  popupMessage: string = ''; // This controls the popup's visibility

  // Show the popup
  showPopup() {
    this.popupMessage = 'Hello, this is a popup!'; // Setting this triggers the popup
  }

  // Handle when the popup is closed
  onPopupClosed() {
    console.log('Popup closed');
    this.popupMessage = ''; // Clear the message to hide the popup
  }


}
