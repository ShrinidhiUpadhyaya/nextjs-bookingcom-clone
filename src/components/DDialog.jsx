import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

const DDialog = ({ open, title, description, onOpenChange, children }) => {
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
      className="h-10 overflow-auto border border-red-500"
    >
      <DialogContent className="h-[80%] max-h-[80%] max-w-[50%] overflow-auto border border-red p-4 pr-0 gap-0 flex flex-col justify-between">
        <DialogHeader className="flex h-10 justify-between">
          <DialogTitle className="flex justify-center">{title}</DialogTitle>
          <Separator />
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default DDialog;
