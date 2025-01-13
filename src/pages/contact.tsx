import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);
    setSuccess(false);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          apikey: process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY,
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container bg-[#2C2E39] w-full max-w-3xl rounded p-12 relative">
      {success && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#2C2E39] text-green-400 rounded z-10">
          <div className="flex flex-col items-center">
            <div className="rounded-full border-0 border-green-400 p-4 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-16 h-16 text-green-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4M12 4c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-[Raleway]">
              Message sent successfully!
            </h2>
            <p className="text-sm mt-2 text-[#EBE4D5]">
              Thanks, your message has been received. I will get back to you as
              soon as I can.
            </p>
          </div>
        </div>
      )}

      <div className="text-center">
        <h1 className="text-4xl font-[Raleway] text-[#EBE4D5] font-bold mb-4">
          Contact Me
        </h1>
        <p className="text-lg font-[Poppins] font-bold text-[#B36A62]">
          Please don&apos;t hesitate to reach out via the form below or directly
          by sending me an email.
        </p>
        <div className="mt-6 space-y-4">
          <p className="text-[#EBE4D5] text-sm font-[Overpass]">
            <span className="font-bold">My Email:</span>{" "}
            <a
              className="myemail text-[#66A2B2]"
            >
              kalmayalis@gmail.com
            </a>
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-[#EBE4D5] mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded bg-[#1D1E25] text-[#EBE4D5] focus:outline-none focus:ring-2 focus:ring-[#66A2B2]"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-[#EBE4D5] mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded bg-[#1D1E25] text-[#EBE4D5] focus:outline-none focus:ring-2 focus:ring-[#66A2B2]"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-[#EBE4D5] mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded bg-[#1D1E25] text-[#EBE4D5] focus:outline-none focus:ring-2 focus:ring-[#66A2B2] resize-none"
            rows={5}
          />
        </div>
        <button
          type="submit"
          className="submit-button w-full bg-[#66A2B2] text-[#2C2E39] px-4 py-2 rounded font-bold hover:opacity-80"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>

      {error && (
        <p className="text-red-400 text-center mt-4">
          Something went wrong. Please try again.
        </p>
      )}
    </div>
  );
}
