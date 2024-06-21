
import "./globals.css";
import Navbar from "../../Components/Navbar";
import Whatsapp from "../../Components/Whatsapp"
import Footer from "../../Components/Footer";
import Call from "../../Components/call"




export const metadata = {
  title: "ChannelConnectPRO",
  description: "Best internet and Cable Service Provider",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Navbar/>
        <Call/>
        {children}
        <Whatsapp/>
        <Footer/>
        </body>
    </html>
  );
}
