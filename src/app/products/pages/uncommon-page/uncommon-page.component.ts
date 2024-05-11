import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.scss',
})
export class UncommonPageComponent {
  //i18nSelect
  public name: string = 'Franco';
  public gender: 'male' | 'female' = 'male';

  public invitationMap = {
    male: 'invitarlo',
    famale: 'invitarla',
  };

  changeClient(): void {
    this.name = 'Nadia';
    this.gender = 'female';
  }

  // i18nPlural
  public clients: string[] = [
    'maria',
    'pedro',
    'ignacio',
    'fernando',
    'natalia',
    'macarena',
    'indiana',
    'gaia',
  ];

  public clientsMap = {
    '=0': 'No tenemos ningun cliente esperando',
    '=1': 'Tenemos un cliente esperando',
    other: 'tenemos # clientes esperando',
  };
  deleteClient(): void {
    this.clients.shift();
  }

  //KeyValue pipe
  public person = {
    name: 'Nadia',
    age: '28',
    address: 'Necochea, Buenos aires',
  };

  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap((value) => console.log('tap:', value))
  );
  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('tenemos data en la promesa');
    }, 3500);
  });
}
