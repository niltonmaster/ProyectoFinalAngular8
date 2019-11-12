import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { LoginComponent } from './login.component';

// localhost:3000/login/crear-usuario
const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        children: [
            {
                path: 'sign-in',
                component: SignInComponent
            },
            {
                path: '',
                redirectTo: 'sign-in',
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule {}