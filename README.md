# 微信小程序瞳距仪 (WeChat PD Meter)

一款基于微信小程序生态的高精度、轻量级瞳距（Pupillary Distance）测量工具。通过调用移动端原生摄像头、辅以交互式 Canvas 画布校准，实现免极客硬件的物理像素换算。

A high-precision, lightweight Pupillary Distance (PD) measurement tool built for the WeChat Mini Program ecosystem. By leveraging mobile camera APIs and interactive canvas calibration, it achieves accurate physical pixel scaling without requiring specialized hardware.

---

## 🚀 核心特性 (Key Features)

* **摄像头原生调用 (Native Camera Integration)**：流畅调取移动端摄像头，支持实时画面捕获。
* **交互式 Canvas 校准 (Interactive Canvas Calibration)**：用户可通过拖拽标准参照物（如标准卡片 85.6mm）进行精准像素级对齐。
* **智能化算力逻辑 (Core Computation)**：动态进行屏幕像素密度（PPI）与实际物理距离的换算，将误差控制在极低范围内。
* **云控自适应 (Cloud-Controlled Adaptation)**：支持动态组件配置，方便独立开发者快速接入。

## 🛠️ 技术栈 (Tech Stack)

* **Frontend**: Vanilla JavaScript / WeChat Mini Program Native Framework
* **Graphics**: HTML5 Canvas / WXML / WXSS
* **Architecture**: Reactive State Management & Component-driven Design

## 🎯 开源愿景与大模型增益 (Open Source Vision & AI Enhancement)

本项目致力于解决线上配镜、定制眼镜以及 VR/AR 硬件调节领域的关键痛点。我们将其开源，旨在为垂直领域独立开发者提供一个开箱即用的前端硬件测量脚手架。

未来，我们迫切需要接入 **OpenAI Codex 与高级语言模型**，用来：
1. 重构复杂的图像至像素缩放的数学计算逻辑。
2. 引入大模型交互，建立智能语音/文本向导，引导用户在最佳光线和角度下完成自助测量，将人工校验自动化。
