'use client'

import { useState } from 'react'
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { SendIcon } from 'lucide-react'

export default function ChatInterface({ username }: { username: string }) {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([
    { sender: 'bot', text: 'Hi I am ICCTNIAN SMART BOT' },
  ])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: 'user', text: input }])
      setInput('')
      // Here you would typically send the message to your chatbot API
      // and then add the response to the messages
      setTimeout(() => {
        setMessages(prev => [...prev, { sender: 'bot', text: 'This is a placeholder response.' }])
      }, 1000)
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto h-[600px] flex flex-col">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Chat with ICCTNIAN SMART BOT</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow overflow-auto">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`rounded-lg p-2 max-w-[70%] ${message.sender === 'user' ? 'bg-teal-500 text-white' : 'bg-gray-200'}`}>
                {message.text}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <div className="p-4 border-t">
        <div className="flex space-x-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <Button onClick={handleSend} className="bg-teal-500 hover:bg-teal-600">
            <SendIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  )
}