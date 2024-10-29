"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PaperPlaneIcon } from "@radix-ui/react-icons";

export function Assistant() {
  return (
    <div className="h-full">
      <div className="flex flex-col h-full">
        <div className="flex  justify-end flex-grow w-full flex-col-reverse">
          {" "}
        </div>
        <div className="flex flex-row gap-2 items-center p-4">
          <Input className="flex-grow" />
          <Button size="icon" variant="ghost" className="">
            <PaperPlaneIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}
