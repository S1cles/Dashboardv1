'use client'
import './globals.css'
import {useEffect} from "react";
import {useRouter} from "next/navigation";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    window.location.href = '/pages/auth';
  }, []);

  return (
    <main>


    </main>
  );
}
