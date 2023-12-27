"use client";

import { useParams, useRouter } from "next/navigation";
import { Plus } from "lucide-react";

import { ColorColumn, columns } from "./columns";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { ApiList } from "@/components/ui/api-list";

type ColorProps = {
    data: ColorColumn[]
}

export const ColorClient: React.FC<ColorProps> = ({ data}) => {
    const router = useRouter();
    const params = useParams();

    return (
        <>
            <div className="flex items-center justify-between" >
                <Heading
                    title={`Colors (${data.length})`}
                    description="Manage color for your products"
                />
                <Button onClick={() => router.push(`/${params.storeId}/colors/new`)}>
                    <Plus className="mr-2 h-4 w-4" />
                    Add New
                </Button>
            </div>
            <Separator />
            <DataTable searchKey="name" columns={columns} data={data} />
            <Heading title="API" description="API calls for Colors" />
            <Separator/>
            <ApiList
                entity_Name="colors"
                entity_Id_Name="colorId"
            />
        </>
    )
}