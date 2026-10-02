/**
 * Content models for the portfolio.
 * All site content is typed against these interfaces and lives in `../data/*.ts`.
 */

export interface Profile {
  /** Short display name used in the header, e.g. "Mark Enfermo". */
  name: string;
  /** Full legal name used in the footer, e.g. "Mark Jess Anthony Enfermo". */
  fullName: string;
  /** Online handle, e.g. "orenji-neko". */
  handle: string;
  /** Short role/title, e.g. "Entry-Level Software Developer". */
  role: string;
  /** One-line value proposition shown as the hero headline. */
  tagline: string;
  /** Trailing words of `tagline` that get the accent highlight, e.g. "ship them.". */
  taglineHighlight: string;
  /** Hero intro. Each string is a paragraph; the first is set larger. */
  bio: string[];
  /** Location, e.g. "Cebu, PH". */
  location: string;
  /** Availability blurb shown in the hero status pill. */
  status: string;
  /** Rows of the hero spec sheet. */
  specs: SpecRow[];
}

export interface SpecRow {
  label: string;
  value: string;
}

export interface Project {
  /** Stable id used for @for tracking. */
  id: string;
  /** Project name. */
  name: string;
  /** Optional tagline shown under the name. */
  subtitle?: string;
  /** What kind of thing it is, e.g. "Mobile app". */
  kind: string;
  /** What it does and what you did on it. */
  summary: string;
  /** Tech/tools used, rendered as chips. */
  stack: string[];
  /** Short "how it worked" steps, rendered as a flow. */
  flow: string[];
  /** Optional external links (repo, live demo, etc.). */
  links?: LinkRef[];
}

export interface LinkRef {
  label: string;
  url: string;
}

export interface ExperienceItem {
  /** Stable id for @for tracking. */
  id: string;
  /** Role/title held. */
  role: string;
  /** Company / organization. */
  org: string;
  /** Period, e.g. "Jan 2026 – Jun 2026". */
  period: string;
  /** Optional headline result, rendered as `before after` with `after` highlighted. */
  metric?: Metric;
  /** Bullet points of what you did / shipped. */
  highlights: string[];
}

export interface Metric {
  /** e.g. "40s+ →" */
  before: string;
  /** e.g. "<1s" */
  after: string;
  /** What the numbers mean. */
  caption: string;
}

export interface EducationItem {
  /** Stable id for @for tracking. */
  id: string;
  /** Degree, e.g. "Bachelor’s in Information Technology". */
  degree: string;
  /** School name. */
  school: string;
  /** Period, e.g. "2022 – 2026". */
  period: string;
  /** Optional honors, e.g. "Cum laude". */
  honors?: string;
}

export interface SkillGroup {
  /** Stable id for @for tracking. */
  id: string;
  /** Category title, e.g. "Cloud & Services". */
  title: string;
  /** Individual skills/tools. */
  items: string[];
}

export interface ContactInfo {
  /** Primary contact email. */
  email: string;
  /** Large call-to-action heading. */
  heading: string;
  /** Short line under the heading. */
  blurb: string;
  /** Social / external profile links. */
  socials: SocialLinkRef[];
}

export interface SocialLinkRef {
  /** Network/label, e.g. "GitHub". */
  label: string;
  /** Handle or short display value, e.g. "@orenji-neko". */
  handle: string;
  /** Full URL. */
  url: string;
}

/** An in-page section linked from the header nav. */
export interface NavSection {
  /** Element id of the section, e.g. "work". */
  id: string;
  /** Nav label. */
  label: string;
}
