"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PaperPlaneIcon } from "@radix-ui/react-icons";

export function Assistant() {
  return (
    <div className="h-full">
      <div className="flex flex-col h-full">
        <div className="flex flex-col flex-grow w-full"></div>
        <div className="flex flex-row gap-5 items-center p-4">
          <Input className="flex-grow mr-2" />
          <Button size="icon" className="">
            <PaperPlaneIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}
