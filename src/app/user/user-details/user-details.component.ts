import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router'
import { BackendService } from 'src/app/service/backend.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit{
  userId: number;
  userData: any;
  constructor(private router: Router, private actRoute: ActivatedRoute, private servc: BackendService) {}

  ngOnInit(): void {
      this.actRoute.url.subscribe((res: any) => this.userId = res[1].path);
      console.log(this.userId);
      this.servc.getUser(this.userId).subscribe((res: any) => {
        console.log(res);
        this.userData = res;
      })
  }

}
