'use client'

import Image from 'next/image';


export default function Home() {
 

  return (
    <>
      
      <main>
        <section className="welcome-section">
          <div className="image">
            <Image src="/3460869.png" alt="image" width={500} height={500} />
          </div>
          <p className="para">Welcome To Glamour</p>
          <p className="para2">
            Step into a world of elegance and luxury as you explore our glamorous collections, designed to elevate your style and sophistication. Whether you are seeking timeless classics or the latest trends, we have everything to fulfill your fashion desires.
          </p>
        </section>

        <section className="gallery">
          <Image className="imagee1" src="/woman-6588614_1280.jpg" alt="fashion model" width={210} height={300} />
          <Image className="hiii" src="/vietnam-7931381_1280.jpg" alt="fashion model" width={200} height={300} />
          <Image className="imagee2" src="/woman-1840538_1280.jpg" alt="fashion model" width={200} height={300} />
        </section>

        <section className="definition">
          <p className="para3">
            What is fashion?<br /><br />
            Fashion glamour is a captivating blend of elegance, sophistication, and allure that transcends mere clothing to create a captivating aura of beauty and luxury. It encompasses the art of dressing in a way that exudes opulence, refinement, and a sense of extravagance.
          </p>
        </section>
      </main>

     
    </>
  );
}
