import { Injectable } from '@angular/core';

export interface ChatMessage {
  role: 'user' | 'ai';
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class MemoryService {

  private history: ChatMessage[] = [];

  // ✅ add message (THIS WAS MISSING)
  add(role: 'user' | 'ai', text: string) {
    this.history.push({ role, text });
  }

  // ✅ get conversation
  getHistory(): ChatMessage[] {
    return this.history;
  }

  // optional reset
  clear() {
    this.history = [];
  }
}