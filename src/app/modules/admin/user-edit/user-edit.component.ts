import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import User from '../user/users.model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User;

  constructor(
    private router: ActivatedRoute,
    private routing: Router,
    private userService: UsuarioService
  ) { }

  ngOnInit() {
    const id = parseInt(this.router.snapshot.params.id, 10);
    this.userService.getUser(id)
      .subscribe((user: User) => {
        this.user = user;
      });
  }

  onUpdate(e) {
    this.userService.updateUser(e).subscribe(response => {
       this.routing.navigate(['/admin/users']);
    });
  }

}
