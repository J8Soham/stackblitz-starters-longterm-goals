import { QuarterlyGoal } from 'src/app/core/store/quarterly-goal/quarterly-goal.model';
import { Hashtag } from '../../core/store/hashtag/hashtag.model';
import { WeeklyGoal } from '../../core/store/weekly-goal/weekly-goal.model';

export interface WeeklyGoalData extends WeeklyGoal {
  hashtag: Hashtag;
}

export interface QuarterlyGoalData extends QuarterlyGoal {
  hashtag: Hashtag;
  weeklyGoalsTotal: number;
  weeklyGoalsComplete: number;
}

export interface QuarterlyGoalInForm {
  // Form fields
  text: string;
  hashtagName: string;
  weeklyGoalsTotal: number;
  // Just available for saving to DB later
  _deleted: boolean;
  __quarterlyGoalId?: string;
  __hashtagId?: string;
  originalOrder?: number;
  originalText?: string;
  originalHashtagName?: string;
  _new: boolean;
}

export interface WeeklyGoalInForm {
  // Form fields
  text: string;
  __quarterlyGoalId: string; // changed from hashtagId
  // Just available for saving to DB later
  _deleted: boolean;
  originalText?: string;
  __weeklyGoalId?: string;
  originalOrder?: number;
  originalQuarterlyGoalId?: string;
  _new: boolean;
}

export interface LongGoalInForm {
  oneYear: string;
  fiveYear: string;
  originalOneYear?: string;
  originalFiveYear?: string;
  __longTermGoalId?: string;
}
