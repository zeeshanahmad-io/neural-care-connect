import { useTheme } from "@/components/ThemeProvider"
import { Button } from "@/components/ui/button"
import { Paintbrush } from "lucide-react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"

export function ThemeCustomizer() {
  const { theme, setTheme } = useTheme()

  const themes = [
    { name: "theme-default", label: "Dark Green", color: "hsl(145, 50%, 32%)" },
    { name: "theme-green", label: "Green", color: "hsl(142.1, 76.2%, 36.3%)" },
    { name: "theme-orange", label: "Orange", color: "hsl(24.6, 95%, 53.1%)" },
  ]

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon" className="fixed bottom-24 right-6 z-50 h-14 w-14 rounded-full shadow-lg hover:shadow-xl medical-transition">
          <Paintbrush className="h-6 w-6" />
          <span className="sr-only">Customize Theme</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56 mr-6">
        <div className="space-y-3">
          <h4 className="font-medium leading-none">Accent Color</h4>
          <div className="flex items-center space-x-2 pt-2">
            {themes.map((t) => (
              <button
                key={t.name}
                onClick={() => setTheme(t.name as any)}
                className={cn(
                  "h-8 w-8 rounded-full border-2",
                  theme === t.name ? "border-primary" : "border-transparent",
                  "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                )}
                style={{ backgroundColor: t.color }}
                aria-label={`Set theme to ${t.label}`}
              />
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
