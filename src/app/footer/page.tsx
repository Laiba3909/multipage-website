import Image from "next/image"
import Link from "next/link"
export default function footer(){
    return(
        <footer>
        <div className="footer-content">
          <p className="subscribe">Join Our Mail List</p>
          <div className="social-links">
            <Image src="/facebook.png" alt="facebook" width={30} height={30} />
            <Image src="/instagram.png" alt="instagram" width={30} height={30} />
            <Image src="/telegram.png" alt="telegram" width={30} height={30} />
            <Image src="/youtube.png" alt="youtube" width={30} height={30} />
          </div>
          <hr />
          <div className="contact-info">
            <p>Email: samreennomannoman@gmail.com | Phone: 03161609717</p>
            <Link href="/contact">Contact Us</Link> | <Link href="/about">About Us</Link> | <a href="https://www.vogue.com/fashion-shows" target="_blank">Glamour-Fashion</a> | <a href="https://www.wefashion.com/" target="_blank">Partners</a>
          </div>
        </div>
      </footer>
    )
}