/**
 * v0 by Vercel.
 * @see https://v0.dev/t/F9AfSg5r3V3
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
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
                        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-[#7F0000] hover:text-white"
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
                        <Button variant="ghost" size="icon" className="rounded-full">
                            <MenuIcon className="h-6 w-6" />
                            <span className="sr-only">Toggle sidebar</span>
                        </Button>
                        <div className="text-lg font-semibold">Dashboard</div>
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
                    <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <Card>
                            <CardHeader className="flex items-center justify-between">
                                <CardTitle>Chat</CardTitle>
                                <Button variant="ghost" size="icon" className="rounded-full">
                                    <MessageCircleIcon className="h-5 w-5" />
                                    <span className="sr-only">Open chat</span>
                                </Button>
                            </CardHeader>
                            <CardContent className="flex flex-col gap-4">
                                <div className="flex items-start gap-4">
                                    <Avatar className="h-8 w-8 border">
                                        <AvatarImage src="/placeholder-user.jpg" />
                                        <AvatarFallback>AC</AvatarFallback>
                                    </Avatar>
                                    <div className="grid gap-1 text-sm">
                                        <div className="font-medium text-[#FF0000]">You</div>
                                        <div className="prose prose-stone">
                                            <p>
                                                Hello, how can I assist you today? I'm an AI assistant here to help with any questions or tasks
                                                you may have.
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
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardHeader className="flex items-center justify-between">
                                <CardTitle>Alarms</CardTitle>
                                <Button variant="ghost" size="icon" className="rounded-full">
                                    <AlarmClockIcon className="h-5 w-5" />
                                    <span className="sr-only">Open alarms</span>
                                </Button>
                            </CardHeader>
                            <CardContent className="flex flex-col gap-4">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#9C0000] text-white">
                                        <AlarmClockIcon className="h-5 w-5" />
                                    </div>
                                    <div className="grid gap-1 text-sm">
                                        <div className="font-medium">Alarm Triggered</div>
                                        <div className="text-gray-500 dark:text-gray-400">Your morning alarm has been triggered.</div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400">10 minutes ago</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#9C0000] text-white">
                                        <AlarmClockIcon className="h-5 w-5" />
                                    </div>
                                    <div className="grid gap-1 text-sm">
                                        <div className="font-medium">Alarm Reminder</div>
                                        <div className="text-gray-500 dark:text-gray-400">
                                            Your afternoon meeting alarm is set for 2 PM.
                                        </div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400">1 hour ago</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex items-center justify-between">
                                <CardTitle>Date & Calendar</CardTitle>
                                <Button variant="ghost" size="icon" className="rounded-full">
                                    <CalendarIcon className="h-5 w-5" />
                                    <span className="sr-only">Open calendar</span>
                                </Button>
                            </CardHeader>
                            <CardContent className="flex flex-col gap-4">
                                <div className="flex items-center justify-between">
                                    <div className="text-4xl font-bold">
                                        {new Date().toLocaleDateString("en-US", {
                                            day: "numeric",
                                            month: "short",
                                            year: "numeric",
                                        })}
                                    </div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">
                                        {new Date().toLocaleDateString("en-US", {
                                            weekday: "long",
                                        })}
                                    </div>
                                </div>
                                <div className="grid grid-cols-7 gap-2">
                                    {[...Array(7)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="flex flex-col items-center justify-center gap-1 rounded-md bg-gray-100 py-2 text-sm font-medium text-gray-500 dark:bg-[#7F0000] dark:text-white"
                                        >
                                            <div>
                                                {new Date(new Date().getTime() + i * 24 * 60 * 60 * 1000).toLocaleDateString("en-US", {
                                                    weekday: "short",
                                                })}
                                            </div>
                                            <div>
                                                {new Date(new Date().getTime() + i * 24 * 60 * 60 * 1000).toLocaleDateString("en-US", {
                                                    day: "numeric",
                                                })}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex items-center justify-between">
                                <CardTitle>Weather</CardTitle>
                                <Button variant="ghost" size="icon" className="rounded-full">
                                    <CloudIcon className="h-5 w-5" />
                                    <span className="sr-only">Open weather</span>
                                </Button>
                            </CardHeader>
                            <CardContent className="flex flex-col gap-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="text-6xl font-bold">72°</div>
                                        <div className="flex flex-col">
                                            <div className="text-lg font-medium">Sunny</div>
                                            <div className="text-sm text-gray-500 dark:text-gray-400">San Francisco, CA</div>
                                        </div>
                                    </div>
                                    <img src="/placeholder.svg" width={80} height={80} alt="Weather icon" />
                                </div>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="flex flex-col items-center gap-2 rounded-md bg-gray-100 p-4 text-sm text-gray-500 dark:bg-[#7F0000] dark:text-white">
                                        <SunIcon className="h-6 w-6" />
                                        <div>Today</div>
                                        <div>72°</div>
                                    </div>
                                    <div className="flex flex-col items-center gap-2 rounded-md bg-gray-100 p-4 text-sm text-gray-500 dark:bg-[#7F0000] dark:text-white">
                                        <CloudIcon className="h-6 w-6" />
                                        <div>Tomorrow</div>
                                        <div>68°</div>
                                    </div>
                                    <div className="flex flex-col items-center gap-2 rounded-md bg-gray-100 p-4 text-sm text-gray-500 dark:bg-[#7F0000] dark:text-white">
                                        <CloudRainIcon className="h-6 w-6" />
                                        <div>Next Day</div>
                                        <div>64°</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="col-span-3">
                            <CardHeader className="flex items-center justify-between">
                                <CardTitle>Computer Performance</CardTitle>
                                <Button variant="ghost" size="icon" className="rounded-full">
                                    <MonitorIcon className="h-5 w-5" />
                                    <span className="sr-only">Open computer performance</span>
                                </Button>
                            </CardHeader>
                            <CardContent className="flex flex-col gap-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex flex-col items-center gap-2 rounded-md bg-gray-100 p-4 text-sm text-gray-500 dark:bg-[#7F0000] dark:text-white">
                                        <CpuIcon className="h-6 w-6" />
                                        <div>CPU Usage</div>
                                        <div>72%</div>
                                    </div>
                                    <div className="flex flex-col items-center gap-2 rounded-md bg-gray-100 p-4 text-sm text-gray-500 dark:bg-[#7F0000] dark:text-white">
                                        <MemoryStickIcon className="h-6 w-6" />
                                        <div>RAM Usage</div>
                                        <div>8GB/16GB</div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex flex-col items-center gap-2 rounded-md bg-gray-100 p-4 text-sm text-gray-500 dark:bg-[#7F0000] dark:text-white">
                                        <DiscIcon className="h-6 w-6" />
                                        <div>Disk Usage</div>
                                        <div />
                                    </div>
                                </div>
                            </CardContent>
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


function CloudRainIcon(props) {
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
            <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
            <path d="M16 14v6" />
            <path d="M8 14v6" />
            <path d="M12 16v6" />
        </svg>
    )
}


function CpuIcon(props) {
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
            <rect width="16" height="16" x="4" y="4" rx="2" />
            <rect width="6" height="6" x="9" y="9" rx="1" />
            <path d="M15 2v2" />
            <path d="M15 20v2" />
            <path d="M2 15h2" />
            <path d="M2 9h2" />
            <path d="M20 15h2" />
            <path d="M20 9h2" />
            <path d="M9 2v2" />
            <path d="M9 20v2" />
        </svg>
    )
}


function DiscIcon(props) {
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
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="2" />
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


function MemoryStickIcon(props) {
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
            <path d="M6 19v-3" />
            <path d="M10 19v-3" />
            <path d="M14 19v-3" />
            <path d="M18 19v-3" />
            <path d="M8 11V9" />
            <path d="M16 11V9" />
            <path d="M12 11V9" />
            <path d="M2 15h20" />
            <path d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z" />
        </svg>
    )
}


function MenuIcon(props) {
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
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
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


function MonitorIcon(props) {
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
            <rect width="20" height="14" x="2" y="3" rx="2" />
            <line x1="8" x2="16" y1="21" y2="21" />
            <line x1="12" x2="12" y1="17" y2="21" />
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


function SunIcon(props) {
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
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
        </svg>
    )
}