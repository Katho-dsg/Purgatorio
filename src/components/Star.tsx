// Estrella de cuatro puntas de los afiches.
export function Star({ size = 18, className = "" }: { size?: number; className?: string }) {
  return <span aria-hidden className={`star ${className}`} style={{ ["--s" as string]: `${size}px` }} />;
}
