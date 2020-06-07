import { AppSandbox } from './../../app.sandbox';
import { Component } from '@angular/core';
import { SuperHero } from 'src/app/core/models/internal/superhero.internal';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'heroes-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {

  heroes$: Observable<Array<SuperHero>> = this.sandbox.superHeroes$;

  constructor(private sandbox: AppSandbox, private router: Router) {}

  addNewHero(): void {
    this.sandbox.loadSuperHeroes().pipe(take(1)).subscribe();
  }

  goToHero(name: string): void {
    this.router.navigate(['./', name]);
  }

  printError(): void {
    console.log('error');
  }
}
