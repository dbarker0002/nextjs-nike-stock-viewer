import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useUser, SignOutButton } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from 'next/navigation'
 
export function UserButton() {
    const {user, isLoaded} = useUser();
    const router = useRouter()

    return (
        <div className="flex items-center pt-1 pl-1 md:pl-0">
            <span className="font-normal text-md mr-4 hidden md:block">Signed in as {user?.emailAddresses[0].emailAddress.split("@")[0]}</span>
            {/* <Popover>
                <PopoverTrigger asChild>
                    <Avatar className="h-11 w-11 hover:outline-2 hover:outline hover:cursor-pointer">
                        <AvatarImage src={user?.imageUrl} alt={user?.emailAddresses[0].emailAddress} />
                        <AvatarFallback>?</AvatarFallback>
                    </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-42 ml-96 p-0">
                    <SignOutButton signOutCallback={() => router.push("/")}>
                        <Button variant="ghost" className="p-2 m-2 focus-visible:ring-0 hover:bg-inherit">Sign Out</Button>
                    </SignOutButton>
                </PopoverContent>
            </Popover> */}
            <Avatar className="h-11 w-11">
                <AvatarImage src={user?.imageUrl} alt={user?.emailAddresses[0].emailAddress} />
                <AvatarFallback>?</AvatarFallback>
            </Avatar>
        </div>
    )
}