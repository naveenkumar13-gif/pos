import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Edit, Trash2, AlertTriangle } from "lucide-react";
import { message } from "antd";
import { Textarea } from "../ui/textarea";

interface Employee {
  id: string;
  name: string;
  employeeId: string;
  email?: string;
  phone?: string;
  position?: string;
  dateOfBirth?: string;
  username?: string;
  password?: string;
  description?: string;
}

export default function EmployeesManagement() {
  const [employees, setEmployees] = useState<Employee[]>([
    { id: "1", name: "Naveen Kumar", employeeId: "#369258" },
    { id: "2", name: "Naveen Kumar", employeeId: "#369258" },
    { id: "3", name: "Naveen Kumar", employeeId: "#369258" },
    { id: "4", name: "Naveen Kumar", employeeId: "#369258" },
    { id: "5", name: "Naveen Kumar", employeeId: "#369258" },
    { id: "6", name: "Naveen Kumar", employeeId: "#369258" },
    { id: "7", name: "Naveen Kumar", employeeId: "#369258" },
    { id: "8", name: "Naveen Kumar", employeeId: "#369258" },
    { id: "9", name: "Naveen Kumar", employeeId: "#369258" },
  ]);

  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [newEmployee, setNewEmployee] = useState<Partial<Employee>>({
    name: "",
    email: "",
    phone: "",
    position: "",
    dateOfBirth: "",
    username: "",
    password: "",
    description: "",
  });

  // Generate unique employee ID
  const generateEmployeeId = () => {
    const existingIds = employees.map((emp) =>
      parseInt(emp.employeeId.replace("#", ""))
    );
    const maxId = existingIds.length > 0 ? Math.max(...existingIds) : 369257;
    return `#${maxId + 1}`;
  };

  const handleDeleteEmployee = (employeeId: string) => {
    setEmployees((prev) => prev.filter((emp) => emp.id !== employeeId));
    message.destroy("employeeDeleted");
  };

  const handleEditEmployee = (employee: Employee) => {
    setEditingEmployee({ ...employee });
    setIsEditDialogOpen(true);
  };

  const handleSaveEdit = () => {
    if (editingEmployee) {
      setEmployees((prev) =>
        prev.map((emp) =>
          emp.id === editingEmployee.id ? editingEmployee : emp
        )
      );
      setIsEditDialogOpen(false);
      setEditingEmployee(null);
      message.info(`Employee ${editingEmployee.name} updated successfully!`);
    }
  };

  const handleAddEmployee = () => {
    if (!newEmployee.name?.trim()) {
      message.error("Please enter the employee's name.");
      return;
    }

    if (!newEmployee.email?.trim()) {
      message.error("Please enter the employee's email.");
      return;
    }

    if (!newEmployee.username?.trim()) {
      message.error("Please enter a username.");
      return;
    }

    if (!newEmployee.password?.trim()) {
      message.error("Please enter a password.");
      return;
    }
    const existingEmployee = employees.find(
      (emp) =>
        emp.username === newEmployee.username || emp.email === newEmployee.email
    );

    if (existingEmployee) {
      message.error("An employee with this username or email already exists.");
      return;
    }

    const employee: Employee = {
      id: Date.now().toString(),
      name: newEmployee.name.trim(),
      employeeId: generateEmployeeId(),
      email: newEmployee.email.trim(),
      phone: newEmployee.phone?.trim() || "",
      position: newEmployee.position?.trim() || "",
      dateOfBirth: newEmployee.dateOfBirth?.trim() || "",
      username: newEmployee.username.trim(),
      password: newEmployee.password,
      description: newEmployee.description?.trim() || "",
    };

    setEmployees((prev) => [...prev, employee]);

    setNewEmployee({
      name: "",
      email: "",
      phone: "",
      position: "",
      dateOfBirth: "",
      username: "",
      password: "",
      description: "",
    });

    setIsAddDialogOpen(false);

    message.success(
      `${employee.name} has been added successfully with ID ${employee.employeeId}.`
    );
  };

  return (
    <div className="max-w-5xl !p-4 max-sm:!p-0 max-sm:bg-red-200">
      <div className="flex justify-between items-center !mb-6">
        <h2 className="text-2xl font-bold">Employees</h2>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="!p-2">+Add Product</Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl !p-4">
            <DialogHeader>
              <DialogTitle>Add New Employees</DialogTitle>
            </DialogHeader>
            <div className="!space-y-4  ">
              <div className="grid grid-cols-2 gap-4">
                <div className="!space-y-2">
                  <Label htmlFor="newFirstName">First Name</Label>
                  <Input
                    className="!p-2"
                    id="newFirstName"
                    value={newEmployee.name?.split(" ")[0] || ""}
                    onChange={(e) => {
                      const lastName = newEmployee.name?.split(" ")[1] || "";
                      setNewEmployee((prev) => ({
                        ...prev,
                        name: `${e.target.value} ${lastName}`.trim(),
                      }));
                    }}
                    placeholder="Naveen"
                    required
                  />
                </div>
              <div className="!space-y-2">
                  <Label htmlFor="newLastName">Last Name</Label>
                  <Input
                   className="!p-2"
                    id="newLastName"
                    value={newEmployee.name?.split(" ")[1] || ""}
                    onChange={(e) => {
                      const firstName = newEmployee.name?.split(" ")[0] || "";
                      setNewEmployee((prev) => ({
                        ...prev,
                        name: `${firstName} ${e.target.value}`.trim(),
                      }));
                    }}
                    placeholder="Kumar"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="!space-y-2">
                  <Label htmlFor="newEmail">Email</Label>
                  <Input
                   className="!p-2"
                    id="newEmail"
                    type="email"
                    value={newEmployee.email || ""}
                    onChange={(e) =>
                      setNewEmployee((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    placeholder="naveen@gmail.com"
                    required
                  />
                </div>
               <div className="!space-y-2">
                  <Label htmlFor="newPhone">Phone Number</Label>
                  <Input
                   className="!p-2"
                    id="newPhone"
                    value={newEmployee.phone || ""}
                    onChange={(e) =>
                      setNewEmployee((prev) => ({
                        ...prev,
                        phone: e.target.value,
                      }))
                    }
                    placeholder="+91 7568695210"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="!space-y-2">
                  <Label htmlFor="newUsername">Username</Label>
                  <Input
                   className="!p-2"
                    id="newUsername"
                    value={newEmployee.username || ""}
                    onChange={(e) =>
                      setNewEmployee((prev) => ({
                        ...prev,
                        username: e.target.value,
                      }))
                    }
                    placeholder="naveenkumar"
                    required
                  />
                </div>
               <div className="!space-y-2">
                  <Label htmlFor="newPassword">Password</Label>
                  <Input
                   className="!p-2"
                    id="newPassword"
                    type="password"
                    value={newEmployee.password || ""}
                    onChange={(e) =>
                      setNewEmployee((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }))
                    }
                    placeholder="••••••••••••••••••"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="!space-y-2">
                  <Label htmlFor="newDateOfBirth">Date Of Birth</Label>
                  <Input
                   className="!p-2"
                    id="newDateOfBirth"
                    value={newEmployee.dateOfBirth || ""}
                    onChange={(e) =>
                      setNewEmployee((prev) => ({
                        ...prev,
                        dateOfBirth: e.target.value,
                      }))
                    }
                    placeholder="12/05/2004"
                  />
                </div>
              <div className="!space-y-2">
                  <Label htmlFor="newPosition">Position</Label>
                  <Input
                  className="!p-2"
                    id="newPosition"
                    value={newEmployee.position || ""}
                    onChange={(e) =>
                      setNewEmployee((prev) => ({
                        ...prev,
                        position: e.target.value,
                      }))
                    }
                    placeholder="Supervisor"
                  />
                </div>
              </div>
              <Input
                value={newEmployee.employeeId || ""}
                onChange={(e) =>
                  setNewEmployee((prev) => ({
                    ...prev,
                    employeeId: e.target.value,
                  }))
                }
                placeholder="Auto-generated"
                disabled
                className="hidden"
              />
              <Button
                onClick={handleAddEmployee}
                className="w-full"
                disabled={
                  !newEmployee.name?.trim() ||
                  !newEmployee.email?.trim() ||
                  !newEmployee.username?.trim() ||
                  !newEmployee.password?.trim()
                }
              >
                Add Employees
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Employee ID</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employees.map((employee) => (
            <TableRow key={employee.id}>
              <TableCell>{employee.name}</TableCell>
              <TableCell>{employee.employeeId}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button
                   
                    size="icon"
                    variant="ghost"
                    onClick={() => handleEditEmployee(employee)}
                    className="text-success hover:text-success !p-2"
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <AlertDialog >
                    <AlertDialogTrigger asChild>
                      <Button
                        size="icon"
                        variant="ghost"
                       
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <div className="flex items-center justify-center !mb-4 !p-2">
                          <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center">
                            <AlertTriangle className="w-6 h-6 text-destructive" />
                          </div>
                        </div>
                        <AlertDialogTitle className="text-center">
                          Delete this Employee?
                        </AlertDialogTitle>
                        <AlertDialogDescription className="text-center">
                          Are you sure you want to delete this Employee
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter className="flex justify-center gap-4 !p-2">
                        <AlertDialogAction
                          onClick={() => handleDeleteEmployee(employee.id)}
                          className="bg-destructive text-destructive-foreground hover:bg-destructive/90 !p-2"
                        >
                          Yes
                        </AlertDialogAction>
                        <AlertDialogCancel className="bg-foreground text-background hover:bg-foreground/90 !p-2">
                          No
                        </AlertDialogCancel>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-2xl !p-2">
          <DialogHeader>
            <DialogTitle>Edit Employee</DialogTitle>
          </DialogHeader>
          {editingEmployee && (
            <div className="!space-y-4">
              <div className="bg-muted !p-4 rounded-lg">
                <Textarea
                  value={editingEmployee.description}
                  onChange={(e) =>
                    setEditingEmployee((prev) =>
                      prev ? { ...prev, description: e.target.value } : null
                    )
                  }
                  className="!mb-6 min-h-[100px] resize-none !p-2"
                  placeholder="Description..."
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="!space-y-2">
                  <Label htmlFor="editFirstName">First Name</Label>
                  <Input
                    id="editFirstName"
                    value={editingEmployee.name.split(" ")[0] || ""}
                    onChange={(e) => {
                      const lastName = editingEmployee.name.split(" ")[1] || "";
                      setEditingEmployee((prev) =>
                        prev
                          ? {
                              ...prev,
                              name: `${e.target.value} ${lastName}`.trim(),
                            }
                          : null
                      );
                    }}
                  />
                </div>
                <div className="!space-y-2">
                  <Label htmlFor="editLastName">Last Name</Label>
                  <Input
                    className="!p-2"
                    id="editLastName"
                    value={editingEmployee.name.split(" ")[1] || ""}
                    onChange={(e) => {
                      const firstName =
                        editingEmployee.name.split(" ")[0] || "";
                      setEditingEmployee((prev) =>
                        prev
                          ? {
                              ...prev,
                              name: `${firstName} ${e.target.value}`.trim(),
                            }
                          : null
                      );
                    }}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="!space-y-2">
                  <Label htmlFor="editEmail">Email</Label>
                  <Input
                    className="!p-2"
                    id="editEmail"
                    type="email"
                    value={editingEmployee.email || "naveen@gmail.com"}
                    onChange={(e) =>
                      setEditingEmployee((prev) =>
                        prev ? { ...prev, email: e.target.value } : null
                      )
                    }
                  />
                </div>
                <div className="!space-y-2">
                  <Label htmlFor="editPhone">Phone Number</Label>
                  <Input
                    className="!p-2"
                    id="editPhone"
                    value={editingEmployee.phone || "+91 7568695210"}
                    onChange={(e) =>
                      setEditingEmployee((prev) =>
                        prev ? { ...prev, phone: e.target.value } : null
                      )
                    }
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="!space-y-2">
                  <Label htmlFor="editDateOfBirth">Date Of Birth</Label>
                  <Input
                    className="!p-2"
                    id="editDateOfBirth"
                    value={editingEmployee.dateOfBirth || "12/05/2004"}
                    onChange={(e) =>
                      setEditingEmployee((prev) =>
                        prev ? { ...prev, dateOfBirth: e.target.value } : null
                      )
                    }
                  />
                </div>
                <div className="!space-y-2">
                  <Label htmlFor="editPosition">Position</Label>
                  <Input
                    className="!p-2"
                    id="editPosition"
                    value={editingEmployee.position || "Supervisor"}
                    onChange={(e) =>
                      setEditingEmployee((prev) =>
                        prev ? { ...prev, position: e.target.value } : null
                      )
                    }
                  />
                </div>
              </div>
              <div className="!space-y-2">
                <Label htmlFor="editUsername">Username</Label>
                <Input
                  className="!p-2"
                  id="editUsername"
                  value={editingEmployee.username || "naveenkumar"}
                  onChange={(e) =>
                    setEditingEmployee((prev) =>
                      prev ? { ...prev, username: e.target.value } : null
                    )
                  }
                />
              </div>
              <Button onClick={handleSaveEdit} className="w-full">
                Save Changes
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
