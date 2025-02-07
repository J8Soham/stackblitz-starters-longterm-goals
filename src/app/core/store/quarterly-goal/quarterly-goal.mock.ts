import { Timestamp } from '@angular/fire/firestore';
import { QuarterlyGoal } from './quarterly-goal.model';
import { withEntitiesForMockDB } from '../app.store';
import { signalStore } from '@ngrx/signals';
import { USER_DB } from '../user/user.mock';

export const QuarterlyGoalMockDB = signalStore(
  { providedIn: 'root' },
  withEntitiesForMockDB<QuarterlyGoal>(),
);

export const QUARTERLYGOAL_DB = [
  {
    __id: 'qg1',
    __userId: USER_DB[0].__id,
    __hashtagId: 'ht1',
    text: 'Finish cover letters',
    completed: false,
    order: 1,
    _createdAt: Timestamp.now(),
    _updatedAt: Timestamp.now(),
    _deleted: false,
  },
  {
    __id: 'qg2',
    __userId: USER_DB[0].__id,
    __hashtagId: 'ht2',
    text: 'Apply to internships',
    completed: false,
    order: 2,
    _createdAt: Timestamp.now(),
    _updatedAt: Timestamp.now(),
    _deleted: false,
  },
  {
    __id: 'qg3',
    __userId: USER_DB[0].__id,
    __hashtagId: 'ht3',
    text: 'Technical interview prep!',
    completed: false,
    order: 3,
    _createdAt: Timestamp.now(),
    _updatedAt: Timestamp.now(),
    _deleted: false,
  },
];
