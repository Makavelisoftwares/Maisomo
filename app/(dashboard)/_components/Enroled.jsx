import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cards } from "./Cards";

export const Enroled = () => {
  return (
    <Card className="mt-4 p-4 shadow-none border-none">
      <CardHeader>
        <CardTitle>Enrolled Courses</CardTitle>
      </CardHeader>
      <CardContent>
        <Cards/>
      </CardContent>
    </Card>
  );
};
