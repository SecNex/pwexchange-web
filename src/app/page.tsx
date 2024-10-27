
import type { Metadata } from 'next';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { HomeHero } from '@/components/hero/start';
import { GradientHeader } from '@/components/me/headers';
import { IconArrowUpRight } from '@tabler/icons-react';

export const metadata: Metadata = {
  title: 'Home',
  description: 'About SecNex',
}

export default function Home() {
  return (
    <div className=''>
      <HomeHero />
      <div className='flex flex-col space-y-8 max-w-[80em] mx-auto py-5'> 
      </div>
    </div>
  );
}