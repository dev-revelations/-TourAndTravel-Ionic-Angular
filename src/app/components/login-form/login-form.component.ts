import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {

  @Input()
  formActive = false;
  @Output()
  formActiveChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() { }

  closeLoginForm() {
    this.formActive = false;
    this.formActiveChange.emit(this.formActive);
  }
}
