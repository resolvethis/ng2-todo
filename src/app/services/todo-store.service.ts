import {Injectable} from "@angular/core";
import {TodoItem} from "../model/todo-item.model";

@Injectable()
export class TodoStoreService {

    items: TodoItem[] = [];
    archive: TodoItem[] = [];

    addItem(text: string) {
        let todoItem = new TodoItem(text);
        this.items.push(todoItem);
    }

    removeItem(item: TodoItem) {
        let index = this.items.indexOf(item);
        if (index > -1) {
            let removed = this.items.splice(index, 1)[0];
            removed.completed = true;
            this.archive.push(removed);
        }
    }

    get isEmpty(){
        return this.items.length === 0;
    }

    get isLazy(){
        return this.archive.length === 0;
    }
}
