/*import { useEffect } from "react";

const HeroSlider = () => {
  // Hero slider
  useEffect(() => {
    const fn_cs_slider = document.querySelectorAll(".fn_cs_slider");
    fn_cs_slider.forEach((element) => {
      let sliderTop = element.getElementsByClassName("slider_top")[0],
        sliderBottom = element.getElementsByClassName("slider_content"),
        activeIndex = 2,
        speed = 6000;

      let myInterval = setInterval(function () {
        activeIndex++;
        activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
      }, speed);
      const prev = document.querySelector(".slider_nav .prev"),
        next = document.querySelector(".slider_nav .next"),
        li = element.getElementsByTagName("li");
      prev.addEventListener("click", function (e) {
        e.preventDefault();
        clearInterval(myInterval);
        activeIndex--;
        activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
        myInterval = setInterval(function () {
          activeIndex++;
          activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
        }, speed);
        return false;
      });
      next.addEventListener("click", (e) => {
        e.preventDefault();
        clearInterval(myInterval);
        activeIndex++;
        activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
        myInterval = setInterval(function () {
          activeIndex--;
          activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
        }, speed);
        return false;
      });
      for (let i = 0; i < li.length; i++) {
        const liElement = li[i];
        const getClass = liElement.getAttribute("class");
        if (getClass === "next") {
          activeIndex++;
        } else if (getClass === "prev") {
          activeIndex--;
        } else {
          return false;
        }
        clearInterval(myInterval);
        activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
        myInterval = setInterval(function () {
          activeIndex++;
          activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
        }, speed);
        return false;
      }
    });
  }, []);

  const sliderDo = (sliderTop, sliderBottom, activeIndex) => {
    var topLength = sliderTop.getElementsByTagName("li").length;
    if (activeIndex > topLength) {
      activeIndex -= topLength;
    }
    var indexPrev = activeIndex - 1;
    var indexPrev2 = activeIndex - 2;
    var indexNext = activeIndex + 1;
    var indexNext2 = activeIndex + 2;
    if (indexPrev > topLength) {
      indexPrev -= topLength;
    }
    if (indexPrev2 > topLength) {
      indexPrev2 -= topLength;
    }
    if (indexNext > topLength) {
      indexNext -= topLength;
    }
    if (indexNext2 > topLength) {
      indexNext2 -= topLength;
    }
    if (indexPrev < 1) {
      indexPrev += topLength;
    }
    if (indexPrev2 < 1) {
      indexPrev2 += topLength;
    }
    if (activeIndex < 1) {
      activeIndex += topLength;
    }
    if (indexNext < 1) {
      indexNext += topLength;
    }
    if (indexNext2 < 1) {
      indexNext2 += topLength;
    }
    let li = sliderTop.getElementsByTagName("li");
    for (let i = 0; i < li.length; i++) {
      const element = li[i];
      element.classList.remove("prev", "prev2", "active", "next", "next2");
      // element.setAttribute(`data-index${indexNext}`);
    }
    sliderTop
      .querySelector('li[data-index="' + indexPrev2 + '"]')
      .classList.add("prev2");
    sliderTop
      .querySelector('li[data-index="' + indexPrev + '"]')
      .classList.add("prev");
    sliderTop
      .querySelector('li[data-index="' + activeIndex + '"]')
      .classList.add("active");
    sliderTop
      .querySelector('li[data-index="' + indexNext + '"]')
      .classList.add("next");
    sliderTop
      .querySelector('li[data-index="' + indexNext2 + '"]')
      .classList.add("next2");
    return activeIndex;
  };

  return (
    <section id="home">
      <div className="container">
        <h3
          className="fn__maintitle big"
          data-text="Welcome to AVR CLUB, VIT Chennai"
          data-align="center"
        
        >
          Welcome to AVR CLUB, VIT Chennai
        </h3>
        {// Slider }
        <div className="fn_cs_slider" data-responsive="on">
          <div className="slider_top">
            <img src="img/logo.png" alt="" />
            <ul>
              <li className="prev" data-index={1}>
              <div className="item has_video">
                  <img src="img/logo.png" alt="" />
                  <a
                    className="popup-youtube metaportal_fn_videobutton"
                    href="https://www.instagram.com/tv/CmvmcxUDCBc/?utm_source=ig_embed&amp;utm_campaign=loading"
                  >
                    <img src="/svg/play.svg" alt="" className="fn__svg" />
                  </a>
                  <div className="item_in">
                    <div className="img" data-bg-img="img/logo.png" />
                  </div>
                </div>
    
              </li>
              <li className="active" data-index={2}>
                <div className="item">
                  <img src="img/logo.png" alt="" />
                  <div className="item_in">
                    <div className="img" data-bg-img="img/logo.png" />
                  </div>
                </div>
              </li>
              <li className="next" data-index={3}>
              <div className="item">
                  <img src="img/logo.png" alt="" />
                  <div className="item_in">
                    <div className="img" data-bg-img="img/logo.png" />
                  </div>
                </div>
              </li>
              <li className="next2" data-index={4}>
                <div className="item">
                  <img src="img/logo.png" alt="" />
                  <div className="item_in">
                    <div className="img" data-bg-img="img/logo.png" />
                  </div>
                </div>
              </li>
              <li data-index={5}>
                <div className="item">
                  <img src="img/logo.png" alt="" />
                  <div className="item_in">
                    <div className="img" data-bg-img="img/logo.png" />
                  </div>
                </div>
              </li>
              <li data-index={6}>
                <div className="item">
                  <img src="img/logo.png" alt="" />
                  <div className="item_in">
                    <div className="img" data-bg-img="img/logo.png" />
                  </div>
                </div>
              </li>
              <li className="prev2" data-index={7}>
                <div className="item">
                  <img src="img/logo.png" alt="" />
                  <div className="item_in">
                    <div className="img" data-bg-img="img/logo.png" />
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="slider_nav">
            <a href="#" className="prev">
              <span className="circle" />
              <span className="icon">
                <img src="/svg/down.svg" alt="" className="fn__svg" />
              </span>
              <span className="circle" />
            </a>
            <a href="#" className="next">
              <span className="circle" />
              <span className="icon">
                <img src="/svg/down.svg" alt="" className="fn__svg" />
              </span>
              <span className="circle" />
            </a>
          </div>
        </div>
        {// !Slider }
        {// Description }
        <div className="fn_cs_desc">
          <p>
          AVR Club is lit! It's like a virtual reality hangout where we dive into epic digital realms. Get ready to level up your personal space with some mind-blowing visuals. We're all about creating a dope mixed reality virtual world. 🚀✨
          </p>
          <a
            href="https://virtualrealityclub.vercel.app/"
            className="metaportal_fn_button"
            target="_blank"
            rel="noreferrer"
          >
            <span>Explore More</span>
          </a>
        </div>
        {// !Description }
      </div>
    </section>
  );
};
export default HeroSlider;
*/
import { useEffect } from "react";

