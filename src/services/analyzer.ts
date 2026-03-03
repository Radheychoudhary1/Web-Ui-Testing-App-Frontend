// src/services/analyzer.ts
import axios from "axios";

export type Issue = {
  id: string;
  type: string;
  bbox: [number, number, number, number] | null;
  severity: "low" | "medium" | "high";
  confidence: number;
  evidence?: string;
  message: string;
  recommendation: string;
};

export type ScreenResult = {
  filename: string;
  size: { w: number; h: number };
  issues: Issue[];
  summary: { count: number; high: number; medium: number; low: number };
};

// 👇 This is the type your component imports
export type AnalyzeResponse = { screens: ScreenResult[] };

export async function analyzeScreens(files: File[]): Promise<AnalyzeResponse> {
  const form = new FormData();
  files.forEach((f) => form.append("files", f)); // key MUST be "files"

  const res = await axios.post(`/api/analyze`, form, {
    headers: { "Content-Type": "multipart/form-data" },
    timeout: 60_000,
  });
  return res.data as AnalyzeResponse;
}