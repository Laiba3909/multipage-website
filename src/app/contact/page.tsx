'use client'
import Link from 'next/link';
import Image from 'next/image';

export default function Contact() {
  return (
    <div className="container">
      <header>
        <h1><Link href="/">CONTACT US</Link></h1>
      </header>
      
      <main>
        <section className="designers">
          <h2>Meet Our Fashion Designers</h2>
          <ul className="designer-list">
            <li className="designer-card">
              <div className="designer-info">
                <Image src="/HASSAN-SHEHERYR-YASIN.jpg" alt="HSY" width={150} height={200} className="designer-img" />
                <h3><Link href="https://theworldofhsy.com/">HSY (Hassan Sheheryar Yasin)</Link></h3>
                <p>Known as HSY, Hassan Sheheryar Yasin pioneered in merging traditional Pakistani work with modern designs.</p>
              </div>
            </li>

            <li className="designer-card">
              <div className="designer-info">
                <Image src="/Zainab-Chottani.jpg" alt="Zainab Chottani" width={150} height={200} className="designer-img" />
                <h3><Link href="https://zainabchottani.com/">Zainab Chottani</Link></h3>
                <p>Renowned for bridal designs, Zainab Chottani ventured into casual ready-to-wear in 2012, showcasing versatility in fashion.</p>
              </div>
            </li>

            <li className="designer-card">
              <div className="designer-info">
                <Image src="/Bunto-Kazmi.png" alt="Bunto Kazmi" width={150} height={200} className="designer-img" />
                <h3><Link href="https://libasgallery.com/category-listing/bunto-kazmi/1/">Bunto Kazmi</Link></h3>
                <p>Bunto Kazmi is known for exclusive bridal couture, creating unique designs rarely showcased but widely respected.</p>
              </div>
            </li>

            <li className="designer-card">
              <div className="designer-info">
                <Image src="/Nomi-Ansari.jpg" alt="Nomi Ansari" width={150} height={200} className="designer-img" />
                <h3><Link href="https://www.nomiansari.com.pk/">Nomi Ansari</Link></h3>
                <p>Nomi Ansari is celebrated for his colorful, modern bridal designs, adding vibrant elements to Pakistani fashion.</p>
              </div>
            </li>
          </ul>
        </section>
      </main>

     

      <style jsx>{`
        .container {
          background: url('https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2020/05/black-paper-background.jpg') no-repeat center center fixed;
          background-size: cover;
          color: #fff;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        header {
          background: rgba(0, 0, 0, 0.8);
          text-align: center;
          padding: 1.5rem;
          font-size: 2rem;
        }

        header h1 {
          margin: 0;
        }

        main {
          padding: 1.5rem;
          max-width: 1000px;
          margin: auto;
        }

        .designers h2 {
          font-size: 1.8rem;
          text-align: center;
          margin-bottom: 1rem;
        }

        .designer-list {
          list-style-type: none;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .designer-card {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 1rem;
          text-align: center;
          transition: background 0.3s;
        }

        .designer-card:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .designer-info h3 {
          font-size: 1.4rem;
          color: #00c3ff;
        }

        .footer-text {
          font-size: 1.5rem;
          text-align: center;
          margin: 1.5rem 0;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 1rem;
          list-style-type: none;
          padding: 0;
        }

        .footer-info {
          text-align: center;
          font-size: 0.9rem;
          margin: 1rem 0;
        }

        @media (max-width: 768px) {
          .designer-info {
            padding: 0.5rem;
          }

          header h1 {
            font-size: 1.5rem;
          }

          .designers h2 {
            font-size: 1.5rem;
          }

          .footer-text {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </div>
  );
}
