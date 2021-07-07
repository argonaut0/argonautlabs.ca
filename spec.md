# Project: argonautlabs.ca

Purpose: jason's devlogs/project logs, eventually other people as well


# Specification:

## Site Features:
- Article pages
  - Articles should have a date, one line summary/tagline, and list of authors
  - Articles should have links to similar articles
  - Articles should support links, images, embedded videos
- Landing page
  - Lightweight live background
  - 'Sophisticated' design
  - See at-a-glance, site contents
  - Articles display
  - Team display
- About Team page
  - Detailed information on Team members
- RSS feed
- Easily include other apps/apis


## Site routing:
- /
  - Home landing page, will feature certain projects.

- /posts/  
  - Feed of reports, articles, and project logs.
  
- /posts/\<post\>
  - Page for a particular post.

- /apps/
  - Human readable index of apps.

- /apps/\<appname\>
  - Resource for a particular app.

- /team/
  - Human readable index of team members.

- /team/\<member\>
  - Subpage with more details of a particular team member (w/ resume, etc).

- /static/
  - Resource: Returns list of categories.

- /static/\<category\>/
  - Resource: Returns list of resources within category.
  - Categories can be arbitrarily nested.

## Architecture:
- Runtime: Deno 1.11.4
- Language: Typescript?
- Framework: Drash
- Deployment: nginx