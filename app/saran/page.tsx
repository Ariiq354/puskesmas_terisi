"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Saran() {
  const form = useRef<HTMLFormElement>(null!);

  const sendEmail = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ins6j27",
        "template_zasyesq",
        form.current,
        "wcWkm7CC7GAHr9n5x"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className="h-[15rem] w-full bg-[url('/hero-bg.png')] bg-emerald-900 bg-no-repeat bg-cover bg-center flex justify-center items-end text-white font-bold text-6xl pb-4">
        Saran dan Keluhan
      </div>
      <div className="flex justify-center">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-emerald-900 w-full max-w-4xl flex flex-col justify-center gap-4 my-4 rounded-md p-8"
        >
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="name" className="text-white font-bold">
              Nama
            </Label>
            <Input type="text" name="user_name" placeholder="Nama" />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="email" className="text-white font-bold">
              Email
            </Label>
            <Input type="email" name="user_email" placeholder="Email" />
          </div>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="pesan" className="text-white font-bold">
              Pesan
            </Label>
            <Textarea
              placeholder="Tulis pesan disini"
              id="message"
              name="message"
            />
          </div>
          <Button
            type="submit"
            className="font-bold bg-emerald-400 hover:bg-emerald-200"
          >
            Kirim
          </Button>
        </form>
      </div>
      <div className="flex justify-center my-4">
        <iframe
          src="https://docs.google.com/presentation/d/e/2PACX-1vQe635b2ug9A9qogoe5AMlcmYgDnfFWE7kACOiZPKIGwCa4dok7LFjT-O70RqbB04sJxfrjUd12DYrN/embed?start=false&loop=false&delayms=3000"
          width="960"
          height="569"
          allowFullScreen={true}
        ></iframe>
      </div>
    </>
  );
}
