import { Eye, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useColorBlind, ColorBlindMode } from "@/components/color-blind-provider";
import { cn } from "@/lib/utils";

export function ColorBlindToggle() {
    const { mode, setMode } = useColorBlind();

    const modes: { value: ColorBlindMode; label: string; desc: string }[] = [
        { value: "normal", label: "Normal Vision", desc: "No color adjustment" },
        { value: "protanopia", label: "Protanopia", desc: "Red-blindness" },
        { value: "deuteranopia", label: "Deuteranopia", desc: "Green-blindness" },
        { value: "tritanopia", label: "Tritanopia", desc: "Blue-blindness" },
        { value: "achromatopsia", label: "Achromatopsia", desc: "Total color blindness" },
    ];

    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    className="relative h-10 gap-2 px-4 rounded-full border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm shadow-sm hover:bg-slate-100/80 dark:hover:bg-slate-800/80 transition-all duration-200 group"
                >
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-200 hidden sm:inline-block">
                            {modes.find(m => m.value === mode)?.label || "Normal Vision"}
                        </span>
                        <Eye className="h-4 w-4 text-slate-700 dark:text-slate-200 transition-transform group-hover:scale-110" />
                    </div>
                    <span className="sr-only">Toggle color blind mode</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 p-2">
                {modes.map((item) => (
                    <DropdownMenuItem
                        key={item.value}
                        onClick={() => setMode(item.value)}
                        className={cn(
                            "flex flex-col items-start gap-1 p-2 cursor-pointer rounded-md transition-colors",
                            mode === item.value ? "bg-slate-100 dark:bg-slate-800" : "hover:bg-slate-50 dark:hover:bg-slate-800/50"
                        )}
                    >
                        <div className="flex items-center justify-between w-full">
                            <span className="font-medium text-sm">{item.label}</span>
                            {mode === item.value && <Check className="h-3.5 w-3.5 text-primary" />}
                        </div>
                        <span className="text-xs text-muted-foreground">{item.desc}</span>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
