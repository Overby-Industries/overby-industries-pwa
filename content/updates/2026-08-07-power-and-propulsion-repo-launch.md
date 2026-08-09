---
title: "Power & Propulsion repo now has real structure"
date: "2026-08-07"
description: "The power-and-propulsion repo moved from a README-only brainstorm to a real sizing library, flight-phase FSM, and CAD starter, paired with a new MHD physics whitepaper draft."
---

The [`power-and-propulsion`](https://github.com/Overby-Industries/power-and-propulsion)
repo now has an actual codebase behind it: a C++ sizing library for the MHD
generator/thruster core (Hartmann number, interaction parameter, Faraday/Hall
generator theory, Lorentz thrust), a flight-phase finite-state machine for
the shuttle control software, and a Blender starter script for the core
geometry.

It's paired with a new whitepaper draft --
[Magnetohydrodynamic Ionic-Liquid Generator & Dual-Mode Propulsion](https://github.com/Overby-Industries/whitepapers/tree/main/papers/2026-mhd-power-propulsion) --
so the physics and the code stay in sync instead of drifting apart the way
the org's design docs had started to.

The [whitepapers](https://github.com/Overby-Industries/whitepapers) repo's
build pipeline was also fixed in the same pass -- it had been silently
failing on CI.
