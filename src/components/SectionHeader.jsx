export default function SectionHeader({ eyebrow, title, subtitle, center = false }) {
  return (
    <div className={`mb-10 ${center ? 'text-center' : ''}`}>
      {eyebrow && (
        <p className="text-brand-red text-sm font-semibold uppercase tracking-widest mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-gray-500 text-base leading-relaxed max-w-xl ${center ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}