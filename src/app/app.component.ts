import { Component } from '@angular/core';

import { TopNavComponent } from './top-nav/top-nav.component';

@Component({
    selector: 'app-root',
    template: `
    <body ng-app="mainApp">
        <div class="container">
            <div class="col-sm-10 center">
                <top-nav></top-nav>
                <router-outlet></router-outlet>
            </div>
        </div>
    </body>
    `
})
export class AppComponent { }
