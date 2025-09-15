# Overby Industries PWA  
**“Map & Compass for the Civic Space Age”**

---

## 🌌 Guiding Principles

1. **Safety First** → everything tested in steps: simulation → bench → unmanned → crewed.  
2. **Truth in Physics** → no unverified sci-fi, all based on credible physics & tested models.  
3. **Open Transparency** → all code open, reviewed, tested; science belongs to *We the People of Earth*.  
4. **Redundancy** → no single points of failure – languages, frameworks, and pipelines defined with alternatives.  
5. **Adaptive Evolution** → allow for iteration, fallback paths, and new tools.  

---

## 🛰 System Map

### ⚡ Propulsion & Power (MHD, Lorentz, ABEP)
- **Research / Early Sims** → Python (NumPy/SciPy, JAX, PyTorch for physics models).  
- **Production** → Rust (safety, concurrency in plasma control loops) or C++ (performance, legacy libs).  
- **GPU / Numerical** → CUDA/OpenCL when HPC needed.  
- **Testing** → Unit tests (pytest, doctest), integration sims, HIL (Hardware‑In‑Loop).

### ⛏ Asteroid Miner Systems
- **Miner Control OS (embedded)** → C (RTOS, microcontrollers), Rust for safe concurrency.  
- **Robotics and AI nav** → ROS2 (Python for training, C++ for deployment).  
- **Testing** → Hardware simulation (Gazebo/IsaacSim), property‑based tests (Hypothesis), fuzz testing for safety.

### 🛰 Orbital Systems
- **SatNav Swarm** → Network simulation in Python (NS3, OMNET++). Deployment stack in C++/Rust.  
- **Starlifter OS** → Rust + WebAssembly (fleet operations plugins).  
- **Control Panel** → Next.js/React, real data over GraphQL/WebSockets.  
- **Testing** → Network stress simulation, satellite-in-loop software validation.

### 🌍 ISRU & Infrastructure
- **Regolith Processing** → Python FEM sims (FEniCS), with HPC scale in Fortran/C++.  
- **Titan Hydrocarbon Plants** → Chemical process modeling in Python (Cantera), final control in C/C++.  
- **Testing** → Lab-scale prototypes, software twins, continuous integration pipelines with chemical “digital twin” validation.

### 🔬 Civic + Knowledge Systems
- **White Papers** → LaTeX + Markdown workflows, auto‑PDF in CI.  
- **Simulation Archive** → Jupyter Notebooks, tagged & versioned.  
- **Governance** → Next.js web portal, integrated with repo badges and socials.  

---

## 🧭 Language & Framework Compass

- **High-level Research** → Python, Julia.  
- **Embedded** → C, C++, Rust.  
- **Control OSes** → Rust (future‑proof safety), fallback to C++ (compatibility).  
- **Simulations/HPC** → CUDA/OpenCL/Fortran/C++ HPC, fallback to Julia.  
- **Robotics** → ROS2 (Python+CPP).  
- **Web / UI** → Next.js / React, WASM for embedded fleet ops.  

---

## ✅ Testing Philosophy

- **Unit & Property Tests** (pytest, unittest, Hypothesis).  
- **Integration Testing** (Simulators → ROS2 Gazebo, NS‑3 networks, Cantera for chemistry).  
- **Hardware‑in‑Loop (HIL)**: embed simulation harness into physical controllers.  
- **Fuzz Testing**: stress edge cases (AFL, libFuzzer).  
- **Verification Simulation**: all propulsion/ISRU models validated w/ digital twins before lab hardware.  
- **Redundancy Simulation**: failover paths tested in fault injection harnesses.  
- ❗ *Never deploy crewed hardware until each unmanned stage has survived simulated + real stress cycles*.  

---

## 🔮 Alternatives Map

- **Simulation** → Julia as an alternative to Python for performance research.  
- **Embedded** → Zephyr RTOS vs FreeRTOS; C vs Rust.  
- **Networking** → Rust vs Go vs Erlang/Elixir for distributed ops.  
- **UI Layer** → Next.js vs Flutter Web.  

---

## 🌟 Roadmap (v0.1 → v1.0)

1. Draft system maps for each major domain.  
2. Collect recommended libraries and testing harnesses.  
3. Implement repo‑specific `REPO_CONVENTIONS.md` (defines tools/stack locally).  
4. Launch Titan Moonbase AAA Visualization (Three.js + Shaders).  
5. Publish Engine Playbook v1.0 as living document.  

---