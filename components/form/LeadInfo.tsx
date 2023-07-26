import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

import { cn } from "@/lib/utils";
import { useFormStore } from "@/context/useFormContext";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

type LeadInfoProps = {
  isActive: boolean;
  onPrev: () => void;
};

export const LeadInfo = ({ isActive, onPrev }: LeadInfoProps) => {
  const form = useFormStore((state) => ({
    ...state,
  }));
  return (
    <Card
      className={cn(
        "hidden animate-fade-up delay-100 opacity-0",
        isActive && "block"
      )}
    >
      <CardHeader className="text-center mb-5">
        <CardTitle>¡Por último!</CardTitle>
        <CardDescription className="max-w-sm m-auto">
          Llena tus datos para compartirte información de valor acerca de
          inversiones inteligentes en tierra.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <fieldset className="animate-fade-up delay-100 opacity-0">
          <Label className="inline-block mb-2 leading-5">Nombre:</Label>
          <Input
            onBlur={(e) => form.setLeadName(e.target.value)}
            defaultValue={form.leadName}
            required={isActive}
            type="text"
            placeholder="Ingresa tu nombre"
          />
        </fieldset>
        <fieldset className="animate-fade-up delay-200 opacity-0">
          <Label className="inline-block mb-2 leading-5">
            Correo Electrónico:
          </Label>
          <Input
            required={isActive}
            onBlur={(e) => form.setLeadEmail(e.target.value)}
            defaultValue={form.leadEmail}
            type="email"
            placeholder="Ingresa tu correo electrónico"
          />
        </fieldset>
        <fieldset className="animate-fade-up delay-300 opacity-0">
          <Label className="inline-block mb-2 leading-5">
            Número de teléfono:
          </Label>
          <Input
            onBlur={(e) => form.setLeadPhone(e.target.value)}
            defaultValue={form.leadPhone}
            type="tel"
            placeholder="Ingresa tu número de teléfono"
          />
        </fieldset>
      </CardContent>
      <CardFooter className="justify-end space-x-4">
        <Button type="button" variant="ghost" onClick={onPrev}>
          Regresar
        </Button>
        <Button>Continuar</Button>
      </CardFooter>
    </Card>
  );
};
