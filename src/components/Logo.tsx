export function Logo({ className, variant = "default" }: { className?: string, variant?: "default" | "light" }) {
  return (
    <img 
      src="https://i.ibb.co/HLWRF9Bj/Edu-SHIFT-logo.png" 
      alt="EduSHIFT Learning Logo" 
      className={className}
      referrerPolicy="no-referrer"
    />
  );
}
