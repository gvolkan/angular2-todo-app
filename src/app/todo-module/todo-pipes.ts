import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './todo-model'

@Pipe({
  name: 'completedTodoPipes'
})

export class CompletedTodoPipe implements PipeTransform {
  transform(value: Todo[]): any {
    console.log(value);
    return value.filter(t => t.complete === true);
  }
}

@Pipe({
  name: 'openTodoPipes'
})

export class OpenTodoPipe implements PipeTransform {
  transform(value: Todo[]): any {
    console.log(value);
    return value.filter(t => t.complete === false);
  }
}



@Pipe({
  name: 'completedTodoLengthPipes'
})

export class CompletedTodoLengthPipe implements PipeTransform {
  transform(value: Todo[]): any {
    console.log(value);
    return value.filter(t => t.complete === true).length;
  }
}

@Pipe({
  name: 'openTodoLengthPipes'
})

export class OpenTodoLengthPipe implements PipeTransform {
  transform(value: Todo[]): any {
    console.log(value);
    return value.filter(t => t.complete === false).length;
  }
}
