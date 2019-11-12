import { Component, OnInit } from '@angular/core';
import User from './users.model';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  titles: string[] = ['#', 'nombre', 'apellido', 'correo', 'telefono','edad', 'rol','acciones']
  users: User[];

  constructor(
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.usuarioService.getUsers()
      .subscribe((users: User[]) => {
        this.users = users;
      });
  }

  ngOnDestroy() {
    
  }

  removeUser(id: number) {
    this.usuarioService.deleteUser(id).subscribe(() => {
      this.users = this.users.filter(user => user.id !== id);
    });
  }

}
