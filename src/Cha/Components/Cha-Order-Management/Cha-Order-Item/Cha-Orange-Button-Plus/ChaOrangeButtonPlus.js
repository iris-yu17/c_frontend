import React from 'react';
import './ChaOrangeButtonPlus.scss';

function ChaOrangeButtonPlus(props) {
  // text 按鈕文字
  // className 橘色樣式為button-btn 綠色樣式為button-btn-g
  const { text, className } = props;
  return (
    <>
      <button className={className}>{text}</button>
    </>
  );
}

export default ChaOrangeButtonPlus;
