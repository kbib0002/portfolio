"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
    const { setTheme, theme } = useTheme();

    return (
        <div className="border rounded-full">
            <Button variant="ghost" size="icon" className="bg-neutral-200 hover:bg-neutral-100  dark:bg-neutral-950 hover:dark:bg-neutral-* rounded-full" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                <Sun/>
            </Button>

            <Button variant="ghost" size="icon" className="hover:bg-transparent dark:bg-neutral-800 rounded-full" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                <Moon/>
            </Button>
        </div>
  );
}