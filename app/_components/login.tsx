import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardTitle } from "@/components/ui/card";

const Login = () => {
  return (
    <Card className="flex flex-col mx-auto w-[30%] p-8 ">
      <CardTitle>Login</CardTitle>
      <Input placeholder="email" />
      <Input placeholder="senha" />
      <Button variant="default">Button</Button>
    </Card>
  );
};

export default Login;
