import { Button } from "@/components/ui/button";
import { Logo } from "./ui/logo";


export const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row items-center w-full p-4 md:p-6 bg-background z-50 dark:bg-[#1F1F1F]">
      <Logo />
      <div className="w-full mt-4 md:mt-0 md:ml-auto flex flex-col md:flex-row items-center justify-between md:justify-end gap-2 md:gap-4 text-muted-foreground">
        <Button variant={"ghost"} size={"sm"}>
          Políticas de Privacidade
        </Button>
        <Button variant={"ghost"} size={"sm"}>
          Termos e condições
        </Button>
      </div>
    </footer>
  );
};
