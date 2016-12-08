import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./components/app-root/app.component";
import {TodoPageComponent} from "./components/todo-page/todo-page.component";
import {ArchivePageComponent} from "./components/archive-page/archive-page.component";
import {TodoListComponent} from "./components/todo-list/todo-list.component";
import {TodoItemComponent} from "./components/todo-item/todo-item.component";
import {TodoStoreService} from "./services/todo-store.service";
import {ArchiveListComponent} from "./components/archive-list/archive-list.component";
import {NewTodoComponent} from "./components/new-todo/new-todo.component";


const appRoutes: Routes = [
    {path: 'todo', component: TodoPageComponent},
    {path: 'archive', component: ArchivePageComponent},
    {path: '**', component: TodoPageComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        TodoPageComponent,
        TodoListComponent,
        TodoItemComponent,
        NewTodoComponent,
        ArchivePageComponent,
        ArchiveListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [TodoStoreService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
