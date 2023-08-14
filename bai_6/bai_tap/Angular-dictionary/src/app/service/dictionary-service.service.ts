import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DictionaryServiceService {

  private dictionary: { [word: string]: string[] } = {
    'dog': ['con chó'],
    'cat': ['con mèo'],
    'hello': ['xin chào']
  };

  constructor() { }

  translate(transTerm: string): string[] {
    transTerm = transTerm.toLowerCase();
    return this.dictionary[transTerm] || [];
  }
}
