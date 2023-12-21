import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProfileNamesForm } from "./Profile-names-form";

export const ProfileNames = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Settings</CardTitle>
        <CardDescription>
          These are your personal details, some are visible to the public
        </CardDescription>

        <CardContent className='mt-3'>
          <ProfileNamesForm/>
        </CardContent>
      </CardHeader>
    </Card>
  );
};
