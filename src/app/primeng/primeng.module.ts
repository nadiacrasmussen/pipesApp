import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { FieldsetModule } from 'primeng/fieldset';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';


@NgModule({
exports:[MenuModule, MenubarModule,CardModule,ButtonModule,FieldsetModule,PanelModule]

})
export class PrimeNgModule { }
