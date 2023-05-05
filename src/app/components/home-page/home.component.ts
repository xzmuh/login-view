import { Component, OnInit } from '@angular/core';
import { window } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(){
    
  }

  ngOnInit(): void {
    this.getWidthWindow();
  }

  openMenu(){
    const navegacao = (document.querySelector(".menu-lateral") as HTMLLIElement )
    navegacao.classList.toggle("openMenu")
  }

  getWidthWindow(){
    const widthWindow = screen.width;
    const navegacao = (document.querySelector(".menu-lateral") as HTMLLIElement )
    if (widthWindow > 500){
      navegacao.classList.add("openMenu")
    }
  }

}
