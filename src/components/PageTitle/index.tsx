import { memo, useEffect } from 'react';

const PageTitle = memo<{ title: string }>(({ title }) => {
  useEffect(() => {
    document.title = title ? `${title} · Mr.🆖 AI` : 'Mr.🆖 AI';
  }, [title]);

  return null;
});

export default PageTitle;
