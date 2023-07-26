import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { cn } from "@/lib/utils";
import { Label } from "@radix-ui/react-label";

import { Button } from "../ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFormStore } from "@/context/useFormContext";
import { Textarea } from "../ui/textarea";

type AboutInvestmentsProps = {
  isActive: boolean;
  onPrev: () => void;
};

export const AboutInvestments = ({
  isActive,
  onPrev,
}: AboutInvestmentsProps) => {
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
        <CardTitle>Acerca de Inversiones</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        <fieldset className="space-y-2 animate-fade-up opacity-0 delay-100">
          <Label>¿Actualmente cuentas con alguna inversión?</Label>
          <Select
            required
            onValueChange={(val) =>
              form.setCurrentInvestment(val as "yes" | "no")
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Selecciona una opción" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="yes">Si</SelectItem>
              <SelectItem value="no">No</SelectItem>
            </SelectContent>
          </Select>
        </fieldset>
        {form.currentInvestment === "yes" && (
          <>
            <fieldset className="space-y-2 animate-fade-up opacity-0 delay-100">
              <Label>¿Qué tipo de inversión?</Label>
              <Select
                required
                onValueChange={(val) => form.setInvestmentType(val)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona una opción" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Bienes Raíces">Bienes Raíces</SelectItem>
                  <SelectItem value="Bolsa de Valores">
                    Bolsa de Valores
                  </SelectItem>
                  <SelectItem value="Metales">Metales</SelectItem>
                  <SelectItem value="Gubernamentales">
                    Gubernamentales
                  </SelectItem>
                  <SelectItem value="Cripto Monedas">Cripto Monedas</SelectItem>
                  <SelectItem value="Fondos Privados">
                    Fondos Privados
                  </SelectItem>
                  <SelectItem value="Negocios">Negocios</SelectItem>
                  <SelectItem value="Sofipos">Sofipos</SelectItem>
                  <SelectItem value="Divisas">Divisas</SelectItem>
                  <SelectItem value="otra">Otro</SelectItem>
                </SelectContent>
              </Select>
            </fieldset>
            {form.investmentType === "otra" && (
              <fieldset className="space-y-2 animate-fade-up opacity-0 delay-100">
                <Label>Especifica el tipo de inversión:</Label>
                <Textarea
                  required
                  onBlur={(e) => form.setInvestmentOther(e.target.value)}
                  className="resize-none"
                />
              </fieldset>
            )}
          </>
        )}
        {form.currentInvestment === "no" && (
          <>
            <fieldset className="space-y-2 animate-fade-up opacity-0 delay-100">
              <Label>¿Qué te ha impedido invertir?</Label>
              <Select
                required
                onValueChange={(val) => form.setNoInvestReason(val)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona una opción" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Miedo al Fracaso">
                    Miedo al Fracaso
                  </SelectItem>
                  <SelectItem value="Desconocimiento sobre Inversiones">
                    Desconocimiento sobre Inversiones
                  </SelectItem>
                  <SelectItem value="No consigo una buena rentabilidad">
                    No consigo una buena rentabilidad
                  </SelectItem>
                  <SelectItem value="No encuentro el momento ideal">
                    No encuentro el momento ideal
                  </SelectItem>
                  <SelectItem value="otra">Otro</SelectItem>
                </SelectContent>
              </Select>
            </fieldset>
            {form.noInvestReason === "otra" && (
              <fieldset className="space-y-2 animate-fade-up opacity-0 delay-100">
                <Label>Especifica otro motivo:</Label>
                <Textarea
                  required
                  onBlur={(e) => form.setNoInvestReasonOther(e.target.value)}
                  className="resize-none"
                />
              </fieldset>
            )}
          </>
        )}
      </CardContent>
      <CardFooter className="justify-end space-x-4">
        <Button variant="ghost" type="button" onClick={onPrev}>
          Cancelar
        </Button>
        <Button>Continuar</Button>
      </CardFooter>
    </Card>
  );
};
