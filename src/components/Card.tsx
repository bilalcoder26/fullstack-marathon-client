import clsx from "clsx"

type CardVariant = "default" | "outline" | "elevated"
type CardSize = "sm" | "md" | "lg"

interface CardProps {
  title: string
  description?: string
  imageUrl?: string
  category?: string
  onClick?: () => void
  variant?: CardVariant
  size?: CardSize
  className?: string
  children?: React.ReactNode
}

const Card = ({
  title,
  description,
  imageUrl,
  category,
  onClick,
  variant = "default",
  size = "md",
  className,
  children
}: CardProps) => {

  const baseStyles =
    "w-full rounded-xl overflow-hidden transition-all duration-300"

  const variantStyles = {
    default: "bg-white shadow-md hover:shadow-xl hover:-translate-y-1",
    outline: "border border-gray-300 bg-white hover:shadow-md",
    elevated: "bg-white shadow-2xl"
  }

  const sizeStyles = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg"
  }

  return (
    <div
      onClick={onClick}
      className={clsx(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        onClick && "cursor-pointer hover:scale-[1.02]",
        className
      )}
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full aspect-[4/3] object-cover"
        />
      )}

      <div className="p-4">
        {category && (
          <span className="text-xs text-blue-600 font-medium">
            {category}
          </span>
        )}

        <h2 className="font-semibold mt-1">
          {title}
        </h2>

        {description && (
          <p className="text-gray-500 text-sm mt-1">
            {description}
          </p>
        )}

        {children}
      </div>
    </div>
  )
}

export default Card
