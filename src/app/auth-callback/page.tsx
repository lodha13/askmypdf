"use client";

import { useRouter, useSearchParams } from 'next/navigation';
import { trpc } from '../_trpc/client';
import { Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [origin, setOrigin] = useState<string | null>(null);

  // Extract origin safely without Suspense issues
  useEffect(() => {
    if (searchParams) {
      setOrigin(searchParams.get('origin'));
    }
  }, [searchParams]);

  // Destructure query result to access loading, error, and data
  const { data, isLoading, error } = trpc.authCallback.useQuery(undefined, {
    onSuccess: ({ success }) => {
      console.log('success',success)
      if (success) {
        console.log('success',success)
        // user is synced to db
        router.push(origin ? `/${origin}` : '/dashboard');
      }
    },
    onError: (err) => {
      console.log('err',err)
      if (err.data?.code === 'UNAUTHORIZED') {
        router.push('/sign-in');
      }
    },
    retry: true,
    retryDelay: 500,
  });

  // Loading UI
  if (isLoading) {
    return (
      <div className="w-full mt-24 flex justify-center">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="h-8 w-8 animate-spin text-zinc-800" />
          <h3 className="font-semibold text-xl">Setting up your account...</h3>
          <p>You will be redirected automatically.</p>
        </div>
      </div>
    );
  }

  // Error UI
  if (error) {
    return (
      <div className="w-full mt-24 flex justify-center">
        <div className="flex flex-col items-center gap-2">
          <h3 className="font-semibold text-xl text-red-600">An error occurred</h3>
          <p>Please try again later.</p>
        </div>
      </div>
    );
  }

  return null; // Empty render while query processes redirects
};

export default Page;
