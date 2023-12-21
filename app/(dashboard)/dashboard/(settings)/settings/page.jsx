import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { ProfileCard } from "../_components/ProfileCard";
import { AlertTriangle } from "lucide-react";

function SettingsPage() {
  return (
    <>
      <div className="flex items-center space-x-2 bg-amber-100 text-gray-800 text-sm p-2">
        <AlertTriangle />
        <span>
          Google Account User should avoid updating their information. This may
          result to application error
        </span>
      </div>
      <Card className="border-none shadow-none">
        <CardHeader>
          <CardTitle>Settings</CardTitle>
          <CardDescription>Control your profile setup</CardDescription>
          <CardContent>
            <ProfileCard />
          </CardContent>
        </CardHeader>
      </Card>
    </>
  );
}

export default SettingsPage;
