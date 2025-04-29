import { HttpClient, withRequestsMadeViaParent } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Profile } from '../interfaces/profile.interface';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  http = inject(HttpClient);
  baseApiURL = 'https://icherniakov.ru/yt-course/';

  constructor() {}

  getTestsAccounts() {
    return this.http.get<Profile[]>(`${this.baseApiURL}account/test_accounts`);
  }
}
