import React, { useState } from 'react';
import { v4 } from 'uuid';

import { Toaster } from 'components/Toaster';
import Toast from './Toast';

export const Primary = (args) => {
  const [isToastShowing, setIsToastShowing] = useState(false);
  return (
    <>
      <button onClick={() => setIsToastShowing(!isToastShowing)}>
        {isToastShowing ? 'Hide Toaster' : 'Show Toaster'}
      </button>
      <Toaster
        {...args}
        isOpen={isToastShowing}
        toastInstance={{
          content: 'hey',
          onDismiss: () => setIsToastShowing(false),
          type: 'info',
          progress: 42,
          dismissOnAction: true,
          actionLabel: 'Action',
        }}
      />
    </>
  );
};

export const playground = () => {
  const defaults = { id: v4(), isOpen: false, isAutoDismiss: true };
  const [params, setParams] = useState(defaults);
  const dismissToast = () => {
    setParams({ ...params, isOpen: false });
  };
  const randomNum = () => Math.floor(Math.random() * 100);

  const { id, type, isOpen, content, isAutoDismiss, actionLabel, progress } = params;
  return (
    <div className="padding--all">
      <h4>Core:</h4>
      <button onClick={() => setParams({ ...params, isOpen: true })}>Open Toast</button>
      <button onClick={() => setParams({ ...params, isOpen: false })}>Close Toast</button>
      <button onClick={() => setParams({ ...params, isAutoDismiss: !isAutoDismiss })}>
        Toggle isAutoDismiss {isAutoDismiss ? 'off' : 'on'}
      </button>
      <button onClick={() => setParams({ ...params, id: v4() })}>New ID</button>
      <button onClick={() => setParams({ ...defaults })}>Reset all</button>
      <br />
      <br />
      <h4>Types:</h4>
      <button onClick={() => setParams({ ...params, type: 'info' })}>info</button>
      <button onClick={() => setParams({ ...params, type: 'warn' })}>warn</button>
      <button onClick={() => setParams({ ...params, type: 'error' })}>error</button>
      <button onClick={() => setParams({ ...params, type: 'success' })}>success</button>
      <button onClick={() => setParams({ ...params, type: 'progress' })}>progress</button>
      <button onClick={() => setParams({ ...params, progress: randomNum() })}>
        Add random progress
      </button>
      <button onClick={() => setParams({ ...params, progress: null })}>
        Remove progress
      </button>
      <br />
      <br />
      <h4>Modify Content:</h4>
      <button
        onClick={() =>
          setParams({
            ...params,
            actionLabel: actionLabel === 'Hello' ? 'World' : 'Hello',
          })
        }
      >
        Change Action Label
      </button>
      <button onClick={() => setParams({ ...params, content: 'hello world' })}>
        Add content
      </button>
      <button onClick={() => setParams({ ...params, content: <b>hello world</b> })}>
        Add HTML content
      </button>
      <button onClick={() => setParams({ ...params, content: null })}>
        Remove content
      </button>
      <button onClick={() => setParams({ ...params, actionLabel: null })}>
        Remove Action Label
      </button>
      <br />
      <br />
      <h4>Example usages:</h4>
      <button
        onClick={() =>
          setParams({
            ...params,
            id: v4(),
            type: 'error',
            isOpen: true,
            content: 'New ID? Yes!',
          })
        }
      >
        Error Toast (animate)
      </button>
      <button
        onClick={() =>
          setParams({
            ...params,
            id: v4(),
            type: 'info',
            isOpen: true,
            content: 'New ID? Yes!',
          })
        }
      >
        Info Toast (animate)
      </button>
      <button
        onClick={() =>
          setParams({
            ...params,
            id,
            type: 'error',
            isOpen: true,
            content: 'New ID? No.',
          })
        }
      >
        Error Toast (do not animate)
      </button>
      <br />
      <br />
      <b>NOTE: this is state is EXTERNAL to toaster and is being passed in</b>
      <pre>{JSON.stringify(params, null, 1)}</pre>
      <Toaster
        id={id}
        isOpen={isOpen}
        isAutoDismiss={isAutoDismiss}
        toastInstance={{
          onDismiss: dismissToast,
          actionLabel,
          progress,
          type,
          content,
        }}
      />
    </div>
  );
};

playground.parameters = {
  docs: {
    description: {
      story:
        'This is a playground where you can enable certain functionality and see how Toaster reacts in real time, while being able to visualize the exact prop structure to generate it.',
    },
  },
};

export const variations = () => (
  <React.Fragment>
    <Toast
      content={
        <p>
          Check out this <strong className="color--heading">toast</strong>
        </p>
      }
      actionLabel="Action"
      onAction={() => {}}
      type="info"
    />
    <br />
    <Toast
      content={
        <p>
          You better <strong className="color--heading">watch out</strong>
        </p>
      }
      actionLabel="run away"
      onAction={() => {}}
      type="warn"
    />
    <br />
    <Toast
      content={
        <p>
          You <strong className="color--heading">Did it!</strong>
        </p>
      }
      type="success"
    />
    <br />
    <Toast
      content={
        <p>
          Failed to <strong className="color--heading">do a thing</strong>
        </p>
      }
      actionLabel="Retry"
      onAction={() => {}}
      type="error"
    />
    <br />
    <Toast
      content={
        <p>
          Uploading a photo of your <strong className="color--heading">your cat</strong>
        </p>
      }
      type="progress"
    />
    <br />
    <Toast
      content={
        <p>
          <strong className="color--heading">42%</strong> complete uploading your cat
          photo
        </p>
      }
      progress={42}
      type="progress"
    />
  </React.Fragment>
);

variations.parameters = {
  docs: {
    description: {
      story: 'This is merely to give you a better visual idea of all the variations.',
    },
    source: {
      code: 'Hidden. This is merely to give you a visual idea of the themes available.',
    },
  },
};

export default {
  component: Toaster,
  subcomponents: { Toast },
  title: 'components/Toaster',
  parameters: {
    docs: {
      description: {
        component:
          'Controller for positioning, transition, and dismissal of toasts. Important notes: - **⚠️ Import only one `Toaster` component per application**. - Pass in a brand new `id` (with optional props) if you would like to animate a new toast in. - Passing in new props without changing the id will not retrigger the animation',
      },
    },
  },
};
