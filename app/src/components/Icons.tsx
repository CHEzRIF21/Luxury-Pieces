interface IconProps {
  size?: number;
  stroke?: string;
  strokeWidth?: number;
}

function svgProps({ size = 20, stroke = 'currentColor', strokeWidth = 1.5 }: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke,
    strokeWidth,
  } as const;
}

export function CartIcon(props: IconProps) {
  return (
    <svg {...svgProps(props)}>
      <path d="M6 7h12l-1 13H7z" />
      <path d="M9 10V6a3 3 0 016 0v4" />
    </svg>
  );
}

export function HomeIcon(props: IconProps) {
  return (
    <svg {...svgProps(props)}>
      <path d="M3 11l9-8 9 8" />
      <path d="M5 9v11h14V9" />
    </svg>
  );
}

export function WatchIcon(props: IconProps) {
  return (
    <svg {...svgProps(props)}>
      <circle cx="12" cy="12" r="7" />
      <path d="M12 9v3l2 2" />
    </svg>
  );
}

export function HouseIcon(props: IconProps) {
  return (
    <svg {...svgProps(props)}>
      <path d="M4 21V8l8-5 8 5v13" />
      <path d="M9 21v-6h6v6" />
    </svg>
  );
}

export function RotateIcon(props: IconProps) {
  return (
    <svg {...svgProps(props)}>
      <path d="M21 12a9 9 0 11-2.6-6.4" />
      <path d="M21 3v5h-5" />
    </svg>
  );
}

export function BackIcon(props: IconProps) {
  return (
    <svg {...svgProps(props)}>
      <path d="M19 12H5M11 18l-6-6 6-6" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...svgProps(props)}>
      <path d="M12 2l7 4v6c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function EmptyCartIcon(props: IconProps) {
  return (
    <svg {...svgProps(props)}>
      <circle cx="12" cy="12" r="7" />
      <path d="M12 9v3l2 2M12 2v3M12 19v3" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...svgProps(props)}>
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...svgProps(props)}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
