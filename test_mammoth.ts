import * as fs from 'fs';
import * as path from 'path';
import mammoth from 'mammoth';

async function test() {
  const docPath = 'C:\\Users\\user\\Downloads\\how to content\\TBC-HowTo-Batch2.docx';
  const result = await mammoth.extractRawText({ path: docPath });
  console.log(result.value.substring(0, 1000));
}

test().catch(console.error);
