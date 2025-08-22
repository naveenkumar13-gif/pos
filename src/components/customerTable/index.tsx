import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Pencil, Trash2, Search, Plus } from "lucide-react";

export interface Customer {
  id: string;
  name: string;
  orders: number;
  spend: number;
  gender: string;
  phone: string;
  city?: string;
  image?: string;
}

interface CustomerTableProps {
  customers: Customer[];
  onAddCustomer: () => void;
  onEditCustomer: (customer: Customer) => void;
  onDeleteCustomer: (customer: Customer) => void;
}

export const CustomerTable = ({
  customers,
  onAddCustomer,
  onEditCustomer,
  onDeleteCustomer,
}: CustomerTableProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.city?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.gender.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="!space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between ">
        <h1 className="text-2xl font-bold text-foreground max-sm:flex max-sm:text-lg">
          Customer Management
        </h1>
        <Button
          onClick={onAddCustomer}
          className="bg-red-500 hover:bg-red-500/90 !p-2 "
        >
          <Plus className="w-4 h-4 !mr-2" />
          Add Customer
        </Button>
      </div>

      
      <div className="relative max-w-md">
        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          placeholder="Search customers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="!pl-10"
        />
      </div>

      {/* Mobile Cards */}
      <div className="block md:hidden !space-y-4">
        {filteredCustomers.map((customer) => (
          <Card key={customer.id} className="!p-4">
            <div className="flex items-start gap-3">
              <Avatar className="w-10 h-10">
                <AvatarImage
                  src={customer.image}
                  alt={customer.name}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                <AvatarFallback>
                  {customer.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground truncate">
                  {customer.name}
                </h3>
                <div className="text-sm text-muted-foreground !space-y-1">
                  <p>
                    Orders: {customer.orders} • Spend: $
                    {customer.spend.toLocaleString()}
                  </p>
                  <p>Gender: {customer.gender}</p>
                  <p>Phone: {customer.phone}</p>
                  {customer.city && <p>City: {customer.city}</p>}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onEditCustomer(customer)}
                  className="text-emerald-600 border-emerald-600 hover:bg-emerald-600 hover:text-white !p-2"
                >
                  <Pencil className="w-3 h-3" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onDeleteCustomer(customer)}
                  className="text-red-600 border-red-600 hover:bg-red-600 hover:text-white"
                >
                  <Trash2 className="w-3 h-3" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Desktop Table */}
      <Card className="hidden md:block overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted !p-2">
              <tr>
                <th className="text-left !p-4 font-medium text-muted-foreground">
                  Name
                </th>
                <th className="text-left !p-4 font-medium text-muted-foreground">
                  Orders
                </th>
                <th className="text-left !p-4 font-medium text-muted-foreground">
                  Spend
                </th>
                <th className="text-left !p-4 font-medium text-muted-foreground">
                  Gender
                </th>
                <th className="text-left !p-4 font-medium text-muted-foreground">
                  Phone
                </th>
                <th className="text-left !p-4 font-medium text-muted-foreground">
                  City
                </th>
                <th className="text-left !p-4 font-medium text-muted-foreground">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.map((customer, index) => (
                <tr
                  key={customer.id}
                  className={index % 2 === 0 ? "bg-background" : "bg-muted/30"}
                >
                  <td className="!p-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage
                          src={customer.image}
                          alt={customer.name}
                          width={40} // match your w-10 (40px)
                          height={40}
                          className="rounded-full object-cover"
                        />
                        <AvatarFallback>
                          {customer.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>

                      <span className="font-medium text-foreground">
                        {customer.name}
                      </span>
                    </div>
                  </td>
                  <td className="!p-4 text-foreground">{customer.orders}</td>
                  <td className="!p-4 text-foreground">
                    ${customer.spend.toLocaleString()}
                  </td>
                  <td className="!p-4 text-foreground">{customer.gender}</td>
                  <td className="!p-4 text-foreground">{customer.phone}</td>
                  <td className="!p-4 text-foreground">
                    {customer.city || "-"}
                  </td>
                  <td className="!p-4">
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onEditCustomer(customer)}
                        className="text-emerald-600 border-emerald-600 hover:bg-emerald-600 hover:text-white !p-2"
                      >
                        <Pencil className="w-4 h-4 mr-1" />
                        Edit
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onDeleteCustomer(customer)}
                        className="text-red-600 border-red-600 hover:bg-red-600 hover:text-white !p-2"
                      >
                        <Trash2 className="w-4 h-4 mr-1" />
                        Delete
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {filteredCustomers.length === 0 && (
        <Card className="!p-8 text-center">
          <p className="text-muted-foreground">No customers found.</p>
        </Card>
      )}
    </div>
  );
};
