const Role = ({
  forwardedRef,
}: {
  forwardedRef: (el: HTMLDivElement | null) => void;
}) => {
  return (
    <section
      ref={forwardedRef}
      id="about"
      className="select-none flex my-20 md:my-[12%] py-10 flex-col items-center justify-center overflow-hidden nav-change"
      aria-label=""
    >
      <div className="flex w-full items-center space-x-20">
        <h1 className="text-heading-1 font-medium text-secondary-400 leading-[1.25em] md:leading-[1.08em]">
          I provide startups with custom full-stack solutions that are effective
          and profitable from concept to launch for lasting digital success.
        </h1>
      </div>
    </section>
  );
};

export default Role;
