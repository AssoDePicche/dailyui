import { FC, PropsWithChildren, ReactNode } from 'react';

import StyledComponentsRegistry from '@/lib/registry';

export const Providers: FC<PropsWithChildren> = ({ children }): ReactNode => {
  return (
    <>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </>
  );
};
