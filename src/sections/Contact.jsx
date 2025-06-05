import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import Particles from "../components/Particles";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] = useState("success");
    const [alertMessage, setAlertMessage] = useState("Thank you! Your message has been sent successfully.");
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }
    const showAlertMessage = (type, message) => {
        setAlertType(type);
        setAlertMessage(message);
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 3000); // Hide alert after 3 seconds
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            console.log("Form submitted:", formData);
            await emailjs.send(
                'service_551di6x',
                'template_oekmf5r',
                {
                    from_name: formData.name,
                    to_name: 'Hien Trang',
                    from_email: formData.email,
                    to_email: "trangbui90320004@gmail.com",
                    message: formData.message,
                },
                "-DjidOfkWtFcaXpXu"
            )
            setIsLoading(false);
            showAlertMessage("success", "Thank you! Your message has been sent successfully.");
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        } catch (error) {
            setIsLoading(false);
            console.error("Error sending email:", error);
            showAlertMessage("danger", "Failed to send message. Please try again later.");
        }
        // Here you would typically handle form submission, e.g., send data to an API

        // service_551di6x
        // template_oekmf5r

        // Reset form after submission
        // setFormData({
        //     name: '',
        //     email: '',
        //     message: ''
        // });
    }
    return (
        <section id="contact"
            className="relative flex items-center c-space section-spacing">
            <Particles
                className="absolute inset-0 -z-50"
                quantity={100}
                ease={80}
                color={"#fff"}
                refresh
            />
            {showAlert && < Alert type={alertType} text={alertMessage} />}
            <div
                className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
                <div className="flex flex-col items-start w-full gap-5 mb-10">
                    <h2 className="text-heading">
                        Let's Talk
                    </h2>
                    <p className="font-normal text-neutral-400">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you have a question or just want to say hi, feel free to reach out!
                    </p>
                </div>
                <form className="w-ful"
                    onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label htmlFor="name"
                            className="field-label">
                            Full name
                        </label>
                        <input id="name"
                            name="name"
                            type="text"
                            className="field-input field-input-focus"
                            placeholder="Hien Trang"
                            autoComplete="name"
                            value={formData.name}
                            onChange={handleChange}
                            required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email"
                            className="field-label">
                            Email
                        </label>
                        <input id="email"
                            name="email"
                            type="email"
                            className="field-input field-input-focus"
                            placeholder="trangbui19032004@gmail.com"
                            autoComplete="email"
                            value={formData.email}
                            onChange={handleChange}
                            required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="message"
                            className="field-label">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            type="text"
                            rows="4"
                            className="field-input field-input-focus"
                            placeholder="Hi, I would like to discuss..."
                            autoComplete="message"
                            value={formData.message}
                            onChange={handleChange}
                            required />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation">
                        {isLoading ? "Send" : "Sending..."}
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact