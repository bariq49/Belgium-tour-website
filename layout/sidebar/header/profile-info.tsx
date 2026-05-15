"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Loader2, Power } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAuthLogout, useAuthMe } from "@/hooks/queries/use-auth";
import { getInitials } from "@/lib/utils";

const ProfileInfo = () => {
  const router = useRouter();
  const { data, isLoading } = useAuthMe();
  const logoutMutation = useAuthLogout();
  const fullName = data?.data?.user?.firstName + " " + data?.data?.user?.lastName;
  const email = data?.data?.user?.email;
  const avatar = data?.data?.user?.avatar;
  const initials = getInitials(fullName || "Partner User", "PU");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="cursor-pointer outline-none ring-offset-2 focus-visible:ring-2 focus-visible:ring-primary/40 rounded-full">
        <div className="flex items-center">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white shadow-sm overflow-hidden border border-border/50">
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : avatar ? (
              <img src={avatar} alt={fullName} className="h-full w-full object-cover" />
            ) : (
              initials
            )}
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64 rounded-xl border border-border bg-background p-0 text-foreground shadow-xl" align="end" sideOffset={10}>
        <DropdownMenuLabel className="flex items-center gap-3 border-b border-border p-3.5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white overflow-hidden border border-border/50">
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : avatar ? (
              <img src={avatar} alt={fullName} className="h-full w-full object-cover" />
            ) : (
              initials
            )}
          </div>
          <div className="min-w-0">
            <div className="truncate text-sm font-semibold text-foreground">
              {isLoading ? "Loading..." : fullName}
            </div>
            <div className="truncate text-xs text-muted-foreground">
              {isLoading ? "..." : email}
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="hidden" />
        <DropdownMenuItem
          onSelect={(e) => {
            e.preventDefault();
            logoutMutation.mutate();
          }}
          disabled={logoutMutation.isPending}
          className="mx-1 mb-1.5 flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-foreground disabled:opacity-50"
        >
          {logoutMutation.isPending ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Logging out...
            </>
          ) : (
            <>
              <Power className="w-4 h-4" />
              Log out
            </>
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileInfo;
