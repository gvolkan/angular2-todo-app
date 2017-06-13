import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from './../todo-service';
import { Todo } from './../todo-model';

@Component({
  selector: 'todo-comp',
  templateUrl: 'todo.component.html',
  styleUrls: ['todo.component.css'],
  providers: [TodoService]
})

export class TodoComponent implements OnInit {
  newTodo: Todo = new Todo();
  selection = 'ALL';

  constructor(private todoService: TodoService) {
  }

  addTodo() {
    this.todoService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleTodoComplete(todo) {
    this.todoService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this.todoService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoService.getAllTodos();
  }

  get openTodos() {
    return this.todoService.getAllTodos().filter(t => t.complete === false);
  }

  get completedTodos() {
    return this.todoService.getAllTodos().filter(t => t.complete === true);
  }

  changeSelection(_selection) {

    this.selection = _selection;
    console.log('selection changed: ' + _selection);
  }

  ngOnInit() {
  }
}