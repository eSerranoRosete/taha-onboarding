export type User = {
  id: string;
  displayName: string;
  imgSrc: string;
  email: string;
};

export const Questions = {
  currentInvestment: "¿Actualmente cuentas con alguna inversión?",
  investmentType: "¿Qué tipo de inversión?",
  investmentOther: "Especifica el tipo de inversión:",
  wantsToDiversify:
    "¿Has pensado en diversificar tu portafolio invirtiendo en terrenos patrimoniales?",
  wantsToInvest:
    "¿Estarías abierto a escuchar sobre un modelo de inversión seguro donde puedes proteger tu dinero de la inflación y aumentar su valor con el paso del tiempo?",
  investAmount:
    "¿Cuanto estarías dispuesto a destinar de manera mensual a este tipo de inversión?",
  noInvestReason: "¿Qué te ha impedido invertir?",
  noInvestReasonOther: "Especifica otro motivo:",
};
