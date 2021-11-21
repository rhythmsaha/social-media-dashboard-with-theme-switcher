import "tailwindcss/tailwind.css";
import "../styles/global.css";

import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider
            attribute="class"
            enableSystem={false}
            enableColorScheme={false}
        >
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
