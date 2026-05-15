"use client";
import React from "react";

import { cn, findBestMatch, getInitials } from "@/lib/utils";
import { menus } from "@/config/menus";
import type { MenuItemProps } from "@/config/menus";
import MenuLabel from "../common/menu-label";
import SingleMenuItem from "../common/single-menu-item";
import MultiMenuItem from "../common/multi-menu-item";
import { useSidebar } from "@/store/use-sidebar-store";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Logo } from "@/layout/header/logo";
import { useAuthLogout, useAuthMe } from "@/hooks/queries/use-auth";
import { Loader2, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

const PopoverSidebar = () => {
  const { collapsed } = useSidebar();
  const { data, isLoading } = useAuthMe();
  const logoutMutation = useAuthLogout();
  const pathname = usePathname();

  const bestMatch = React.useMemo(() => findBestMatch(menus, pathname), [menus, pathname]);

  const currentAccount = data?.data?.user;
  const fullName = currentAccount ? `${currentAccount.firstName} ${currentAccount.lastName}` : "Partner User";
  const email = currentAccount?.email || "partner@example.com";
  const avatar = currentAccount?.avatar;
  const initials = getInitials(fullName, "PU");

  return (
    <div
      className={cn("fixed top-0 start-0 flex min-h-0 flex-col overflow-hidden border border-border bg-background", {
        "w-[248px]": !collapsed,
        "w-[72px]": collapsed,
        "m-6 bottom-0 rounded-md": true,
        "h-full": false,
      })}
    >
      <div
        className={cn(
          "shrink-0 border-b border-border/70",
          collapsed
            ? "flex justify-center px-2 py-3 "
            : "px-4 py-3 [&_a]:h-25 [&_a]:w-full"
        )}
      >
        <Logo variant="dark" className="w-full h-full " />
      </div>
      <Separator className="shrink-0" />
      <ScrollArea
        className={cn("sidebar-menu min-h-0 flex-1 pt-5", {
          "px-4": !collapsed,
        })}
      >
        <ul
          className={cn("space-y-1", {
            "space-y-2 text-center": collapsed,
          })}
        >
          {menus.map((item: MenuItemProps, i: number) => (
            <li key={`menu_key_${i}`}>
              {!item?.isHeader && (
                item.child ? (
                  <MultiMenuItem
                    item={item}
                    collapsed={collapsed}
                    isActive={bestMatch.index === i}
                    activeChildIndex={bestMatch.index === i ? bestMatch.childIndex : -1}
                  />
                ) : (
                  <SingleMenuItem
                    item={item}
                    collapsed={collapsed}
                    isActive={bestMatch.index === i}
                  />
                )
              )}
              {item.isHeader && !collapsed && (
                <MenuLabel item={item} />
              )}
            </li>
          ))}
        </ul>
      </ScrollArea>
      <div className={cn("shrink-0 border-t border-border/70 py-2", collapsed ? "px-0" : "px-3")}>
        {collapsed ? (
          <button
            type="button"
            aria-label={logoutMutation.isPending ? "Logging out..." : "Logout"}
            onClick={() => logoutMutation.mutate()}
            disabled={logoutMutation.isPending}
            className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary text-xs font-semibold text-white disabled:opacity-60 overflow-hidden border border-border/50"
          >
            {logoutMutation.isPending ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : avatar ? (
              <img src={avatar} alt={fullName} className="h-full w-full object-cover" />
            ) : (
              initials
            )}
          </button>
        ) : (
          <div className="px-0.5">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white overflow-hidden border border-border/50">
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : avatar ? (
                  <img src={avatar} alt={fullName} className="h-full w-full object-cover" />
                ) : (
                  initials
                )}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-foreground">
                  {isLoading ? "Loading..." : fullName}
                </p>
                <p className="truncate text-xs text-muted-foreground">
                  {isLoading ? "..." : email}
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              onClick={() => logoutMutation.mutate()}
              disabled={logoutMutation.isPending}
              loading={logoutMutation.isPending}
              loadingText="Logging out..."
              className="mt-2 w-full"
            >
              <LogOut className="h-3.5 w-3.5 mr-2" />
              Logout
            </Button>
          </div>
        )}
      </div>

    </div>
  );
};

export default PopoverSidebar;
