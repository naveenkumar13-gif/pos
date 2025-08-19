"use client";
import { CustomerForm } from "@/components/customerForm";
import { Customer, CustomerTable } from "@/components/customerTable";
import { DeleteConfirmDialog } from "@/components/deleteConfirm";
import { useToast } from "@/lib/utils";
import { useState } from "react";

const initialCustomers: Customer[] = [
  {
    id: "1",
    name: "Dhlip Kumar",
    orders: 110,
    spend: 5000,
    gender: "Male",
    phone: "9874561230",
    city: "Mumbai",
    image:
      "",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    orders: 85,
    spend: 3200,
    gender: "Female",
    phone: "9876543210",
    city: "Delhi",
    image:
      "",
  },
  {
    id: "3",
    name: "Michael Chen",
    orders: 67,
    spend: 2800,
    gender: "Male",
    phone: "9123456789",
    city: "Bangalore",
    image:
      "",
  },
  {
    id: "4",
    name: "Emily Davis",
    orders: 92,
    spend: 4100,
    gender: "Female",
    phone: "9234567890",
    city: "Chennai",
    image:
      "",
  },
];

const Dashboard = () => {
  const [customers, setCustomers] = useState<Customer[]>(initialCustomers);
  const [currentView, setCurrentView] = useState<"table" | "form">("table");
  const [editingCustomer, setEditingCustomer] = useState<
    Customer | undefined
  >();
  const [deleteDialog, setDeleteDialog] = useState<{
    open: boolean;
    customer: Customer | null;
  }>({ open: false, customer: null });

  const { toast } = useToast();

  const handleAddCustomer = () => {
    setEditingCustomer(undefined);
    setCurrentView("form");
  };

  const handleEditCustomer = (customer: Customer) => {
    setEditingCustomer(customer);
    setCurrentView("form");
  };

  const handleDeleteCustomer = (customer: Customer) => {
    setDeleteDialog({ open: true, customer });
  };

  const handleSaveCustomer = (customerData: Omit<Customer, "id">) => {
    if (editingCustomer) {
      // Update existing customer
      setCustomers((prev) =>
        prev.map((c) =>
          c.id === editingCustomer.id
            ? { ...customerData, id: editingCustomer.id }
            : c
        )
      );
      toast("Customer updated successfully!");
    } else {
     
      const newCustomer: Customer = {
        ...customerData,
        id: Date.now().toString(),
      };
      setCustomers((prev) => [...prev, newCustomer]);
      toast("Customer added successfully!");
    }
    setCurrentView("table");
    setEditingCustomer(undefined);
  };

  const handleConfirmDelete = () => {
    if (deleteDialog.customer) {
      setCustomers((prev) =>
        prev.filter((c) => c.id !== deleteDialog.customer!.id)
      );
      toast("Customer deleted successfully!");
    }
    setDeleteDialog({ open: false, customer: null });
  };

  const handleCancelForm = () => {
    setCurrentView("table");
    setEditingCustomer(undefined);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* <Navbar /> */}

      <main className="max-w-7xl !mx-auto !px-4 sm:!px-6 lg:!px-8 !py-8 ">
        {currentView === "table" ? (
          <CustomerTable
            customers={customers}
            onAddCustomer={handleAddCustomer}
            onEditCustomer={handleEditCustomer}
            onDeleteCustomer={handleDeleteCustomer}
          />
        ) : (
          <CustomerForm
            customer={editingCustomer}
            onSave={handleSaveCustomer}
            onCancel={handleCancelForm}
          />
        )}
      </main>

      <DeleteConfirmDialog
        open={deleteDialog.open}
        onOpenChange={(open) => setDeleteDialog({ open, customer: null })}
        customer={deleteDialog.customer}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default Dashboard;
