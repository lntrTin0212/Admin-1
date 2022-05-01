import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { combineLatestInit } from 'rxjs/internal/observable/combineLatest';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.scss']
})
export class EditListComponent implements OnInit {
  @Output('active') getActive = new EventEmitter(); 
  @Output('suspend') getSuspend = new EventEmitter(); 
  constructor(private userService: UserService) { }
  ngOnInit(): void {
  }
  // activeClicked() { 
  //   this.getActive.emit()
  // }
  // suspendClicked() {
  //   this.getSuspend.emit()
  // }
  activeClicked() { 
    this.userService.getActiveUser()
  }
  suspendClicked() {
    this.userService.getSuspendUser()
  }
  showModal() {
    document.querySelector('.modal')?.classList.add('active')
  }
  offModal() {
    document.querySelector('.modal')?.classList.remove('active')
  }
  onSubmit(form: NgForm) {
    this.userService.addUser(form.value)
    document.querySelector('.modal')?.classList.remove('active')
    form.reset()
  }
}
