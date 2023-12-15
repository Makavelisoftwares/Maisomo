import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Filter } from "lucide-react";
import { CategoryList } from "./CategoryList";

export const Categories = () => {
  return (
    <Card className="border-none sticky top-0 z-10 bg-white shadow-none ">
      <CardHeader>
        <CardTitle className="flex items-center space-x-3">
          <div>
            <Filter />
          </div>
          <div>Categories</div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2">
          <CategoryList />
        </div>
      </CardContent>
    </Card>
  );
};
