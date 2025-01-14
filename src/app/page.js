import Head from 'next/head';
import Service from "./Service/page"
import About from "./About/page"
import Contact from "./Contact/page"

export default function Home() {
  return (
    <>
    <div>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div className="full-width">
          <p>"Get a $200 Visa Gift Card after installation! Book now and enjoy this limited-time offer."</p>
        </div>
        <div className="hero-section">
          <div className="hero-image shadow-right">
            <img src="/channel1.png" alt="Hero Image" layout="responsive" width={500} height={300} />
          </div>
          <div className="hero-content">
          <h1 className="hero-title">ChannelConnectPRO</h1>
        <p className="hero-description">
          Your premier internet and cable service provider. Get the best deals today!
        </p>
        <ul className="hero-benefits">
          <li>High-speed internet</li>
          <li>Best Cable TV Services</li>
          <li>24/7 customer support</li>
          <li>Affordable pricing</li>
          <li>100% installation Accuracy</li>
        </ul>
        <button width={20}>SignUp Now</button>
          </div>
        </div>
        <div className="offer">
          <p>Save $10/month with Auto-Pay! Sign up today and enjoy automatic savings on your monthly bills.</p>
        </div>
      </main>
    </div>
    <Service/>
    <About/>
    <Contact/>
    </>
  );
}
