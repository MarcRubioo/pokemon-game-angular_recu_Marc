import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-inciciar-sessio-recu-rubio',
  templateUrl: './inciciar-sessio-recu-rubio.component.html',
  styleUrls: ['./inciciar-sessio-recu-rubio.component.css']
})
export class InciciarSessioRecuRubioComponent implements OnInit {

  constructor(private router: Router,private http: HttpClient) { }

  ngOnInit(): void {
  }

  dadesJugador() {
    this.router.navigate(['/game']);

    // @ts-ignore
    let nom = document.getElementById("campJugador").value;
    localStorage.setItem("nom", nom)

    // @ts-ignore
    let punts = document.getElementById("campPunts").value;

    if(punts === ""){
      punts = 0;
    }

    localStorage.setItem("punts", punts)
  }

}
