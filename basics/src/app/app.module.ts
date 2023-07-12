import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { UsersModule } from './users/users.module';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { PendingTasksComponent } from './pending-tasks/pending-tasks.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    PendingTasksComponent,
    ContentProjectionComponent,
    



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
