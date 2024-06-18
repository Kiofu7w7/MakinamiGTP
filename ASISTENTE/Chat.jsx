/**
 * v0 by Vercel.
 * @see https://v0.dev/t/HRdmgyFcgOg
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
    return (
        <div className="grid grid-cols-[260px_1fr] min-h-screen w-full">
            <div className="bg-[#9C0000] hidden md:flex flex-col gap-6 text-white">
                <div className="sticky top-0 p-4">
                    <div className="flex items-center gap-2">
                        <BotIcon className="h-6 w-6" />
                        <div className="text-lg font-semibold">Dashboard</div>
                    </div>
                </div>
                <nav className="flex flex-col gap-2 px-4">
                    <Link
                        href="#"
                        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-[#7F0000] hover:text-white"
                        prefetch={false}
                    >
                        <LayoutGridIcon className="h-5 w-5" />
                        <span>Overview</span>
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium bg-[#7F0000] text-white"
                        prefetch={false}
                    >
                        <MessageCircleIcon className="h-5 w-5" />
                        <span>Chat</span>
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-[#7F0000] hover:text-white"
                        prefetch={false}
                    >
                        <AlarmClockIcon className="h-5 w-5" />
                        <span>Alarms</span>
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-[#7F0000] hover:text-white"
                        prefetch={false}
                    >
                        <CloudIcon className="h-5 w-5" />
                        <span>Weather</span>
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-[#7F0000] hover:text-white"
                        prefetch={false}
                    >
                        <BellIcon className="h-5 w-5" />
                        <span>Notifications</span>
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-[#7F0000] hover:text-white"
                        prefetch={false}
                    >
                        <CalendarIcon className="h-5 w-5" />
                        <span>Calendar</span>
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-[#7F0000] hover:text-white"
                        prefetch={false}
                    >
                        <SettingsIcon className="h-5 w-5" />
                        <span>Settings</span>
                    </Link>
                </nav>
            </div>
            <div className="flex flex-col">
                <header className="sticky top-0 z-10 flex items-center justify-between bg-white px-4 py-3 shadow-sm dark:bg-[#9C0000]">
                    <div className="flex items-center gap-4">
                        <div className="text-lg font-semibold">Chat</div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="icon" className="rounded-full">
                            <SearchIcon className="h-6 w-6" />
                            <span className="sr-only">Search</span>
                        </Button>
                        <Button variant="ghost" size="icon" className="rounded-full">
                            <BellIcon className="h-6 w-6" />
                            <span className="sr-only">Notifications</span>
                        </Button>
                        <Avatar className="h-8 w-8 border">
                            <AvatarImage src="/placeholder-user.jpg" />
                            <AvatarFallback>AC</AvatarFallback>
                        </Avatar>
                    </div>
                </header>
                <main className="flex-1 overflow-auto">
                    <div className="grid grid-cols-1 gap-6 p-6 h-[calc(100vh_-_theme(spacing.24))] overflow-auto">
                        <Card className="h-full flex flex-col">
                            <CardContent className="flex-1 overflow-auto">
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-start gap-4">
                                        <Avatar className="h-8 w-8 border">
                                            <AvatarImage src="/placeholder-user.jpg" />
                                            <AvatarFallback>AC</AvatarFallback>
                                        </Avatar>
                                        <div className="grid gap-1 text-sm">
                                            <div className="font-medium text-[#FF0000]">You</div>
                                            <div className="prose prose-stone">
                                                <p>
                                                    Hello, how can I assist you today? I'm an AI assistant here to help with any questions or
                                                    tasks you may have.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Avatar className="h-8 w-8 border">
                                            <AvatarImage src="/placeholder-user.jpg" />
                                            <AvatarFallback>OA</AvatarFallback>
                                        </Avatar>
                                        <div className="grid gap-1 text-sm">
                                            <div className="font-medium">ChatGPT</div>
                                            <div className="prose prose-stone">
                                                <p>Great, let's get started! What would you like assistance with today?</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="relative">
                                <div className="relative">
                                    <Textarea
                                        placeholder="Type your message..."
                                        name="message"
                                        id="message"
                                        rows={1}
                                        className="min-h-[48px] w-full rounded-2xl resize-none border-0 bg-gray-100 p-4 pr-16 text-sm focus:ring-0 dark:bg-[#7F0000]"
                                    />
                                    <Button type="submit" size="icon" className="absolute top-3 right-3 h-8 w-8">
                                        <SendIcon className="h-4 w-4" />
                                        <span className="sr-only">Send</span>
                                    </Button>
                                </div>
                                <div className="flex items-center justify-between mt-2">
                                    <Button variant="ghost" size="sm" className="rounded-md">
                                        <PlusIcon className="h-4 w-4 mr-2" />
                                        New Conversation
                                    </Button>
                                    <Button variant="ghost" size="sm" className="rounded-md">
                                        <RepeatIcon className="h-4 w-4 mr-2" />
                                        Continue Conversation
                                    </Button>
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                </main>
            </div>
        </div>
    )
}

function AlarmClockIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="13" r="8" />
            <path d="M12 9v4l2 2" />
            <path d="M5 3 2 6" />
            <path d="m22 6-3-3" />
            <path d="M6.38 18.7 4 21" />
            <path d="M17.64 18.67 20 21" />
        </svg>
    )
}


function BellIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
        </svg>
    )
}


function BotIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 8V4H8" />
            <rect width="16" height="12" x="4" y="8" rx="2" />
            <path d="M2 14h2" />
            <path d="M20 14h2" />
            <path d="M15 13v2" />
            <path d="M9 13v2" />
        </svg>
    )
}


function CalendarIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M8 2v4" />
            <path d="M16 2v4" />
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <path d="M3 10h18" />
        </svg>
    )
}


function CloudIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
    )
}


function LayoutGridIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="7" height="7" x="3" y="3" rx="1" />
            <rect width="7" height="7" x="14" y="3" rx="1" />
            <rect width="7" height="7" x="14" y="14" rx="1" />
            <rect width="7" height="7" x="3" y="14" rx="1" />
        </svg>
    )
}


function MessageCircleIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
        </svg>
    )
}


function PlusIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
        </svg>
    )
}


function RepeatIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m17 2 4 4-4 4" />
            <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
            <path d="m7 22-4-4 4-4" />
            <path d="M21 13v1a4 4 0 0 1-4 4H3" />
        </svg>
    )
}


function SearchIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    )
}


function SendIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m22 2-7 20-4-9-9-4Z" />
            <path d="M22 2 11 13" />
        </svg>
    )
}


function SettingsIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    )
}