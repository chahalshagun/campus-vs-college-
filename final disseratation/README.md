# Dissertation Markdown Structure

All dissertation sections are organized in Markdown files for easy editing. Convert to DOCX/PDF later with tools like Pandoc.

| No. | File | Section |
|-----|------|---------|
|01|`01_title_page.md`|Title Page|
|02|`02_declaration.md`|Declaration|
|03|`03_faculty_approval.md`|Faculty Guide Approval|
|04|`04_acknowledgements.md`|Acknowledgements|
|05|`05_abstract.md`|Abstract|
|06|`06_toc_placeholder.md`|Table of Contents (auto)|
|07|`07_list_of_tables.md`|List of Tables (auto)|
|08|`08_list_of_figures.md`|List of Figures (auto)|
|09|`09_chapter1.md`|Chapter 1|
|10|`10_chapter2.md`|Chapter 2|
|11|`11_chapter3.md`|Chapter 3|
|12|`12_references.md`|References|
|13|`13_appendix_a.md`|Appendix A|
|14|`14_appendix_b.md`|Appendix B|

## Building
```bash
# Convert all markdown to a single DOCX:
pandoc *.md -o dissertation.docx --toc --list-of-tables --list-of-figures
```
