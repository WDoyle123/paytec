document.addEventListener("DOMContentLoaded", function() {
  const formContainer = document.createElement("div");
  formContainer.id = "contact-form-container";
  document.body.appendChild(formContainer);

  const contactButton = document.getElementById("contact-button");

  const iframeForm = `
    <div class="overlay" id="contact-overlay">
      <div class="iframe-container">
        <button class="close-button" id="close-contact-form" aria-label="Close contact form" title="Close">&times;</button>
        <div class="iframe-clipper">
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSfKxX7L6WXehD5AH99JcayycsVUGItaLCIuzWHXh9hIDpWJXA/viewform?embedded=true" 
            width="100%" 
            height="100%" 
            frameborder="0" 
            marginheight="0" 
            marginwidth="0"
            title="Contact Form">
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  `;

  formContainer.innerHTML = iframeForm;

  const overlay = document.getElementById("contact-overlay");
  const closeButton = document.getElementById("close-contact-form");

  overlay.style.display = "none";
  let scrollPosition = 0;

  const disableScroll = () => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    scrollPosition = window.pageYOffset;
    document.body.style.position = "fixed";
    const rootFontSize = parseFloat(
      getComputedStyle(document.documentElement).fontSize,
    );
    document.body.style.top = `-${scrollPosition / rootFontSize}rem`;
    document.body.style.width = "100%";
  };

  const enableScroll = () => {
    document.body.style.paddingRight = "";
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    window.scrollTo({
      top: scrollPosition,
      behavior: "instant",
    });
  };

  const showOverlay = () => {
    overlay.style.display = "flex";
    disableScroll();
  };

  const hideOverlay = () => {
    overlay.style.display = "none";
    contactButton.style.display = "block";
    enableScroll();
  };

  contactButton.addEventListener("click", showOverlay);
  closeButton.addEventListener("click", hideOverlay);

  overlay.addEventListener("click", function(e) {
    if (e.target === overlay) {
      hideOverlay();
    }
  });

  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape" && overlay.style.display === "flex") {
      hideOverlay();
    }
  });
});
