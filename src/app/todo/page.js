'use client';
import { useState } from "react";
import Link from "next/link";

import {
  Card,

  CardContent,

  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const addTask = () => {
    const task = Input.value

}
function handleChange(e) {
    console.log('input value:', e.target.value)
}
export default function todoApp() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

  return (
    <>
      <main className="w-full h-full flex items-center justify-center">
        <Card className="w-full max-w-sm p-5">
          <CardTitle>To-Do List</CardTitle>
          <div className="flex justify-between gap-3">
            <Input
              className="width-80"
              type="text"
              placeholder="Add new task"
              onChange={(e) => setTask(e.target.value)}
            ></Input>
            <Button onclick={(Input) => {if (task.trim()) {setTasks([...tasks, task]) setTask('')}}}>Add</Button>
          </div>{" "}
          <CardContent id="List"> 
            {tasks.map((t, i) => (
                <li key={i} className="w-full">{t}</li>
            ))}
            
            
          </CardContent>
        </Card>
      </main>
    </>
  );
}
