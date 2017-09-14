import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Item } from './item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  @Output() itemSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.itemSelected.emit();
  }
}
