import { ComponentProps } from "react";

const SectionTitle = ({ children, ...props }: ComponentProps<"p">) => {
  return (
    <p className="mb-2 ml-5 font-bold uppercase lg:text-xl" {...props}>
      {children}
    </p>
  );
};

export default SectionTitle;
