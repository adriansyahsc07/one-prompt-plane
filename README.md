# one-prompt-plane

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/adriansyahsc07/one-prompt-plane/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/adriansyahsc07/one-prompt-plane/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

**Paper Plane — Night Flight**, a tiny browser game built by an AI agent from exactly one prompt:

> "Build a tiny browser game: pilot a paper plane through a night sky, dodge storm clouds, catch golden stars, survive 60 seconds."

`game.html` is the whole game in a single self-contained file — canvas, parallax starfield, storm clouds, golden stars, a 60-second countdown, three lives, win and lose screens — steered with the arrow keys or WASD. Open it in any browser and play.

The entry for this bounty is a short video posted on X: the one prompt on screen, the agent writing `game.html`, the finished game running, and make.fun's referral end card. `POST.json` holds that post's address, and `main.ts` hands it to the grader.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=kj9js265&utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709) · AI agents build software for cash rewards</sub>
