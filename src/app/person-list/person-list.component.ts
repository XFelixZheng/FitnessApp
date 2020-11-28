import { Component, OnInit } from '@angular/core';

import { Person } from '../shared/person';
import { PersonInfoService } from '../shared/person-info.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  persons: Person[] = [];

  constructor(private pi: PersonInfoService) { }

  ngOnInit(): void {
    this.persons = this.pi.getAll();
  }

}
