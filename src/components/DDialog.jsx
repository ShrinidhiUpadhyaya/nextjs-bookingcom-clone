import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

const DDialog = ({
  open,
  title,
  description,
  onOpenChange,
  children,
  className,
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange} className="overflow-auto">
      <DialogContent className={cn("block space-y-8 overflow-auto", className)}>
        <DialogHeader>
          <DialogTitle className="relative mb-4 flex justify-center">
            {title}
            <div
              className="applyHover absolute -top-2 right-0 rounded-full p-2"
              onClick={() => onOpenChange(false)}
            >
              <X />
            </div>
          </DialogTitle>
          <Separator />
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default DDialog;
