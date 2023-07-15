import { Suspense } from 'react';
import Card from '../components/Card';

export default async function RootPage() {
  return (
    <div>
      This is RootPaged
      <Suspense fallback={<>Loading....</>}>
        {/* @ts-expect-error Server Component */}
        <Card />
      </Suspense>
    </div>
  );
}
