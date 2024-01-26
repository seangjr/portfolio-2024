import ServiceUi from "../serviceui";

export default function Services() {
  const expertiseItems = [
    "Web Development",
    "Backend Operations",
    "Database Design",
    "Websockets",
    "Prototyping",
  ];

  const toolBoxItems = [
    "TypeScript",
    "Golang",
    "Python",
    "Java",
    "Next.js",
    "Svelte",
    "TailwindCSS",
  ];

  return (
    <section id="services" className="my-[10%]" aria-label="services">
      <div className="space-y-14">
        <ServiceUi
          title="my expertise."
          description="My expertise lies in the realm of full-stack development, where I seamlessly blend front-end creativity with back-end functionality. I am dedicated to building robust, scalable, and dynamic web applications that cater to both client needs and user experiences."
          items={expertiseItems}
        />
        <ServiceUi
          title="my digital tool box."
          description="These are my go to tech stack to make any projects happen. I am always eager of learning more about my current stack, and new technologies that could expand my horizons."
          items={toolBoxItems}
        />
      </div>
    </section>
  );
}
