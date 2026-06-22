"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Register() {
    
    const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(form),
    });

    if (res.ok) {
      router.push("/login");
    } else {
      alert("Register failed");
    }
  }

    return (
        <div className="auth-page" onSubmit={handleSubmit}>
          <form className="auth-card">
             <h1> Register </h1> 
             <input  
             placeholder="กรุณาเขียนชื่อขนามสกุล"
             onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

             <input  placeholder="Email" 
              type="email"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

             <input  
              placeholder="Password"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

             <button> Register </button>

          </form>
        </div>
    );
}