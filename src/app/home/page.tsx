import MenuCard from "@/components/menuCard";
import Layout from "./layout";
import { menuItems } from "@/components/productItem";

export default function Menu() {
  return (
    <Layout>
      <div className="max-w-7xl !mx-auto !px-4 sm:!px-6 lg:!px-8 !py-6">
        <div className="!mb-8">
          <h2 className="text-2xl md:text-3xl font-bold !mb-2">
            Special Menu For You
          </h2>
          <p className="text-muted-foreground">
            Discover our delicious selection of fresh food
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {menuItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
