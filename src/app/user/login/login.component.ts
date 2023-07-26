import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BackendService } from 'src/app/service/backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private servc: BackendService,
              private fb: FormBuilder,
              private router: Router
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      username: ['riya_aggarwal989@gmail.com', Validators.required],
      password: ['user1@123', Validators.required]
    });
  }

  onSubmit() {
    if(this.form.valid) {
      this.servc.login(this.form.value).subscribe((res: any) => {
        if(res.status === 200) {
          this.router.navigate(['/user-list']);
          this.servc.setToken(res.token);
        } else {
          this.router.navigate(['/'])
        }
      })
    }
  }
}
