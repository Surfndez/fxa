import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { useClickOutsideEffect } from '../lib/hooks';

import Portal from './Portal';

import './DialogMessage.scss';

type DialogMessageProps = {
  className?: string;
  onDismiss: Function;
  children: ReactNode;
};

export const DialogMessage = ({
  className = '',
  onDismiss,
  children,
}: DialogMessageProps) => {
  const dialogInsideRef = useClickOutsideEffect<HTMLDivElement>(onDismiss);
  return (
    <Portal id="dialogs">
      <div data-testid="dialog-message-container" className={classNames('blocker', 'current')}>
        <div data-testid="dialog-message-content" className={classNames('modal', className)} ref={dialogInsideRef}>
          <button data-testid="dialog-dismiss" className="dismiss" onClick={onDismiss as () => void}>
            &#x2715;
          </button>
          <div className="message">{children}</div>
        </div>
      </div>
    </Portal>
  );
};

export default DialogMessage;
