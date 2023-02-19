import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private SERVER_URL = "http://localhost:3000/profiles";

  constructor(private httpClient: HttpClient) { }

  public get(){  
		return this.httpClient.get(`${this.SERVER_URL}`);  
	}  

  public getUser(id:any) {
    return this.httpClient.get(`${this.SERVER_URL}/` + id);  
  }
}
