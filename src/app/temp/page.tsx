"use client";
import React, { useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import { SessionProvider } from "next-auth/react";

function Func() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      console.log("User session:", session);
    } else if (status === "unauthenticated") {
      console.log("No user session found.");
    }
  }, [session, status]);

  return (
    <div>
      {status === "loading" && <p>Loading...</p>}
      {status === "authenticated" ? (
        <>
        <p>Welcome, {session?.user?.name}</p>
        <button onClick={()=>signOut()}>Lobout</button>
        </>
      ) : (
        <p>Please log in.</p>
      )}
    </div>
  );
}

// Fix: Accepting `children` as a prop for wrapping other components
const Temp = ({ children }: any) => {
  return <SessionProvider>{children}</SessionProvider>;
};

// Using Temp to wrap the Func component
export default function App() {
  return (
    <Temp>
      <Func />
    </Temp>
  );
}