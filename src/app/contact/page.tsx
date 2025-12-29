import { ContactForm } from "@/components/contact/form";

export default function ContactPage() {
    return (
        <div className="container py-12 max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                    <h1 className="text-4xl font-bold tracking-tight mb-4">Get in Touch</h1>
                    <p className="text-xl text-muted-foreground mb-8">
                        I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Email</h3>
                            <p className="text-muted-foreground">obilostotskyi@gmail.com</p>
                        </div>
                        {/* Add more contact info if available in profile, but hardcoding for now as verified common pattern or I can fetch profile */}
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Location</h3>
                            <p className="text-muted-foreground">Kyiv, Ukraine</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Socials</h3>
                            <div className="flex gap-4">
                                {/* I can add social links here if I fetch profile, or just let users go to Footer/Home */}
                                <a href="https://linkedin.com/in/obilostotskyi" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                                    LinkedIn
                                </a>
                                <a href="https://github.com/abilostotskyi" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-card p-6 rounded-xl border shadow-sm">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
