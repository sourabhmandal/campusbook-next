"use client";
import { MemberTable } from "@/app/admin/member/MemberTable";

function MemberPageClient() {
  return (
    <div>
      <MemberTable
        data={[
          {
            id: "text",
            status: "pending",
            header: "Pending Approval",
            reviewer: "admin",
          },
          {
            id: "text",
            status: "approved",
            header: "Approved",
            reviewer: "admin",
          },
          {
            id: "text",
            status: "rejected",
            header: "Rejected",
            reviewer: "admin",
          },
        ]}
      />
    </div>
  );
}

export default MemberPageClient;
