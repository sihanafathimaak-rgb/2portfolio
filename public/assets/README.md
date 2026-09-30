# Asset locations

- Character video: `character/intro-walking.mp4` (optional; enabled with a configuration flag)
- Character poster: `character/intro-poster.jpg` (optional fallback for the video)
- Resume PDF: `resume/Sihana-Fathima-Resume.pdf` (enables the full-document viewer and download)
- Certificate and project image folders are reserved for genuine assets; text-led placeholders are used until then.

No resume, character, certificate, or project image files were supplied with this workspace.

After adding real character media or the resume PDF, set the corresponding
`characterVideoAvailable`, `characterPosterAvailable`, or `resumeAssetAvailable`
constant to `true` near the top of `app.js`. The defaults stay `false` so the
site does not request files that are not present.