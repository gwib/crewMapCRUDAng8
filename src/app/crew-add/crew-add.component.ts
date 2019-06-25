import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-crew-add',
  templateUrl: './crew-add.component.html',
  styleUrls: ['./crew-add.component.css']
})
export class CrewAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      CrewName: ['', Validators.required ],
      CrewMeeting: ['', Validators.required ],
      CrewEmail: ['', Validators.required ]
    });
  }
  ngOnInit() {
  }

}
