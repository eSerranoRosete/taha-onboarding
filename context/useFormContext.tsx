import { create } from "zustand";

export type FormState = {
  financialSatisfaction?: number;

  currentInvestment?: "si" | "no";
  investmentType?: string;
  investmentOther?: string;

  noInvestReason?: string;
  noInvestReasonOther?: string;

  motivationReason?: string;
  motivationReasonOther?: string;

  investmentFocus?: string;

  wantsToDiversify?: "si" | "no";
  wantsToInvest?: "si" | "no";

  investAmount?: string;

  leadName?: string;
  leadEmail?: string;
  leadPhone?: string;
};

type FormActions = {
  setFinancialSatifaction: (financialSatisfaction: number) => void;

  setCurrentInvestment: (currentInvestment: "si" | "no") => void;
  setInvestmentType: (investmentType: string) => void;
  setInvestmentOther: (investmentOther: string) => void;

  setNoInvestReason: (noInvestReason: string) => void;
  setNoInvestReasonOther: (noInvestReasonOther: string) => void;

  setMotivationReason: (motivationReason: string) => void;
  setMotivationReasonOther: (motivationReasonOther: string) => void;

  setInvestmentFocus: (investmentFocus: string) => void;

  setWantsToDiversify: (wantsToDiversify: "si" | "no") => void;
  setWantsToInvest: (wantsToInvest: "si" | "no") => void;

  setInvestAmount: (investAmount: string) => void;

  setLeadName: (leadName: string) => void;
  setLeadEmail: (leadEmail: string) => void;
  setLeadPhone: (leadPhone: string) => void;

  reset: () => void;
};

export const useFormStore = create<FormState & FormActions>((set) => ({
  financialSatisfaction: 0,

  setFinancialSatifaction: (financialSatisfaction) =>
    set((state) => ({ ...state, financialSatisfaction })),

  setCurrentInvestment: (currentInvestment) =>
    set((state) => ({
      ...state,
      currentInvestment,
      ...(currentInvestment === "no" && {
        investmentType: undefined,
        investmentOther: undefined,
        wantsToDiversify: undefined,
        investAmount: undefined,
        motivationReason: undefined,
        motivationReasonOther: undefined,
      }),
      ...(currentInvestment === "si" && {
        noInvestReason: undefined,
        noInvestReasonOther: undefined,
        wantsToInvest: undefined,
        investAmount: undefined,
        motivationReason: undefined,
        motivationReasonOther: undefined,
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

  setMotivationReason: (motivationReason) =>
    set((state) => ({ ...state, motivationReason })),

  setMotivationReasonOther(motivationReasonOther) {
    set((state) => ({ ...state, motivationReasonOther }));
  },

  setInvestmentFocus: (investmentFocus) =>
    set((state) => ({ ...state, investmentFocus })),

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

  reset: () =>
    set(() => ({
      currentInvestment: undefined,
      investmentType: undefined,
      investmentOther: undefined,

      noInvestReason: undefined,
      noInvestReasonOther: undefined,

      wantsToDiversify: undefined,
      wantsToInvest: undefined,

      investAmount: undefined,

      leadName: undefined,
      leadEmail: undefined,
      leadPhone: undefined,
    })),
}));
