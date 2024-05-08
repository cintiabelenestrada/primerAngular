import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,UserComponent],
  templateUrl: './app.component.html',
  // otra forma de hacerlo seria poniendo los elementos que quiero mostrar,
  //  pero ahora moveria todo este h1 con el user al hmlt de rootapp
  // template: `<h1>Hola ciudad de {{city.toUpperCase()}}</h1>
  //   <app-user></app-user>`,
  styles: '',
})

export class AppComponent {
  city = 'Jujuy!';
}
