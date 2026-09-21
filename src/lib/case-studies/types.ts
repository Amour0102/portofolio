// Shared case-study content types.

export type MetaRow = { label: string; value: string };

export type Shot = { src: string; alt: string };

export type VisualSection =
  // One wide screenshot in a #F8F8F8 surface. `ratio` sets the aspect (default
  // "816 / 580"); `fit` the object-fit (default "cover"); `caption` is optional.
  | { kind: "web"; image: Shot; caption?: string; ratio?: string; fit?: "cover" | "contain" }
  // Three phone screens side by side.
  | { kind: "phones"; images: Shot[]; caption?: string }
  // A muted, looping, full-bleed video in a rounded surface. `ratio` (e.g.
  // "16 / 9") reserves space to avoid layout shift; `poster` is an optional still.
  // `bordered` defaults to true - set false when the video's own background gives
  // the frame enough definition (e.g. a coloured landing recording).
  | { kind: "video"; src: string; ratio: string; poster?: string; caption?: string; bordered?: boolean }
  // An empty surface reserved for a visual not yet placed. `ratio` is a CSS
  // aspect-ratio string, e.g. "848 / 562".
  | { kind: "placeholder"; ratio: string; caption?: string };
