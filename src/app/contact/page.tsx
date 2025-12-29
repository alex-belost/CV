import { ContactForm } from '@/components/contact/form';

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-12 md:px-8">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight">
            Get in Touch
          </h1>

          <p className="text-muted-foreground mb-8 text-xl">
            I&apos;m always open to discussing new projects, creative ideas or
            opportunities to be part of your visions.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="mb-2 text-lg font-semibold">Email</h3>
              <p className="text-muted-foreground">obilostotskyi@gmail.com</p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">Location</h3>
              <p className="text-muted-foreground">Kyiv, Ukraine</p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">Socials</h3>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/obilostotskyi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  LinkedIn
                </a>

                <a
                  href="https://github.com/abilostotskyi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-xl border p-6 shadow-sm">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
