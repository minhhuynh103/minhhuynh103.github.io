# minhhuynh103.github.io

Professional portfolio. Hand-written HTML and CSS, no build step.

## Structure

    index.html                              Home
    about/                                  About me
    projects/                               Project index
    projects/ros2-motion-capture/           Capstone
    projects/pencil2d/                      Open source contributions
    projects/it-service-desk/               Curated experience
    projects/technical-communication/       WR 545 practical use brief
    resume/                                 Resume
    contact/                                Contact
    css/style.css                           All styling
    assets/                                 Images and resume PDF

## Editing

Nav lives in every page separately (no templating). If you change a nav
link, change it in all nine files. Search for `class="nav"`.

## Local preview

Open the folder in VS Code, right-click index.html, "Open with Live Server".

## Accessibility checklist

- [ ] Skip link works (Tab from page top)
- [ ] One h1 per page, no skipped heading levels
- [ ] All images have meaningful alt text
- [ ] Keyboard reaches every link, focus always visible
- [ ] Contrast passes AA (recheck if tokens change)
- [ ] WAVE or axe clean on all nine pages
- [ ] Tested in Chrome, Firefox, Edge, Safari
