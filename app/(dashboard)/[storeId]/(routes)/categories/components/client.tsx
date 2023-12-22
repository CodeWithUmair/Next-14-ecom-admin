"use client";

import { useParams, useRouter } from "next/navigation";
import { Plus } from "lucide-react";

import { CategoryColumn, columns } from "./columns";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { ApiList } from "@/components/ui/api-list";

type CategoryClientProps = {
    data: CategoryColumn[]
}

export const CategoryClient: React.FC<CategoryClientProps> = ({ data}) => {
    const router = useRouter();
    const params = useParams();

    return (
        <>
            <div className="flex items-center justify-between" >
                <Heading
                    title={`Categories (${data.length})`}
                    description="Manage categories for your store"
                />
                <Button onClick={() => router.push(`/${params.storeId}/categories/new`)}>
                    <Plus className="mr-2 h-4 w-4" />
                    Add New
                </Button>
            </div>
            <Separator />
            <DataTable searchKey="name" columns={columns} data={data} />
            <Heading title="API" description="API calls for Categories" />
            <Separator/>
            <ApiList
                entity_Name="categories"
                entity_Id_Name="categoriesId"
            />
        </>
    )
}