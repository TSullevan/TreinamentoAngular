import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormModel } from 'src/app/shared/components/form/form.model';
import { InputModel } from 'src/app/shared/components/input/input.model';
import { ColModel } from 'src/app/shared/models/col.model';
import { RowModel } from 'src/app/shared/models/row.model';
import { SubSink } from 'subsink';
import { UserAuthModel } from '../../models/user-auth.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit, OnDestroy {

  public form: FormModel = new FormModel();
  public showLoading: boolean;
  private subscriptions = new SubSink();

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    this.form.setSendRoute('auth').setSendMethod(this.onLogin.bind(this))
      .addRow(new RowModel()
        .addCol(new ColModel(new InputModel().asName().asRequired().setValue('batman'))))
      .addRow(new RowModel()
        .addCol(new ColModel(new InputModel().asPassword().asRequired().setValue('batman')))
      );
  }

  ngOnInit(): void {
    if (this.authService.isUserLoggedIn()) {
      this.router.navigateByUrl('/user/home');
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  loginTest(): void {
    let userAuth: UserAuthModel = new UserAuthModel();
    userAuth.name = 'batman';
    userAuth.password = 'batman';
    this.onLogin(userAuth);
  }

  onLogin(user: UserAuthModel): void {
    this.subscriptions.add(
      this.authService.login(user).subscribe(
        (response) => {
          debugger
          this.authService.addTokenToCache(response);
          // this.authService.addTokenToCache(response.headers.get('Jwt-Token'));
          // this.authService.addUserToCache(response.body);
          this.router.navigateByUrl('/deposito');
          this.showLoading = false;
        },
        (error: HttpErrorResponse) => {
          debugger
          alert(error.message);
          this.showLoading = false;
        }
      )
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
