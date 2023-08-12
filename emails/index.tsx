import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

import { FormState } from "@/context/useFormContext";
import { Questions } from "@/types/AppTypes";

export default function Email(answers: FormState) {
  return (
    <Html>
      <Head />
      <Preview>Test Preview Text</Preview>
      <Tailwind>
        <Body className="my-auto bg-white mx-auto font-sans">
          <Container className="border border-zinc-300 mt-10 border-solid rounded-md mx-auto p-10 max-w-xl">
            <Heading className="text-center text-xl">
              Nueva Respuesta Recibida
            </Heading>
            <Section>
              <Text className="flex flex-col">
                <span className="mr-1 font-bold">Name:</span>
                <span>{answers.leadName}</span>

                <span className="mr-1 font-bold">Email:</span>
                <span>{answers.leadEmail}</span>

                {answers.leadPhone && (
                  <>
                    <span className="mr-1 font-bold">Teléfono:</span>
                    <span>{answers.leadPhone}</span>
                  </>
                )}
              </Text>
            </Section>
            <Hr className="my-5" />
            <Section>
              <Text className="flex flex-col">
                <span className="mr-1 font-bold">
                  Del 1 al 10 indica que tan satisfecho(a) te encuentras al día
                  de hoy con tu solvencia económica
                </span>
                <span>{answers.financialSatisfaction}</span>
              </Text>
              {answers.currentInvestment === "si" && (
                <>
                  <Text className="flex flex-col">
                    <span className="mr-1 font-bold">
                      {Questions.currentInvestment}
                    </span>
                    <span>{answers.currentInvestment}</span>
                  </Text>
                  <Text className="flex flex-col">
                    <span className="mr-1 font-bold">
                      {Questions.investmentType}
                    </span>
                    <span>{answers.investmentType}</span>
                  </Text>
                  {answers.investmentType === "otra" && (
                    <Text className="flex flex-col">
                      <span className="mr-1 font-bold">
                        {Questions.investmentOther}
                      </span>
                      <span>{answers.investmentOther}</span>
                    </Text>
                  )}
                  <Text className="flex flex-col">
                    <span className="mr-1 font-bold">
                      ¿Qué te motiva a invertir?
                    </span>
                    <span>{answers.motivationReason}</span>
                  </Text>
                  {answers.investmentType === "Otro" && (
                    <Text className="flex flex-col">
                      <span className="mr-1 font-bold">
                        Especifica otro motivo
                      </span>
                      <span>{answers.motivationReasonOther}</span>
                    </Text>
                  )}
                  <Text className="flex flex-col">
                    <span className="mr-1 font-bold">
                      {Questions.wantsToDiversify}
                    </span>
                    <span>{answers.wantsToDiversify}</span>
                  </Text>
                  {answers.wantsToDiversify === "si" && (
                    <Text className="flex flex-col">
                      <span className="mr-1 font-bold">
                        ¿Qué enfoque le darías a tu inversión?
                      </span>
                      <span>{answers.investmentFocus}</span>
                    </Text>
                  )}
                  <Text className="flex flex-col">
                    <span className="mr-1 font-bold">
                      {Questions.investAmount}
                    </span>
                    <span>{answers.investAmount}</span>
                  </Text>
                </>
              )}
              {answers.currentInvestment === "no" && (
                <>
                  <Text className="flex flex-col">
                    <span className="mr-1 font-bold">
                      {Questions.currentInvestment}
                    </span>
                    <span>{answers.currentInvestment}</span>
                  </Text>
                  <Text className="flex flex-col">
                    <span className="mr-1 font-bold">
                      {Questions.noInvestReason}
                    </span>
                    <span>{answers.noInvestReason}</span>
                  </Text>
                  {answers.noInvestReason === "otro" && (
                    <Text className="flex flex-col">
                      <span className="mr-1 font-bold">
                        {Questions.noInvestReasonOther}
                      </span>
                      <span>{answers.noInvestReason}</span>
                    </Text>
                  )}
                  <Text className="flex flex-col">
                    <span className="mr-1 font-bold">
                      {Questions.wantsToInvest}
                    </span>
                    <span>{answers.wantsToInvest}</span>
                  </Text>
                  <Text className="flex flex-col">
                    <span className="mr-1 font-bold">
                      {Questions.investAmount}
                    </span>
                    <span>{answers.investAmount}</span>
                  </Text>
                </>
              )}
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
