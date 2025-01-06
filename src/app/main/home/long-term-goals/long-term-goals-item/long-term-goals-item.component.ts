import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  input,
  Signal,
} from '@angular/core';
import { LongTermGoalsItemAnimations } from './long-term-goals-item.animations';
import { LongTermGoal } from 'src/app/core/store/long-term-goal/long-term-goal.model';
import { MatCheckbox } from '@angular/material/checkbox';

@Component({
  selector: 'app-long-term-goals-item',
  templateUrl: './long-term-goals-item.component.html',
  styleUrls: ['./long-term-goals-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: LongTermGoalsItemAnimations,
  standalone: true,
  imports: [MatCheckbox],
})
export class LongTermGoalsItemComponent implements OnInit {
  // --------------- INPUTS AND OUTPUTS ------------------

  goals: Signal<LongTermGoal> = input.required<LongTermGoal>();

  // --------------- LOCAL UI STATE ----------------------

  // --------------- COMPUTED DATA -----------------------

  // --------------- EVENT HANDLING ----------------------

  // --------------- OTHER -------------------------------

  constructor() {}

  // --------------- LOAD AND CLEANUP --------------------

  ngOnInit(): void {}
}
