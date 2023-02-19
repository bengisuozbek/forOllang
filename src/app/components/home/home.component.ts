import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../base/base.component';
import { ApiService } from 'src/app/services/api.service';
import { Profile } from 'src/app/interfaces/Profile';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends BaseComponent implements OnInit {
  profiles:Profile[] = [];
  constructor(public override router: Router, private apiService: ApiService) {
    super(router);
  }

  override ngOnInit(): void {
    this.apiService
      .get()
      .subscribe((res: any) => {
        console.log(res);
        this.profiles = res
      });

  //   this.apiService.get().subscribe((data: any)=>{  
	// 		console.log(data);  
	// 		this.profiles = data;  
	// 	})  
  // }
    }
}
