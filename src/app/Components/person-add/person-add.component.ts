import {Component, OnInit} from '@angular/core';

// Custom imports
import {FormGroup, FormBuilder, Validators, Form} from '@angular/forms';
import {ElasticSearchService, IAddPerson} from '../../GlobalServices/elastic-search.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.scss']
})
export class PersonAddComponent implements OnInit {
  // Global variable
  public addPersonForm: FormGroup;

  // Default constructor
  constructor(private formBuilder: FormBuilder, private es: ElasticSearchService, private snackBar: MatSnackBar) {
  }

  // Form Load
  ngOnInit() {
    // Form validation
    this.buildForm();
  }

  // Add person
  AddPerson(e) {
    if (e.valid) {
      const param: IAddPerson = {
        firstName: e.value.name,
        lastName: e.value.surname,
        email: e.value.email.toLowerCase(),
      };
      this.es.AddPerson(param).subscribe(data => {
        if (data._shards.successful) {
          e.reset();

          this.snackBar.open(param.firstName + ' ' + param.lastName + ' person has been successfully added.', '', {
            duration: 3000,
            horizontalPosition: 'end'
          });
        }
      });
    }
  }

  // Form builder
  buildForm() {
    const emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
    this.addPersonForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.maxLength(45)])],
      surname: ['', Validators.compose([Validators.required, Validators.maxLength(45)])],
      email: ['', Validators.compose([Validators.required, Validators.pattern(emailPattern), Validators.maxLength(100)])],
    });
  }
}
