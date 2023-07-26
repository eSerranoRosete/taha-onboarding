"use client";

import { ThankYouCard } from "@/components/ThankYouCard";
import { WelcomeCard } from "@/components/WelcomeCard";
import { AboutInvestments } from "@/components/form/AboutInvestments";
import { InvestmentOpportunity } from "@/components/form/InvestmentOpportunity";
import { LeadInfo } from "@/components/form/LeadInfo";
import { ProgressIndicator } from "@/components/form/ProgressIndicator";
import { useFormStore } from "@/context/useFormContext";

import { useCounter } from "@/hooks/useCounter";
import { steps } from "@/lib/steps";
import { User } from "@/types/AppTypes";

import { FormEvent } from "react";

type FormProps = {
  user: User;
};

export const Form = ({ user }: FormProps) => {
  const { count, increment, decrement, reset } = useCounter(4);
  const formState = useFormStore((state) => state);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    increment();
    if (count === steps.length) {
      console.log("✅", formState);
      formState.reset();
    }
  };

  return (
    <>
      <WelcomeCard isActive={count === 0} user={user} onStart={increment} />
      {count > 0 && (
        <form onSubmit={onSubmit} className="w-full min-h-[550px] max-w-xl">
          <ProgressIndicator currentStep={count} steps={steps} />
          <AboutInvestments isActive={count === 1} onPrev={decrement} />
          <InvestmentOpportunity isActive={count === 2} onPrev={decrement} />
          <LeadInfo isActive={count === 3} onPrev={decrement} />
          <ThankYouCard isActive={count === 4} onEnd={reset} />
        </form>
      )}
    </>
  );
};
