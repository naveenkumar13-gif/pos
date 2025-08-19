import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { AlertTriangle } from "lucide-react";
import { Customer } from "../customerTable";

interface DeleteConfirmDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  customer: Customer | null;
  onConfirm: () => void;
}

export const DeleteConfirmDialog = ({
  open,
  onOpenChange,
  customer,
  onConfirm,
}: DeleteConfirmDialogProps) => {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="max-w-md !p-4 text-center">
        <AlertDialogHeader className="text-center">
          <div className="!mx-auto  !p-4 rounded-full bg-destructive/10 flex items-center justify-center !mb-4">
            <AlertTriangle className="w-16 h-16 text-red-700" />
          </div>
          <AlertDialogTitle className="text-xl text-center">
            Delete this Customer?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-muted-foreground text-center">
            Are you sure you want to delete{" "}
            <span className="text-red-500">{customer?.name}</span>? This action
            cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className=" flex  flex-col sm:flex-row gap-2 items-center justify-center">
          <AlertDialogCancel className="bg-gray-800 text-white hover:bg-gray-300 transition-colors !px-4 !py-2 ">
            No
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={onConfirm}
            className="text-white border-red-600 hover:bg-red-600 hover:text-white !p-2 !px-4 !bg-red-500"
          >
            Yes
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
