"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";

import { signIn, useSession } from "next-auth/react";
import { useFormik } from "formik";
import { SignInValidator } from "@/validator/ValidatorScheme";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const SignInForm = ({ title, description }) => {
  const [isSubmitting, setisSubmitting] = useState(false);

  const { push } = useRouter();

  const session = useSession();
  console.log(session?.data?.user);

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: SignInValidator,
      onSubmit: async (items, action) => {
        try {
          setisSubmitting(true);
          await new Promise((resolve) => setTimeout(resolve, 1000));
          const auth = await signIn("credentials", {
            email: items.email,
            password: items.password,
            callbackUrl: `${window?.location?.origin}`,
            redirect: true,
          });

          console.log(auth);
          if (!auth.url) {
            toast.error(auth.error);
          } else {
            push(`${window?.location?.origin}`);
          }
        } catch (error) {
          console.log(error);
        } finally {
          setisSubmitting(false);
        }
      },
    });

  return (
    <Card className="md:w-[390px] w-[250px] shadow-sm rounded-none ">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="mb-3">
          <Button
            onClick={() =>
              signIn("google", {
                redirect: true,
                callbackUrl: `${window.location.origin}`,
              })
            }
            variant="secondary"
            size="sm"
            className="border flex items-center space-x-2 border-zinc-400/20 w-full"
          >
            <Image src="/google.svg" alt="google" height={30} width={30} />
            <p>Continue with Google</p>
          </Button>
        </div>

        <div className="flex items-center justify-center mb-4">
          <div className="text-gray-400/50 w-[10px] h-[10px] bg-white">or</div>
        </div>

        <form>
          <div className="mb-2">
            <div>
              <Label>Email Address</Label>
            </div>
            {errors.email && touched.email && (
              <p className="text-rose-400 text-xs">{errors.email}</p>
            )}
            <div>
              <Input
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                id="email"
              />
            </div>
          </div>

          <div className="mb-2">
            <div>
              <Label>Password</Label>
            </div>
            {errors.password && touched.password && (
              <p className="text-rose-400 text-xs">{errors.password}</p>
            )}
            <div>
              <Input
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                id="password"
              />
            </div>
          </div>
        </form>
      </CardContent>

      <CardFooter className="flex flex-col">
        <Button
          disabled={isSubmitting}
          onClick={handleSubmit}
          type="submit"
          className="w-full hover:bg-sky-600 bg-sky-500"
        >
          {isSubmitting ? <Loader2 className="animate-spin" /> : "CONTINUE"}
        </Button>

        <div className="text-sm mt-3 flex space-x-2 text-zinc-400/50">
          <span>No Account?</span>
          <Link className="text-sky-500" href="/auth/sign-up">
            Sign up
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};
