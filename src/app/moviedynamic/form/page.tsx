"use client";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
//progress bar (optional)

type userFormData = {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  DoB: number;
  password: string;
  image: string;
};
// this function has to be called everytime a new user submits the form
//meaning that I'll have to use something like useEffect

function saveUserData(data: userFormData) {
  localStorage.setItem("userData", JSON.stringify(data));
}
export default function FormPage(props: userFormData) {
    const router = useRouter();
  return (
    <>
      <div className="w-full h-screen flex flex-row justify-center">
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
              router.push("/")
            }}
          >
            Continue
          </Button>
        </Card>
      </div>
    </>
  );
}
