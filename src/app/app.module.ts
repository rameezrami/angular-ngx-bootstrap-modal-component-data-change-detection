import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CommentsComponent } from './comments/comments.component';

@NgModule({
  declarations: [AppComponent, CommentsComponent],
  imports: [BrowserModule, ModalModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
