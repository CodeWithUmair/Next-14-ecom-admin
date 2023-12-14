"use client";

import { ChevronsUpDown, Store as StoreIcon } from "lucide-react";

import { useState } from "react";
import { useStoreModal } from "@/hooks/user-store-modal";
import { useParams, useRouter } from "next/navigation";

import { Popover, PopoverTrigger } from "@/components/ui/popover"
import { Store } from "@prisma/client"
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PopoverTriggerProps = React.ComponentPropsWithoutRef<typeof PopoverTrigger>

interface StoreSwitcherProps extends PopoverTriggerProps {
  items: Store[];
}

export default function StoreSwitcher({
  className,
  items = []
}: StoreSwitcherProps) {

  const storeModal = useStoreModal();
  const params = useParams();
  const router = useRouter();

  const formattedItems = items.map(item => ({
    label: item.name,
    value: item.id,
  }))

  const currentStore = formattedItems.find(item => item.value === params.storeId)

  const [open, setOpen] = useState(false);

  const onStoreSelect = (store: {value: string, label: string}) => {
    setOpen(false);
    router.push(`${store.value}`);
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          role="combobox"
          aria-expanded={open}
          aria-label="Select a store"
          className={cn('w-[200px] justify-between', className)}
        >
          <StoreIcon className="mr-2 h-4 w-4" />
          Current Store
          <ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 opacity-50"/>
        </Button>
      </PopoverTrigger>
    </Popover>
  )
}