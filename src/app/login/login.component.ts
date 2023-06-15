import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NotificationService } from '../service/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm: any = FormGroup; //Form
  submitted: boolean = false;
  getData: any;

  constructor(private notification: NotificationService, private httpClient: HttpClient, private router: Router){}

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      uname: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])

    });
  }
  public onSubmit(){

    this.submitted = true;

    if (this.loginForm.valid) {

      const formData = new FormData()

      formData.append('uname', this.loginForm.value.uname);
      formData.append('password', this.loginForm.value.password);

      this.httpClient.post('login/login.php', formData).subscribe((data:any= {}) => {
        this.getData = data.data;
      
        if(data.response == "success"){
          sessionStorage.setItem('name', this.getData.name);
          this.router.navigate(['welcome'])
          this.notification.showSuccess("Login Success!", "Success");
        }else if(data.response == "failure"){
          this.notification.showError(data.err_message, "Failed");
        }else{ 
          this.notification.showError("Something Went Wrong", "Failed");
        }
      });   

    }
  }

}
