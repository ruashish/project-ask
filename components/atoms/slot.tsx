interface SlotProps {
  element?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

export const Slot = ({ element, className, children }: SlotProps) => {
  const Element = element ?? 'div';
  return <Element className={className}>{children}</Element>;
};
