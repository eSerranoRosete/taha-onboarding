"use client";

import { ProgressIndicator } from "@/components/form/ProgressIndicator";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { steps } from "@/lib/steps";
import { cn } from "@/lib/utils";
import Link from "next/link";

type PageProps = {
  params: {
    id: string;
  };
};

export default function ThankYouPage({ params }: PageProps) {
  return (
    <main className="w-full min-h-[550px] max-w-lg">
      <ProgressIndicator
        omitAnimation
        currentStep={steps.length}
        steps={steps}
      />
      <Card className="animate-fade-up delay-100 opacity-0">
        <CardHeader className="text-center">
          <CardTitle>¡Gracias por tu tiempo!</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center max-w-xs m-auto">
            Tu respuesta ha sido grabada y pronto me pondré en contacto contigo
          </p>
        </CardContent>
        <CardFooter className="justify-center">
          <Link
            className={cn(buttonVariants({ variant: "default" }))}
            href={"/" + params.id}
          >
            Volver al inicio
          </Link>
        </CardFooter>
      </Card>
    </main>
  );
}
