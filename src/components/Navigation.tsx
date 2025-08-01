import { useState } from "react";
import { Menu, X, Store } from "lucide-react";
import { Button } from "@/components/ui/button";

import tlogo from "../assets/tlogo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "About", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b shadow-soft">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg">
              <img src={tlogo} alt="TINDA Logo" className="w-10 h-10" />
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 2133 698" fill="none">
              <path d="M2070.71 530.747H1685.48C1685.33 530.747 1685.18 530.737 1685.03 530.732H2071.15C2071.01 530.737 2070.86 530.747 2070.71 530.747ZM1835.82 106.132C1854.48 73.8183 1901.13 73.8179 1919.79 106.132L2122.98 458.024C2141.64 490.34 2118.31 530.732 2080.99 530.732H2071.15C2082.09 530.417 2088.82 518.498 2083.3 508.934L1890.69 175.347C1885.09 165.653 1871.09 165.653 1865.49 175.347L1672.88 508.934C1667.36 518.503 1674.09 530.417 1685.03 530.732H1674.62C1637.3 530.732 1613.98 490.34 1632.64 458.024L1835.82 106.132Z" fill="#0073E6" />
              <path d="M1890.34 473.291C1884.71 482.84 1870.9 482.84 1865.27 473.291L1808.83 377.468C1803.12 367.774 1810.11 355.547 1821.36 355.547H1934.25C1945.5 355.547 1952.49 367.774 1946.78 377.468L1890.34 473.291Z" fill="#FFC107" />
              <path d="M207.752 551.086C198.651 551.086 190.998 547.983 184.793 541.779C178.588 535.574 175.485 527.926 175.485 518.822V66.5209H240.018V518.822C240.018 527.926 236.916 535.574 230.711 541.779C224.506 547.983 216.852 551.086 207.752 551.086ZM41.4553 126.084C32.7682 126.084 25.5289 123.395 19.7375 118.018C14.3597 112.227 11.6709 104.988 11.6709 96.3022C11.6709 87.616 14.3597 80.5841 19.7375 75.2071C25.5289 69.4161 32.7682 66.5209 41.4553 66.5209H373.428C382.115 66.5209 389.147 69.4161 394.525 75.2071C400.317 80.5841 403.212 87.616 403.212 96.3022C403.212 104.988 400.317 112.227 394.525 118.018C389.147 123.395 382.115 126.084 373.428 126.084H41.4553ZM506.917 551.086C497.818 551.086 490.163 547.983 483.961 541.779C477.756 535.574 474.653 527.926 474.653 518.822V98.784C474.653 89.2703 477.756 81.618 483.961 75.8275C490.163 69.6231 497.818 66.5209 506.917 66.5209C516.433 66.5209 524.088 69.6231 529.876 75.8275C536.081 81.618 539.184 89.2703 539.184 98.784V518.822C539.184 527.926 536.081 535.574 529.876 541.779C524.088 547.983 516.433 551.086 506.917 551.086ZM694.752 551.086C685.653 551.086 677.998 547.983 671.793 541.779C666.005 535.574 663.106 527.926 663.106 518.822V98.784C663.106 89.2703 666.005 81.618 671.793 75.8275C677.998 69.6231 685.653 66.5209 694.752 66.5209C704.68 66.5209 712.955 70.45 719.572 78.3093L990.114 438.167V98.784C990.114 89.2703 993.217 81.618 999.422 75.8275C1005.63 69.6231 1013.28 66.5209 1022.38 66.5209C1031.9 66.5209 1039.55 69.6231 1045.34 75.8275C1051.13 81.618 1054.03 89.2703 1054.03 98.784V518.822C1054.03 527.926 1051.13 535.574 1045.34 541.779C1039.55 547.983 1031.9 551.086 1022.38 551.086C1018.25 551.086 1013.69 550.261 1008.73 548.604C1004.18 546.539 1000.46 543.64 997.565 539.918L727.018 180.062V518.822C727.018 527.926 723.916 535.574 717.711 541.779C711.923 547.983 704.268 551.086 694.752 551.086ZM1210.44 551.086C1201.34 551.086 1193.69 547.983 1187.48 541.779C1181.28 535.574 1178.18 527.926 1178.18 518.822V98.784C1178.18 89.2703 1181.28 81.618 1187.48 75.8275C1193.69 69.6231 1201.34 66.5209 1210.44 66.5209H1322.76C1358.33 66.5209 1390.6 72.5183 1419.56 84.5138C1448.93 96.0952 1474.37 112.847 1495.88 134.77C1517.39 156.278 1533.94 181.717 1545.52 211.084C1557.1 240.452 1562.89 272.922 1562.89 308.494C1562.89 344.066 1557.1 376.743 1545.52 406.524C1533.94 435.892 1517.39 461.537 1495.88 483.46C1474.37 504.969 1448.93 521.721 1419.56 533.713C1390.6 545.298 1358.33 551.086 1322.76 551.086H1210.44ZM1242.71 494.005H1322.76C1357.5 494.005 1388.12 486.147 1414.6 470.43C1441.48 454.299 1462.58 432.376 1477.88 404.663C1493.19 376.536 1500.84 344.48 1500.84 308.494C1500.84 272.094 1493.19 240.038 1477.88 212.325C1462.58 184.612 1441.48 162.896 1414.6 147.179C1388.12 131.461 1357.5 123.602 1322.76 123.602H1242.71V494.005Z" fill="#0073E6" />
            </svg>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button className="primary-gradient text-primary-foreground shadow-primary">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t animate-slide-up">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t">
                <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-primary-foreground">
                  Login
                </Button>
                <Button className="primary-gradient text-primary-foreground shadow-primary">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;