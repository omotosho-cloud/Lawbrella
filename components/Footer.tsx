import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white w-full flex justify-center py-12 px-2">
      <div className="bg-black rounded-2xl w-full max-w-[1300px] mx-auto text-white px-6 md:px-16 py-10 flex flex-col">
        <div>
          <h2 className="text-xl md:text-2xl font-bold">Techsocietal</h2>
          <p className="text-sm md:text-base text-gray-300 mt-1">
            Lawbrella is a product of Techsocietal
          </p>
        </div>
        <hr className="border-gray-800 my-8" />
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex flex-col items-start mb-8 md:mb-0">
            <img src="/logo.svg" alt="Lawbrella Logo" className="h-12 mb-2" />
            <span className="text-xl font-semibold">lawbrella</span>
            <span className="text-gray-300 mt-2 text-sm">
              Safeguarding Voices, Advocating Change
            </span>
          </div>
          <div className="flex flex-col md:flex-row gap-12">
            <div>
              <h4 className="font-semibold mb-3">Support</h4>
              <ul>
                <li>
                  <a href="/contact" className="text-gray-400 hover:text-white transition text-sm">
                    Contact us
                  </a>
                </li>
                <li>
                  <a href="/faq" className="text-gray-400 hover:text-white transition text-sm">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Get in touch</h4>
              <ul>
                <li>
                  <a href="mailto:Advocate@gmail.com" className="text-gray-400 hover:text-white transition text-sm">
                    Advocate@gmail.com
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-gray-400 hover:text-white transition text-sm">
                    Terms and conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="border-gray-800 my-8" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <span className="text-gray-400 text-xs md:text-sm mb-4 md:mb-0">
            © Advocate. Inc all rights reserved
          </span>
          <div className="flex space-x-6">
            <a href="https://facebook.com">
              <img src="/facebook.png" alt="Facebook" className="h-6 w-6 md:h-8 md:w-8" />
            </a>
            <a href="https://instagram.com">
              <img src="/instagram.png" alt="Instagram" className="h-6 w-6 md:h-8 md:w-8" />
            </a>
            <a href="https://linkedin.com">
              <img src="/linkedin.png" alt="LinkedIn" className="h-6 w-6 md:h-8 md:w-8" />
            </a>
            <a href="https://x.com">
              <img src="/Twitter-x.png" alt="X" className="h-6 w-6 md:h-8 md:w-8" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}