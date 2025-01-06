import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LongTermGoalsAnimations } from './long-term-goals.animations';
import { LongTermGoalsHeaderComponent } from './long-term-goals-header/long-term-goals-header.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LongTermGoalsItemComponent } from './long-term-goals-item/long-term-goals-item.component';
import { LongTermGoal } from 'src/app/core/store/long-term-goal/long-term-goal.model';
import { Timestamp } from '@angular/fire/firestore';

@Component({
  selector: 'app-long-term-goals',
  templateUrl: './long-term-goals.component.html',
  styleUrls: ['./long-term-goals.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: LongTermGoalsAnimations,
  standalone: true,
  imports: [LongTermGoalsHeaderComponent, LongTermGoalsItemComponent],
})
export class LongTermGoalsComponent implements OnInit {
  // --------------- INPUTS AND OUTPUTS ------------------

  // --------------- LOCAL UI STATE ----------------------

  /** input to long term goals item */
  exampleLongTermGoals: LongTermGoal = {
    __id: '1',
    __userId: 'test-user',
    oneYear: 'Secure SWE or UX Engineering internship',
    fiveYear:
      'Work as a SWE with a team I love with some UX Design oriented work',
    _createdAt: Timestamp.now(),
    _updatedAt: Timestamp.now(),
    _deleted: false,
  };

  // --------------- COMPUTED DATA -----------------------

  // --------------- EVENT HANDLING ----------------------

  openModal(editClicked: boolean) {
    this.snackBar.open('Edit icon clicked', '', {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
    });
  }

  // --------------- OTHER -------------------------------

  constructor(private snackBar: MatSnackBar) {}

  // --------------- LOAD AND CLEANUP --------------------

  ngOnInit(): void {}
}
