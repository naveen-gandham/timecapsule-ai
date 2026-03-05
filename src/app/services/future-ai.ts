import { Injectable } from '@angular/core';
import { InsightEngine } from './insight-engine';

interface ChatMessage {
  role: 'user' | 'ai';
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class FutureAiService {

  private history: ChatMessage[] = [];

  constructor(private engine: InsightEngine) {
    this.loadMemory();
  }

  // =============================
  // PUBLIC METHOD (USED BY CHAT)
  // =============================
  generateReply(text: string): string {

    const msg = text.toLowerCase();

    // save user message
    this.history.push({ role: 'user', text });

    let reply = '';

    // ===== FUTURE QUESTION (HIGH PRIORITY) =====
    if (msg.includes('future')) {

      const stats = this.engine.getStats();

      reply =
        `You created ${stats.total} capsules.\n` +
        `Your future self sees effort, not perfection.\n` +
        `Progress is already happening.`;

    }

    // ===== MEMORY CHECK =====
    else if (msg.includes('sad')) {

      const sadCount = this.history.filter(
        h => h.role === 'user' && h.text.toLowerCase().includes('sad')
      ).length;

      if (sadCount >= 2) {
        reply =
          "I notice you've felt sad multiple times. " +
          "Your future self wants you to slow down and be gentle with yourself.";
      } else {
        reply =
          "This feeling is temporary. You already survived days like this.";
      }
    }

    // ===== MOTIVATION =====
    else if (msg.includes('motivate') || msg.includes('focus')) {
      reply =
        "Small consistent actions shape extraordinary futures.";
    }

    // ===== DEFAULT =====
    else {
      reply =
        "Your future self is listening. Tell me more.";
    }

    // save AI reply
    this.history.push({ role: 'ai', text: reply });

    this.saveMemory();

    return reply;
  }

  // =============================
  // MEMORY STORAGE
  // =============================

  private saveMemory() {
    if (typeof window !== 'undefined') {
      localStorage.setItem(
        'ai_memory',
        JSON.stringify(this.history)
      );
    }
  }

  private loadMemory() {
    if (typeof window !== 'undefined') {
      const data = localStorage.getItem('ai_memory');
      if (data) {
        this.history = JSON.parse(data);
      }
    }
  }

  // expose history if needed
  getHistory() {
    return this.history;
  }
}