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

export const HasCurrentInvestment = () => {
  const form = useFormStore((state) => ({
    ...state,
  }));

  return (
    <>
      <fieldset className="space-y-2 animate-fade-up opacity-0 delay-100">
        <Label>¿Qué tipo de inversión?</Label>
        <Select required onValueChange={(val) => form.setInvestmentType(val)}>
          <SelectTrigger>
            <SelectValue placeholder="Selecciona una opción" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Bienes Raíces">Bienes Raíces</SelectItem>
            <SelectItem value="Bolsa de Valores">Bolsa de Valores</SelectItem>
            <SelectItem value="Metales">Metales</SelectItem>
            <SelectItem value="Gubernamentales">Gubernamentales</SelectItem>
            <SelectItem value="Cripto Monedas">Cripto Monedas</SelectItem>
            <SelectItem value="Fondos Privados">Fondos Privados</SelectItem>
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
  );
};
