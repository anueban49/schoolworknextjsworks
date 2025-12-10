"use client";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';
import { Form } from "react-hook-form";
import { FormField } from "@/components/ui/form";

//progress bar (optional)
//1. make the three card and its conditional rendering anyways
const formSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.email(),
  username: z.string().min(5).max(10),
  DoB: z.number(),
  password: z.string(),
  image: z.string(),
  password: z.string().min(8).max(20),
});
// this function has to be called everytime a new user submits the form
//meaning that I'll have to use something like useEffect

// function saveUserData() {
//   localStorage.setItem("userData", JSON.stringify(data));
// }

const condition1 = () => {
  const
  return (
    <>
      <Card className="w-120 h-fit p-12">
        <Input
          type="text"
          placeholder="First Name"
          value={props.firstName}
          required
        />
        <Input
          type="text"
          placeholder="Last Name"
          value={props.lastName}
          required
        />
        <Input
          type="text"
          placeholder="Username"
          value={props.username}
          required
        />

        <Button
          onClick={() => {

          }}
        >
          Continue
        </Button>
      </Card>
    </>
  )
}
const condition2 = () => {
  return (
    <>

    </>
  )
}
const condition3 = () => {

}
export default function FormPage() {
  const router = useRouter();

  const [steps, setSteps] = useState(1);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",

    }
  })



  // function advanceSteps() {
  //   if (condition==true) {
  //     setSteps(prev => prev++;)
  //   }
  // }


  return (
    <div className="w-full h-screen flex flex-row justify-center items-center">
      <Card>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onsubmit)}></form>
            <FormField
            control={form.control}
            name="username"
            render={({field}) => (
              <FormItem>
                <FormField>
                  
                </FormField>
              </FormItem>
            )}
            ></FormField>
          
          </Form>

        </CardContent>

      </Card>
    </div>
  );
}
