import Editor from '@monaco-editor/react';

const EDITOR_OPTIONS = {
  formatOnPaste: true,
  formatOnType: true,
  minimap: { enabled: false },
  overviewRulerLanes: 0,
  padding: { top: 4 },
  renderLineHighlight: 'none' as const,
};

enum EDITOR_THEME {
  DARK = 'vs-dark',
  LIGHT = 'vs-light',
}

export const CodeEditor = () => {
  const editorVal = '';

  return (
    <Editor
      className="overflow-hidden py-8"
      defaultLanguage={'cpp'}
      options={EDITOR_OPTIONS}
      theme={EDITOR_THEME.DARK}
      value={editorVal}
    />
  );
};
