import {SignInButton, UserButton, useUser} from "@clerk/nextjs";
import {Button} from "@/components/ui/button";

export const UserBox = () => {

    const {user} = useUser()

    return (
        <>
            {!user && (
                <>
                    <Button>
                        <SignInButton>
                            Log In
                        </SignInButton>
                    </Button>
                </>
            )}
            {user && (
                <div className="flex items-center justify-center gap-x-2">
                    <UserButton appearance={{
                        elements: {
                            avatarBox: "w-10 h-10"
                        }
                    }}/>
                    <div>
                        <p className="font-semibold text-sm">{user.fullName}</p>
                        <p className={"text-xs text-muted-foreground"}>Data Manager - ||</p>
                    </div>
                </div>
            )}
        </>
    )
}