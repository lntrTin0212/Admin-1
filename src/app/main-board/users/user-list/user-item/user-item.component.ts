import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/main-board/user.model';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {
  @Input() userItem:any
  constructor() { }

  ngOnInit(): void {
  }

}
