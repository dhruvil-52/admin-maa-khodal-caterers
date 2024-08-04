import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  removeDataFromArray(data: Array<any>, index: number) {
    data = JSON.parse(JSON.stringify(data));
    data.splice(index, 1)
    return data;
  }

  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === 'Tab') {
      event.preventDefault();
    }
  }
}
