import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const BrowseSkeleton = () => {
  const ArraySkeleton = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

  return (
    <div>
      <Skeleton className="h-[40vh] w-full mb-4" />
      <div className="flex space-x-2 mb-2">
        <Skeleton className="h-[40px] w-[40px]" />
        <Skeleton className="h-[40px] w-[100px]" />
      </div>
      <div className="flex space-x-2 mb-3">
        <Skeleton className="h-[40px] w-[100px]" />
        <Skeleton className="h-[40px] w-[100px]" />
        <Skeleton className="h-[40px] w-[100px]" />
        <Skeleton className="h-[40px] w-[100px]" />
        <Skeleton className="h-[40px] w-[100px]" />
        <Skeleton className="h-[40px] w-[100px]" />
      </div>

      <div className="grid grid-cols-3 gap-4">
        {ArraySkeleton.map((s, index) => (
          <Card className="col-span-1 rounded-none" key={index}>
            <CardContent className="p-1 overflow-hidden">
              <div className="mb-2">
                <Skeleton className="w-full h-[30vh]" />
              </div>

              <div className="flex items-center space-x-2 mb-3">
                <div>
                  <Skeleton className="w-[35px] h-[35px] rounded-full" />
                </div>
                <div className="flex flex-col space-y-1">
                  <Skeleton className="w-[200px] h-[20px] rounded-none" />
                  <Skeleton className="w-[120px] h-[15px] rounded-none" />
                </div>
              </div>

              <div className="flex flex-col space-y-1 mb-3">
                <Skeleton className="w-full h-[10px] rounded-none" />
                <Skeleton className="w-full h-[10px] rounded-none" />
                <Skeleton className="w-full h-[10px] rounded-none" />
                <Skeleton className="w-[50px] h-[10px] rounded-none" />
              </div>

              <div className="flex items-center justify-between">
                <Skeleton className="w-[200px] h-[10px] rounded-none" />
                <Skeleton className="w-[30px] h-[30px] rounded-none" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
