import { Card, CardContent } from "@/components/ui/card";
import { ServerSession } from "@/utils/ServerSession";

export const Greetings = async () => {
  const { name } = await ServerSession();

  return (
    <Card className='shadow-none border-none'>
      <CardContent className='flex items-center py-3 text-2xl font-bold'>
        <span>🎉</span>
        Greatings , <span className="text-sky-500 uppercase">{name}</span>
      </CardContent>
    </Card>
  );
};
