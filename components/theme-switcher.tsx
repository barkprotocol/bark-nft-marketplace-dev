"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Laptop, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const ICON_SIZE = 20; // Adjusted icon size

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" aria-label="Toggle Theme">
          {theme === "light" ? (
            <Sun
              key="light"
              size={ICON_SIZE}
              className="text-muted-foreground"
              aria-hidden="true"
            />
          ) : theme === "dark" ? (
            <Moon
              key="dark"
              size={ICON_SIZE}
              className="text-muted-foreground"
              aria-hidden="true"
            />
          ) : (
            <Laptop
              key="system"
              size={ICON_SIZE}
              className="text-muted-foreground"
              aria-hidden="true"
            />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-44" align="end">
        <DropdownMenuRadioGroup
          value={theme}
          onValueChange={(value) => setTheme(value)}
        >
          <DropdownMenuRadioItem
            className="flex items-center gap-2"
            value="light"
          >
            <Sun size={ICON_SIZE} className="text-muted-foreground" aria-hidden="true" />
            <span>Light</span>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            className="flex items-center gap-2"
            value="dark"
          >
            <Moon size={ICON_SIZE} className="text-muted-foreground" aria-hidden="true" />
            <span>Dark</span>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            className="flex items-center gap-2"
            value="system"
          >
            <Laptop size={ICON_SIZE} className="text-muted-foreground" aria-hidden="true" />
            <span>System</span>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { ThemeSwitcher };
