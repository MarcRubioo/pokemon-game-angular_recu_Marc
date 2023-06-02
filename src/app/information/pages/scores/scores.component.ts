import { Component, OnInit } from '@angular/core';
import {PlayerService} from "../../../game/services/player.service";

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {
  scores:any[]=[];

  constructor(private s: PlayerService) {
    this.scores = s.getScores()
    console.log(this.scores)
  }

  ngOnInit(): void {
  }

}
