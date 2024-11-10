'use client'

import Image from 'next/image';

export default function About() {
  return (
    <div className="container">
    

      <main className="main-content">
        <section className="intro">
          <h1>Welcome to Fashion Glamour</h1>
          <p>Your ultimate destination for style and elegance. Discover curated fashion trends with us!</p>
        </section>

        <section className="about-gallery">
          <Image src="/young-woman-4266712_1280.jpg" alt="Model 1" width={300} height={400} className="gallery-img" />
          <Image src="/wedding-dress-1486260_1280.jpg" alt="Model Wedding Dress" width={300} height={400} className="gallery-img" />
          <Image src="/fashion-3179178_1280.jpg" alt="Model 2" width={300} height={400} className="gallery-img" />
        </section>

        <section className="description">
          <p>Fashion is more than just clothing—it is an expression of your unique self. At Fashion Glamour, we bring you elegance, inspiration, and the latest in fashion.</p>
          <h2>Fashion is the confidence of every girl.</h2>
        </section>
      </main>

      <style jsx>{`
        .container {
          display: flex;
          flex-wrap: wrap;
          background-color: #111;
          color: #f4f4f4;
        }

        .sidebar {
          background-color: #222;
          padding: 20px;
          width: 250px;
          min-height: 100vh;
          color: #fff;
          text-align: center;
        }

        .brand {
          font-size: 24px;
          margin-bottom: 20px;
          color: #f48fb1;
        }

        .nav {
          list-style: none;
          padding: 0;
        }

        .nav li {
          margin: 15px 0;
          font-size: 18px;
        }

        .nav li a {
          color: #f4f4f4;
          text-decoration: none;
          transition: color 0.3s;
        }

        .nav li a:hover {
          color: #f48fb1;
        }

        .social-links {
          display: flex;
          gap: 15px;
          justify-content: center;
          margin-top: 20px;
        }

        .main-content {
          padding: 20px;
          flex: 1;
          max-width: 800px;
          margin: 0 auto;
        }

        .intro h1 {
          font-size: 36px;
          color: #f48fb1;
          text-align: center;
        }

        .about-gallery {
          display: flex;
          justify-content: space-around;
          margin: 30px 0;
          gap: 20px;
          flex-wrap: wrap;
        }

        .gallery-img {
          border-radius: 10px;
          box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease;
        }

        .gallery-img:hover {
          transform: scale(1.05);
        }

        .description {
          text-align: center;
          font-size: 18px;
          margin-top: 20px;
        }

        .description h2 {
          color: #f48fb1;
          margin-top: 10px;
        }

        .contact-info {
          margin-top: 10px;
          font-size: 16px;
        }

        @media (max-width: 768px) {
          .sidebar {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }

          .main-content {
            padding: 10px;
          }

          .about-gallery {
            flex-direction: column;
            align-items: center;
          }

          .gallery-img {
            width: 100%;
            height: auto;
          }
        }
      `}</style>
    </div>
  );
}
