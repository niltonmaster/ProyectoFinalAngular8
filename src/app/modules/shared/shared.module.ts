import { NgModule } from "@angular/core";
import { AuthService } from './services/auth.services';

@NgModule({
    providers: [AuthService]
})
export class SharedModule {}