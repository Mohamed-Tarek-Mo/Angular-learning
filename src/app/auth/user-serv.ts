import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserServ {
  http = inject(HttpClient);
  getUsersData() {
    return this.http.get<any>('https://dummyjson.com/users');
  }
}
