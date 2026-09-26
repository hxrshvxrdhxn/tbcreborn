import fs from 'fs';
import { parse } from 'node-html-parser';
import { marked } from 'marked';

async function test() {
  const content = fs.readFileSync('../tbc-handoff/posts/002-how-much-does-custom-software-development-cost-in-india-in-2026.md', 'utf8');
  // strip frontmatter
  const body = content.replace(/^---[\s\S]+?---\n/, '');
  const htmlContent = marked(body);
  const root = parse(htmlContent as string);
  const faqs = [];
  const h2s = root.querySelectorAll('h2');
  const faqH2 = h2s.find(h2 => h2.text.toLowerCase().includes('frequently asked questions'));
  if (faqH2) {
    let currentNode = faqH2.nextElementSibling;
    let currentQuestion = "";
    let currentAnswer = "";
    while (currentNode && currentNode.tagName !== 'H2') {
      if (currentNode.tagName === 'H3') {
        if (currentQuestion) {
          faqs.push({ questionName: currentQuestion, acceptedAnswerText: currentAnswer.trim() });
        }
        currentQuestion = currentNode.text;
        currentAnswer = "";
      } else if (currentQuestion && currentNode.tagName === 'P') {
        currentAnswer += currentNode.innerHTML + " ";
      }
      currentNode = currentNode.nextElementSibling;
    }
    if (currentQuestion) {
      faqs.push({ questionName: currentQuestion, acceptedAnswerText: currentAnswer.trim() });
    }
  }
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.questionName,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.acceptedAnswerText
      }
    }))
  };
  
  console.log(JSON.stringify(schema, null, 2));
}

test().catch(console.error);
