import type { ReactNode } from "react";

export const React: typeof import("react").default;
export const createRoot: typeof import("react-dom/client").createRoot;
export const jsx: typeof import("react/jsx-runtime").jsx;
export const jsxs: typeof import("react/jsx-runtime").jsxs;
export const Fragment: typeof import("react").Fragment;

export function CanvasShell(props: { children?: ReactNode }): JSX.Element;

export function Stack(props: Record<string, unknown>): JSX.Element;
export function Row(props: Record<string, unknown>): JSX.Element;
export function Grid(props: Record<string, unknown>): JSX.Element;
export function Divider(props: Record<string, unknown>): JSX.Element;
export function Table(props: Record<string, unknown>): JSX.Element;
export function Text(props: Record<string, unknown>): JSX.Element;
export function H1(props: Record<string, unknown>): JSX.Element;
export function H2(props: Record<string, unknown>): JSX.Element;
export function H3(props: Record<string, unknown>): JSX.Element;
export function Link(props: Record<string, unknown>): JSX.Element;
export function Card(props: Record<string, unknown>): JSX.Element;
export function CardHeader(props: Record<string, unknown>): JSX.Element;
export function CardBody(props: Record<string, unknown>): JSX.Element;
export function Callout(props: Record<string, unknown>): JSX.Element;
export function Pill(props: Record<string, unknown>): JSX.Element;
export function Stat(props: Record<string, unknown>): JSX.Element;
export function BarChart(props: Record<string, unknown>): JSX.Element;
export function LineChart(props: Record<string, unknown>): JSX.Element;
export function PieChart(props: Record<string, unknown>): JSX.Element;

export function useHostTheme(): {
  tokens: Record<string, unknown>;
  kind: string;
};
