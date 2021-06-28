import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NavbarComponent } from "./navigation/navbar.component";
import { EnterpriseRoutes } from "./pages/enterprise/enterprise.module";
import { ClientRoutes } from './pages/client/client.module';

const routes: Routes = [
  {
    path: "",
    component: NavbarComponent,
    children: [...EnterpriseRoutes],
  },
  {
    path: "client",
    component: NavbarComponent,
    children: [...ClientRoutes],
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
