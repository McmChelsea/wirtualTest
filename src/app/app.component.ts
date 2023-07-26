import { Component, OnInit } from '@angular/core';
import { BackendService } from './service/backend.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLogged$: Observable<boolean>
  title = 'wirtualTest';
  constructor(private servc: BackendService,
              private router: Router          
    ) {}

  ngOnInit() {
    this.isLogged$ = this.servc.isLogged;
  }

  logout() {
    this.router.navigate(['/']);
    this.servc.logout();
  }
}
