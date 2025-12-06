import React from 'react';

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}