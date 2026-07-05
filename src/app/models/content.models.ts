/**
 * Content models for the portfolio.
 * All site content is typed against these interfaces and lives in `../data/*.ts`.
 */

export interface Profile {
  /** Display name, e.g. "Mark Anthony Enfermo". */
  name: string;
  /** Terminal-style handle, e.g. "orenji-neko". */
  handle: string;
  /** Short role/title, e.g. "Full-Stack & DevOps Engineer". */
  role: string;
  /** One-line value proposition shown on the hero. */
  tagline: string;
  /** Longer bio, rendered as the `whoami` output. Each string is a paragraph. */
  bio: string[];
  /** Location, e.g. "Manila, PH". */
  location: string;
  /** Optional years of experience or availability blurb. */
  status: string;
  /** Short list of highlight facts for the ID spec-sheet. */
  specs: SpecRow[];
}

export interface SpecRow {
  label: string;
  value: string;
}

export type ProjectRank = 'S' | 'A' | 'B';

export interface Project {
  /** Stable id used for @for tracking and links. */
  id: string;
  /** Project name. */
  name: string;
  /** Optional self-assigned "rank" badge for flavor (S/A/B). */
  rank: ProjectRank;
  /** One-line summary. */
  summary: string;
  /** Problem -> solution narrative paragraphs. */
  description: string[];
  /** Tech/tools used, rendered as chips. */
  stack: string[];
  /** Optional plain-text architecture diagram (monospace), e.g. an AWS deploy sketch. */
  architecture?: string;
  /** External links (repo, live demo, etc.). */
  links: LinkRef[];
  /** Optional year/period for ordering context. */
  period?: string;
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
  /** Period, e.g. "2023 — Present". */
  period: string;
  /** Pipeline stage flavor label, e.g. "build", "deploy", "operate". */
  stage: string;
  /** Bullet points of what you did / shipped. */
  highlights: string[];
}

export interface SkillGroup {
  /** Stable id for @for tracking. */
  id: string;
  /** Category title, e.g. "Cloud / DevOps". */
  title: string;
  /** Individual skills/tools. */
  items: string[];
}

export interface ContactInfo {
  /** Primary contact email. */
  email: string;
  /** Short call-to-action line. */
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

/** A navigable "channel" (route) in the shell nav. */
export interface Channel {
  path: string;
  /** Tab label. */
  label: string;
  /** Short command shown in the terminal-style nav, e.g. "cd ~/about". */
  command: string;
}
