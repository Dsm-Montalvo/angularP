import { CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, PercentPipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-pipes-page',
  imports: [UpperCasePipe, LowerCasePipe, JsonPipe, DatePipe, DecimalPipe, CurrencyPipe, PercentPipe],
  templateUrl: './pipes-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PipesPagesComponent { 

  firstName = signal('john');
  lastName = signal('DOE');
  
  user = signal({
    id: 1,
    firstName: this.firstName(),
    lastName: this.lastName(),
    age: 35,
    email: 'john.doe@example.com'
  });

  currentDate = signal(new Date());
  birthDate = signal(new Date(2000, 5, 14));

  price = signal(1234.567);
  percent = signal(0.8567);


}
