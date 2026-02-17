import React from "react";

interface PageHeaderProps {
  title: string;
  className?: string;
  textSize?: string;
  textColor?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  className,
  textSize = "text-[24px]",
  textColor = "text-black",
}) => {
  return (
    <h1 className={`${textSize} font-semibold ${textColor} ${className || ""}`}>
      {title}
    </h1>
  );
};

export default PageHeader;
