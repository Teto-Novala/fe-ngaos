"use client";

export default function Label({
  className = "mb-1 font-normal text-body-6",
  htmlFor,
  children,
  ...rest
}) {
  return (
    <label
      {...rest}
      htmlFor={htmlFor}
      className={`${className} font-poppins xl:text-lg`}>
      {children}
    </label>
  );
}
