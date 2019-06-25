import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrewsService {

  uri = 'https://localhost:4000/crews';

  constructor(private http: HttpClient) { }

  addCrew(CrewName, CrewMeeting, CrewEmail) {
    const obj = {
      CrewName,
      CrewMeeting,
      CrewEmail
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
      .subscribe(res => console.log('Done'));
  }
}
