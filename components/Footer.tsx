import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white text-white item-center pt-10 pb-4">
      <div className="bg-black rounded-lg w-[1300px] text-white">
        
      <div className="px-6 bg- md:px-16">
        <div>
          <h2 className="text-2xl font-bold">Techsocietal</h2>
          <p className="text-base text-gray-300 mt-2">
            Lawbrella is a product of Techsocietal
          </p>
        </div>
      </div>
      <hr className="border-gray-800 my-8" />
      <div className="flex flex-col md:flex-row justify-between px-6 md:px-16 gap-8">
        <div className="flex flex-col items-start">
          <img src="/logo.svg" alt="Lawbrella Logo" className="h-12 mb-2" />
          <span className="text-xl font-semibold">lawbrella</span>
          <span className="text-gray-300 mt-2">
            Safeguarding Voices, Advocating Change
          </span>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Support</h4>
          <ul>
            <li>
              <a href="/contact" className="text-gray-400 hover:text-white transition">
                Contact us
              </a>
            </li>
            <li>
              <a href="/faq" className="text-gray-400 hover:text-white transition">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Get in touch</h4>
          <ul>
            <li>
              <a href="mailto:Advocate@gmail.com" className="text-gray-400 hover:text-white transition">
                Advocate@gmail.com
              </a>
            </li>
            <li>
              <a href="/terms" className="text-gray-400 hover:text-white transition">
                Terms and conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-gray-800 my-8" />
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-16">
        <span className="text-gray-400 text-sm mb-4 md:mb-0">
          © Advocate. Inc all rights reserved
        </span>
        <div className="flex space-x-6">
          <a href="https://facebook.com">
            <img src="/facebook.png" alt="Facebook" className="h-8 w-8" />
          </a>
          <a href="https://instagram.com">
            <img src="/instagram.png" alt="Instagram" className="h-8 w-8" />
          </a>
          <a href="https://linkedin.com">
            <img src="/linkedin.png" alt="LinkedIn" className="h-8 w-8" />
          </a>
          <a href="https://x.com">
            <img src="/Twitter-x.png" alt="X" className="h-8 w-8" />
          </a>
        </div>
      </div>
      </div>
    </footer>
  );
}