// Import necessary modules
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css'],
})
export class NumbersComponent implements OnInit {
  numbersData: [string, string][] = []; // Define the data structure

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.httpClient.get('http://numbersapi.com/1..51').subscribe((data: any) => {
      // Transform the received data into the desired structure
      this.numbersData = Object.entries(data).map(([key, value]: [string, unknown]) => [key, String(value)]);
    });
  }
}
