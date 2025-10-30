import React from "react";

interface UnderlineSubtitleProps {
  text: string;
}

function FormatUnderlineSubtitleText(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  const regex = /%i(.*?)%i/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    parts.push(
      <span key={parts.length} className="text-primary-400 underline italic">
        {match[1]}
      </span>
    );

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}

export function UnderlineSubtitle({ text }: UnderlineSubtitleProps) {
  return (
    <p className="font-poppins text-[1.25rem] font-normal text-[#999999]">
      {FormatUnderlineSubtitleText(text)}
    </p>
  );
}
