import { mySocials } from "../constants"

const Footer = () => {
    return (
        <section className="c-space pb-3">
            {/* Gradient line */}
            <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full mb-5"></div>

            {/* Footer content */}
            <div className="flex flex-wrap items-center justify-between gap-5 text-sm text-neutral-400">
                {/* Terms & Privacy */}
                <div className="flex gap-4">
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                </div>

                {/* Social Links */}
                <div className="flex gap-3">
                    {mySocials.map((social, index) => (
                        <a href={social.href} key={index} className="hover:opacity-70 transition-opacity">
                            <img src={social.icon} alt={social.name} className="w-5 h-5" />
                        </a>
                    ))}
                </div>

                {/* Copyright */}
                <p>
                    © 2025 Trang, All rights reserved.
                </p>
            </div>
        </section>
    )
}

export default Footer