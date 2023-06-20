import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InputService {
  URL: string;

  constructor(private http: HttpClient) {
    this.URL = 'http://something:6969/xy';
  }
}
