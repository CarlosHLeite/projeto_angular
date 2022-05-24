import { Component } from '@angular/core';
import { data } from './arquivo';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    data = data;
}
