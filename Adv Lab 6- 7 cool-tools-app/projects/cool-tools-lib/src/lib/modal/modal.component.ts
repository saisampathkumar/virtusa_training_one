import { Component, OnInit, HostBinding, Input, HostListener } from '@angular/core';

@Component({
  selector: 'cool-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor() { }

  @HostBinding('style.display')
  display = 'none';

  @Input() width = '60%';

  @HostListener('document:keydown.esc')
  onEsc() {
    this.close();
  }

  @HostListener('click')
  onHostClick() {
    this.close();
  }

  ngOnInit() {
  }

  open() {
    this.display = 'block';
  }
  close() {
    this.display = 'none';
  }

  stopClikBubble(event: MouseEvent) {
    event.stopPropagation()
;  }
}
