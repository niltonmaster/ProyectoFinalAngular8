import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {

  constructor(
    private routing: Router,
    private userService: UsuarioService
  ) { }

  ngOnInit() {
  }

  onCreate(e) {
    this.userService.createUser(e).subscribe(response => {
      this.routing.navigate(['/admin/users']);
    });
  }

}
