"use client";
import { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import UserCard from "./components/UserCard/UserCard";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 bg-slate-100">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-blue-500 md:text-5xl lg:text-6xl">
        Nextjs App
      </h1>
      <Paper
        elevation={1}
        className="p-4 w-1/2 flex flex-col items-center justify-center"
      >
        <h2 className="mb-6 text-lg font-normal text-blue-500 lg:text-xl sm:px-16 xl:px-48">
          Mock User List
        </h2>
        {users.map((user) => (
          <UserCard key={user.id} data={user} />
        ))}
      </Paper>
    </main>
  );
}
