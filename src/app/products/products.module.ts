import { PrimeNgModule} from './../primeng/primeng.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';

import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { OrderComponent } from './pages/order/order.component';
import { ToggleCasePipe } from './pipe/toggle-case.pipe';

import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { CanFlyPipe } from './pipe/can-Fly.pipe';
import { SortByPipe } from './pipe/sortBy.pipe';


@NgModule({
  declarations: [
    BasicPageComponent,
    NumbersPageComponent,
    UncommonPageComponent,
    OrderComponent,
    ToggleCasePipe,
    CanFlyPipe,
SortByPipe


  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    ProductsRoutingModule,
    PrimeNgModule,
    ToolbarModule,
    TableModule
  ]
})
export class ProductsModule { }
