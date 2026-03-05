import { Injectable } from '@angular/core';
import { CapsuleService } from './capsule';

@Injectable({ providedIn: 'root' })
export class NotificationService {

  constructor(private capsule: CapsuleService) {
    this.startWatcher();
  }

  private startWatcher() {

    setInterval(() => {

      const capsules = this.capsule.getAll();
      const now = new Date();

      capsules.forEach(c => {

        if (!c.opened && new Date(c.unlockDate) <= now) {
          c.opened = true;

          alert('📦 Capsule unlocked!');
        }

      });

    }, 5000);

  }
}