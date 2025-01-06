import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  input,
  output,
  inject,
  WritableSignal,
  Signal,
  signal,
  computed,
  Inject,
  Injector,
} from '@angular/core';
import { LongTermGoalsModalAnimations } from './long-term-goals-modal.animations';
import { User } from 'src/app/core/store/user/user.model';
import { AuthStore } from 'src/app/core/store/auth/auth.store';
import {
  BatchWriteService,
  BATCH_WRITE_SERVICE,
} from 'src/app/core/store/batch-write.service';

@Component({
  selector: 'app-long-term-goals-modal',
  templateUrl: './long-term-goals-modal.component.html',
  styleUrls: ['./long-term-goals-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: LongTermGoalsModalAnimations,
  standalone: true,
  imports: [],
})
export class LongTermGoalsModalComponent implements OnInit {
  // --------------- INPUTS AND OUTPUTS ------------------

  // --------------- LOCAL UI STATE ----------------------

  // --------------- COMPUTED DATA -----------------------

  // --------------- EVENT HANDLING ----------------------

  // --------------- OTHER -------------------------------

  constructor() {}

  // --------------- LOAD AND CLEANUP --------------------

  ngOnInit(): void {}
}
