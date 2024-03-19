'use client';

import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';

import { CodeEditor } from '../editor';
import { ActionMenu } from './action-menu';
import { ProblemStatement } from './problem-statement';

const PANEL_GAP = 1;

export const ProblemPage = () => {
  const onLayout = (sizes: number[]) => {
    document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
  };

  return (
    <div className="h-screen w-full">
      <PanelGroup autoSaveId="problem-page-layout" direction="horizontal">
        <Panel>
          <PanelGroup direction="vertical">
            <Panel>
              <div className="relative flex h-full" style={{ gap: `${PANEL_GAP}rem` }}>
                <ActionMenu />
                <ProblemStatement />
              </div>
            </Panel>
            <PanelResizeHandle className="h-2 w-full bg-blue-800" />
            <Panel>
              <div className="h-full w-full">
                <CodeEditor />
              </div>
            </Panel>
          </PanelGroup>
        </Panel>
        <PanelResizeHandle className="w-2 bg-blue-800" />
        <Panel>
          <PanelGroup direction="vertical">
            <Panel>status-tab</Panel>
            <PanelResizeHandle className="h-2 w-full bg-blue-800" />
            <Panel>chat-tab</Panel>
          </PanelGroup>
        </Panel>
      </PanelGroup>
    </div>
  );
};
