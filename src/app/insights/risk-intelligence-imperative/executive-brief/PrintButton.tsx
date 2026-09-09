"use client";

/**
 * His sheet carried an inline `onclick="window.print()"`. The print CSS in
 * brief.css is what makes the output an A4 page — the button only opens the
 * dialog, so there is nothing to set up or tear down here.
 */
export default function PrintButton() {
  return (
    <button type="button" onClick={() => window.print()}>
      Save as PDF
    </button>
  );
}
