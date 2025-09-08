// 代码生成时间: 2025-09-08 16:58:00
 * @param {string} props.fileName - 文件名称
 * @param {string} props.fileContent - 文件内容
 */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const TextFileAnalyzer = ({ fileName, fileContent }) => {
  // 使用useState进行状态管理
  const [fileStats, setFileStats] = useState({
    words: 0,
    sentences: 0,
    paragraphs: 0,
  });

  // 使用useEffect进行副作用处理
  useEffect(() => {
    if (!fileContent) {
      return;
    }
    // 计算文件统计数据
    const words = fileContent.match(/\w+/g) || [];
    const sentences = fileContent.match(/[^.!?]+[.!?]+|[^.!?]+/g) || [];
    const paragraphs = fileContent.split('

').filter(paragraph => paragraph.trim().length > 0) || [];
    setFileStats({ words: words.length, sentences: sentences.length, paragraphs: paragraphs.length });
  }, [fileContent]);

  // 渲染组件
  return (
    <div>
      <h1>File Analysis for {fileName}</h1>
      <div>
        <p><strong>Words: </strong>{fileStats.words}</p>
        <p><strong>Sentences: </strong>{fileStats.sentences}</p>
        <p><strong>Paragraphs: </strong>{fileStats.paragraphs}</p>
      </div>
    </div>
  );
};

// 使用PropTypes进行属性类型检查
TextFileAnalyzer.propTypes = {
  fileName: PropTypes.string.isRequired,
  fileContent: PropTypes.string.isRequired,
};

export default TextFileAnalyzer;
