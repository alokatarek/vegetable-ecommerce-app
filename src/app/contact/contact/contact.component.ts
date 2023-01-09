import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  list= [
    {title: 'fresh meat'},
    {title: 'vegetables'},
    {title: 'fruit & nut gifts'},
    {title: 'fresh & berriers'},
    {title: 'ocean foods'},
    {title: 'butter & eggs'},
    {title: 'fast food'},
    {title: 'fresh onion'},
    {title: 'papayaya & crisps'},
    {title: 'oatmeal'},
    {title: 'fresh bananas'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
