import { Link } from "@/i18n/routing";
import { Phone, Building } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-[#6D6E71] text-white py-10 px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 pl-[20%]">
        <div className="">
          <h3 className="text-lg font-bold text-primaryBlue mb-4">MDV</h3>
          <div className="flex items-center mb-3">
            <Building className="mr-3 text-primaryGreen text-sm" />
            <span>8501 Rue Cordner, Lasalle, QC</span>
          </div>

          <div className="flex items-center">
            <Phone className="mr-3 text-primaryGreen text-sm" />
            <span>(514) 766-5386</span>
          </div>
          <div className="mt-3">
            <a
              href="https://www.facebook.com/people/Paysagiste-et-Deneigement-MDV-inc/100042520305225/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="w-8 h-8 text-primaryBlue hover:text-[#8CC63F] transition duration-300"
              />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-[#00AEEF] mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/contact"
                className="hover:text-[#8CC63F] ease-in-out transition duration-300"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-[#8CC63F] ease-in-out  transition duration-300 "
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/careers"
                className="hover:text-[#8CC63F] ease-in-out  transition duration-300 "
              >
                Careers
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-[#00AEEF] mb-4">
            Our Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="/landscaping"
                className="hover:text-[#8CC63F] ease-in-out transition duration-300 "
              >
                Landscaping
              </a>
            </li>
            <li>
              <a
                href="/snow-removal"
                className="hover:text-[#8CC63F] ease-in-out transition duration-300"
              >
                Snow Removal
              </a>
            </li>
            <li>
              <a
                href="/slope-cutting"
                className="hover:text-[#8CC63F] ease-in-out transition duration-300"
              >
                Slope Cutting
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-white pt-6 text-center text-sm text-gray-200">
        © {new Date().getFullYear()} Paysagiste et Deneigement MDV. All rights reserved.
      </div>
    </footer>
  );
}
