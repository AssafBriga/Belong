import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService  } from '../../../services/users.service';
import {Router} from "@angular/router"

@Component({
  selector: 'create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  userForm:FormGroup;
  userFile:File;
  fileTitle:string = "Upload photo";
  @ViewChild('userFile') user_file;

  updateFile(file: HTMLInputElement) {
    let name = file.value;
    if(name==""){
      this.fileTitle = "Upload photo"
    }
    else{
      
      let splitName = name.split('\\');
      this.fileTitle = splitName[splitName.length-1];
    }
    
  }

  onSubmit(form){
    const file = this.user_file.nativeElement;
    if (file.files && file.files[0]){
      this.userFile = file.files[0];
    };
     

    var formData:FormData = new FormData();
    formData.append('user_name',form.user_name);
    formData.append('last_name',form.last_name);
    formData.append('gender',form.gender);
    formData.append('userFile',this.userFile,this.userFile.name);

    this.usersService.createNewUser(formData).subscribe((res)=>{
      alert('User Saved!');
      this.router.navigate(['/users'])
    })
  };

  constructor(private fb : FormBuilder, private usersService : UsersService, private router: Router) {
    this.userForm = this.fb.group({
      'user_name': ['',Validators.required],
      'last_name': ['',Validators.required],
      'gender': ['',Validators.required],
      'userFile': ['',Validators.required],
    })
   }

  ngOnInit() {
    
  }

}
