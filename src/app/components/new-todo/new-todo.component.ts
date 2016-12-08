import {Component} from "@angular/core";
import {TodoStoreService} from "../../services/todo-store.service";

@Component({
    selector: 'new-todo',
    templateUrl: './new-todo.component.html',
    styleUrls: ['new-todo.component.css']
})
export class NewTodoComponent {

    newItemText = '';
    store: TodoStoreService;

    constructor(store: TodoStoreService) {
        this.store = store;
    }

    addItem() {
        if (this.newItemText) {
            this.store.addItem(this.newItemText);
            this.newItemText = '';
        }
    }

}
