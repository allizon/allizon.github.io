## Things To Fix

- I have the GitHub Action in place that's successfully building when I push to `main` -- yet the results of that build aren't actually being used, it's just pulling from whatever I've built locally and included in `/docs`. Need to figure that out.
- Y'know what would be good? Content.


### Notes
- GitHub action is stored in `.github/workflows/eleventy_build.yml`. Currently runs on every push to main.
  - Workflow uses npm, not yarn, so we have to keep the package-lock.json file around.