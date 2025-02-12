import { Component, effect, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent  {

}


