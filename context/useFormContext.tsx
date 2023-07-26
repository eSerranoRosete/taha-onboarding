import { create } from "zustand";

type FormState = {
  currentInvestment?: "yes" | "no";
  investmentType?: string;
  investmentOther?: string;

  noInvestReason?: string;
  noInvestReasonOther?: string;

  wantsToDiversify?: "yes" | "no";
  wantsToInvest?: "yes" | "no";

  investAmount?: string;

  leadName?: string;
  leadEmail?: string;
  leadPhone?: string;
};

type FormActions = {
  setCurrentInvestment: (currentInvestment: "yes" | "no") => void;
  setInvestmentType: (investmentType: string) => void;
  setInvestmentOther: (investmentOther: string) => void;

  setNoInvestReason: (noInvestReason: string) => void;
  setNoInvestReasonOther: (noInvestReasonOther: string) => void;

  setWantsToDiversify: (wantsToDiversify: "yes" | "no") => void;
  setWantsToInvest: (wantsToInvest: "yes" | "no") => void;

  setInvestAmount: (investAmount: string) => void;

  setLeadName: (leadName: string) => void;
  setLeadEmail: (leadEmail: string) => void;
  setLeadPhone: (leadPhone: string) => void;
};

export const useFormStore = create<FormState & FormActions>((set) => ({
  setCurrentInvestment: (currentInvestment) =>
    set((state) => ({
      ...state,
      currentInvestment,
      ...(currentInvestment === "no" && {
        investmentType: undefined,
        investmentOther: undefined,
        wantsToDiversify: undefined,
        investAmount: undefined,
      }),
      ...(currentInvestment === "yes" && {
        noInvestReason: undefined,
        noInvestReasonOther: undefined,
        wantsToInvest: undefined,
        investAmount: undefined,
      }),
    })),
  setInvestmentType: (investmentType) =>
    set((state) => ({
      ...state,
      investmentType,
      ...(investmentType !== "otra" && { investmentOther: undefined }),
    })),
  setInvestmentOther: (investmentOther) =>
    set((state) => ({ ...state, investmentOther })),

  setNoInvestReason: (noInvestReason) =>
    set((state) => ({
      ...state,
      noInvestReason,
      ...(noInvestReason !== "otra" && { noInvestReasonOther: undefined }),
    })),

  setNoInvestReasonOther: (noInvestReasonOther) =>
    set((state) => ({ ...state, noInvestReasonOther })),

  setWantsToDiversify: (wantsToDiversify) =>
    set((state) => ({
      ...state,
      wantsToDiversify,
      ...(wantsToDiversify === "no" && { investAmount: undefined }),
    })),
  setWantsToInvest: (wantsToInvest) =>
    set((state) => ({
      ...state,
      wantsToInvest,
      ...(wantsToInvest === "no" && { investAmount: undefined }),
    })),

  setInvestAmount: (investAmount) =>
    set((state) => ({ ...state, investAmount })),

  setLeadName: (leadName) => set((state) => ({ ...state, leadName })),
  setLeadEmail: (leadEmail) => set((state) => ({ ...state, leadEmail })),
  setLeadPhone: (leadPhone) => set((state) => ({ ...state, leadPhone })),
}));
