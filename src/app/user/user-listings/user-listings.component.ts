import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/service/backend.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-listings',
  templateUrl: './user-listings.component.html',
  styleUrls: ['./user-listings.component.scss']
})
export class UserListingsComponent implements OnInit{
  constructor(private servc: BackendService, private router: Router,
    private activatedRoute: ActivatedRoute) {}
  usersList: any;
  loggedUser = this.servc.currentUser;

  ngOnInit() {
    console.log(this.loggedUser);
    this.servc.getAllUsers().subscribe((users: any) => {
      console.log(users);
      this.usersList = users.filter((user: any) => user.email !== this.loggedUser);
      console.log(this.usersList);
    });
  }

  showUserInfo(user: any) {
    this.router.navigate(['/user-detail', user.id])
  }
}