const HeroSlider = () => {
  // Hero slider
  useEffect(() => {
    const fn_cs_slider = document.querySelectorAll(".fn_cs_slider");
    fn_cs_slider.forEach((element) => {
      let sliderTop = element.getElementsByClassName("slider_top")[0],
        activeIndex = 1,
        speed = 6000;

      let myInterval = setInterval(function () {
        activeIndex++;
        activeIndex = sliderDo(sliderTop, activeIndex);
      }, speed);

      const prev = document.querySelector(".slider_nav .prev"),
        next = document.querySelector(".slider_nav .next");

      prev.addEventListener("click", function (e) {
        e.preventDefault();
        clearInterval(myInterval);
        activeIndex--;
        activeIndex = sliderDo(sliderTop, activeIndex);
        myInterval = setInterval(function () {
          activeIndex++;
          activeIndex = sliderDo(sliderTop, activeIndex);
        }, speed);
        return false;
      });

      next.addEventListener("click", (e) => {
        e.preventDefault();
        clearInterval(myInterval);
        activeIndex++;
        activeIndex = sliderDo(sliderTop, activeIndex);
        myInterval = setInterval(function () {
          activeIndex++;
          activeIndex = sliderDo(sliderTop, activeIndex);
        }, speed);
        return false;
      });
    });
  }, []);

  const sliderDo = (sliderTop, activeIndex) => {
    const topLength = sliderTop.getElementsByTagName("li").length;
    if (activeIndex > topLength) {
      activeIndex = 1;
    } else if (activeIndex < 1) {
      activeIndex = topLength;
    }

    let li = sliderTop.getElementsByTagName("li");
    for (let i = 0; i < li.length; i++) {
      const element = li[i];
      element.classList.remove("active");
    }
    sliderTop.querySelector(`li[data-index="${activeIndex}"]`).classList.add("active");
    return activeIndex;
  };

  return (
    <section id="home">
      <div className="container">
        <h3 className="fn__maintitle big" data-text="Welcome to AVR CLUB, VIT Chennai" data-align="center">
          Welcome to AVR CLUB, VIT Chennai
        </h3>
        {/* Slider */}
        <div className="fn_cs_slider" data-responsive="on">
          <div className="slider_top">
            <ul>
              <li className="active" data-index={1}>
                <div className="item">
                  <img src="img/highlights.jpeg" alt="Highlights from past events" />
                  <div className="item_in">
                    <div className="img" data-bg-img="img/highlights.jpeg" />
                    <h2>Highlights from Past Events</h2>
                  </div>
                </div>
              </li>
              <li data-index={2}>
                <div className="item">
                  <img src="img/news.png" alt="Latest news from AR and VR" />
                  <div className="item_in">
                    <div className="img" data-bg-img="img/news.png" />
                    <h2>Latest News from AR and VR Fields</h2>
                  </div>
                </div>
              </li>
              <li data-index={3}>
                <div className="item">
                  <img src="img/upcoming.png" alt="Upcoming events or recruitments" />
                  <div className="item_in">
                    <div className="img" data-bg-img="img/upcoming.png" />
                    <h2>Upcoming Events or Recruitments</h2>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="slider_nav">
            <a href="#" className="prev">
              <span className="circle"></span>
              <span className="icon">
                <img src="/svg/down.svg" alt="" className="fn__svg" />
              </span>
              <span className="circle"></span>
            </a>
            <a href="#" className="next">
              <span className="circle"></span>
              <span className="icon">
                <img src="/svg/down.svg" alt="" className="fn__svg" />
              </span>
              <span className="circle"></span>
            </a>
          </div>
        </div>
        {/* !Slider */}
        {/* Description */}
        <div className="fn_cs_desc">
          <p>
            AVR Club is lit! It's like a virtual reality hangout where we dive into epic digital realms. Get ready to level up your personal space with some mind-blowing visuals. We're all about creating a dope mixed reality virtual world. 🚀✨
          </p>
          <a href="https://virtualrealityclub.vercel.app/" className="metaportal_fn_button" target="_blank" rel="noreferrer">
            <span>Explore More</span>
          </a>
        </div>
        {/* !Description */}
      </div>
    </section>
  );
};

export default HeroSlider;
