import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { UsersComponent } from './user/users.component';
import { UsuarioService } from './services/usuario.service';
import { UserNewComponent } from './user-new/user-new.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { UserFormComponent } from './common/user-form/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';

const components = [
  HeaderComponent,
  FooterComponent,
  UsersComponent,
  UserNewComponent,
  UserEditComponent,
  UserFormComponent,
  AdminComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ],
  exports: [...components],
  providers: [UsuarioService]
})
export class AdminModule { }
