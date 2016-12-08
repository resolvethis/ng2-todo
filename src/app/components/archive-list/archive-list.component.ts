import {Component} from "@angular/core";
import {TodoStoreService} from "../../services/todo-store.service";

@Component({
    selector: 'archive-list',
    templateUrl: './archive-list.component.html',
    styleUrls: ['./archive-list.component.css']
})
export class ArchiveListComponent {

    store: TodoStoreService;

    constructor(store: TodoStoreService) {
        this.store = store;
    }

}
