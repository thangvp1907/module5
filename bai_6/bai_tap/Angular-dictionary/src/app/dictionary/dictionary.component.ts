import { Component, OnInit } from '@angular/core';
import {DictionaryServiceService} from "../service/dictionary-service.service";

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {
  transTerm: string = '';
  meanings: string[] = [];

  constructor(private dictionaryService: DictionaryServiceService) {}

  search() {
    if (this.transTerm.trim() !== '') {
      this.meanings = this.dictionaryService.translate(this.transTerm);
    } else {
      this.meanings = [];
    }
  }

  ngOnInit(): void {
  }

}
