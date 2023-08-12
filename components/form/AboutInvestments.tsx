import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { cn } from "@/lib/utils";

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
import { Label } from "../ui/label";

import { Slider } from "../ui/slider";
import { Badge } from "../ui/badge";

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
        <fieldset className="space-y-4 animate-fade-up opacity-0 delay-100">
          <Label>
            Del 1 al 10 indica que tan satisfecho(a) te encuentras al día de hoy
            con tu solvencia económica
          </Label>
          <Slider
            defaultValue={[1]}
            min={1}
            max={10}
            step={1}
            onValueChange={(val) => form.setFinancialSatifaction(val[0])}
          />
          <div className="text-xs flex items-center justify-between">
            <span className="font-semibold">Nada Satisfecho</span>
            <Badge>{form.financialSatisfaction}</Badge>
            <span className="font-semibold">Muy Satisfecho</span>
          </div>
        </fieldset>
        <fieldset className="space-y-2 animate-fade-up opacity-0 delay-100">
          <Label>¿Actualmente cuentas con alguna inversión?</Label>
          <Select
            required
            onValueChange={(val) =>
              form.setCurrentInvestment(val as "si" | "no")
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Selecciona una opción" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="si">Si</SelectItem>
              <SelectItem value="no">No</SelectItem>
            </SelectContent>
          </Select>
        </fieldset>
        {form.currentInvestment === "si" && (
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
                  <SelectItem value="Creo que se necesita mucho dinero">
                    Creo que se necesita mucho dinero
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
        <fieldset className="space-y-2 animate-fade-up opacity-0 delay-100">
          <Label>
            {form.currentInvestment === "si"
              ? "¿Qué te motiva a invertir?"
              : "¿Qué te motivaría a dar el siguiente paso y comenzar a invertir?"}
          </Label>
          <Select
            required={isActive}
            onValueChange={(val) => form.setMotivationReason(val)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Selecciona una opción" />
            </SelectTrigger>
            <SelectContent>
              {motivationReasons.map((reason) => (
                <SelectItem key={reason} value={reason}>
                  {reason}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </fieldset>
        {form.motivationReason === "Otro" && (
          <fieldset className="space-y-2 animate-fade-up opacity-0 delay-100">
            <Label>Especifica otro motivo:</Label>
            <Textarea
              required
              onBlur={(e) => form.setMotivationReasonOther(e.target.value)}
              className="resize-none"
            />
          </fieldset>
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

const motivationReasons = [
  "Blindar tu economía ante cualquier eventualidad",
  "Generar un cambio en tu estilo de vida",
  "Tener una vejez tranquila",
  "Lograr independencia financiera",
  "Viajar",
  "Vivir en un lugar soñado",
  "Dejar un legado para mi familia",
  "Otro",
];
