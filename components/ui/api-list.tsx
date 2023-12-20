"use client";

import { useParams } from "next/navigation";

import { ApiAlert } from "@/components/ui/api-alert";
import { useOrigin } from "@/hooks/use-origin";

type ApiListProps = {
  entity_Name: string,
  entity_Id_Name: string
}

export const ApiList: React.FC<ApiListProps> = ({
  entity_Name,
  entity_Id_Name
}) => {
  const params = useParams();
  const origins = useOrigin();

  const baseUrl = `${origin}/api/${params.storeId}`;

  return (
    <>
      <ApiAlert
        title="GET"
        variant="public"
        description={`${baseUrl}/${entity_Name}`}
      />
      <ApiAlert
        title="GET"
        variant="public"
        description={`${baseUrl}/${entity_Name}/{${entity_Id_Name}}`}
      />
      <ApiAlert
        title="POST"
        variant="admin"
        description={`${baseUrl}/${entity_Name}`}
      />
      <ApiAlert
        title="PATCH"
        variant="admin"
        description={`${baseUrl}/${entity_Name}/{${entity_Id_Name}}`}
      />
      <ApiAlert
        title="DELETE"
        variant="admin"
        description={`${baseUrl}/${entity_Name}/{${entity_Id_Name}}`}
      />
    </>
  )
}