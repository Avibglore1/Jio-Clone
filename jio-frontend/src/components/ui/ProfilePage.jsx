import { ChevronRight, Plus, User } from 'lucide-react'
import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-md mx-auto p-4 space-y-6">
        {/* Profile Header */}
        <div className="flex flex-col items-center space-y-4 mb-8">
          <div className="relative">
            <div className="w-24 h-24 bg-pink-600 rounded-full flex items-center justify-center">
              <User className="w-12 h-12 text-white" />
            </div>
            <div className="absolute bottom-0 right-0 bg-pink-600 rounded-full p-1">
              <User className="w-4 h-4 text-white" />
            </div>
          </div>
          <h1 className="text-2xl font-bold">LmjoVJW9</h1>
          <p className="text-gray-400">+918****6193</p>
        </div>

        {/* Profile Options */}
        <div className="flex gap-4 mb-8">
          <div className="flex-1 flex flex-col items-center p-4 rounded-lg bg-zinc-900">
            <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center mb-2">
              <span className="text-xl">👶</span>
            </div>
            <span className="text-sm text-center">For Kids /<br />बच्चे</span>
          </div>
          <Button
            variant="outline"
            className="flex-1 h-auto flex flex-col items-center justify-center gap-2 py-4 bg-zinc-900 border-zinc-800 hover:bg-zinc-800"
          >
            <Plus className="w-6 h-6" />
            <span className="text-sm">Add Profile</span>
          </Button>
        </div>

        {/* Menu Items */}
        <nav className="space-y-4">
          <Link
            href="/settings"
            className="flex items-center justify-between p-4 rounded-lg hover:bg-zinc-900"
          >
            <span>Settings</span>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </Link>
          <Link
            href="/subscribe"
            className="flex items-center justify-between p-4 rounded-lg hover:bg-zinc-900"
          >
            <span>Subscribe Now</span>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </Link>
          <Link
            href="/help"
            className="flex items-center justify-between p-4 rounded-lg hover:bg-zinc-900"
          >
            <span>Help & Legal</span>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </Link>
          <Link
            href="/logout"
            className="flex items-center justify-between p-4 rounded-lg hover:bg-zinc-900"
          >
            <span>Log Out</span>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </Link>
        </nav>

        {/* Footer */}
        <footer className="pt-8 pb-4">
          <Link href="/privacy" className="text-sm text-gray-400 hover:underline">
            Privacy and T&C
          </Link>
          <p className="mt-2 text-xs text-gray-600">
            24.11.04.4-3f17e57 - b577ea01-6acf-4530-ab8b-d79762902946
          </p>
        </footer>
      </div>
    </div>
  )
}

