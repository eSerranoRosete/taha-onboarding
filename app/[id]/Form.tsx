"use client";

import { ThankYouCard } from "@/components/ThankYouCard";
import { WelcomeCard } from "@/components/WelcomeCard";
import { AboutInvestments } from "@/components/form/AboutInvestments";
import { InvestmentOpportunity } from "@/components/form/InvestmentOpportunity";
import { LeadInfo } from "@/components/form/LeadInfo";
import { ProgressIndicator } from "@/components/form/ProgressIndicator";
import { FormState, useFormStore } from "@/context/useFormContext";

import { useCounter } from "@/hooks/useCounter";
import { sendMail } from "@/lib/sendMail";
import { steps } from "@/lib/steps";
import { User } from "@/types/AppTypes";

import { FormEvent } from "react";

type FormProps = {
  user: User;
};

export const Form = ({ user }: FormProps) => {
  const { count, increment, decrement, reset } = useCounter(4);
  const formState = useFormStore((state) => state);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    increment();
    if (count === steps.length) {
      const data: FormState = {
        leadName: formState.leadName,
        leadEmail: formState.leadEmail,
        leadPhone: formState.leadPhone,
        currentInvestment: formState.currentInvestment,
        investmentType: formState.investmentType,
        investAmount: formState.investAmount,
        investmentOther: formState.investmentOther,
        noInvestReason: formState.noInvestReason,
        noInvestReasonOther: formState.noInvestReasonOther,
        wantsToDiversify: formState.wantsToDiversify,
        wantsToInvest: formState.wantsToInvest,
        motivationReason: formState.motivationReason,
        motivationReasonOther: formState.motivationReasonOther,
        investmentFocus: formState.investmentFocus,
        financialSatisfaction: formState.financialSatisfaction,
      };

      try {
        await sendMail({ formState: data, notify: user.email });
      } catch (error) {}

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
