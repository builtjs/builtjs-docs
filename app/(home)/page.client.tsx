'use client';

import {
  useEffect,
  useState,
  Fragment,
  type ReactElement,
  type HTMLAttributes,
} from 'react';
import { TerminalIcon } from 'lucide-react';
import { cn } from '@/app/utils/cn';

export function CreateAppAnimation(): React.ReactElement {
  const installCmd = 'npx create-built-app publish';
  const tickTime = 100;
  const timeCommandEnter = installCmd.length;
  const timeCommandRun = timeCommandEnter + 3;
  const timeCommandEnd = timeCommandRun + 3;
  const timeWindowOpen = timeCommandEnd + 1;
  const timeEnd = timeWindowOpen + 1;

  const [tick, setTick] = useState(timeEnd);

  useEffect(() => {
    const timer = setInterval(() => {
      setTick((prev) => (prev >= timeEnd ? prev : prev + 1));
    }, tickTime);

    return () => {
      clearInterval(timer);
    };
  }, [timeEnd]);

  const lines: ReactElement[] = [];

  lines.push(
    <span key="command_type">
      {installCmd.substring(0, tick)}
      {tick < timeCommandEnter && (
        <div className="inline-block w-1 h-3 bg-white animate-pulse" />
      )}
    </span>,
  );

  if (tick >= timeCommandEnter) {
    lines.push(<span key="space"> </span>);
  }

  if (tick > timeCommandRun)
    lines.push(
      <Fragment key="command_response">
        {tick > timeCommandRun + 1 && (
          <>
            <span className="font-bold">Publishing...</span>
          </>
        )}
        <span>|</span>
        {tick > timeCommandRun + 3 && (
          <>
            <span>Your theme has been published in Built Studio!</span>
            <span>View the theme at: https://builtjs.com/themes/design?theme=corporate-basic-abc</span>
          </>
        )}
      </Fragment>,
    );

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        if (tick >= timeEnd) {
          setTick(0);
        }
      }}
    >
      <pre className="overflow-hidden text-xs border rounded-xl">
        <div className="flex flex-row items-center gap-2 px-4 py-2 border-b">
          <TerminalIcon className="size-4" />{' '}
          <span className="font-bold">Terminal</span>
          <div className="grow" />
          <div className="bg-red-400 rounded-full size-2" />
        </div>
        <div className="min-h-[200px] bg-gradient-to-b from-fd-secondary [mask-image:linear-gradient(to_bottom,white,transparent)]">
          <code className="grid p-4">{lines}</code>
        </div>
      </pre>
    </div>
  );
}
