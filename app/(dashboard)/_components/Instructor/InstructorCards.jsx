import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Overviewcard } from "./Overviewcards";

export const InstructorCard = () => {
  return (
    <div className="mt-4">
      <Card className='border-none shadow-none'>
        <CardHeader>
          <CardTitle>Dashboard Overview</CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet consectetur.
          </CardDescription>
          <CardContent className='mt-4'>
            <Overviewcard/>
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );
};
