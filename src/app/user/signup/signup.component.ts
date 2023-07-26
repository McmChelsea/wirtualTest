import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BackendService } from 'src/app/service/backend.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  form: FormGroup;
  errorMessage: any;
  constructor(private servc: BackendService,
              private fb: FormBuilder,
              private router: Router
              ) {}
              
  ngOnInit() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      phone_number: ['', Validators.required]
    });
  }

  onSubmit() {
    if(this.form.valid) {
      this.servc.register(this.form.value).subscribe((res: any) => {
        if(res.status === 201) {
          this.router.navigate(['/login']);
        } else {
          this.errorMessage = res.message;
        }
      })
    }
  }
}
