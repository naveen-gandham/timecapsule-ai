import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FutureAiService } from '../../../services/future-ai';
import { MemoryService, ChatMessage } from '../../../services/memory';
import { TypingDirective } from '../../../shared/typing.directive';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule, TypingDirective],
  templateUrl: './chat.html',
  styleUrls: ['./chat.css']
})
export class Chat {

  message = '';
  conversation: ChatMessage[] = [];

  constructor(
    private ai: FutureAiService,
    private memory: MemoryService
  ) {
    this.conversation = this.memory.getHistory();
  }

  send() {

    if (!this.message.trim()) return;

    const userText = this.message;

    // save user msg
    this.memory.add('user', userText);

    // AI reply
    const reply = this.ai.generateReply(userText);

    // save AI msg
    this.memory.add('ai', reply);

    // refresh UI
    this.conversation = this.memory.getHistory();

    this.message = '';
  }
}