import { Button } from "@/components/ui/button";


export const CategoryList = ({data}) => {
 
  return (
    <div className="flex space-x-3 items-center justify-between ">
      {data?.map((l, index) => (
        <Button
          className="flex items-center space-x-1"
          variant="secondary"
          key={index}
          size='sm'
        >
          <div className="text-sm font-bold">{l?.name}</div>
        </Button>
      ))}
    </div>
  );
};
