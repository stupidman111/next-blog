"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

const ModeToggle = () => {
  const { setTheme } = useTheme();
  return (
    <Button
      className="relative rounded-full"
      variant="outline"
      onClick={() => setTheme((prev) => (prev === "light" ? "dark" : "light"))}
    >
      <Sun className="rotate-0 scale-100 transition-all dark:-rotate-90  dark:scale-0" />
      <Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
};

export default ModeToggle;
