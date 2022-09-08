import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';
import { ToasterService } from '../services/common/toaster.service';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup | any;
  isFormSubmiited = false;
  initialValue: boolean = false;
  isFormValid = () => this.isFormSubmiited || !this.registerForm?.dirty;
  UserID: number =0;
  userComponent:any;
  @ViewChild(FormGroupDirective) formGroupDirective:| FormGroupDirective| undefined;
  constructor( 
    private _fb: FormBuilder,
    private toaster: ToasterService,
    private userservice : UserService,
    private router: Router) {
      this.createForm();
     }

  ngOnInit(): void {
   
  }

  createForm() {
    this.registerForm = this._fb.group({
      id: [''],
      userName: [''],
      password: [''],
      email: ['']  
    });
  }

  addata(){
    console.log(this.registerForm.value); 
    if(this.registerForm.valid)  {
      if(this.UserID == 0){
        this.userservice.saveuser
        (this.registerForm.getRawValue()).subscribe((data:any) =>{  
          //this.userComponent='user';
         // this.showSuccessToaster("Successfully Saved");
          // window.location.reload();
          this.formGroupDirective?.resetForm(this.createForm());
          this.gonextpage();
        
        });
      }
  }
}


showSuccessToaster(message: string) {
  this.toaster.show('success', message,0);
}

showErrorToaster() {
  this.toaster.show('error', 'failed', 0);
}

gonextpage(){
  this.router.navigateByUrl(
    '/default'
  );   
}
}
