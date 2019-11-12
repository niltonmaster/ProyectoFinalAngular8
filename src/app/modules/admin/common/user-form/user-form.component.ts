import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import User from '../../user/users.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userForm;

  @Input() model: User;
  @Output() completedform: EventEmitter<User> = new EventEmitter<User>();

  constructor(private location: Location) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      name: new FormControl(this.model.name || '', [
        Validators.required, Validators.minLength(1)
      ]),
      lastname: new FormControl(this.model.lastname || '', [
        Validators.required, Validators.minLength(1)
      ]),
      email: new FormControl(this.model.lastname || '', [
        Validators.required, Validators.minLength(1)
      ]),
      phone: new FormControl(this.model.phone || '', [
        Validators.required, Validators.min(1)//,
        //Validators.pattern(/^\d+(\.\d{1,2})?$/)
      ]),
      age: new FormControl(this.model.age || 0, [
        Validators.required, Validators.min(2)//,
       // Validators.pattern(/^\d+$/)
      ]),
      role: new FormControl(this.model.role || '', [
        Validators.required, Validators.minLength(1)
      ])
    });
  }

  onSubmit(e) {
    const { value, valid } = this.userForm;

    if (valid) {
      if (this.model.id) {
        value.id = this.model.id;
      }

      // value.price = parseFloat(value.price);
       //value.stock = parseInt(value.stock, 10);
       value.age = parseInt(value.age, 10);
       value.phone=parseInt(value.phone,10)
       this.completedform.emit(value);
    }
  }

  onBack() {
    this.location.back();
  }
}
