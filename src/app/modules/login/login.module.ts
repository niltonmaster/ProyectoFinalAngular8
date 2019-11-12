import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SignInComponent } from './sign-in/sign-in.component';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
    declarations: [SignInComponent, LoginComponent], 
    imports: [
        CommonModule,
        FormsModule,
        LoginRoutingModule
    ], 
    providers: [] 
})
export class LoginModule {}