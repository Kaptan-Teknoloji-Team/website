import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { JOIN_LINK, TEAM } from "@/data/team-data";

export const metadata: Metadata = {
  title: "Ekibe Katıl",
  description: `${TEAM.name} resmi başvuru formu.`,
};

export default function JoinPage() {
  redirect(JOIN_LINK.href);
}

