"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
  CardAction,
  CardContent,
} from "@/components/ui/card";
import {
  GoogleLogoIcon,
  EyeIcon,
  EyeClosedIcon,
} from "@phosphor-icons/react/dist/ssr";

import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email({ message: "Email inválido" }),
  password: z
    .string()
    .min(6, { message: "Senha deve ter no mínimo 6 caracteres" }),
});

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="flex flex-col w-full max-w-md p-8">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Entre com suas credenciais</CardDescription>
          <CardAction className="font-bold">
            <Button variant="link">Cadastrar-se</Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <Input type="email" placeholder="email" required />
            <Input type="password" placeholder="senha" required />
          </div>
          <CardAction>
            <Button variant="link">Esqueceu a senha?</Button>
          </CardAction>
          <div className="border-b py-6">
            <Button
              className="bg-purple-700 w-full hover:bg-purple-800"
              variant="default"
            >
              Entrar
            </Button>
          </div>
          <Button variant="outline" className="flex items-center w-full mt-6">
            Fazer Login com o Google <GoogleLogoIcon className="font-bold" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
