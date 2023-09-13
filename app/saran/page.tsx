"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

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
          toast.success("Pesan Berhasil Dikirim");
        },
        (error) => {
          console.log(error.text);
          toast.error("Pesan Gagal Terkirim, Hubungi Admin");
        }
      );
  };
  return (
    <>
      <Toaster />
      <div className="h-[15rem] w-full bg-[url('/hero-bg.png')] bg-emerald-500 bg-no-repeat bg-cover bg-center flex justify-center items-center text-white font-bold text-4xl lg:text-6xl text-center">
        Saran dan Keluhan
      </div>
      <div className="flex justify-center gap-4 container">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-emerald-700 w-full max-w-xl flex flex-col justify-center gap-4 my-4 rounded-md p-8"
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
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.2901198948684!2d108.15199660978666!3d-6.484895863374659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6ec95b2b6de7a3%3A0xc40f4ec4fd9612cf!2sPuskesmas%20Terisi!5e0!3m2!1sen!2sid!4v1694432838179!5m2!1sen!2sid"
          width="600"
          height="450"
          loading="lazy"
          className="my-4 border-4 border-emerald-700"
        ></iframe>
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
