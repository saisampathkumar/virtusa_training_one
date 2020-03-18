import { Component } from '@angular/core';
import { of, forkJoin, zip, merge} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Prac2';
  o1 = of(1, 2, 3, 4);
  o2 = of('Hello', 'world');
  showObservables() {
    forkJoin(this.o1, this.o2).subscribe(data => console.log(data[0], data[1]));
  }
  showmerge() {
    zip(this.o1, this.o2).subscribe(data => console.log(data[0], data[1]));
  }
}
