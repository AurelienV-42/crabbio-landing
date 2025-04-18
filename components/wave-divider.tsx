export interface WaveDividerProps {
  flip?: boolean;
}

export function WaveDivider({ flip = false }: WaveDividerProps) {
  return (
    <div className="relative w-[135%] h-24 md:h-32 overflow-hidden">
      <svg
        className={`absolute w-full h-full ${flip ? "rotate-180" : ""}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#0A4F66"
          fillOpacity="1"
          d="M0,96L40,106.7C80,117,160,139,240,149.3C320,160,400,160,480,138.7C560,117,640,75,720,80C800,85,880,139,960,144C1040,149,1120,107,1200,90.7C1280,75,1360,85,1400,90.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
