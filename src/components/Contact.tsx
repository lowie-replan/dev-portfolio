import { FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
    return (

        <div className="mx-8 md:mx-12">

            {/* ======== SECTION HEADER ======== */}
            <div className="flex items-center">
                <div className="h-[30px] w-[8px] bg-accent rounded-full"></div>
                <h1 className="p-4 text-2xl md:text-3xl font-bold text-accent flex items-center whitespace-nowrap">Contact</h1>
            </div>
            
            {/* ======== FORM WRAPPER ======== */}
            <div className="grid grid-gols-1 lg:grid-cols-2 gap-8 bg-accent/5 p-6 rounded-xl border border-accent/10">

                {/* ======== LEFT COLUMN (TEXTS) ======== */}
                <div className="">
                    <h2 className="text-white text-lg md:text-xl font-bold mb-4">Let's Connect!</h2>
                    <p className="text-zinc-500 mb-8">
                        I am currently open to new opportunities and collaborations. 
                        Whether you have a question or just want to say hi, my inbox is always open!
                    </p>
                    <div className="flex gap-3 items-center text-accent mb-3"><FaEnvelope className="text-lg"/><span className="text-zinc-500">replanlowiejohn@gmail.com</span></div>
                    <div className="flex gap-3 items-center text-accent"><FaPhone className="text-lg"/><span className="text-zinc-500">+63 962 844 9823</span></div>
                </div>

                {/* ======== RIGHT COLUMN (INPUT FORMS) ======== */}
                <div>
                    <form className="space-y-4">
                        <input 
                            type="text"
                            placeholder="Name"
                            className="
                                w-full border border-accent/10 bg-transparent 
                                focus:outline-none focus:border-accent transition-colors 
                                text-white p-2 rounded-lg
                            " 
                        />

                        <input 
                            type="email"
                            placeholder="Email"
                            className="
                                w-full border border-accent/10 bg-transparent 
                                focus:outline-none focus:border-accent transition-colors 
                                text-white p-2 rounded-lg
                            " 
                        />

                        <textarea 
                            placeholder="Type a message..."
                            rows={4}
                            className="
                                w-full border border-accent/10 bg-transparent 
                                focus:outline-none focus:border-accent transition-colors 
                                text-white p-2 rounded-lg"
                            >
                        </textarea>
                        <button className="p-3 bg-accent rounded-xl">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;