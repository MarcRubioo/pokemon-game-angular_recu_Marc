import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-color-marc-rubioo',
  templateUrl: './color-marc-rubioo.component.html',
  styleUrls: ['./color-marc-rubioo.component.css']
})
export class ColorMarcRubiooComponent implements OnInit {

  @Input() nomPok : string | undefined;
  @Input() colorPok : string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
