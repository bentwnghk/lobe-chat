'use client';

import { FluentEmoji } from '@bentwnghk/ui';
import { Button } from 'antd';
import Link from 'next/link';
import { memo, useLayoutEffect, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import { MAX_WIDTH } from '@/const/layoutTokens';

import { type ErrorType, sentryCaptureException } from './sentryCaptureException';

interface ErrorCaptureProps {
  error: ErrorType;
  reset: () => void;
}

const ErrorCapture = memo<ErrorCaptureProps>(({ reset, error }) => {
  const { t } = useTranslation('error');

  useLayoutEffect(() => {
    sentryCaptureException(error);
  }, [error]);

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.reload();
    }, 100);

    return () => clearTimeout(timer); // Cleanup the timeout on unmount
  }, []); // Empty dependency array to run only once on mount

  const handleReset = () => {
    reset(); // Call the provided reset function
    window.location.reload(); // Reload the page
  };

  return (
    <Flexbox align={'center'} justify={'center'} style={{ minHeight: '100%', width: '100%' }}>
      <h1
        style={{
          filter: 'blur(8px)',
          fontSize: `min(${MAX_WIDTH / 6}px, 25vw)`,
          fontWeight: 900,
          margin: 0,
          opacity: 0.12,
          position: 'absolute',
          zIndex: 0,
        }}
      >
        ERROR
      </h1>
      <FluentEmoji emoji={'🤧'} size={64} />
      <h2 style={{ fontWeight: 'bold', marginTop: '1em', textAlign: 'center' }}>
        {t('error.title')}
      </h2>
      <p style={{ marginBottom: '2em' }}>{t('error.desc')}</p>
      <Flexbox gap={12} horizontal style={{ marginBottom: '1em' }}>
        <Button onClick={handleReset}>{t('error.retry')}</Button>
        <Link href="/">
          <Button type={'primary'}>{t('error.backHome')}</Button>
        </Link>
      </Flexbox>
    </Flexbox>
  );
});

ErrorCapture.displayName = 'ErrorCapture';

export default ErrorCapture;
