// Copyright (c) 2017 PlanGrid, Inc.

import 'styles/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import FileViewer from './components/file-viewer';
import sampleHouse from '../example_files/SampleHouse.wexbim';
import solarImage from '../example_files/02-USVI-Solar.jpg';
import docx from '../example_files/SampleSpec.docx';
import doc from '../example_files/sample.doc';
import csv from '../example_files/Total_Crime.csv';
import mp4 from '../example_files/small.mp4';
import xlsx from '../example_files/SimpleSpreadsheet.xlsx';
import photo360 from '../example_files/360photo.jpg';
import avi from '../example_files/drop.avi';
import webm from '../example_files/small.webm'
import mov from '../example_files/step.mov'
import mp3 from '../example_files/sample.mp3'
import rtf from '../example_files/sample.rtf';
import pdf from '../example_files/sample.pdf';

const url = 'https://pathway-awj-local.s3.amazonaws.com/bdf6ce17-e3af-4b7e-b0c9-c12310fb8c46/attachment%20%281%29.pdf?AWSAccessKeyId=AKIAJNMRWYW6A3D2G66Q&Expires=1534813898&Signature=pzdrJ7U1l2zOKz9fNrWbAuJMvFM%3D';
ReactDOM.render(
  <FileViewer
    fileType="pdf"
    filePath={url}
  />,
  window.document.getElementById('app')
);
