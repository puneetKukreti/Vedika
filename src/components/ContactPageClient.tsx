'use client';

import dynamic from 'next/dynamic';

const ContactPageContent = dynamic(() => import('./ContactPageContent'), { ssr: false });

export default function ContactPageClient() {
  return <ContactPageContent />;
}