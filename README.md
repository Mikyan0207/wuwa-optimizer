<div id="top"></div>
<div align="center">
 <h1>WuWa Optimizer</h1>
  <p align="center">
  <h4>A tool for scoring, optimizing, and building rotations for characters in Wuthering Waves.</h4>
 </p>
  <p align="center">

![Build](https://img.shields.io/github/actions/workflow/status/mikyan0207/wuwa-optimizer/nuxthub.yml?branch=main&label=build&style=for-the-badge)
![Deploy](https://img.shields.io/github/deployments/mikyan0207/wuwa-optimizer/production?label=deployed&style=for-the-badge)
<br>
![Version](https://img.shields.io/badge/version-1.0.0-blue?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)
![Code Size](https://img.shields.io/github/languages/code-size/mikyan0207/wuwa-optimizer?style=for-the-badge)
<br>
![Nuxt](https://img.shields.io/badge/Nuxt-3.x-green?logo=nuxt.js&style=for-the-badge)
![Vue](https://img.shields.io/badge/Vue-3.x-brightgreen?logo=vue.js&style=for-the-badge)

 </p>
</div>
<br><br>

![wuwa_optimizer_showcase_00](/.github/images/wuwa-optimizer-showcase-00.png)

<br>
<div align="center">
 <p align="center">
   <h2>✨ Features ✨</h2>
 </p>
</div>
<br>

🧠 **Auto Optimization**: Simulates your best possible builds by analyzing all your Echoes and suggesting the ideal setup for any character.<br><br>
🎯 **Echo Scoring**: Each Echo is evaluated using stat weightings tailored to each character.<br><br>
🔍 **Character Overview**: Displays the total score of a character based on equipped Echoes.<br><br>
🔁 **Rotation Builder**: Create and share full team rotations.<br><br>

![wuwa_optimizer_showcase_01](/.github/images/wuwa-optimizer-showcase-01.png)

<br>
<div align="center">
 <p align="center">
   <h2>🧮 Scoring System 🧮</h2>
 </p>
</div>
<br>

The Echo scoring system evaluates how effectively an Echo's substats align with a character’s needs. Each relevant substat is assigned a weight based on the target character’s build preferences—DPS units might favor CRIT Rate and ATK%, while supports lean toward Energy Regen or HP%.

To compute the score, each substat is compared to its maximum possible roll and scaled accordingly:

```
(statValue / maxPossibleValue) × statWeight
```

The final Echo score is the sum of all weighted substats, normalized on a 0–100 scale. This approach allows for consistent scoring and comparison across gear.

![wuwa_optimizer_showcase_02](/.github/images/wuwa-optimizer-showcase-02.png)

<br>
<div align="center">
 <p align="center">
   <h2>🧠 Auto Optimization 🧠</h2>
 </p>
</div>
<br>

The optimization module elevates WuWa Optimizer from a scoring utility to a full recommendation engine.

### How Optimization Works

Each Echo in your inventory is evaluated not just by its current stats, but also by its **potential**. Echoes that haven't reached 5 substats have their missing rolls simulated using all valid stat combinations and realistic roll value distributions.

For each possible completion, the optimizer computes a score based on the target character’s stat priorities. It then:

- Determines the **maximum theoretical score** of the Echo
- Estimates the **expected score** based on RNG likelihood
- Compares against your other Echoes to suggest the **optimal set**

The system accounts for 2-piece and 5-piece set bonuses, slot types, and potential stat distributions to build the best-performing configuration for each character.

<br>
<div align="center">
 <p align="center">
   <h2>Credits</h2>
 </p>
</div>
<br>

- [fribbels HSR Optimizer](https://github.com/fribbels/hsr-optimizer) for the original idea.
- [Hakush.in](https://ww.hakush.in/) for game icons and characters stats.
- [Wuthering Waves Wiki](https://wutheringwaves.fandom.com/wiki/Wuthering_Waves_Wiki) for sprites, splash arts, other data.
  <br>

---

**Personal project. Not affiliated with Kuro Games.**
