import { CssBaseline, ThemeProvider } from "@mui/material";
import "@fontsource/outfit"
import theme from "@app/configs/themes/default";
export default function AppThemeProvider({children}){
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            {children}
        </ThemeProvider>
    )
}