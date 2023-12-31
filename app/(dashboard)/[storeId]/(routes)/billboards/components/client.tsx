"use client";

import { useParams, useRouter } from "next/navigation";
import { Plus } from "lucide-react";

import { BillboardColumn, columns } from "./columns";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { ApiList } from "@/components/ui/api-list";

type BillboardProps = {
    data: BillboardColumn[]
}

export const BillboardClient: React.FC<BillboardProps> = ({ data}) => {
    const router = useRouter();
    const params = useParams();

    return (
        <>
            <div className="flex items-center justify-between" >
                <Heading
                    title={`Billboards (${data.length})`}
                    description="Manage billboard for your store"
                />
                <Button onClick={() => router.push(`/${params.storeId}/billboards/new`)}>
                    <Plus className="mr-2 h-4 w-4" />
                    Add New
                </Button>
            </div>
            <Separator />
            <DataTable searchKey="label" columns={columns} data={data} />
            <Heading title="API" description="API calls for Billboards" />
            <Separator/>
            <ApiList
                entity_Name="billboards"
                entity_Id_Name="billboardId"
            />
        </>
    )
}