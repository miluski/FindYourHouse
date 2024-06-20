export default function PlaceHolder({
  width,
  className,
}: {
  width: string;
  className?: string;
}) {
  return (
    <div className={`d-flex placeholder-wave ${width} ${className}`}>
      <span className="placeholder w-100 rounded-2  opacity-25"></span>
    </div>
  );
}
