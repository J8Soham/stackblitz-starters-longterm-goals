import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  output,
} from '@angular/core';
import { LongTermGoalsHeaderAnimations } from './long-term-goals-header.animations';

@Component({
  selector: 'app-long-term-goals-header',
  templateUrl: './long-term-goals-header.component.html',
  styleUrls: ['./long-term-goals-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: LongTermGoalsHeaderAnimations,
  standalone: true,
  imports: [],
})
export class LongTermGoalsHeaderComponent implements OnInit {
  // --------------- INPUTS AND OUTPUTS ------------------

  editClicked = output<boolean>();

  // --------------- LOCAL UI STATE ----------------------

  // --------------- COMPUTED DATA -----------------------

  // --------------- EVENT HANDLING ----------------------

  editGoals() {
    this.editClicked.emit(true);
  }

  // --------------- OTHER -------------------------------

  constructor() {}

  // --------------- LOAD AND CLEANUP --------------------

  ngOnInit(): void {}
}
