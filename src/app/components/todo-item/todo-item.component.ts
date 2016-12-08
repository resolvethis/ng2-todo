import {Component, Input, EventEmitter, Output} from "@angular/core";
import {TodoItem} from "../../model/todo-item.model";

@Component({
    selector: 'todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

    @Input()
    item: TodoItem;

    @Output()
    done = new EventEmitter<TodoItem>();

    doneClicked() {
        this.done.emit(this.item);
    }


}



