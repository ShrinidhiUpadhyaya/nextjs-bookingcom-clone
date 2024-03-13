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
import { BounceLoader } from "react-spinners";

const DLoadingDialog = ({
  open,
  title,
  loading = false,
  onOpenChange,
  children,
  className,
}) => {
  return (
    <Dialog
      open={open}
      onOpenChange={() => {
        !loading && onOpenChange();
      }}
      modal={true}
      className={"overflow-auto"}
    >
      <DialogContent
        className={cn("m-0 block space-y-8 overflow-auto", className)}
      >
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
        {loading && (
          <>
            <div
              className={`absolute -top-8 left-0 flex h-full w-full items-center justify-center bg-gray-500 bg-opacity-50`}
            >
              <BounceLoader color="#006ce4" />
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DLoadingDialog;
