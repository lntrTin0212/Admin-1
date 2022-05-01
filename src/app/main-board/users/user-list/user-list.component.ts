import { Component, OnInit,OnChanges, Input } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { User } from '../../user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[] = []
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.getUser()
  }
  handleDel(index:number) {
    this.userService.deleteUser(index)
  }
}
