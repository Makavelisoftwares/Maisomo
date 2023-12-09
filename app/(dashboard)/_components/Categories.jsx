import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Filter } from "lucide-react";

export const Categories = () => {
  return (
    <Card className="border-none shadow-none ">
      <CardHeader>
        <CardTitle className="flex items-center space-x-3">
          <div>
            <Filter />
          </div>
          <div>Categories</div>
        </CardTitle>
      </CardHeader>
    </Card>
  );
};
