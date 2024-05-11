import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.scss'
})
export class BasicPageComponent {

public nameLower:string = 'nadia';

public nameUpper:string = 'NADIA';

public fullName:string = 'NaDia rasMUSSEn';

public customDate:Date = new Date();
}
