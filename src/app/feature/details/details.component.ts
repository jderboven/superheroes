import { SuperHero } from './../../core/models/internal/superhero.internal';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'hero-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {

  hero$: Observable<SuperHero>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.hero$ = this.route.data.pipe(pluck('hero'));
  }
}
