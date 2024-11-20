import './App.css'
import logo from './assets/logo.svg'
import mobileHero from './assets/tablet/image-hero.png'
import desktopHeroLeft from './assets/desktop/image-hero-left.png'
import desktopHeroRight from './assets/desktop/image-hero-right.png'
import img1 from './assets/desktop/image-woman-in-videocall.jpg'
import img2 from './assets/desktop/image-women-videochatting.jpg'
import img3 from './assets/desktop/image-men-in-meeting.jpg'
import img4 from './assets/desktop/image-man-texting.jpg'

function App() {

  return (
    <>
      <div className="container">
        <header className="header">
          <div className="header_img_cont">
            <img src={logo} alt="meet logo" className="header_img" />
          </div>
        </header>
        <main className="main">
          <div className="hero_section">
            <div className="hero_section_mobile_img_cont">
              <img src={mobileHero} alt="#" className="hero_section_mobile_img" />
            </div>

            <div className="hero_section_desktop_img_cont left">
              <img src={desktopHeroLeft}alt="#" className="hero_section_desktop_img" />
            </div>

            <div className="hero_section_writeup tac">
              <h1 className="hero_section_h1 red_hat fw900">Group Chat <br /> for Everyone</h1>
              <p className="hero_section_p red_hat fw500">Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.</p>
              <div className="hero_section_btns">
                <button className="hero_section_download_btn red_hat fw900">Download <span>v1.3</span></button>
                <button className="hero_section_enquire_btn red_hat fw900">What is it?</button>
              </div>
            </div>

            <div className="hero_section_desktop_img_cont right">
              <img src={desktopHeroRight} alt="#" className="hero_section_desktop_img" />
            </div>
          </div>

          <div className="desc_section">
            <p className="desc_section_number red_hat fw900">01</p>
            <div className="desc_section_images">
              <div className="desc_section_img_cont">
                <img src={img1} alt="#" className="desc_section_img" />
              </div>

              <div className="desc_section_img_cont">
                <img src={img2} alt="#" className="desc_section_img" />
              </div>

              <div className="desc_section_img_cont">
                <img src={img3} alt="#" className="desc_section_img" />
              </div>

              <div className="desc_section_img_cont">
                <img src={img4} alt="#" className="desc_section_img" />
              </div>
            </div>
            <div className="desc_section_writeup tac">
              <h3 className="desc_section_h3 red_hat fw900">Built for modern use</h3>
              <h2 className="desc_section_h2 red_hat fw900">Smarter meetings, all in one place</h2>
              <p className="desc_section_p red_hat fw500">Send messages, share files, show your screen, and record your meetings — all in one
              workspace. Control who can join with invite-only team access, data encryption, and data export.</p>
            </div>
          </div>
        </main>

        <footer className="footer">
          <div className="footer_number red_hat fw900">02</div>
          <div className="footer_writeup_wrap overlay tac">
            <div className="footer_writeup">
              <h2 className="footer_h2 red_hat fw900">Experience more together</h2>
              <p className="footer_p red_hat fw500">Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions.</p>
              <button className="footer_download_btn red_hat fw900">Download <span>v1.3</span></button>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
