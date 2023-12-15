import { Button } from "@/components/ui/button";
import {
  AtomIcon,
  CompassIcon,
  ComputerIcon,
  Microscope,
  Wallet,
} from "lucide-react";

export const CategoryList = () => {
  const list = [
    {
      name: "computer science",
      icon: <ComputerIcon />,
    },
    {
      name: "Mathematics ",
      icon: <CompassIcon />,
    },
    {
      name: "Finance",
      icon: <Wallet />,
    },
    {
      name: "Biology",
      icon: <Microscope />,
    },
    {
      name: "Physics",
      icon: <AtomIcon />,
    },
  ];

  return (
    <div className="flex space-x-3 items-center justify-between ">
      {list.map((l, index) => (
        <Button
          className="flex items-center space-x-1"
          variant="secondary"
          key={index}
        >
          <div>{l.icon}</div>
          <div>{l.name}</div>
        </Button>
      ))}
    </div>
  );
};
