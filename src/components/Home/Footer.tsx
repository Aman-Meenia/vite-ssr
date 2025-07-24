import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Link, useLocation } from "react-router";

type FooterType = {
  title: string;
  name: string[];
  linkUrl: string[];
};

const footerSections: FooterType[] = [
  {
    title: "Support",
    name: ["Help Center", "Safety Advice", "About"],
    linkUrl: ["/contact", "/safety-advice", "/about"],
  },
  {
    title: "Social Links",
    name: ["Facebook", "Twitter", "Instagram", "LinkedIn"],
    linkUrl: [
      import.meta.env.VITE_FACEBOOK_URL,
      import.meta.env.VITE_TWITTER_URL,
      import.meta.env.VITE_INSTAGRAM_URL,
      import.meta.env.VITE_PINTEREST_URL,
    ],
  },
];

const legalLinks = [
  { name: "Privacy Policy", url: "/privacy" },
  { name: "Terms of Use", url: "/terms-of-use" },
];

export default function Footer() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const location = useLocation();

  const toggleSection = (title: string) => {
    setExpandedSection(expandedSection === title ? null : title);
  };

  return (
    <footer className="w-full bg-gradient-to-r from-[#F82255] to-[#FE7C62] text-white">
      <div className="max-w-[1184px] mx-auto px-4 md:px-8 pt-12 pb-6">
        <div className="md:hidden">
          <div className="border-b border-white/20">
            <button
              className="flex justify-between items-center w-full py-4 text-white"
              onClick={() => toggleSection("Company")}
            >
              <span className="font-medium">About JIVA SYNC</span>
              {expandedSection === "Company" ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>
            {expandedSection === "Company" && (
              <div className="pb-4">
                <div className="flex items-center gap-2 mb-3">
                  <img
                    src="/images/JivaSyncIcon.png"
                    alt="Jiva Sync"
                    className="h-8 w-8"
                  />
                  <h3 className="text-lg font-semibold">JIVA SYNC</h3>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  An AI-Powered Platform for Mindful Singles Seeking Meaningful
                  Connections Based on Shared Values.
                </p>
              </div>
            )}
          </div>

          {footerSections.map((section) => (
            <div key={section.title} className="border-b border-white/20">
              <button
                className="flex justify-between items-center w-full py-4 text-white"
                onClick={() => toggleSection(section.title)}
              >
                <span className="font-medium">{section.title}</span>
                {expandedSection === section.title ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>
              {expandedSection === section.title && (
                <div className="pb-4">
                  {section.title === "Social Links" ? (
                    <div className="flex flex-row items-center space-x-4">
                      <a
                        href={import.meta.env.VITE_FACEBOOK_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition-opacity duration-200"
                      >
                        <div className="h-[30px] w-[30px]">
                          <img
                            src="/images/Footer/Fb.svg"
                            alt="Facebook"
                            className="h-full w-full"
                          />
                        </div>
                      </a>
                      <a
                        href={import.meta.env.VITE_INSTAGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition-opacity duration-200"
                      >
                        <div className="h-[30px] w-[30px]">
                          <img
                            src="/images/Footer/Insta.svg"
                            alt="Instagram"
                            className="w-full h-full"
                          />
                        </div>
                      </a>
                      <a
                        href={import.meta.env.VITE_PINTEREST_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition-opacity duration-200"
                      >
                        <div className="h-[30px] w-[30px]">
                          <img
                            src="/images/Footer/Pinterest.svg"
                            alt="LinkedIn"
                            className="w-[30px] h-[30px]"
                          />
                        </div>
                      </a>
                      <a
                        href={import.meta.env.VITE_TWITTER_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition-opacity duration-200"
                      >
                        <div className="h-[30px] w-[30px]">
                          <img
                            src="/images/Footer/X.svg"
                            alt="Twitter"
                            className="w-full h-full"
                          />
                        </div>
                      </a>
                    </div>
                  ) : (
                    <ul className="space-y-2">
                      {section.name.map((item, index) => (
                        <li key={item}>
                          <Link
                            to={section.linkUrl[index]}
                            className="text-white/80 hover:text-white text-sm"
                            onClick={() => {
                              if (
                                location.pathname === section.linkUrl[index]
                              ) {
                                window.scrollTo({
                                  top: 0,
                                  left: 0,
                                  behavior: "instant",
                                });
                              }
                            }}
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden md:grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/images/JivaSyncIcon.png"
                alt="Jiva Sync"
                className="h-10 w-10"
              />
              <h3 className="text-xl font-semibold">JIVA SYNC</h3>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              An AI-Powered Platform for Mindful Singles Seeking Meaningful
              Connections Based on Shared Values.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Support</h3>
            <ul className="space-y-3">
              {footerSections[0].name.map((item, index) => (
                <li key={item}>
                  <Link
                    to={footerSections[0].linkUrl[index]}
                    className="text-white/80 hover:text-white text-sm transition-colors duration-200"
                    onClick={() => {
                      if (
                        location.pathname === footerSections[0].linkUrl[index]
                      ) {
                        window.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: "instant",
                        });
                      }
                    }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Follow Us</h3>
            <div className="flex flex-row items-center space-x-4">
              <a
                href={import.meta.env.VITE_FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity duration-200"
              >
                <div className="h-[32px] w-[32px]">
                  <img
                    src="/images/Footer/Fb.svg"
                    alt="Facebook"
                    className="h-full w-full"
                  />
                </div>
              </a>
              <a
                href={import.meta.env.VITE_INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity duration-200"
              >
                <div className="h-[32px] w-[32px]">
                  <img
                    src="/images/Footer/Insta.svg"
                    alt="Instagram"
                    className="w-full h-full"
                  />
                </div>
              </a>
              <a
                href={import.meta.env.VITE_PINTEREST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity duration-200"
              >
                <div className="h-[32px] w-[32px]">
                  <img
                    src="/images/Footer/Pinterest.svg"
                    alt="LinkedIn"
                    className="w-[32px] h-[32px] text-white"
                  />
                </div>
              </a>
              <a
                href={import.meta.env.VITE_TWITTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity duration-200"
              >
                <div className="h-[32px] w-[32px]">
                  <img
                    src="/images/Footer/X.svg"
                    alt="Twitter"
                    className="w-full h-full"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="hidden md:block mt-6 border-t border-white/20 h-[1px]" />

        <div className="pt-6">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80">
            {legalLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.url}
                  className="hover:text-white transition-colors duration-200"
                  onClick={() => {
                    if (location.pathname === link.url) {
                      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                    }
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-white/60 text-xs mt-3">
            © 2025 JIVA SYNC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
