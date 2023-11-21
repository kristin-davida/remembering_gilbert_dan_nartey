import "styles/globals.css";
import {Header} from "@/components";

export default function RootLayout({
                                       // Layouts must accept a children prop.
                                       // This will be populated with nested layouts or pages
                                       children,
                                   }) {
    return (
        <html lang="en">
        <head>{metadata}</head>
        <body>{children}</body>
        <div id="modal-root"></div>
        </html>
    )
}

export const metadata = {
    title: 'Book of Condolence',
    description: 'Submit a message on our online memorial book in loving memory of Gilbert Dan-Nartey',
}