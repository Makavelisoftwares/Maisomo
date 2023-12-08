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
import { SignUp } from "@/validator/ValidatorScheme";
import axios from "axios";
import { useFormik } from "formik";
import { Loader2 } from "lucide-react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const SignUpForm = ({ title, description }) => {
  const [isSubmitting, setisSubmitting] = useState(false);
  const { push } = useRouter();

  const { values, errors, handleChange, handleBlur, handleSubmit, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        firstname: "",
        lastname: "",
      },
      validationSchema: SignUp,
      onSubmit: async (items, action) => {
        try {
          setisSubmitting(true);

          const promise = () =>
            new Promise((resolve) => setTimeout(resolve, 1000));

          const { data } = await axios.post("/api/sign-up", {
            firstname: items.firstname,
            lastname: items.lastname,
            email: items.email,
            password: items.password,
          });

          toast.message('account has been created',{
            description:'redirecting to sign-in page'
          })

          push('/auth/sign-in')
        } catch (error) {
          const response = error.response.data;
          console.log(response);
          toast.error(response);
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
          <div className="mb-2 grid gap-3 grid-cols-2">
            <div className="col-span-1">
              <div>
                <Label>First Name</Label>
              </div>
              {errors.firstname && touched.firstname && (
                <p className="text-rose-400 text-xs">{errors.firstname}</p>
              )}
              <div>
                <Input
                  name="firstname"
                  disabled={isSubmitting}
                  value={values.firstname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="firstname"
                />
              </div>
            </div>

            <div className="col-span-1">
              <div>
                <Label>Last Name</Label>
              </div>
              {errors.lastname && touched.lastname && (
                <p className="text-rose-400 text-xs">{errors.lastname}</p>
              )}
              <div>
                <Input
                  disabled={isSubmitting}
                  value={values.lastname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="lastname"
                  id="lastname"
                />
              </div>
            </div>
          </div>

          <div className="mb-2">
            <div>
              <Label>Email Address</Label>
            </div>
            {errors.email && touched.email && (
              <p className="text-rose-400 text-xs">{errors.email}</p>
            )}
            <div>
              <Input
                disabled={isSubmitting}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                name="email"
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
                disabled={isSubmitting}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                type="password"
                name="password"
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
          <span>l've An Account?</span>
          <Link className="text-sky-500" href="/auth/sign-in">
            Sign in
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};
