function AccordionLink({
  linkText,
  linkURL,
  className = "ps-3",
}: {
  linkText: string;
  linkURL: string;
  className?: string;
}) {
  return (
    <a
      className={`link-underline link-underline-opacity-0 text-black fw-normal ${className}`}
      href={linkURL}
    >
      {linkText}
    </a>
  );
}

export default AccordionLink;
