import { Injectable } from '@angular/core';
import { CapsuleService } from './capsule';

@Injectable({
  providedIn: 'root'
})
export class InsightEngine {

  constructor(private capsuleService: CapsuleService) {}

  // ===============================
  // STATS FOR AI + INSIGHTS PAGE
  // ===============================
  getStats() {

    const capsules = this.capsuleService.getAll();

    let happy = 0;
    let sad = 0;
    let motivated = 0;

    capsules.forEach(c => {

      if (!c.mood) return;

      const mood = c.mood.toLowerCase();

      if (mood.includes('happy')) happy++;
      else if (mood.includes('sad')) sad++;
      else motivated++;
    });

    return {
      total: capsules.length,
      happy,
      sad,
      motivated
    };
  }

  // ===============================
  // AI ADVICE FOR INSIGHTS PAGE
  // ===============================
  generateAdvice(): string {

    const stats = this.getStats();

    if (stats.sad > stats.happy) {
      return "You experienced more difficult moments. Your future self suggests rest and self-kindness.";
    }

    if (stats.happy > stats.sad) {
      return "Joy dominates your timeline. Keep nurturing what works.";
    }

    return "Your emotional journey is balanced. Stay consistent.";
  }
  // ===============================
// MOOD SUMMARY
// ===============================
getMoodSummary() {

  const stats = this.getStats();

  return {
    total: stats.total,
    happy: stats.happy,
    sad: stats.sad,
    motivated: stats.motivated
  };
}
}