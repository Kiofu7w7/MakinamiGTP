/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Um7qQmbDJnV
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export default function Component() {
    return (
        <div className="grid grid-cols-[260px_1fr] min-h-screen w-full">
            <div className="bg-[#9C0000] hidden md:flex flex-col gap-6 text-white">
                <div className="sticky top-0 p-4">
                    <div className="flex items-center gap-2">
                        <BellIcon className="h-6 w-6" />
                        <div className="text-lg font-semibold">Notifications</div>
                    </div>
                </div>
                <nav className="flex flex-col gap-2 px-4">
                    <Link
                        href="#"
                        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium bg-[#7F0000] text-white"
                        prefetch={false}
                    >
                        <MessageCircleIcon className="h-5 w-5" />
                        <span>WhatsApp</span>
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-[#7F0000] hover:text-white"
                        prefetch={false}
                    >
                        <MailOpenIcon className="h-5 w-5" />
                        <span>Emails</span>
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-[#7F0000] hover:text-white"
                        prefetch={false}
                    >
                        <SmartphoneIcon className="h-5 w-5" />
                        <span>Mobile Notifications</span>
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-[#7F0000] hover:text-white"
                        prefetch={false}
                    >
                        <FlagIcon className="h-5 w-5" />
                        <span>Mobile Status</span>
                    </Link>
                </nav>
            </div>
            <div className="flex flex-col">
                <header className="sticky top-0 z-10 flex items-center justify-between bg-white px-4 py-3 shadow-sm dark:bg-[#9C0000]">
                    <div className="flex items-center gap-4">
                        <div className="text-lg font-semibold">Notifications</div>
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
                            <CardHeader>
                                <CardTitle>WhatsApp Messages</CardTitle>
                                <CardDescription>Your latest WhatsApp messages.</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1 overflow-auto">
                                <div className="grid grid-cols-1 gap-4">
                                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <Avatar className="h-8 w-8 border">
                                                    <AvatarImage src="/placeholder-user.jpg" />
                                                    <AvatarFallback>JD</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <div className="font-semibold">John Doe</div>
                                                    <div className="text-gray-500 dark:text-gray-400 text-sm">
                                                        Hey, are you free for lunch today?
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-gray-500 dark:text-gray-400 text-sm">2:30 PM</div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <Avatar className="h-8 w-8 border">
                                                    <AvatarImage src="/placeholder-user.jpg" />
                                                    <AvatarFallback>JD</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <div className="font-semibold">Jane Doe</div>
                                                    <div className="text-gray-500 dark:text-gray-400 text-sm">
                                                        Did you see the new design I sent?
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-gray-500 dark:text-gray-400 text-sm">1:45 PM</div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <Avatar className="h-8 w-8 border">
                                                    <AvatarImage src="/placeholder-user.jpg" />
                                                    <AvatarFallback>JD</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <div className="font-semibold">Bob Smith</div>
                                                    <div className="text-gray-500 dark:text-gray-400 text-sm">
                                                        Can we discuss the project timeline?
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-gray-500 dark:text-gray-400 text-sm">11:30 AM</div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="h-full flex flex-col">
                            <CardHeader>
                                <CardTitle>Emails</CardTitle>
                                <CardDescription>Your latest emails.</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1 overflow-auto">
                                <div className="grid grid-cols-1 gap-4">
                                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <Avatar className="h-8 w-8 border">
                                                    <AvatarImage src="/placeholder-user.jpg" />
                                                    <AvatarFallback>JD</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <div className="font-semibold">John Doe</div>
                                                    <div className="text-gray-500 dark:text-gray-400 text-sm">Proposal for new project</div>
                                                </div>
                                            </div>
                                            <div className="text-gray-500 dark:text-gray-400 text-sm">3:00 PM</div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <Avatar className="h-8 w-8 border">
                                                    <AvatarImage src="/placeholder-user.jpg" />
                                                    <AvatarFallback>JD</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <div className="font-semibold">Jane Doe</div>
                                                    <div className="text-gray-500 dark:text-gray-400 text-sm">Feedback on design</div>
                                                </div>
                                            </div>
                                            <div className="text-gray-500 dark:text-gray-400 text-sm">2:15 PM</div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <Avatar className="h-8 w-8 border">
                                                    <AvatarImage src="/placeholder-user.jpg" />
                                                    <AvatarFallback>JD</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <div className="font-semibold">Bob Smith</div>
                                                    <div className="text-gray-500 dark:text-gray-400 text-sm">Meeting invitation</div>
                                                </div>
                                            </div>
                                            <div className="text-gray-500 dark:text-gray-400 text-sm">12:00 PM</div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="h-full flex flex-col">
                            <CardHeader>
                                <CardTitle>Mobile Notifications</CardTitle>
                                <CardDescription>Your latest mobile notifications.</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1 overflow-auto">
                                <div className="grid grid-cols-1 gap-4">
                                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <Avatar className="h-8 w-8 border">
                                                    <AvatarImage src="/placeholder-user.jpg" />
                                                    <AvatarFallback>JD</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <div className="font-semibold">Calendar Reminder</div>
                                                    <div className="text-gray-500 dark:text-gray-400 text-sm">Meeting with team at 3pm</div>
                                                </div>
                                            </div>
                                            <div className="text-gray-500 dark:text-gray-400 text-sm">2:45 PM</div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <Avatar className="h-8 w-8 border">
                                                    <AvatarImage src="/placeholder-user.jpg" />
                                                    <AvatarFallback>JD</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <div className="font-semibold">New Message</div>
                                                    <div className="text-gray-500 dark:text-gray-400 text-sm">
                                                        You have a new message from Jane
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-gray-500 dark:text-gray-400 text-sm">1:30 PM</div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <Avatar className="h-8 w-8 border">
                                                    <AvatarImage src="/placeholder-user.jpg" />
                                                    <AvatarFallback>JD</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <div className="font-semibold">Low Battery</div>
                                                    <div className="text-gray-500 dark:text-gray-400 text-sm">Your phone battery is at 15%</div>
                                                </div>
                                            </div>
                                            <div className="text-gray-500 dark:text-gray-400 text-sm">11:00 AM</div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="h-full flex flex-col">
                            <CardHeader>
                                <CardTitle>Mobile Status</CardTitle>
                                <CardDescription>Your current mobile status.</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1 overflow-auto">
                                <div className="grid grid-cols-1 gap-4">
                                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <Avatar className="h-8 w-8 border">
                                                    <AvatarImage src="/placeholder-user.jpg" />
                                                    <AvatarFallback>JD</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <div className="font-semibold">Available</div>
                                                    <div className="text-gray-500 dark:text-gray-400 text-sm">You are currently available</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="h-3 w-3 rounded-full bg-green-500" />
                                                <div className="text-gray-500 dark:text-gray-400 text-sm">2:30 PM</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <Avatar className="h-8 w-8 border">
                                                    <AvatarImage src="/placeholder-user.jpg" />
                                                    <AvatarFallback>JD</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <div className="font-semibold">In a Meeting</div>
                                                    <div className="text-gray-500 dark:text-gray-400 text-sm">You are currently in a meeting</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                                                <div className="text-gray-500 dark:text-gray-400 text-sm">1:45 PM</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <Avatar className="h-8 w-8 border">
                                                    <AvatarImage src="/placeholder-user.jpg" />
                                                    <AvatarFallback>JD</AvatarFallback>
                                                </Avatar>
                                                <div />
                                            </div>
                                        </div>
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


function FlagIcon(props) {
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
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
            <line x1="4" x2="4" y1="22" y2="15" />
        </svg>
    )
}


function MailOpenIcon(props) {
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
            <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
            <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
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


function SmartphoneIcon(props) {
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
            <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
            <path d="M12 18h.01" />
        </svg>
    )
}