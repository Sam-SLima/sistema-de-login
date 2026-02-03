import React from "react";
import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
  CardAction,
  CardContent,
} from "@/components/ui/card";
// import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="flex flex-col w-full max-w-md p-8">
        <CardHeader>
          <CardTitle>Registrar-se</CardTitle>
          <CardDescription>Preencha seu cadastro</CardDescription>
          <CardAction className="font-bold">
            <Button variant="link">Cadastrar-se</Button>
          </CardAction>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
    </div>
  );
};

export default Register;
