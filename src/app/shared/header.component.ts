import { Component } from "@angular/core";

import { AuthService } from "./auth.service";

@Component({
    selector: 'my-header',
    template: `

        <header>
            <nav class="navbar navbar-default">
                <div class="container-fluid">

                    <ul class="nav navbar-nav">

                        <li><a [routerLink]="['signup']">Sign Up</a></li>
                        
                        <li><a [routerLink]="['protected']">Protected</a></li>

                    </ul>
                    <ul class="nav navbar-nav navbar-right" *ngIf="isAuth()">
                        <li><a (click)="onLogout()" style="cursor: pointer;">Logout</a></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right" *ngIf="!isAuth()">
                        <li><a [routerLink]="['signin']" style="cursor: pointer;">Login</a></li>
                    </ul>
                </div><!-- /.container-fluid -->

            </nav>

        </header>
    `
})
export class HeaderComponent {
    isAuthenticated = false;

    constructor(private authService: AuthService) {
        this.authService.isAuthenticated().subscribe(
            authStatus => this.isAuthenticated = authStatus
        );
    }

    isAuth() {
        return this.isAuthenticated;
    }

    onLogout() {
        this.authService.logout();
    }
}
