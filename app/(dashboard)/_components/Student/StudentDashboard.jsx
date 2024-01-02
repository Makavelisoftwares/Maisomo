import { Card, CardContent } from "@/components/ui/card";
import { EnrolledCards } from "./EnrolledCards";

export const StudentDashboard = ({ enrols }) => {

    
  return (
    <Card className="shadow-none mt-3 border-none">
      <CardContent className="grid grid-cols-3 gap-3">
        {enrols?.map((data) => (
          <EnrolledCards key={data?.id} data={data} />
        ))}
      </CardContent>
    </Card>
  );
};
