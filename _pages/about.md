---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>
I am currently a Senior Researcher at Tencent Singapore under the 'Project Up' (青云计划) Talent Programme, specializing in Speech Synthesis (Speech GenAI). Previously, I obtained my Ph.D. from the National University of Singapore (NUS), where I was supervised by Prof. [Li Haizhou](https://scholar.google.com/citations?user=z8_x7C8AAAAJ&hl=en) and Prof.[Mike Z. SHOU](https://scholar.google.com/citations?user=h1-3lSoAAAAJ&hl=en). Before joining Tencent, I worked as a Senior Research Engineer at the Agency for Science, Technology and Research (A*STAR), Singapore, focusing on Speech-LLM (MERaLiON Team), Speech Anti-Spoofing (Speech DeepFake Detection), and Speaker Recognition.

My research interests include text-to-speech, speaker recognition, anti-spoofing, speech-LLM, etc. I have published more than 10 papers in the top international AI conferences and journals such as NeurIPS, TASLP, SPL, ICASSP, INTERSPEECH. <a href="https://scholar.google.com/citations?hl=en&user=1W24GsQAAAAJ"><img src="https://img.shields.io/endpoint?logo=Google%20Scholar&url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2Fliu-tianchi%2Fliu-tianchi.github.io@google-scholar-stats%2Fgs_data_shieldsio.json&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>

# 🔍 Research Area

**Speech Processing**: Text-to-Speech (TTS), Speaker Recognition, Speech Foundation Model, Anti-spoofing / DeepFake Detection, Target Speaker Extraction

**Multi-modal Processing**: Speech-LLM, Audio-visual 

**Algorithm**: Self-supervised Learning, Disentanglement Learning

# 🎓 Education

- *2021.01 - 2025.01*, Ph.D. in Speech Processing, National University of Singapore (NUS), Singapore.
- *2018.07 - 2019.06*, M.Sc. in Electronic and Computer Engineering (Specialization in Computer Engineering), National University of Singapore (NUS), Singapore.

# 💼 Work Experience

- *2025.02 - Now*, Senior Researcher, 'Project Up' (青云计划) Talent Programme, Tencent, Singapore.
- *2020.09 - 2025.02*, Senior Research Engineer, Agency for Science, Technology and Research (A*STAR), Singapore.
- *2019.06 - 2020.08*, AI Scientist, PENSEES R&D Center, Singapore

# 📜 Publication

**2025**
- ⭐ Liumeng Xue, Ziya Zhou, ..., **Tianchi Liu**, ..., *Audio-FLAN: A Preliminary Release*, 2025. 🔗[\[arXiv](https://arxiv.org/abs/2502.16584), [Dataset(🤗Hugging Face)](https://huggingface.co/datasets/HKUSTAudio/Audio-FLAN-Dataset), [Github\]](https://github.com/lmxue/Audio-FLAN)
- Yi Ma, Shuai Wang, **Tianchi Liu**, Haizhou Li, *ExPO: Explainable Phonetic Trait-Oriented Network for Speaker Verification*, IEEE Signal Processing Letters (**IEEE SPL**), 2025. 🔗[\[IEEE](https://ieeexplore.ieee.org/document/10845144), [arXiv](https://arxiv.org/abs/2501.05729), [code\]](https://github.com/mmmmayi/ExPO)
- Ke Zhang, Marvin Borsdorf, **Tianchi Liu**, Shuai Wang, Yangjie Wei, Haizhou Li, *Speaker Extraction with Verification of Present and Absent Target Speakers*, Journal of Shanghai Jiaotong University (Science), 2025. 🔗[\[Link\]](https://link.springer.com/article/10.1007/s12204-025-2798-4)

**2024**
- ⭐ [<span style="background: linear-gradient(to right, #c9e5ee, #FFEFD5); color:black; font-weight:bold; padding:2px 5px;">🌊MERaLiON🦁</span>] Muhammad Huzaifah\*, Geyu Lin\*, **Tianchi Liu**\*, Hardik B. Sailor\*, Kye Min Tan\*, Tarun K. Vangani\*, Qiongqiong Wang\*, Jeremy H. M. Wong\*, Nancy F. Chen, Ai Ti Aw (MERaLiON Team), *MERaLiON-SpeechEncoder: Towards a Speech Foundation Model for Singapore and Beyond*, 2024. 🔗[\[arXiv](https://arxiv.org/abs/2412.11538), [🤗Hugging Face\]](https://huggingface.co/MERaLiON)
- ⭐**Tianchi Liu**, Kong Aik Lee, Qiongqiong Wang, Haizhou Li, *Golden Gemini is All You Need: Finding the Sweet Spots for Speaker Verification*, IEEE/ACM Transactions on Audio, Speech, and Language Processing (**IEEE TASLP**), 2024. 🔗[\[IEEE](https://ieeexplore.ieee.org/abstract/document/10497864/), [arXiv](https://arxiv.org/abs/2312.03620), [pre-trained models & simple inference](https://github.com/Liu-Tianchi/Golden-Gemini-for-Speaker-Verification), [train & test code](https://github.com/wenet-e2e/wespeaker/tree/master/examples/voxceleb/v2), [ONNX\]](https://github.com/wenet-e2e/wespeaker/blob/master/docs/pretrained.md)
- **Tianchi Liu**, Lin Zhang, Rohan Kumar Das, Yi Ma, Ruijie Tao, Haizhou Li, *How Do Neural Spoofing Countermeasures Detect Partially Spoofed Audio?*, **INTERSPEECH, oral**, 2024. 🔗[\[ISCA](https://www.isca-archive.org/interspeech_2024/liu24m_interspeech.html), [arXiv\]](https://arxiv.org/abs/2406.02483)
- Zihan Pan, **Tianchi Liu**, Hardik B. Sailor, Qiongqiong Wang, *Attentive Merging of Hidden Embeddings from Pre-trained Speech Model for Anti-spoofing Detection*, **INTERSPEECH, oral**, 2024. 🔗[\[ISCA](https://www.isca-archive.org/interspeech_2024/pan24c_interspeech.html), [arXiv](https://arxiv.org/abs/2406.10283), [code\]](https://github.com/pandarialTJU/AttM_INTERSPEECH24)
- **Tianchi Liu**, Ivan Kukanov, Zihan Pan, Qiongqiong Wang, Hardik Sailor, Kong Aik Lee, *Towards Quantifying and Reducing Language Mismatch Effects in Cross-lingual Speech Anti-Spoofing*, IEEE Spoken Language Technology Workshop (**IEEE SLT**), 2024.🔗[\[IEEE](), [arXiv\]](https://arxiv.org/abs/2409.08346)
- Anmol Guragain\*, **Tianchi Liu**\*, Zihan Pan, Hardik Sailor, Qiongqiong Wang, *Speech Foundation Model Ensembles for the Controlled Singing Voice Deepfake Detection (CtrSVDD) Challenge 2024*, IEEE Spoken Language Technology Workshop (**IEEE SLT**), (co-first author\*), 2024. 🔗[\[IEEE](), [arXiv](https://arxiv.org/abs/2409.02302), [code\]](https://github.com/Anmol2059/SVDD2024)
- Ruijie Tao, Zhan Shi, Yidi Jiang, **Tianchi Liu**, Haizhou Li, *Voice Conversion Augmentation for Speaker Recognition on Defective Datasets*, 2024. 🔗[[arXiv]](https://arxiv.org/abs/2404.00863)

**2023**
- ⭐**Tianchi Liu**, Kong Aik Lee, Qiongqiong Wang, Haizhou Li, *Disentangling Voice and Content with Self-Supervision for Speaker Recognition*, Advances in Neural Information Processing Systems (<span style="background: linear-gradient(to bottom, #D8BFD8, rgba(255, 255, 255, 0)); color: black; font-weight: bold; padding: 4px 8px; display: inline-block;">NeurIPS</span>), 2023. 🔗[\[NeurIPS](https://proceedings.neurips.cc/paper_files/paper/2023/hash/9d276b0a087efdd2404f3295b26c24c1-Abstract-Conference.html), [arXiv\]](https://arxiv.org/abs/2310.01128)
- Qiongqiong Wang, Kong Aik Lee, **Tianchi Liu**, *Incorporating Uncertainty from Speaker Embedding Estimation to Speaker Verification*, IEEE International Conference on Acoustics, Speech and Signal Processing (**IEEE ICASSP**), **oral**, 2023. 🔗[\[IEEE](https://ieeexplore.ieee.org/document/10097019/), [arXiv\]](https://arxiv.org/abs/2302.11763)

**2022**
- ⭐**Tianchi Liu**, Rohan Kumar Das, Kong Aik Lee, Haizhou Li, *MFA: TDNN with multi-scale frequency-channel attention for text-independent speaker verification with short utterances*, IEEE International Conference on Acoustics, Speech and Signal Processing (**IEEE ICASSP**), **oral**, 2022. 🔗[\[IEEE](https://ieeexplore.ieee.org/abstract/document/9747021/), [arXiv](https://arxiv.org/abs/2202.01624), [code\]](https://github.com/Liu-Tianchi/MFA-TDNN)
- **Tianchi Liu**, Rohan Kumar Das, Kong Aik Lee, Haizhou Li, *Neural acoustic-phonetic approach for speaker verification with phonetic attention mask*, IEEE Signal Processing Letters (**IEEE SPL**), 2022. 🔗[[IEEE]](https://ieeexplore.ieee.org/abstract/document/9681187/)
- Qiongqiong Wang, Kong Aik Lee, **Tianchi Liu**, *Scoring of Large-Margin Embeddings for Speaker Verification: Cosine or PLDA?*, **INTERSPEECH, oral**, 2022. 🔗[\[ISCA](https://www.isca-archive.org/interspeech_2022/wang22r_interspeech.html), [arXiv\]](https://arxiv.org/abs/2204.03965)

**2019 - 2020** 

- **Tianchi Liu**, Rohan Kumar Das, Maulik Madhavi, Shengmei Shen, Haizhou Li, *Speaker-Utterance Dual Attention for Speaker and Utterance Verification*, **INTERSPEECH**, 2020. 🔗[\[ISCA](https://www.isca-archive.org/interspeech_2020/liu20u_interspeech.html), [arXiv\]](https://arxiv.org/abs/2008.08901)
- **Tianchi Liu**, Maulik C Madhavi, Rohan Kumar Das, Haizhou Li, *A Unified Framework for Speaker and Utterance Verification*, **INTERSPEECH**, 2019. 🔗[\[ISCA](https://www.isca-archive.org/interspeech_2019/liu19m_interspeech.html), [code\]](https://github.com/Liu-Tianchi/SUV)

# 💻 Open Source Contributions

- *WeSpeaker* [![](https://img.shields.io/github/stars/wenet-e2e/wespeaker?style=social&label=WeSpeaker)](https://github.com/wenet-e2e/wespeaker)
- *AudioLLM* [![](https://img.shields.io/github/stars/AudioLLMs/AudioLLM?style=social&label=AudioLLM)](https://github.com/AudioLLMs/AudioLLM)
- *MERaLiON* [\[🤗Hugging Face\]](https://huggingface.co/MERaLiON)

# 🌟 Others

🥇 **Awards**🥈🥉🏅🎖️

- **Best Student Paper Award -🥇Gold Award** (1 recipient annually), Pattern Recognition and Machine Intelligence Association (**PREMIA**), 2024
- **Best Student Paper Award - Long Paper Track** (1 recipient annually), Nanyang Speech Technology Forum (**NSTF**), 2024
- The 🥉**3rd place winner** out of 49 teams in the Controlled Singing Voice Deepfake Detection (**CtrSVDD**) Challenge 2024 @ IEEE SLT, 2024
- **Best Paper Award** in 2023 International Doctoral Forum (**CUHK** & **Microsoft**), 2023
- **Travel Grant Award (Top Tier)**, Chinese and Oriental Languages Information Processing Society (**COLIPS**), 2023
- The 🎖️**5th place winner** out of 128 teams in **NIST** Face Recognition Vendor Test (**FRVT**) - Face Mask Effects, 2020
- **Outstanding Achievement Award** under the Research Domain, PENSEES Singapore, 2020

🏛️ **Academic Service**

- Virtual Session Chair @ IEEE IALP, 2023
- Program Committee @ IEEE ISCSLP, 2022
- Volunteer @ IEEE ICASSP, 2022
  
📝 **Reviewer**

*Journal/Transactions/Letters:*
- IEEE Transactions on Dependable and Secure Computing (TDSC) *'25*
- Computer Speech & Language *'24*
- IEEE Signal Processing Letters (SPL) - *'23, '24*

*Conference:*
- IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP) - *'23~'25*
- INTERSPEECH - *'23~'25*
- International Joint Conference on Neural Networks (IJCNN) *'25*
- IEEE Spoken Language Technology Workshop (SLT) - *'24*
- IEEE ISCSLP - *'22*
- ASVspoof5 - *'24*
