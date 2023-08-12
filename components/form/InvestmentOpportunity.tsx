import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useFormStore } from "@/context/useFormContext";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

type InvestmentOpportunityProps = {
  isActive: boolean;
  onPrev: () => void;
};

export const InvestmentOpportunity = ({
  isActive,
  onPrev,
}: InvestmentOpportunityProps) => {
  const form = useFormStore((state) => ({
    ...state,
  }));

  const showAmountField =
    form.wantsToDiversify === "si" || form.wantsToInvest === "si";

  return (
    <Card
      className={cn(
        "hidden animate-fade-up delay-100 opacity-0",
        isActive && "block"
      )}
    >
      <CardHeader className="text-center mb-5">
        <CardTitle>Oportunidades de Inversión</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        {form.currentInvestment === "si" && (
          <>
            <fieldset className="space-y-2 animate-fade-up opacity-0 delay-100">
              <Label>
                ¿Has pensado en diversificar tu portafolio invirtiendo en
                terrenos patrimoniales?
              </Label>
              <Select
                required={isActive}
                onValueChange={(val) =>
                  form.setWantsToDiversify(val as "si" | "no")
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

            {form.wantsToDiversify === "si" && (
              <fieldset className="space-y-2 animate-fade-up opacity-0 delay-100">
                <Label>¿Qué enfoque le darías a tu inversión?</Label>
                <Select
                  required={isActive}
                  onValueChange={(val) => form.setInvestmentFocus(val)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona una opción" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Creación de Patrimonio">
                      Creación de Patrimonio
                    </SelectItem>
                    <SelectItem value="Creación de Flujo de Efectivo">
                      Creación de Flujo de Efectivo
                    </SelectItem>
                  </SelectContent>
                </Select>
              </fieldset>
            )}

            {form.wantsToDiversify === "no" && (
              <p className="text-muted-foreground text-sm font-medium">
                Al invertir en tierra, la materia prima de cualquier negocio
                inmobiliario, podrás maximizar tus ganancias.
              </p>
            )}
          </>
        )}
        {form.currentInvestment === "no" && (
          <>
            <fieldset className="space-y-2 animate-fade-up opacity-0 delay-100">
              <Label>
                ¿Estarías abierto a escuchar sobre un modelo de inversión seguro
                donde puedes proteger tu dinero de la inflación y aumentar su
                valor con el paso del tiempo?
              </Label>
              <Select
                required={isActive}
                onValueChange={(val) =>
                  form.setWantsToInvest(val as "si" | "no")
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
            {form.wantsToInvest === "no" && (
              <p className="text-muted-foreground text-sm font-medium">
                Para lograr una independencia financiera, el mejor camino es la
                inversión. Tú puedes hacer que el dinero trabaje para ti sin que
                tengas que ser un experto.
              </p>
            )}
          </>
        )}

        {showAmountField && (
          <fieldset className="space-y-2 animate-fade-up opacity-0 delay-100">
            <Label>
              ¿Cuánto estarías dispuesto a destinar de manera mensual a este
              tipo de inversión?
            </Label>
            <Select
              required={isActive}
              onValueChange={(val) => form.setInvestAmount(val)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecciona una opción" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="De $3,000 a $10,000">
                  De $3,000 a $10,000
                </SelectItem>
                <SelectItem value="De $10,000 a $20,000">
                  De $10,000 a $20,000
                </SelectItem>
                <SelectItem value="De $20,000 a $50,000">
                  De $20,000 a $50,000
                </SelectItem>
                <SelectItem value="Más de $50,000">Más de $50,000</SelectItem>
              </SelectContent>
            </Select>
          </fieldset>
        )}
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
