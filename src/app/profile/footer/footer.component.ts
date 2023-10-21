import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  currentDate = new Date();

  facebook = 'https://www.facebook.com/mamadoudiouma.bah.731?mibextid=2JQ9oc';
  linkedin = 'https://www.linkedin.com/in/mamadou-diouma-bah-8669b31b0';
  twitter = 'https://twitter.com/bmdtechnology';
  instagram = 'https://www.instagram.com/bmdbah';
  github = 'https://github.com/Bmd-Technologies';

  constructor() { }

  ngOnInit(): void {
  }

}
