---
layout: page
title: Computational Design of Bio-Inspired Fliers
description: guided by Professor Tao Du
img: assets/img/butterfly.gif
importance: 2
---

<div class="container my-4">

  <!-- 标题区 -->
  <div class="text-center mb-5">
    <h1 class="mb-2">Computational Design of Bio-Inspired Fliers</h1>
    <p class="text-muted mb-1">guided by Professor Tao Du</p>
    <p class="text-muted">Reinforcement learning and physics-based simulation for bio-inspired flight.</p>
  </div>

  <!-- RL-trained butterfly 区块 -->
  <section class="mb-5">
    <div class="row align-items-center">
      <div class="col-md-6 mb-3 mb-md-0">
        <h2 class="h4 mb-3">RL-Trained Control Policy for a Rigid Butterfly</h2>
        <p class="text-muted">
          We develop a reinforcement learning based control policy for a rigid butterfly model.
          The policy learns to generate stable, efficient flapping motions that produce sustained flight
          under realistic aerodynamic conditions.
        </p>
      </div>
      <div class="col-md-6 text-center">
        {% include figure.liquid 
          loading="eager" 
          path="assets/img/butterfly.gif" 
          title="RL-trained rigid butterfly" 
          class="img-fluid rounded shadow-sm"
        %}
        <div class="caption text-muted mt-2">
          Our learned policy produces natural, periodic flapping while maintaining altitude and stability.
        </div>
      </div>
    </div>
  </section>

  <hr class="my-4">

  <!-- XPBD wing simulation 区块 -->
  <section class="mb-5">
    <div class="row align-items-center flex-md-row-reverse">
      <div class="col-md-6 mb-3 mb-md-0">
        <h2 class="h4 mb-3">XPBD Wing Simulation</h2>
        <p class="text-muted">
          We use an Extended Position-Based Dynamics (XPBD) framework to simulate deformable wings.
          We use a couple shell and rod.
        </p>
      </div>
      <div class="col-md-6 text-center">
        {% include figure.liquid 
          loading="eager" 
          path="assets/video/rod_45.mp4" 
          title="XPBD wing simulation" 
          class="img-fluid rounded shadow-sm"
        %}
        <div class="caption text-muted mt-2">
          Wing Simulation
        </div>
      </div>
    </div>
  </section>

</div>
