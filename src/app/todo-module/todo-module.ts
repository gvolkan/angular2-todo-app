import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TodoComponent } from './todo-component/todo.component';
import { FormsModule } from '@angular/forms';

import { CompletedTodoLengthPipe, CompletedTodoPipe, OpenTodoLengthPipe, OpenTodoPipe } from './todo-pipes';

@NgModule({
  imports: [BrowserModule, FormsModule],
  exports: [TodoComponent],
  declarations: [TodoComponent,CompletedTodoLengthPipe, CompletedTodoPipe, OpenTodoLengthPipe, OpenTodoPipe],
  providers: [],
})
export class TodoModule { }
