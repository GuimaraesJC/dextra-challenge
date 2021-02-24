import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ComicsService } from './../services/comics.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {  

  constructor(private comicsService: ComicsService) { }

  comicsList!: Observable<any>;

  ngOnInit(): void {
    this.getAllComics();
  }

  getAllComics() {
    this.comicsList = this.comicsService.getAllComics();
  }
}
