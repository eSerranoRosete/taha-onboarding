import { ArrowRightIcon, TimerIcon } from "lucide-react";
import { Button } from "./ui/button";

import { User } from "@/types/AppTypes";
import { cn } from "@/lib/utils";

type WelcomeCardProps = {
  user: User;
  isActive: boolean;
  onStart: () => void;
};

export const WelcomeCard = ({ user, isActive, onStart }: WelcomeCardProps) => {
  return (
    <div
      className={cn(
        "hidden md:flex-row flex-col gap-10 items-center",
        isActive && "flex"
      )}
    >
      <img
        className="w-72 md:h-96 h-72 opacity-0 animate-fade-up duration-700 shadow-xl rounded-3xl object-cover object-center"
        src={user.imgSrc}
      />
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-5xl animate-fade-up duration-700 font-medium mb-4 text-zinc-900">
          Hola! Mi nombre <br /> es{" "}
          <b className="font-bold">{user.displayName}</b>
        </h1>
        <p className="md:text-lg text-md md:max-w-lg max-w-sm mb-8 opacity-0 animate-fade-up delay-200">
          Ayúdame contestando esta encuesta a fin de conocer un poco más de tus
          hábitos financieros.
        </p>
        <div className="opacity-0 animate-fade-up delay-500">
          <Button onClick={onStart} className="gap-3">
            Comenzar encuesta
            <ArrowRightIcon className="w-4 h-4" />
          </Button>
          <p className="text-xs  flex justify-center md:justify-normal gap-2 mt-5">
            <TimerIcon className="w-4 h-4" />
            Duración estimada: 5 min
          </p>
        </div>
      </div>
    </div>
  );
};
