/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Djs6wO4cyz4
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

export default function Component() {
    return (
        <div className="grid grid-cols-[260px_1fr] min-h-screen w-full">
            <div className="bg-[#9C0000] hidden md:flex flex-col gap-6 text-white">
                <div className="sticky top-0 p-4">
                    <div className="flex items-center gap-2">
                        <CalendarIcon className="h-6 w-6" />
                        <div className="text-lg font-semibold">Calendar</div>
                    </div>
                </div>
                <nav className="flex flex-col gap-2 px-4">
                    <Link
                        href="#"
                        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium bg-[#7F0000] text-white"
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
                        <AlarmClockIcon className="h-5 w-5" />
                        <span>Alarms</span>
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
                        <SettingsIcon className="h-5 w-5" />
                        <span>Settings</span>
                    </Link>
                </nav>
            </div>
            <div className="flex flex-col">
                <header className="sticky top-0 z-10 flex items-center justify-between bg-white px-4 py-3 shadow-sm dark:bg-[#9C0000]">
                    <div className="flex items-center gap-4">
                        <div className="text-lg font-semibold">Calendar</div>
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
                                <CardTitle>Calendar</CardTitle>
                                <CardDescription>View and manage your upcoming events.</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1 overflow-auto">
                                <Calendar
                                    mode="single"
                                    onDayClick={(date) => {
                                        openEventPopup(date)
                                    }}
                                />
                            </CardContent>
                        </Card>
                    </div>
                </main>
            </div>
            <Dialog>
                <DialogTrigger />
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Create Event</DialogTitle>
                        <DialogDescription>Add a new event to your calendar.</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid items-center grid-cols-4 gap-4">
                            <Label htmlFor="date" className="text-right">
                                Date
                            </Label>
                            <div className="col-span-3">
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button variant="outline" className="flex-col items-start w-full h-auto">
                                            <span className="font-semibold uppercase text-[0.65rem]">Date</span>
                                            <span className="font-normal">4/2/2024</span>
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="p-0 max-w-[276px]">
                                        <Calendar />
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </div>
                        <div className="grid items-center grid-cols-4 gap-4">
                            <Label htmlFor="time" className="text-right">
                                Time
                            </Label>
                            <div className="col-span-3 flex gap-2">
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button variant="outline" className="flex-col items-start w-full h-auto">
                                            <span className="font-semibold uppercase text-[0.65rem]">Start</span>
                                            <span className="font-normal">9:00 AM</span>
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="p-0 max-w-[276px]">
                                        <div />
                                    </PopoverContent>
                                </Popover>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button variant="outline" className="flex-col items-start w-full h-auto">
                                            <span className="font-semibold uppercase text-[0.65rem]">End</span>
                                            <span className="font-normal">10:00 AM</span>
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="p-0 max-w-[276px]">
                                        <div />
                                    </PopoverContent>
                                </Popover>
                                <Checkbox id="allDay" className="flex items-center gap-2">
                                    <span className="text-sm font-medium">All day</span>
                                </Checkbox>
                            </div>
                        </div>
                        <div className="grid items-center grid-cols-4 gap-4">
                            <Label htmlFor="title" className="text-right">
                                Title
                            </Label>
                            <Input id="title" className="col-span-3" />
                        </div>
                        <div className="grid items-center grid-cols-4 gap-4">
                            <Label htmlFor="description" className="text-right">
                                Description
                            </Label>
                            <Textarea id="description" className="col-span-3" />
                        </div>
                        <div className="grid items-center grid-cols-4 gap-4">
                            <Label htmlFor="alarm" className="text-right">
                                Alarm
                            </Label>
                            <div className="col-span-3 flex items-center gap-2">
                                <Select>
                                    <SelectTrigger className="h-auto">
                                        <SelectValue
                                            placeholder={
                                                <div className="flex flex-col items-start">
                                                    <span className="font-semibold uppercase text-[0.65rem]">Alarm</span>
                                                    <span className="font-normal">15 minutes before</span>
                                                </div>
                                            }
                                        />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="15">15 minutes before</SelectItem>
                                        <SelectItem value="30">30 minutes before</SelectItem>
                                        <SelectItem value="60">1 hour before</SelectItem>
                                        <SelectItem value="other">Custom</SelectItem>
                                    </SelectContent>
                                </Select>
                                <Checkbox id="alarm" className="flex items-center gap-2">
                                    <span className="text-sm font-medium">Set alarm</span>
                                </Checkbox>
                            </div>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Create Event</Button>
                        <div>
                            <Button variant="outline">Cancel</Button>
                        </div>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
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