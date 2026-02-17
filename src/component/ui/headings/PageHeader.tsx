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
  textSize = "text-[32px]",
  textColor = "text-[#0A1E25]",
}) => {
  return (
    <h1 className={`${textSize} font-semibold ${textColor} ${className || ""}`}>
      {title}
    </h1>
  );
};

export default PageHeader;
