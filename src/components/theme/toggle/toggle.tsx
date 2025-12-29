"use client"

import * as React from "react"
import { useTheme } from "next-themes"

export function Toggle() {
    const { setTheme, theme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-md border border-foreground/10 hover:bg-foreground/5 transition-colors"
            aria-label="Toggle theme"
        >
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>
    )
}
