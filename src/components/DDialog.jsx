import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";

const DDialog = ({open, title, description, onOpenChange, children}) => {
  return (
    <Dialog
    open={open}
    onOpenChange={onOpenChange}
  >
    <DialogContent className="min-w-[50%]">
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription className="flex flex-col gap-6">
          <p>
            {description}
          </p>
        </DialogDescription>
      </DialogHeader>
      {children}
    </DialogContent>
  </Dialog>
  )
}

export default DDialog