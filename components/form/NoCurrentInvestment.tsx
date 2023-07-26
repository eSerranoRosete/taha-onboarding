import React from "react";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useFormStore } from "@/context/useFormContext";

export const NoCurrentInvestment = () => {
  const form = useFormStore((state) => ({
    ...state,
  }));

  return (
    <>
      <fieldset className="space-y-2 animate-fade-up opacity-0 delay-100">
        <Label>¿Qué te ha impedido invertir?</Label>
        <Select required onValueChange={(val) => form.setNoInvestReason(val)}>
          <SelectTrigger>
            <SelectValue placeholder="Selecciona una opción" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Miedo al Fracaso">Miedo al Fracaso</SelectItem>
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
  );
};
