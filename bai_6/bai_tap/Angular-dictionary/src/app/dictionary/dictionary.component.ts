import { Component, OnInit } from '@angular/core';
import {DictionaryServiceService} from "../service/dictionary-service.service";

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {
  searchTerm: string = '';
  meanings: string[] = [];

  constructor(private dictionaryService: DictionaryServiceService) {}

  search() {
    if (this.searchTerm.trim() !== '') {
      this.meanings = this.dictionaryService.translate(this.searchTerm);
    } else {
      this.meanings = [];
    }
  }

  ngOnInit(): void {
  }

}
