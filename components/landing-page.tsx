import Image from 'next/image'
import Link from 'next/link'
import { Button } from "../components/ui/button"

export default function LandingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-100">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <div className="mb-6">
          <Image
            src="/placeholder.svg?height=80&width=80"
            alt="IM4ICCT Logo"
            width={80}
            height={80}
            className="mx-auto"
          />
        </div>
        <h1 className="text-3xl font-bold mb-2">Smart Ai Chats Unleashed</h1>
        <p className="text-gray-600 mb-8">
          Your Smart Companion, Always Ready to Assist Seamlessly
        </p>
        <div className="space-y-4">
          <Button asChild className="w-full bg-teal-500 hover:bg-teal-600">
            <Link href="/signin">Sign In</Link>
          </Button>
          <Button asChild className="w-full bg-teal-500 hover:bg-teal-600">
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}