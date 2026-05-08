import fs from 'fs';
import markdownpdf from 'markdown-pdf';

const inputFilePath = 'd:/React-Weather-App/final disseratation/09_chapter1.md';
const outputPdfPath = 'd:/React-Weather-App/final disseratation/09_chapter1.pdf';

// Read the Markdown file
fs.readFile(inputFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the Markdown file:', err);
        return;
    }

    // Convert Markdown to PDF
    markdownpdf().from(inputFilePath).to(outputPdfPath, () => {
        console.log('PDF file created successfully:', outputPdfPath);
    });
});
