import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { EnterpriseComponent } from './enterprise.component';
import { EnterpriseService } from 'src/app/services/enterprise.service';

export const EnterpriseRoutes: Routes = [
  {
    path: 'enterprise',
    component: EnterpriseComponent
  }
];

@NgModule({
  declarations: [EnterpriseComponent],
  providers: [EnterpriseService]
})
export class EnterpriseModule {}
