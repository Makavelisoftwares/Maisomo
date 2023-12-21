import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ProfilePasswordForm } from "./Profile-passwprd-form";

export const ProfilePassword = () => {
  return (
    <Card className={cn()}>
      <CardHeader>
        <CardTitle>Update Password</CardTitle>
        <CardDescription>
          Enter your current password to make update
        </CardDescription>

        <CardContent className='mt-3'>
          <ProfilePasswordForm/>
        </CardContent>
      </CardHeader>
    </Card>
  );
};
