import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { ClientsComponent } from './clients/clients.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { authGuard } from './auth.guard';
import { superAdminGuard } from './super-admin.guard';
import { AdminComponent } from './admin/admin.component';
import { AdminManageComponent } from './admin-manage/admin-manage.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminDeleteComponent } from './admin-delete/admin-delete.component';
import { adminAccessGuard } from './admin-access.guard';
import { PaymentComponent } from './payment/payment.component';



const routes: Routes = [
  {
    path:'home',
    component:AddCustomerComponent,
    children:[
      {path:'add',component: ContactComponent}
    ]
    //  outlet:'route1'
    //  http://localhost:4200/<primary route>(route1:home)
  },
  // {path:'contact/:id',component:ContactComponent}

  //------------------------------------------------
 {path:'clients',component:ClientsComponent},
 {path:'product/:id',component:ProductComponent},
 {path:'product/:prodId/photos/:photoId',component:ProductComponent},
 //---------------------------------------------------

 {
  path:'',
  redirectTo:'clients',
  pathMatch:'full'
},
//----------------------------------
{
  path:'search',
  component:SearchComponent,
  canActivate:[authGuard]
},
//--------------------lazy Loading--------------------------------------------
  // { path: 'payment', loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule) },
  {path:'payment',component:PaymentComponent},
//-----------------------------------------------------------------------------
{
  path: 'admin',
  canActivate: [superAdminGuard],
  children: [
    {
      path: '',
      component: AdminComponent,
    },
    {

      path:'',
      canActivateChild: [adminAccessGuard],
      children: [
        { path: 'manage', component: AdminManageComponent },
        { path: 'edit', component: AdminEditComponent },
        { path: 'delete', component: AdminDeleteComponent }
      ]
    }
  ]
},
//--------------------page not found -----------------------------------
{path:"**",component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
