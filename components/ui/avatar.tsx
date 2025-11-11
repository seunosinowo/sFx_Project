export function Avatar({ src, alt, initials }: { src?: string; alt?: string; initials: string }) {
  return (
    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-white font-semibold">
      {initials}
    </div>
  )
}
