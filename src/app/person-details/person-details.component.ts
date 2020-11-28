import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Person } from '../shared/person';
import { PersonInfoService } from '../shared/person-info.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {

  person!: Person;
  constructor(private pi: PersonInfoService, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap;
    // tslint:disable-next-line: no-non-null-assertion
    this.person = this.pi.getSingle(params.get('username')!);
  }

}
