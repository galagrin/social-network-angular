import { Component, inject } from '@angular/core';
import { ProfileService } from '../../data/services/profile.service';
import { Profile } from '../../data/interfaces/profile.interface';
import { ProfileCardComponent } from '../../common-ui/profile-card/profile-card.component';

@Component({
  selector: 'app-search-page',
  imports: [ProfileCardComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss',
})
export class SearchPageComponent {
  //позволяет получить доступ к ProfileService для получения данных
  profileService = inject(ProfileService);
  // массив, который будет хранить данные профилей, полученные от сервиса.
  profiles: Profile[] = [];

  constructor() {
    //В конструкторе вы вызываете метод getTestsAccounts() сервиса, который отправляет HTTP-запрос и подписывается на результат. Когда данные получены, они записываются в массив profiles
    this.profileService.getTestsAccounts().subscribe((value) => {
      console.log(value);
      this.profiles = value;
    });
  }
}
