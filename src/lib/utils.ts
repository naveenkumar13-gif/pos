"use client";

import * as React from "react";
import { toast as sonnerToast } from "sonner";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function useToast() {
  return {
    toast: sonnerToast,
  };
}
