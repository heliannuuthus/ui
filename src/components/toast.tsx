import * as React from 'react';
import { Toaster as Sonner, toast } from 'sonner';

function Toaster(props: React.ComponentProps<typeof Sonner>) {
  return <Sonner position="top-center" richColors closeButton {...props} />;
}

export { Toaster, toast };
