export default function FooterWordmark({ text }: { text: string }) {
  return (
    <div
      className="relative w-full -mt-2 overflow-hidden leading-[0.82] pointer-events-none select-none"
      aria-hidden="true"
    >
      <span className="block text-center font-sans font-extrabold text-[clamp(3rem,24vw,22rem)] tracking-[-0.02em] whitespace-nowrap bg-linear-to-b from-white/12 to-white/2 bg-clip-text text-transparent">
        {text}
      </span>
    </div>
  );
}
