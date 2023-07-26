"use client";

import { HasCurrentInvestment } from "@/components/form/HasCurrentInvestment";
import { NoCurrentInvestment } from "@/components/form/NoCurrentInvestment";
import { ProgressIndicator } from "@/components/form/ProgressIndicator";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useFormStore } from "@/context/useFormContext";
import { useCounter } from "@/hooks/useCounter";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export const steps = ["Inversión", "Oportunidades", "Final"];

type PageProps = {
  params: {
    id: string;
  };
};

export default function Page({ params }: PageProps) {
  const { count, increment, decrement } = useCounter(3);
  const router = useRouter();
  const form = useFormStore((state) => ({
    ...state,
  }));

  console.log("🧠", form);

  const showAmountField =
    form.wantsToDiversify === "yes" || form.wantsToInvest === "yes";

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (count < steps.length - 1) {
      increment();
    } else {
      router.push("/" + params.id + "/thankyou");
    }
  };

  return (
    <form onSubmit={onSubmit} className="w-full p-4 min-h-[550px] max-w-lg">
      <ProgressIndicator currentStep={count} steps={steps} />
      {/* STEP 1 */}
      <Card
        className={cn(
          "hidden animate-fade-up delay-100 opacity-0",
          count === 0 && "block"
        )}
      >
        <CardHeader className="text-center">
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
          {form.currentInvestment === "yes" && <HasCurrentInvestment />}
          {form.currentInvestment === "no" && <NoCurrentInvestment />}
        </CardContent>
        <CardFooter className="justify-end space-x-4">
          <Link
            href={"/" + params.id}
            className={cn(buttonVariants({ variant: "ghost" }))}
          >
            Cancelar
          </Link>
          <Button>Continuar</Button>
        </CardFooter>
      </Card>
      {/* STEP 2 */}
      <Card
        className={cn(
          "hidden animate-fade-up delay-100 opacity-0",
          count === 1 && "block"
        )}
      >
        <CardHeader className="text-center">
          <CardTitle>Oportunidades de Inversión</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          {form.currentInvestment === "yes" && (
            <fieldset className="space-y-2 animate-fade-up opacity-0 delay-100">
              <Label>
                ¿Has pensado en diversificar tu portafolio invirtiendo en
                terrenos patrimoniales?
              </Label>
              <Select
                required={count === 1}
                onValueChange={(val) =>
                  form.setWantsToDiversify(val as "yes" | "no")
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
          )}
          {form.currentInvestment === "no" && (
            <fieldset className="space-y-2 animate-fade-up opacity-0 delay-100">
              <Label>
                ¿Te gustaría conocer una inversión con la que puedes proteger tu
                dinero de la inflación, aunmentando su valor con el paso del
                tiempo?
              </Label>
              <Select
                required={count === 1}
                onValueChange={(val) =>
                  form.setWantsToInvest(val as "yes" | "no")
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
          )}
          {showAmountField && (
            <fieldset className="space-y-2 animate-fade-up opacity-0 delay-100">
              <Label>¿Cuál sería una inversión ideal para ti?</Label>
              <Select
                required={count === 1}
                onValueChange={(val) => form.setInvestAmount(val)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona una opción" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10k-40k">De $10,000 a $40,000</SelectItem>
                  <SelectItem value="40k-80k">De $40,000 a $80,000</SelectItem>
                  <SelectItem value="80k-100k">
                    De $80,000 a $100,000
                  </SelectItem>
                  <SelectItem value="more-100k">Más de $100,000</SelectItem>
                </SelectContent>
              </Select>
            </fieldset>
          )}
        </CardContent>
        <CardFooter className="justify-end space-x-4">
          <Button type="button" variant="ghost" onClick={decrement}>
            Regresar
          </Button>
          <Button>Continuar</Button>
        </CardFooter>
      </Card>
      {/* STEP 3 */}
      <Card
        className={cn(
          "hidden animate-fade-up delay-100 opacity-0",
          count === 2 && "block"
        )}
      >
        <CardHeader className="text-center">
          <CardTitle>¡Por último!</CardTitle>
          <CardDescription className="max-w-xs m-auto">
            Llena tus datos para compartirte información respecto a inversiones
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <fieldset className="animate-fade-up delay-100 opacity-0">
            <Label className="inline-block mb-2 leading-5">Nombre:</Label>
            <Input
              onBlur={(e) => form.setLeadName(e.target.value)}
              defaultValue={form.leadName}
              required={count === 2}
              type="text"
              placeholder="Ingresa tu nombre"
            />
          </fieldset>

          <fieldset className="animate-fade-up delay-200 opacity-0">
            <Label className="inline-block mb-2 leading-5">
              Correo Electrónico:
            </Label>
            <Input
              required={count === 2}
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
          <Button type="button" variant="ghost" onClick={decrement}>
            Regresar
          </Button>
          <Button>Continuar</Button>
        </CardFooter>
      </Card>
    </form>
  );
}
