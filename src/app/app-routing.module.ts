import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DisplayDataComponent } from './pages/display-data/display-data.component';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';
import { ItemComponent } from './pages/entities/item/item.component';
import { StoreComponent } from './pages/entities/store/store.component';
import { WarehouseComponent } from './pages/entities/warehouse/warehouse.component';
import { CustomerComponent } from './pages/entities/customer/customer.component';
import { SupplierComponent } from './pages/entities/supplier/supplier.component';
import { DemandManagementComponent } from './pages/merchandising/demand-management/demand-management.component';
import { SmartReplenishmentComponent } from './pages/merchandising/smart-replenishment/smart-replenishment.component';

const routes: Routes = [
  {
    path: 'smart-replenishment',
    component: SmartReplenishmentComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'demand-management',
    component: DemandManagementComponent,
    canActivate: [ AuthGuardService ]
  }, 
  {
    path: 'supplier',
    component: SupplierComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'customer',
    component: CustomerComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'warehouse',
    component: WarehouseComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'store',
    component: StoreComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'item',
    component: ItemComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'display-data',
    component: DisplayDataComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: '**',
    redirectTo: 'home',
    canActivate: [ AuthGuardService ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), DxDataGridModule, DxFormModule],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [HomeComponent, ProfileComponent, DisplayDataComponent, ItemComponent, StoreComponent, WarehouseComponent, CustomerComponent, SupplierComponent, DemandManagementComponent, SmartReplenishmentComponent]
})
export class AppRoutingModule { }
