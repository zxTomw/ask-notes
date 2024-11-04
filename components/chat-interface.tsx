"use client";

import { useState, useRef, useEffect } from "react";
import { useChat } from "ai/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, Send, User } from "lucide-react";

// Sample messages
const SAMPLE_MESSAGES = [
  {
    id: "1",
    role: "system",
    content: "Welcome to the AI chat interface. How can I assist you today?",
  },
  {
    id: "2",
    role: "user",
    content: "Hi there! Can you tell me about the weather today?",
  },
  {
    id: "3",
    role: "assistant",
    content:
      "I'm sorry, I don't have real-time information. Is there anything else I can help you with?",
  },
  {
    id: "4",
    role: "user",
    content: "Oh, I see. Can you explain what an AI language model is?",
  },
  {
    id: "5",
    role: "assistant",
    content:
      "An AI language model is a type of artificial intelligence that can generate human-like text based on the input it receives. It can be used for a variety of tasks, such as generating text, answering questions, and more.",
  },
];

export default function ChatInterface() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } =
    useChat({
      keepLastMessageOnError: true,
    });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (error) {
      setErrorMessage("An error occurred. Please try again.");
    } else {
      setErrorMessage(null);
    }
  }, [error]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Chat with AI</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[60vh] pr-4">
          {messages.map((message) => (
            <div key={message.id} className="flex items-start space-x-2 mb-4">
              <Avatar>
                <AvatarFallback>
                  {message.role === "user" ? <User /> : <Bot />}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="font-semibold">
                  {message.role === "user"
                    ? "You"
                    : message.role === "assistant"
                    ? "AI"
                    : "System"}
                </span>
                <span className="text-sm text-gray-500">{message.content}</span>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form onSubmit={handleSubmit} className="flex w-full space-x-2">
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Type your message here..."
            disabled={isLoading}
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Thinking..." : <Send className="h-4 w-4" />}
          </Button>
        </form>
      </CardFooter>
      {errorMessage && (
        <div className="text-red-500 text-sm text-center mb-2">
          {errorMessage}
        </div>
      )}
    </Card>
  );
}
