import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class ProfileService {
  private SERVER_URL = "https://63ed2aa53d9c852c3f572b22.mockapi.io/users/users/";

  constructor(private http: HttpClient) {}

  public getProfiles() {
    return this.http.get(`${this.SERVER_URL}/`);
  }

  public getProfilesById(id:any) {
    return this.http.get(`${this.SERVER_URL}/` + id);
  }
}
