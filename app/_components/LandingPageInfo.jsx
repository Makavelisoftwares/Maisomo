import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export const LandingPageInfo = () => {
  return (
    <div className="md:px-[100px] mt-3 flex items-center justify-center">
      {/* MARKETING CONTENT */}
      <Card className="md:w-[700px] p-10 w-[300px] min-h-[60vh] border-none shadow-none">
        <div className="flex items-center justify-center">
          <div className="text-emerald-800 w-fit flex items-center space-x-1 text-center justify-center p-3 bg-emerald-200/30">
            <span>🤖</span>
            <span className="font-bold">No. 1 AI BASED LMS</span>
          </div>
        </div>

        <div className="text-center mt-10 font-semibold text-xl">
          <span className="text-emerald-500">MAiSOMO</span> IMPROVES LEARNERS'
          AND INSTRUCTORS' KNOWLEDGE
        </div>

        <div className="text-muted-foreground text-sm my-5 text-center">
          Transform education with our cutting-edge AI-powered LMS,
          revolutionizing learning experiences. Elevate engagement, streamline
          content delivery, and empower educators for unparalleled success. Join
          the future of education today
        </div>

        <div className="flex items-center justify-center">
          <div className="p-3 rounded-md text-center font-bold bg-gradient-to-r md:text-2xl text-lg mt-3 from-fuchsia-600 to-pink-600 text-white w-fit">
            improve your knowledge.
          </div>
        </div>
      </Card>
    </div>
  );
};
