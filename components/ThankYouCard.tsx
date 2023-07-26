import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { cn } from "@/lib/utils";

import { Button } from "./ui/button";

type ThankYouCardProps = {
  isActive: boolean;
  onEnd: () => void;
};

export const ThankYouCard = ({ isActive, onEnd }: ThankYouCardProps) => {
  return (
    <Card
      className={cn(
        "hidden animate-fade-up delay-100 opacity-0",
        isActive && "block"
      )}
    >
      <CardHeader className="text-center mb-5">
        <CardTitle>¡Gracias por tu tiempo!</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center max-w-xs m-auto">
          Tu respuesta ha sido grabada y pronto me pondré en contacto contigo
        </p>
      </CardContent>
      <CardFooter className="justify-center">
        <Button onClick={onEnd}>Volver al inicio</Button>
      </CardFooter>
    </Card>
  );
};
