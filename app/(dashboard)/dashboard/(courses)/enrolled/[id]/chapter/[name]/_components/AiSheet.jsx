"use client";

import { MarkdownLite } from "@/components/MarkDown";
import { Preview } from "@/components/Preview";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import axios from "axios";
import { useFormik } from "formik";
import { Bot, CheckCheck, Copy, MoreHorizontal, Send } from "lucide-react";
import { useState } from "react";

export const AiSheet = ({ params }) => {
  const courseId = params?.id;
  const chapterId = params?.name;
  const [content, setcontent] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [copied, setcopied] = useState(false);
  const [showClipboard, setshowClipboard] = useState(false);

  const { errors, values, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: {
        question: "",
      },
      onSubmit: async (items, actions) => {
        try {
          setisLoading(true);
          setshowClipboard(true);
          const resp = await axios.post("/api/question", {
            courseId,
            chapterId,
            question: items.question,
          });
          console.log(resp.data);
          setcontent(resp.data);
        } catch (error) {
          console.log(error);
        } finally {
          setisLoading(false);
        }
      },
    });

  const handleGenerate = async () => {
    try {
      setisLoading(true);
      setshowClipboard(true);
      const resp = await axios.post("/api/ai", { courseId, chapterId });
      console.log(resp.data);
      setcontent(resp.data);
    } catch (error) {
      console.log(error);
    } finally {
      setisLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setcopied(true);

    setTimeout(() => {
      setcopied(false);
    }, 1000);
  };

  return (
    <Sheet className="h-screen ">
      <SheetTrigger asChild>
        <Button
          size="sm"
          className="bg-sky-600 hover:bg-sky-900 text-white h-[50px] w-[50px] rounded-full"
        >
          <Bot />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            Welcome to <span className="text-emerald-500">MAiSOMO</span> ai
            assistant
          </SheetTitle>
          <SheetDescription>
            This AI assistant provides more content on the course and chapter
            you're in. It also provides books and links that can be used to
            further enhance your understanding to this course and chapter.
          </SheetDescription>
        </SheetHeader>

        <ScrollArea className="h-[65vh]">
          {isLoading ? (
            <div className="text-xs w-full h-full flex items-center justify-center space-x-1 mt-44">
              <span className="text-emerald-500 mr-1">MAiSOMO</span> is
              thinking...
            </div>
          ) : (
            <div>
              {showClipboard && (
                <div
                  onClick={handleCopy}
                  className="flex items-center justify-end mr-6"
                >
                  {copied ? (
                    <CheckCheck className="text-emerald-400" />
                  ) : (
                    <Copy className="text-zinc-500 cursor-pointer" />
                  )}
                </div>
              )}

              <div>
                <Preview value={content} />
              </div>
              {/* <MarkdownLite text={content} /> */}
            </div>
          )}
        </ScrollArea>

        <SheetFooter className="flex items-center justify-between">
          <div>
            <Input
              placeholder="Ask me a question..."
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.question}
              name="question"
              id="question"
            />
          </div>

          <div className="flex items-center space-x-1">
            <div>
              <Button
                size="sm"
                onClick={handleSubmit}
                className="bg-sky-500 hover:bg-sky-700"
              >
                <Send />
              </Button>
            </div>
            <div>
              <Button
                onClick={handleGenerate}
                size="sm"
                className="flex items-center bg-emerald-400 hover:bg-emerald-500"
              >
                <MoreHorizontal />
              </Button>
            </div>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
