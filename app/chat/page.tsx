import ChatInterface from '../../components/chat-interface'

export default function Chat() {
  // In a real application, you would get the username from your authentication system
  const username = "John Doe"

  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-100 p-4">
      <ChatInterface username={username} />
    </div>
  )
}