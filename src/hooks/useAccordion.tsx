import React from 'react';

export const useAccordion = () => {
  // フィルタメニューのアコーディオン開閉を制御します
  const accordionElm = React.useRef(null);

  /** フィルタメニューアコーディオン開閉 */
  const toggleAccordion = React.useCallback(() => {
    accordionElm.current.click();
  }, []);

  return { accordionElm, toggleAccordion };
};
