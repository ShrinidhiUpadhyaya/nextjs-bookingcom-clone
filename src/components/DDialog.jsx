import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

const DDialog = ({ open, title, description, onOpenChange, children }) => {
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
      className="h-10 overflow-auto border border-red-500"
    >
      <DialogContent className="border-red flexCol h-[80%] max-h-[80%] max-w-[50%] justify-between gap-0 overflow-auto border p-4">
        <DialogHeader className="flex h-10 justify-between">
          <DialogTitle className="flexHCenter">{title}</DialogTitle>
          <Separator />
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default DDialog;
