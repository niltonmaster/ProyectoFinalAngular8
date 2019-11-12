import { Injectable } from "@angular/core";
import { UserService } from '../../login/services/user.service';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {
    private currentUserSubject: BehaviorSubject<{}>;
    public currentUser: Observable<{}>;

    constructor(private userService: UserService) {
        this.currentUserSubject = new BehaviorSubject(
            JSON.parse(sessionStorage.getItem('currentUser'))
        );
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue() {
        return this.currentUserSubject.value;
    }

    login(email: string, password: string) {
        return this.userService.getUserByEmail(email)
            .pipe(
                map((users: Array<{}>) => {
                    if (users.length) {
                        const user = users[0];
                        if (user['password'] === password) {
                            sessionStorage.setItem('currentUser', JSON.stringify(user));
                            this.currentUserSubject.next(user);
                            return { success: true };
                        }
                    }
                    return { success: false };
                })
            )
    }

    logout() {
        sessionStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        return of({});
    }
}