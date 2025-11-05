"use client";

import { useUser } from "@auth0/nextjs-auth0";
import { useEffect, useRef, useState } from "react";
import TopBar from "./topbar";
import DarkModeToggle from "@/components/DarkModeToggle";
import Chat from "@/components/chat/Chat";

export default function Home() {
  const { user, isLoading, error } = useUser();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("/api/me")
      .then((res) => res.json())
      .then(setData);
  }, []);
  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="w-[calc(100vw-16px)] h-[calc(100vh-16px)] rounded-2xl flex flex-col overflow-hidden">
          <TopBar />
          <Chat />
        </div>
      </div>
    </>
  );
}
