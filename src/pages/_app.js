import AppThemeProvider from '@app/components/AppThemeProvider'
import Sidebar from '@app/components/Sidebar'
import '@app/styles/globals.scss'
import { Box } from '@mui/material'

export default function App({ Component, pageProps }) {
  return (
    <AppThemeProvider>
      <Box height="100vh" display="flex">
        <Box bgcolor="#fafafa">
          <Sidebar/>
        </Box>
        <Box flexGrow={1} height="100%">
          <Component {...pageProps} />
        </Box>
      </Box>

    </AppThemeProvider>
  )
}
