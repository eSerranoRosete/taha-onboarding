import React from "react";

import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";

type ProgressIndicatorProps = {
  currentStep: number;
  steps: string[];
  omitAnimation?: boolean;
};

export const ProgressIndicator = ({
  currentStep,
  steps,
  omitAnimation,
}: ProgressIndicatorProps) => {
  return (
    <div
      className={cn(
        "flex items-center md:max-w-sm max-w-xs m-auto justify-around mb-10 w-full",
        !omitAnimation && "animate-fade-up"
      )}
    >
      {steps.map((step, index) => (
        <React.Fragment key={step}>
          <div
            className={cn(
              "w-8 h-8 shrink-0 flex relative items-center justify-center rounded-full",
              index < currentStep &&
                "bg-zinc-900 border-2 border-zinc-900 text-zinc-50",
              index === currentStep && "border-2 border-zinc-900 text-zinc-900",
              index > currentStep &&
                "border-2 border-zinc-900 opacity-40 text-zinc-900"
            )}
          >
            {index < currentStep ? (
              <CheckIcon className="md:w-5 md:h-5 h-3 w-3" />
            ) : (
              <span className="text-sm">{index + 1}</span>
            )}
            <span className="absolute text-zinc-900 -bottom-6 font-semibold text-xs">
              {step}
            </span>
          </div>

          {index < steps.length - 1 && (
            <div
              className={`h-0.5 rounded-full w-full -scale-x-50 shrink ${
                index + 1 < currentStep
                  ? "bg-zinc-900"
                  : "bg-zinc-900 opacity-10"
              } `}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
