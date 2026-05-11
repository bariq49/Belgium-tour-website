"use client";
import { X, Trash2, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { DataTableViewOptions } from "./data-table-view-options";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";
import { Table } from "@tanstack/react-table";
import { cn } from "@/lib/utils";

interface DataTableToolbarProps {
  table: Table<any>;
  searchKey?: string;
  filterColumns?: {
    multiple: boolean;
    column: string;
    title: string;
    options: { label: string; value: string; icon?: React.ComponentType<{ className?: string }> }[];
  }[];
  onBulkDelete?: (selectedRows: any[]) => void;
  isDeleting?: boolean;
}

export function DataTableToolbar({
  table,
  searchKey,
  filterColumns = [],
  onBulkDelete,
  isDeleting = false,
}: DataTableToolbarProps) {
  const isFiltered = table.getState().columnFilters.length > 0;
  const selectedRows = table.getFilteredSelectedRowModel().rows;
  const hasSelectedRows = selectedRows.length > 0;

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (searchKey) {
      table.getColumn(searchKey)?.setFilterValue(value);
    }
  };

  const handleBulkDelete = () => {
    if (onBulkDelete && hasSelectedRows) {
      onBulkDelete(selectedRows.map(row => row.original));
    }
  };

  return (
    <div className="flex flex-1 flex-wrap items-center gap-2">
      {searchKey && (
        <div className="relative w-[150px] lg:w-[250px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            placeholder={`Search by ${searchKey}...`}
            value={(table.getColumn(searchKey)?.getFilterValue() as string) ?? ""}
            onChange={handleFilterChange}
            className={cn(
              "h-10 w-full rounded-md border border-border bg-background pl-9 pr-3 py-2 text-sm",
              "placeholder:text-muted-foreground focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            )}
          />
        </div>
      )}

      <div className="ml-auto flex flex-wrap items-center gap-2">
        {filterColumns.map((filter) => {
          const column = table.getColumn(filter.column);
          return column ? (
            <DataTableFacetedFilter
              key={filter.column}
              column={column}
              title={filter.title}
              options={filter.options}
              multiple={filter.multiple ?? false}
            />
          ) : null;
        })}
        {isFiltered && (
          <Button
            variant="outline"
            onClick={() => table.resetColumnFilters()}
            className="h-10 px-2 lg:px-3"
          >
            Reset
            <X className="h-4 w-4" />
          </Button>
        )}

        {hasSelectedRows && onBulkDelete && (
          <Button
            color="destructive"
            onClick={handleBulkDelete}
            disabled={isDeleting}
            className="h-10 px-3"
          >
            <Trash2 className="h-4 w-4" />
            Delete {selectedRows.length} selected
          </Button>
        )}

        <DataTableViewOptions table={table} />
      </div>
    </div>
  );
}