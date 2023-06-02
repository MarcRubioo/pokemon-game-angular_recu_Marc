import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  score_jugador: any[] = [];
  private _score: number = 0;
  private _lifes: number = 0;
  private _highScore: number = 0;

  get score(): number {
    return this._score;
  }

  get highScore(): number {
    return this._highScore;
  }

  get lifes(): number {
    return this._lifes;
  }

  constructor(
    private _router: Router
  ) {
    this._highScore = parseInt(localStorage.getItem('highscore') || '0');
    console.log(this._highScore);

     console.log(Number(localStorage.getItem('highScore')))
  }

  resetGame() {
    console.log(this.score_jugador)

    const puntsForm = localStorage.getItem("punts")
    // @ts-ignore
    const puntsNumero = parseInt(puntsForm);

    this._score = 0 + puntsNumero;
    this._lifes = 5;
  }

  increasePoints() {
    this._score += 10;
  }

  decreaseLifes() {
    this._lifes -= 1;
    if (this._lifes <= 0) {

      const user = localStorage.getItem("nom");
      const puntsJugadors = this._score;
      let usuariRepetit = false;

      for (let i = 0; i < this.score_jugador.length; i++) {
        if (this.score_jugador[i].user === user) {
          this.score_jugador[i].punts += puntsJugadors;
          usuariRepetit = true;
          break;
        }
      }

      if (!usuariRepetit) {
        this.score_jugador.push({
          user: user,
          punts: puntsJugadors
        });
      }

      if (this._score > this._highScore) this.newHighScore()
      this._router.navigate(['/game/gameover']);

    }
  }

  newHighScore() {
    this._highScore = this._score;
    localStorage.setItem('highscore', String(this._highScore));
  }

  getScores(): any[]{
    return this.score_jugador;
  }
}
