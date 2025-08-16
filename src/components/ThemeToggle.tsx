import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/ThemeProvider"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 hover:bg-accent/50 transition-all duration-300"
    >
      <motion.div
        key={theme}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        exit={{ scale: 0, rotate: 180 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {theme === "light" ? (
          <Sun className="h-5 w-5 text-primary" />
        ) : (
          <Moon className="h-5 w-5 text-primary" />
        )}
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}