"use client";

import { useState } from "react";

import { Copy, Edit, MoreHorizontal } from "lucide-react";
import { BillboardColumn } from "./columns";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

type CellActionProps = {
  data: BillboardColumn;
}

export const CellAction: React.FC<CellActionProps> = ({
  data
}) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      {isDropdownOpen && <div className="backdrop-blur"  />}
      <DropdownMenu onOpenChange={handleDropdownToggle}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="h-8 w-8 p-0"
          >
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" >
          <DropdownMenuLabel>
            Actions
          </DropdownMenuLabel>
          <DropdownMenuItem>
            <Copy className="mr-2 h-4 w-4" />
            Copy Id
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Edit className="mr-2 h-4 w-4" />
            Update
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}