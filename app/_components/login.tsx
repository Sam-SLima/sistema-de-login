"use client";

import React from "react";
import { useRouter } from "next/navigation";
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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  email: z.string().email({ message: "Email inválido" }),
  password: z
    .string()
    .min(6, { message: "Senha deve ter no mínimo 6 caracteres" }),
});

type LoginFormData = z.infer<typeof loginSchema>;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({ resolver: zodResolver(loginSchema) });

  const onSubmit = (data: LoginFormData) => {
    console.log("dados validos", data);
  };

  const router = useRouter();
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="flex flex-col w-full max-w-md p-8">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Entre com suas credenciais</CardDescription>
          <CardAction className="font-bold">
            <Button variant="link" onClick={() => router.push("/register")}>
              Cadastrar-se
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4">
              <Input
                type="email"
                placeholder="teste@teste.com"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>
            <div className="grid gap-4 mt-4">
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  {...register("password")}
                />
                <Button
                  type="button"
                  variant="ghost"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  size="sm"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeClosedIcon className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <EyeIcon className="h-4 w-4 text-muted-foreground" />
                  )}
                  <span className="sr-only">
                    {showPassword ? "Ocultar" : "Mostrar"}
                  </span>
                </Button>
              </div>
              {errors.password && (
                <p className="text-sm text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>
            <CardAction>
              <Button variant="link">Esqueceu a senha?</Button>
            </CardAction>
            <div className="border-b py-6">
              <Button
                className="bg-purple-700 w-full hover:bg-purple-800"
                variant="default"
                type="submit"
              >
                Entrar
              </Button>
            </div>
            <Button variant="outline" className="flex items-center w-full mt-6">
              Fazer Login com o Google <GoogleLogoIcon className="font-bold" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
