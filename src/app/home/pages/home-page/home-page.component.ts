import { Component, OnInit } from '@angular/core';
import { InputModel } from 'src/app/shared/components/input/input.model';
import { ComboItem } from 'src/app/shared/models/combo-item.model';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public inputName: InputModel = new InputModel().asName().asRequired();

  public internalValue: string = '';
  public user: User = new User();
  public userList: Array<User> = new Array<User>();
  public comboList: Array<ComboItem> = new Array<ComboItem>();
  public selectedComboItem: ComboItem = new ComboItem();

  constructor(private httpService: HttpService) {
    this.httpService.combo('user',{}).subscribe(comboList => this.comboList = comboList);
  }

  ngOnInit(): void { }

  public SendHomeRequest(route: string) {
    this.httpService.getAuthTest<string>('home/' + route).subscribe();
  }

  public showInternalValue() {
    alert(this.internalValue);
  }

  public fetchValue(): void {
    this.httpService.get<User>('user', 5).subscribe(user =>
      this.user = user
    );
  }

  public deleteItem(): void {
    this.httpService.delete('user', 5).subscribe(deleted => {
      if (deleted) {
        alert('Deletado!');
      }
    });
  }

  public listItems(): void {
    this.httpService.list<User>('user', {}).subscribe(list => this.userList = list);
  }

  public updateValue(): void {
    let anotherUser: User = new User().asAnotherUser();
    this.httpService.update<User>('user', anotherUser).subscribe(user => this.user = user);
  }

  public create(): void {
    let createUser: User = new User().asCreateUser();
    this.httpService.send<User>('user', createUser).subscribe(user => this.user = user);
  }

  public clearList(): void {
    this.userList = [];
  }

  public clearUser(): void {
    this.user = new User();
  }

  public showComboItem(): void {
    alert(`Id: ${this.selectedComboItem?.id}\nTexto: ${this.selectedComboItem?.text}`);
  }
}

class User {
  name: string = '';
  cpf: string = '';
  telephone1: string = '';
  telephone2: string = '';

  public asAnotherUser(): User {
    this.name = 'outro nome';
    this.cpf = 'outro cpf';
    this.telephone1 = 'outro telephone1';
    this.telephone2 = 'outro telephone2';
    return this;
  }

  public asCreateUser(): User {
    this.name = 'create nome';
    this.cpf = 'create cpf';
    this.telephone1 = 'create telephone1';
    this.telephone2 = 'create telephone2';
    return this;
  }
}
