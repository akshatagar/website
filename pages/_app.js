import "@/styles/globals.css"
import MainLayout from "@/layout/main-layout"

export default function MyApp({ Component, pageProps }) {
    return (
        <body>
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </body>
    )
}