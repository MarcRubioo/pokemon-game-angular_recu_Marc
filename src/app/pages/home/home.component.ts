import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  id: any;
  imatge: any;

  color :any;
  mostrarComponente: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  mostrarImatgeComprovarAtac() {

    // @ts-ignore
    const pokemonID = document.getElementById("PokemonTriat").value;

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
      .then(response => response.json())
      .then(data => {
        this.imatge = data.sprites.front_default;
        this.id = data.id;

        const atac = data.stats.find((stat: { stat: { name: string; }; }) => stat.stat.name === 'attack').base_stat;
        if (atac > 50) {
          console.log(`Promesa resolat, el Pokemon ${this.id} té més de 50 d'atac. Atac del pokemon: ${atac}`);
        } else {
          console.log(`Promesa rebutjada, el Pokemon ${this.id} té menys de 50 d'atac. Atac del pokemon: ${atac}`);
        }
      })
      .catch(error => {
        console.error(error);
      });

  }

}
