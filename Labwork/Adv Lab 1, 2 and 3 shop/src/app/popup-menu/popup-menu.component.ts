import { Component, OnInit, HostBinding, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-popup-menu',
  templateUrl: './popup-menu.component.html',
  styleUrls: ['./popup-menu.component.css']
})
export class PopupMenuComponent implements OnInit {

  constructor() { }

  @HostBinding('style.top') y = '0px';
  @HostBinding('style.left') x = '0px';
  @HostBinding('style.visibility') visibility = 'hidden';
  @HostBinding('style.width') width = '200px';

  @HostListener('document.click')
  public onDocumentClick() {
    if (this.visibility === 'visible') {
      this.close();
    }
  }

  ngOnInit() {
  }

  open(e: MouseEvent) {
    this.x = `${e.pageX}px`;
    this.y = `${e.pageY}px`;

    if (this.visibility !== 'visible') {
      this.visibility = 'visible';
    } else {
      this.visibility = 'hidden';
    }

    e.stopPropagation();
  }
  close() {
    this.visibility = 'hidden';
  }
}
