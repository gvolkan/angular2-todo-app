import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TodoComponent } from './todo-component/todo.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [BrowserModule, FormsModule],
  exports: [TodoComponent],
  declarations: [TodoComponent],
  providers: [],
})
export class TodoModule { }
