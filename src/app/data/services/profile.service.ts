import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Profile } from '../interfaces/profile.interface';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  http = inject(HttpClient);
  baseApiURL = 'https://icherniakov.ru/yt-course/';

  constructor() {}

  // Выполняем GET-запрос к URL и возвращаем массив объектов типа Profile.
  getTestsAccounts() {
    return this.http.get<Profile[]>(`${this.baseApiURL}account/test_accounts`);
  }
}
