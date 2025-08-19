"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Edit, Trash2, Plus, Home, Check, X } from "lucide-react";
import { useToast } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface Product {
  id: string;
  name: string;
  status: "In stock" | "Out of stock" | "Low stock";
  productId: string;
  quantity: number;
  price: number;
  icon?: string;
}

const ProductTable = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([
    {
      id: "1",
      name: "Biriyani",
      status: "In stock",
      productId: "321654",
      quantity: 25,
      price: 199,
      icon: "🍛",
    },
    {
      id: "2",
      name: "Chicken Curry",
      status: "In stock",
      productId: "321655",
      quantity: 15,
      price: 249,
      icon: "🍗",
    },
    {
      id: "3",
      name: "Naan Bread",
      status: "Low stock",
      productId: "321656",
      quantity: 3,
      price: 49,
      icon: "🥖",
    },
  ]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const handleEdit = (productId: string) => {
    const product = products.find((p) => p.id === productId);
    if (product) {
      setEditingId(productId);
      setEditingProduct({ ...product });
    }
  };

  const handleSave = () => {
    if (editingProduct && editingId) {
      setProducts(
        products.map((p) => (p.id === editingId ? editingProduct : p))
      );
      setEditingId(null);
      setEditingProduct(null);
      toast.success("Product Saved", {
        description: "Your product has been successfully saved!",
      });
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditingProduct(null);
  };

  const handleDelete = (productId: string) => {
    setProducts(products.filter((product) => product.id !== productId));
    toast.success("Product Deleted", {
      description: "Product has been successfully deleted",
    });
  };

  const handleAddProduct = () => {
    toast.info("Add Product", {
      description: "Add product functionality would be implemented here",
    });
  };

  const getStatusVariant = (status: Product["status"]) => {
    switch (status) {
      case "In stock":
        return "default";
      case "Low stock":
        return "secondary";
      case "Out of stock":
        return "destructive";
      default:
        return "default";
    }
  };

  return (
    <div className="min-h-screen bg-background !p-4 !md:p-6">
      <div className=" ">
        <div
          className="!mb-6  flex items-center justify-between "
          onClick={() => router.push("/product/addproduct")}
        >
          <h1 className="text-2xl font-bold text-foreground md:text-3xl">
            Product
          </h1>
          <Button onClick={handleAddProduct} className="w-fit !p-2">
            <Plus className="mr-2 h-4 w-4" />
            Add Product
          </Button>
        </div>
        <Card className="hidden md:block  !p-1">
          <CardContent className=" !m-2 ">
            <Table>
              <TableHeader>
                <TableRow className="">
                  <TableHead className="w-[200px]">Product</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Product ID</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => {
                  const isEditing = editingId === product.id;
                  const currentProduct = isEditing ? editingProduct : product;

                  return (
                    <TableRow key={product.id}>
                      <TableCell className="flex items-center gap-3 !p-2 !my-1">
                        <div className="text-2xl">{product.icon}</div>
                        {isEditing ? (
                          <Input
                            value={currentProduct?.name || ""}
                            onChange={(e) =>
                              setEditingProduct((prev) =>
                                prev ? { ...prev, name: e.target.value } : null
                              )
                            }
                            className="font-medium"
                          />
                        ) : (
                          <span className="font-medium ">{product.name}</span>
                        )}
                      </TableCell>
                      <TableCell>
                        {isEditing ? (
                          <Select
                            value={currentProduct?.status}
                            onValueChange={(value: Product["status"]) =>
                              setEditingProduct((prev) =>
                                prev ? { ...prev, status: value } : null
                              )
                            }
                          >
                            <SelectTrigger className="w-[430px]">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="In stock">In stock</SelectItem>
                              <SelectItem value="Low stock">
                                Low stock
                              </SelectItem>
                              <SelectItem value="Out of stock">
                                Out of stock
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        ) : (
                          <Badge
                            variant={getStatusVariant(product.status)}
                            className={
                              product.status === "In stock"
                                ? "bg-green-400 text-white !p-1 hover:bg-green-600"
                                : " !p-1"
                            }
                          >
                            {product.status}
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell className="font-mono text-sm">
                        {product.productId}
                      </TableCell>
                      <TableCell>
                        {isEditing ? (
                          <Input
                            type="number"
                            value={currentProduct?.quantity || 0}
                            onChange={(e) =>
                              setEditingProduct((prev) =>
                                prev
                                  ? {
                                      ...prev,
                                      quantity: parseInt(e.target.value) || 0,
                                    }
                                  : null
                              )
                            }
                            className="w-20"
                          />
                        ) : (
                          product.quantity
                        )}
                      </TableCell>
                      <TableCell>
                        {isEditing ? (
                          <Input
                            type="number"
                            value={currentProduct?.price || 0}
                            onChange={(e) =>
                              setEditingProduct((prev) =>
                                prev
                                  ? {
                                      ...prev,
                                      price: parseInt(e.target.value) || 0,
                                    }
                                  : null
                              )
                            }
                            className="w-20"
                          />
                        ) : (
                          product.price
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          {isEditing ? (
                            <>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={handleSave}
                                className="text-white hover:text-green-500 hover:bg-green-500 !p-1"
                              >
                                <Check className="!mr-1 h-3 w-3" />
                                Save
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={handleCancel}
                                className="text-muted-foreground hover:text-muted-foreground hover:bg-muted/10"
                              >
                                <X className="!mr-1 h-3 w-3" />
                                Cancel
                              </Button>
                            </>
                          ) : (
                            <>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleEdit(product.id)}
                                className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-600/10 !p-2 !mx-2"
                              >
                                <Edit className="!mr-1 h-3 w-3" />
                                Edit
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleDelete(product.id)}
                                className="text-destructive hover:text-destructive hover:bg-destructive/10 !p-2"
                              >
                                <Trash2 className="!mr-1 h-3 w-3" />
                                Delete
                              </Button>
                            </>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <div className="!space-y-4 md:hidden ">
          {products.map((product) => (
            <Card key={product.id} className="!p-3">
              <CardHeader className="!pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{product.icon}</div>
                    <div>
                      <CardTitle className="text-lg">{product.name}</CardTitle>
                      <p className="text-sm text-muted-foreground font-mono">
                        ID: {product.productId}
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant={getStatusVariant(product.status)}
                    className={
                      product.status === "In stock"
                        ? "bg-green-400 text-white !p-1"
                        : " !p-1"
                    }
                  >
                    {product.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="!pt-1">
                <div className="flex items-center justify-between">
                  <div className="flex gap-6">
                    <div>
                      <p className="text-sm text-muted-foreground">Quantity</p>
                      <p className="font-medium">{product.quantity}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Price</p>
                      <p className="font-medium">{product.price}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleEdit(product.id)}
                      className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-600/10 !mx-2"
                    >
                      <Edit className="!mr-1 h-3 w-3" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(product.id)}
                      className="text-destructive hover:text-destructive hover:bg-destructive/10"
                    >
                      <Trash2 className="!mr-1 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="fixed bottom-6 left-6">
          <Button
            variant="secondary"
            size="icon"
            className="h-12 w-12 rounded-full shadow-lg"
            onClick={() => window.location.reload()}
          >
            <Home className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
