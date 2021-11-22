import {Component} from "@angular/core";

import {ListPage} from "../pages/list/list";

@Component({
    templateUrl: "app.html",
})
export class MyApp {
    rootPage = ListPage;
    constructor() {}
}
