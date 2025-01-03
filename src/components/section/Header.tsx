"use client";

import { useRouter } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut, useSession } from "@/lib/auth-client";
import { AuthSignIn, AuthSignUp, DashboardAdmin, Home } from "@/routes";

import Logo from "../custom/logo";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

export default function Header() {
  const router = useRouter();
  const { data: session } = useSession();
  return (
    <div className="border-b shadow">
      <div className="container mx-auto flex h-12 items-center justify-between">
        <Home.Link>
          <Logo className="h-full w-auto py-3" />
        </Home.Link>
        <div className="flex items-center space-x-3">
          {session ? (
            <>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar>
                    <AvatarImage
                      src="https://avatars.githubusercontent.com/u/77627641?s=400&u=a62c999f97086dc9bca17b2ea31ab1f4b4e69a2d&v=4"
                      alt="@shadcn"
                    />
                    <AvatarFallback>Its-Satyajit</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>{session.user.name}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer">
                    <DashboardAdmin.Link>DashBoard</DashboardAdmin.Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="cursor-pointer"
                    onClick={() =>
                      signOut({
                        fetchOptions: {
                          onSuccess: () => router.push(Home()),
                        },
                      })
                    }
                  >
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <AuthSignIn.Link>
                <Button variant={"outline"}>Sign In</Button>
              </AuthSignIn.Link>
              <AuthSignUp.Link>
                <Button variant={"default"}>Sign Up</Button>
              </AuthSignUp.Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}