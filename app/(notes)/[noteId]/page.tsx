import { ForwardRefEditor } from "@/components/forward-ref-editor";
import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ noteId: string }>;
}) {
  const cookieStore = await cookies();
  const { noteId } = await params;
  const client = createClient(cookieStore);
  const { data } = await client
    .from("notes")
    .select()
    .eq("id", noteId)
    .single();
  if (!data) {
    return notFound();
  }

  return (
    <div className="p-12  ">
      <ForwardRefEditor
        className="w-full h-full "
        contentEditableClassName=" w-full outline-none prose border-dotted border-b-2"
        markdown={data?.notes || ""}
      />
    </div>
  );
}
