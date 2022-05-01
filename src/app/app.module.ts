import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './header/search/search.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainBoardComponent } from './main-board/main-board.component';
import { UsersComponent } from './main-board/users/users.component';
import { UserListComponent } from './main-board/users/user-list/user-list.component';
import { EditListComponent } from './main-board/edit-list/edit-list.component';
import { UserItemComponent } from './main-board/users/user-list/user-item/user-item.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    SidebarComponent,
    MainBoardComponent,
    UsersComponent,
    UserListComponent,
    EditListComponent,
    UserItemComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
