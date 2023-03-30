import { Component, OnInit } from '@angular/core';
import { Developer } from '../models/developer.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css'],
})
export class DeveloperComponent implements OnInit {
  john: Developer = new Developer(
    'John',
    'Doe',
    42,
    'Male',
    'Biographie of a life',
    [
      { name: 'skill1', logo: 'logo1', site: 'site1' },
      { name: 'skill2', logo: 'logo2', site: 'site2' },
      { name: 'skill3', logo: 'logo3', site: 'site3' },
      { name: 'skill4', logo: 'logo4', site: 'site4' },
    ]
  );

  constructor() {}
  ngOnInit(): void {
    //this.john.skillList.map((elem) => console.log(elem));
  }
}
