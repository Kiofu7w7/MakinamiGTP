/**
 * v0 by Vercel.
 * @see https://v0.dev/t/PZN64wWFhYX
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

export default function Component() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-950">
            <div className="mx-auto w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow-lg dark:bg-gray-900">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-[#C90000] dark:text-gray-50">
                        Sign in to your account
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
                        Or{" "}
                        <Link
                            href="#"
                            className="font-medium text-[#C90000] hover:text-[#a80000] dark:text-[#C90000] dark:hover:text-[#a80000]"
                            prefetch={false}
                        >
                            start your 14-day free trial
                        </Link>
                    </p>
                </div>
                <form className="space-y-6" action="#" method="POST">
                    <div>
                        <Label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Email address
                        </Label>
                        <div className="mt-1">
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-[#C90000] focus:outline-none focus:ring-[#C90000] dark:border-gray-600 dark:bg-gray-800 dark:text-gray-50 dark:placeholder-gray-400"
                            />
                        </div>
                    </div>
                    <div>
                        <Label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Password
                        </Label>
                        <div className="mt-1">
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-[#C90000] focus:outline-none focus:ring-[#C90000] dark:border-gray-600 dark:bg-gray-800 dark:text-gray-50 dark:placeholder-gray-400"
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Checkbox
                                id="remember-me"
                                name="remember-me"
                                className="h-4 w-4 rounded text-[#C90000] focus:ring-[#C90000] dark:bg-gray-800 dark:border-gray-600 dark:checked:bg-[#C90000]"
                            />
                            <Label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
                                Remember me
                            </Label>
                        </div>
                        <div className="text-sm">
                            <Link
                                href="#"
                                className="font-medium text-[#C90000] hover:text-[#a80000] dark:text-[#C90000] dark:hover:text-[#a80000]"
                                prefetch={false}
                            >
                                Forgot your password?
                            </Link>
                        </div>
                    </div>
                    <Button
                        type="submit"
                        className="w-full justify-center rounded-md bg-[#C90000] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#a80000] focus:outline-none focus:ring-2 focus:ring-[#C90000] focus:ring-offset-2 dark:bg-[#C90000] dark:hover:bg-[#a80000] dark:focus:ring-[#C90000] dark:focus:ring-offset-gray-900"
                    >
                        Sign in
                    </Button>
                </form>
            </div>
        </div>
    )
}