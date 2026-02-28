import { cn } from "@/lib/utils";
export default function GlassPanel({
  children,
  className
}) {
  return <div className={cn("bg-glass rounded-3xl p-6 md:p-10 relative overflow-hidden transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_40px_-15px_rgba(139,92,246,0.3)]", className)}>
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 pointer-events-none" />
            <div className="relative z-10">
                {children}
            </div>
        </div>;
}