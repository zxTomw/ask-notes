import { ForwardRefEditor } from "@/components/forward-ref-editor";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Page() {
  return (
    <ScrollArea className="w-full h-full p-10 pt-20 ">
      <ForwardRefEditor
        className="w-full h-full "
        contentEditableClassName=" w-full outline-none prose border-dotted border-b-2"
        markdown="# Untitled"
      />
    </ScrollArea>
  );
}
