import React from 'react';

export type Language = 'qr';

export interface TabContent {
  id: string;
  label: string;
  content: React.ReactNode;
}

export interface SectionContent {
  id: string;
  title: string;
  description?: React.ReactNode;
  content?: React.ReactNode; // Alias for flexibility
  tabs?: TabContent[];
  subSections?: SectionContent[]; // For nested navigation like History
}

export type ScreenId = 
  | 'splash' 
  | 'main-menu' 
  | 'intro' 
  | 'history-main' 
  | 'history-timeline'
  | 'shigis'
  | 'greece'
  | 'sozlik'
  | 'logika'
  | 'logika-tariyxi'
  | 'logika-formal'
  | 'logika-dialektika'
  | 'logika-matematika'
  | 'etika'
  | 'estetika'
  | 'ontologiya'
  | 'ontologiya-detail'
  | 'gnoseologiya'
  | 'siyasat'
  | 'social'
  | 'sistema'
  | string; // allowing dynamic IDs for philosophers etc.
