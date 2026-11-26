##Accessibility Fixes (WAVE & WCAG AA)
* Added descriptive 'alt' attributes to all project thumbnail images on 'projects.html' to resolve missing alternative text errors.
* Associated every '<input>' and '<textarea>' with a matching '<label for="...">'element on 'contrast.html' to fix missing form label errors.
* Darkened body text from '#777777' to'#1a1a1a' and  button backgrounds to '#0056b3' so all pages pass WCAG AA contrast ratios.
* Added a '<main>' landmark and proper heading hierarchy ('<h1>' followed by '<h2>') across all three pages for screen reader.

##Intentional Visual Design (Gestalt Principles)
* **Proximity:** I used tighter vertical spacing ('0.35rem') between form labels and their inputs while adding larger margins ('1.5rem') between '<fieldset>' sections so users immediately see which fields belong together.
* **Similarity:** I styled all navigation links, project cards, and form inputs with matching border radii, consistent padding, and a unified color palette ('#0056b3' primary accent and '#f4f6f8' card backgrounds) across all three pages to create visual consistency.
