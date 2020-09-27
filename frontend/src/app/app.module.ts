import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ChatWindowComponent } from './components/home/chat-window/chat-window.component';
import { SidebarComponent } from './components/home/sidebar/sidebar.component';
import { ChatHeadComponent } from './components/home/sidebar/chat-head/chat-head.component';
import { FriendCRUDComponent } from './components/home/sidebar/friend-crud/friend-crud.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, HomeComponent, ChatWindowComponent, SidebarComponent, ChatHeadComponent, FriendCRUDComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
