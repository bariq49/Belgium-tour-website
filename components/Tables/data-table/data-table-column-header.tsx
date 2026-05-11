import {
  ChevronDown,
  ChevronUp,
  XCircle,
  Eye,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Column } from "@tanstack/react-table";

interface DataTableColumnHeaderProps {
  column: Column<any, any>;
  title: string;
  className?: string;
}

export function DataTableColumnHeader({ column, title, className }: DataTableColumnHeaderProps) {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>;
  }

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="-ml-3 h-8 text-primary text-base font-semibold"
          >
            <span>{title}</span>
            {column.getIsSorted() === "desc" ? (
              <ChevronDown className="ml-2 h-4 w-4 text-primary" />
            ) : column.getIsSorted() === "asc" ? (
              <ChevronUp className="ml-2 h-4 w-4 text-primary" />
            ) : (
              <XCircle className="ml-2 h-4 w-4 text-primary" />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="bg-white text-primary text-base font-semibold border border-border shadow-md cursor-pointer">
          <DropdownMenuItem onClick={() => column.toggleSorting(false)} className="cursor-pointer">
            <ChevronUp className="mr-2 h-3.5 w-3.5 text-primary" />
            Asc
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => column.toggleSorting(true)} className="cursor-pointer">
            <ChevronDown className="mr-2 h-3.5 w-3.5 text-primary" />
            Desc
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => column.toggleVisibility(false)} className="cursor-pointer rounded-none">
            <Eye className="mr-2 h-3.5 w-3.5 text-primary" />
            Hide
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
