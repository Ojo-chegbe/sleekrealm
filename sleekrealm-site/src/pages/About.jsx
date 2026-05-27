import { useState, useRef } from 'react';
import profileImage from '../../images/Profile.jpg';
import aboutVideo from '../../images/About.mp4';

export default function About() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(err => console.log("Video playback error:", err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const percentage = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(percentage);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="about-hero">
        <span className="text-label-caps about-hero__label">Our Story</span>
        <h1 className="about-hero__title">
          Jos interior design rooted in environment and spirit.
        </h1>
        <p className="about-hero__subtitle">
          A journey rooted in intentionality, transforming spaces into
          sanctuaries of comfort, functionality, and undeniable poise.
        </p>
      </section>

      {/* Cinematic Showcase Section */}
      <section className="about-video">
        <div 
          className={`about-video__container ${!isPlaying ? 'about-video__container--paused' : ''}`}
          onClick={togglePlay}
        >
          <video
            ref={videoRef}
            src={aboutVideo}
            className="about-video__player"
            loop
            muted={isMuted}
            playsInline
            autoPlay
            onTimeUpdate={handleTimeUpdate}
          />
          <div className="about-video__overlay">
            <div className="about-video__header">
              <span className="about-video__badge">Sleekrealm in Motion</span>
            </div>
            
            <div className="about-video__controls-bottom">
              <div className="about-video__controls-left">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePlay();
                  }}
                  className="about-video__btn"
                  aria-label={isPlaying ? "Pause Video" : "Play Video"}
                >
                  <span className="material-symbols-outlined">
                    {isPlaying ? "pause" : "play_arrow"}
                  </span>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMute();
                  }}
                  className="about-video__btn"
                  aria-label={isMuted ? "Unmute Video" : "Mute Video"}
                >
                  <span className="material-symbols-outlined">
                    {isMuted ? "volume_off" : "volume_up"}
                  </span>
                </button>
              </div>

              <div className="about-video__timeline">
                <div 
                  className="about-video__progress-bar" 
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section: The Seed Planted by a Mother */}
      <section className="about-story">
        <div className="about-story__grid">
          <div className="about-story__text">
            <span className="text-label-caps about-story__label">Origins</span>
            <h2 className="about-story__heading">
              The Seed Planted by a Mother
            </h2>
            <div className="about-story__paragraphs">
              <p>
                The inception of Sleekrealm was not born in a studio, but in the
                quiet, daily rhythms of a home. It began with the simple,
                meticulous act of a mother teaching her child how to dress a bed.
                The crisp fold of linens, the deliberate placement of
                pillows—these were early lessons in the profound impact of order
                and beauty.
              </p>
              <p>
                This quiet instruction planted a seed. What started as childhood
                chores evolved into a deep-seated passion for spatial harmony.
                The instinct to arrange, to balance, to breathe life into a room
                followed me into university, where styling my own quarters became
                a defining expression of self and a refuge of peace.
              </p>
            </div>
          </div>
          <div className="about-story__image-wrap">
            <img
              src={profileImage}
              alt="Founder and lead designer of Sleekrealm Interiors in Jos"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Philosophy Section: God at the Center */}
      <section className="about-philosophy">
        <div className="about-philosophy__card">
          <span
            className="material-symbols-outlined about-philosophy__icon"
          >
            diversity_1
          </span>
          <h2 className="about-philosophy__heading">God at the Center</h2>
          <p className="about-philosophy__body">
            We believe that creativity is a divine spark. Space is not merely a
            void to be filled with objects, but an environment to be curated with
            intention and light. Our design philosophy centers on creating
            atmospheres that reflect a quiet awe, providing sanctuaries where the
            spirit can rest and thrive. It is a stewardship of the environment,
            recognizing that harmony in our physical surroundings cultivates
            peace within.
          </p>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="about-vision">
        <div className="about-vision__grid">
          <div className="about-vision__image-wrap">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLQSFax54x9Nf4XZi0BMGyi4sniKfH_ye-zEuw463mdJNOPCKrzh5rFJlVvh7mu0rhLPkiVfvBMrxP_N8WFdEVmGLcutJXMAclQDt6nwlBxHBZE3NCF2DmT9Ch2UeG7_D4rFXu_011idDKGutoZJOAEoDJDKHiUAMIoOBbSASqB2ju1l-vm1fpw-gPbFkFEDXz0EJ002_Fnb4rvAU3fyrYJ6eBu9ATARgmklngR1HQTsT6yRABaLE42ySYRU-tYBk8GGo_eLteq3Iv"
              alt="Luxurious living space with floor-to-ceiling windows"
              loading="lazy"
            />
          </div>
          <div className="about-vision__text">
            <span className="text-label-caps about-vision__label">
              Our Vision
            </span>
            <h2 className="about-vision__quote">
              "To become a leading interior design brand known for creating
              premium spaces that bring comfort, functionality, and poise
              Globally."
            </h2>
            <p className="about-vision__body">
              We strive to transcend trends, focusing instead on timeless
              elegance and the profound impact of a well-considered environment.
              Every project is a testament to our commitment to excellence,
              functional beauty, and the enduring power of poised design.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
