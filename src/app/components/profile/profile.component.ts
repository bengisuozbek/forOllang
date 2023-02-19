import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent } from '../base/base.component';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent extends BaseComponent implements OnInit  {
  constructor(public override router: Router,private activatedRoute: ActivatedRoute, private apiService: ApiService) {
    super(router);
  }

  id: any;
  profileItem: any;

  override ngOnInit(): void {
    this.activatedRoute.paramMap
    .subscribe(params => {
      this.id = params.get('id');
    });
    this.getUser(this.id);
  }

  getUser(id:any) {
    this.apiService.getUser(id)
    .subscribe((res: any)=>{
      console.log(res);  
      this.profileItem = res;
    });
  }
}