import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent } from '../base/base.component';
import { ProfileService } from 'src/app/services/ProfileService'; 

@Component({
  selector: 'app-mock-component',
  templateUrl: './mock-component.component.html',
  styleUrls: ['./mock-component.component.css']
})
export class MockComponentComponent extends BaseComponent implements OnInit  {
  constructor(
    public override router: Router,
    private activatedRoute: ActivatedRoute, 
    private profileService: ProfileService
  ) {
    super(router);
  }

  id: any;
  profileItem: any;

  override ngOnInit(): void {
    this.activatedRoute.paramMap
    .subscribe(params => {
      this.id = params.get('id');
    });
    this.getProfilesById(this.id);
  }

  getProfilesById(id:any) {
    this.profileService.getProfilesById(id)
    .subscribe((res: any)=>{
      console.log(res);  
      this.profileItem = res;
    });
  }
}