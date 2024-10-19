import { ForwardRefEditor } from "@/components/forward-ref-editor";

export default function Page() {
  return (
    <div className="w-full h-full p-10">
      <ForwardRefEditor
        className="w-full  border-dotted border-b-2"
        contentEditableClassName="outline-none prose"
        markdown="# Untitled"
      />
    </div>
  );
}
