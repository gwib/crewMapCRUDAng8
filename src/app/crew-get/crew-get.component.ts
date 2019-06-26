import { Component, OnInit } from '@angular/core';
import Crew from '../Crew';
import { CrewsService } from '../crews.service';


@Component({
  selector: 'app-crew-get',
  templateUrl: './crew-get.component.html',
  styleUrls: ['./crew-get.component.css']
})
export class CrewGetComponent implements OnInit {

  crews: Crew[];
  constructor(private cs: CrewsService) { }

  ngOnInit() {
    this.cs.
      getCrews()
      .subscribe((data: Crew[]) => {
      this.crews = data;
    });
  }

}
