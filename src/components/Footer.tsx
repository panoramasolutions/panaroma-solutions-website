export default function Footer() {
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Career", href: "#career" },
    { name: "Services", href: "#services" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of service", href: "#terms" },
  ];

  return (
    <footer className="w-full bg-black text-white py-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Contact Us Heading */}
        <h2 className="text-4xl md:text-section-heading font-medium bg-gradient-to-t from-[#A8A8A8] to-white bg-clip-text text-transparent text-center mb-8 md:mb-12">
          Contact Us
        </h2>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 md:mb-16">
          {/* Visit Our Office */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-[64px] h-[64px] rounded-xl p-[1px] bg-gradient-to-b from-white to-[#10586C]">
                <div className="w-full h-full rounded-xl bg-[#111111] flex items-center justify-center">
                  <svg width="21" height="30" viewBox="0 0 21 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10.5C21 9.12112 20.7284 7.75574 20.2007 6.48182C19.6731 5.20791 18.8996 4.05039 17.9246 3.07538C16.9496 2.10036 15.7921 1.32694 14.5182 0.799265C13.2443 0.27159 11.8789 0 10.5 0C9.12112 0 7.75574 0.27159 6.48182 0.799265C5.2079 1.32694 4.05039 2.10036 3.07538 3.07538C2.10036 4.05039 1.32694 5.20791 0.799265 6.48182C0.27159 7.75574 -2.05469e-08 9.12112 0 10.5C0 12.5805 0.6135 14.5155 1.6575 16.1475H1.6455L10.5 30L19.3545 16.1475H19.344C20.4254 14.4624 21.0002 12.5022 21 10.5ZM10.5 15C9.30653 15 8.16193 14.5259 7.31802 13.682C6.47411 12.8381 6 11.6935 6 10.5C6 9.30653 6.47411 8.16193 7.31802 7.31802C8.16193 6.47411 9.30653 6 10.5 6C11.6935 6 12.8381 6.47411 13.682 7.31802C14.5259 8.16193 15 9.30653 15 10.5C15 11.6935 14.5259 12.8381 13.682 13.682C12.8381 14.5259 11.6935 15 10.5 15Z" fill="white" />
                  </svg>
                </div>
              </div>
              <h3 className="text-[#FF9F66] text-lg font-medium">Visit Our Office</h3>
            </div>
            <p className="text-sm leading-relaxed pl-1">
              424, Kotkar Niwas, Airoli, Navi-Mumbai, MH 400708
            </p>
          </div>

          {/* Send Email */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-[64px] h-[64px] rounded-xl p-[1px] bg-gradient-to-b from-white to-[#10586C]">
                <div className="w-full h-full rounded-xl bg-[#111111] flex items-center justify-center">
                  <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.3333 0H6.33333C4.65363 0 3.04272 0.66726 1.85499 1.85499C0.66726 3.04272 0 4.65363 0 6.33333V18.3333C0 19.165 0.163817 19.9886 0.482096 20.757C0.800376 21.5254 1.26689 22.2236 1.85499 22.8117C3.04272 23.9994 4.65363 24.6667 6.33333 24.6667H20.3333C22.012 24.6631 23.6208 23.9948 24.8078 22.8078C25.9948 21.6208 26.6631 20.012 26.6667 18.3333V6.33333C26.6631 4.65471 25.9948 3.04585 24.8078 1.85888C23.6208 0.671914 22.012 0.00352283 20.3333 0ZM15.4667 11.0933C14.8107 11.4674 14.0685 11.6642 13.3133 11.6642C12.5582 11.6642 11.816 11.4674 11.16 11.0933L2.02667 5.85333C2.14476 4.79373 2.64934 3.81486 3.44389 3.10395C4.23843 2.39304 5.26717 2 6.33333 2H20.3333C21.3987 2.00292 22.4258 2.39698 23.2198 3.10733C24.0137 3.81769 24.5191 4.79488 24.64 5.85333L15.4667 11.0933Z" fill="white" />
                  </svg>
                </div>
              </div>
              <h3 className="text-[#FF9F66] text-lg font-medium">Send Email</h3>
            </div>
            <p className="text-sm break-all pl-1">
              business@panoramasolutions.co
            </p>
          </div>

          {/* Call Direct */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-[64px] h-[64px] rounded-xl p-[1px] bg-gradient-to-b from-white to-[#10586C]">
                <div className="w-full h-full rounded-xl bg-[#111111] flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.9265 23.6245C17.8971 23.6245 16.4511 23.2522 14.2858 22.0425C11.6528 20.5659 9.61621 19.2027 6.99742 16.5908C4.4725 14.0675 3.24379 12.4338 1.52412 9.30449C-0.418616 5.77129 -0.0874442 3.91926 0.282751 3.12771C0.72361 2.18166 1.37435 1.61582 2.21547 1.0542C2.69321 0.741186 3.19879 0.472864 3.72578 0.252636C3.77851 0.22996 3.82756 0.208339 3.87133 0.188827C4.13236 0.0712295 4.52787 -0.106485 5.02884 0.0833584C5.36318 0.208866 5.66166 0.465683 6.12888 0.927108C7.08707 1.87211 8.39646 3.97674 8.87951 5.01033C9.20382 5.70695 9.41845 6.1668 9.41898 6.68254C9.41898 7.28635 9.11523 7.75199 8.74662 8.25455C8.67754 8.34894 8.60898 8.43912 8.54254 8.52666C8.14123 9.054 8.05316 9.20641 8.11117 9.47852C8.22877 10.0254 9.10574 11.6533 10.547 13.0913C11.9882 14.5294 13.5692 15.351 14.1181 15.4681C14.4019 15.5287 14.5574 15.437 15.1016 15.0214C15.1797 14.9618 15.2598 14.9001 15.3437 14.8384C15.9058 14.4203 16.3499 14.1244 16.9394 14.1244H16.9426C17.4557 14.1244 17.895 14.347 18.6227 14.714C19.5719 15.1928 21.7398 16.4853 22.6906 17.4446C23.1531 17.9107 23.411 18.2082 23.537 18.542C23.7269 19.0445 23.5481 19.4385 23.4316 19.7021C23.412 19.7459 23.3904 19.7939 23.3678 19.8471C23.1458 20.3732 22.8759 20.8777 22.5614 21.3543C22.0009 22.1928 21.4329 22.8419 20.4848 23.2833C19.9979 23.5137 19.465 23.6303 18.9265 23.6245Z" fill="white" />
                  </svg>
                </div>
              </div>
              <h3 className="text-[#FF9F66] text-lg font-medium">Call Direct</h3>
            </div>
            <p className="text-sm pl-1">
              +91 8999988797 / 8422000148
            </p>
          </div>

          {/* Business Hours */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-[64px] h-[64px] rounded-xl p-[1px] bg-gradient-to-b from-white to-[#10586C]">
                <div className="w-full h-full rounded-xl bg-[#111111] flex items-center justify-center">
                  <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.3125 30.625C19.3736 30.625 23.2684 29.0117 26.1401 26.1401C29.0117 23.2684 30.625 19.3736 30.625 15.3125C30.625 11.2514 29.0117 7.35658 26.1401 4.48493C23.2684 1.61328 19.3736 0 15.3125 0C11.2514 0 7.35658 1.61328 4.48493 4.48493C1.61328 7.35658 0 11.2514 0 15.3125C0 19.3736 1.61328 23.2684 4.48493 26.1401C7.35658 29.0117 11.2514 30.625 15.3125 30.625ZM16.9531 7.65625C16.9531 7.22113 16.7803 6.80383 16.4726 6.49615C16.1649 6.18848 15.7476 6.01562 15.3125 6.01562C14.8774 6.01562 14.4601 6.18848 14.1524 6.49615C13.8447 6.80383 13.6719 7.22113 13.6719 7.65625V15.3125C13.6719 15.5672 13.7312 15.8184 13.8451 16.0462C13.959 16.274 14.1244 16.4722 14.3281 16.625L18.7031 19.9062C18.8755 20.0355 19.0716 20.1296 19.2803 20.183C19.489 20.2365 19.7062 20.2484 19.9195 20.2179C20.1328 20.1874 20.338 20.1152 20.5234 20.0055C20.7088 19.8957 20.8707 19.7505 21 19.5781C21.1293 19.4058 21.2233 19.2096 21.2768 19.0009C21.3303 18.7922 21.3421 18.575 21.3116 18.3617C21.2812 18.1484 21.209 17.9433 21.0992 17.7579C20.9894 17.5725 20.8442 17.4105 20.6719 17.2812L16.9531 14.4922V7.65625Z" fill="white" />
                  </svg>
                </div>
              </div>
              <h3 className="text-[#FF9F66] text-lg font-medium">Business Hours</h3>
            </div>
            <p className="text-sm pl-1">
              Mon-Sun: 9AM - 8PM
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/in/panorama-automations" className="hover:opacity-70 transition-opacity" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.125 0H0.875C0.375 0 0 0.375 0 0.875V19.25C0 19.625 0.375 20 0.875 20H19.25C19.75 20 20.125 19.625 20.125 19.125V0.875C20 0.375 19.625 0 19.125 0ZM5.875 17H3V7.5H6V17H5.875ZM4.5 6.25C3.5 6.25 2.75 5.375 2.75 4.5C2.75 3.5 3.5 2.75 4.5 2.75C5.5 2.75 6.25 3.5 6.25 4.5C6.125 5.375 5.375 6.25 4.5 6.25ZM17 17H14V12.375C14 11.25 14 9.875 12.5 9.875C11 9.875 10.75 11.125 10.75 12.375V17.125H7.75V7.5H10.625V8.75C11 8 12 7.25 13.375 7.25C16.375 7.25 16.875 9.25 16.875 11.75V17H17Z" fill="white" fillOpacity="0.8" />
                </svg>
              </a>
              <a href="https://github.com/panoramasolutions" className="hover:opacity-70 transition-opacity" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M10 0.253906C4.5 0.253906 0 4.75391 0 10.2539C0 14.6289 2.875 18.3789 6.875 19.7539C7.375 19.8789 7.5 19.5039 7.5 19.2539V17.5039C4.75 18.1289 4.125 16.2539 4.125 16.2539C3.625 15.1289 3 14.7539 3 14.7539C2.125 14.1289 3.125 14.1289 3.125 14.1289C4.125 14.2539 4.625 15.1289 4.625 15.1289C5.5 16.7539 7 16.2539 7.5 16.0039C7.625 15.3789 7.875 14.8789 8.125 14.6289C5.875 14.375 3.625 13.5039 3.625 9.62891C3.625 8.50391 4 7.62891 4.625 7.00391C4.5 6.75391 4.125 5.75391 4.75 4.37891C4.75 4.37891 5.625 4.12891 7.5 5.37891C8.25 5.12891 9.125 5.00391 10 5.00391C10.875 5.00391 11.75 5.12891 12.5 5.37891C14.375 4.12891 15.25 4.37891 15.25 4.37891C15.75 5.75391 15.5 6.75391 15.375 7.00391C16 7.75391 16.375 8.62891 16.375 9.62891C16.375 13.5039 14 14.2539 11.75 14.5039C12.125 15.0039 12.5 15.6289 12.5 16.5039V19.2539C12.5 19.5039 12.625 19.8789 13.25 19.7539C17.25 18.3789 20.125 14.6289 20.125 10.2539C20 4.75391 15.5 0.253906 10 0.253906Z" fill="white" fillOpacity="0.8" />
                </svg>
              </a>
            </div>

            {/* Right Side: Navigation and Copyright */}
            <div className="flex flex-col items-center sm:items-end gap-4">
              {/* Navigation Links */}
              <nav className="flex flex-wrap items-center justify-center sm:justify-end gap-x-6 gap-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm px-2 sm:px-0"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              {/* Copyright */}
              <p className="text-white/60 text-sm">
                © Copyright Panorama Solutions LLP. All Rights Reserved GP
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
