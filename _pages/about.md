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

My research interests include text-to-speech, speaker recognition, anti-spoofing, speech-LLM, etc. I have published more than 20 papers in the top international AI conferences and journals such as NeurIPS, IEEE TIFS, IEEE TASLP, EMNLP, IEEE SPL, IEEE ICASSP, INTERSPEECH. <a href="https://scholar.google.com/citations?hl=en&user=1W24GsQAAAAJ"><img src="https://img.shields.io/endpoint?logo=Google%20Scholar&url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2Fliu-tianchi%2Fliu-tianchi.github.io@google-scholar-stats%2Fgs_data_shieldsio.json&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>

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

**⭐ Selected Publications**
- **<u>T. Liu</u>**, D. T. Truong, R. K. Das, K. A. Lee, H. Li, *Nes2Net: A Lightweight Nested Architecture for Foundation Model Driven Speech Anti-spoofing*, IEEE Transactions on Information Forensics and Security (<span style="background: linear-gradient(to bottom, #C1E1C1, rgba(255, 255, 255, 0)); color: black; font-weight: bold; padding: 4px 8px; display: inline-block;">TIFS</span>), 2025. 🔗[[IEEE](https://ieeexplore.ieee.org/document/11222612), [arXiv](https://arxiv.org/abs/2504.05657v1), [Code & Models](https://github.com/Liu-Tianchi/Nes2Net)][![](https://img.shields.io/github/stars/Liu-Tianchi/Nes2Net?style=social&label=Nes2Net)](https://github.com/Liu-Tianchi/Nes2Net)
- **<u>T. Liu</u>**, K. A. Lee, Q. Wang, H. Li, *Golden Gemini is All You Need: Finding the Sweet Spots for Speaker Verification*, IEEE/ACM Transactions on Audio, Speech, and Language Processing (<span style="background: linear-gradient(to bottom, #C6DBEF, rgba(255, 255, 255, 0)); color: black; font-weight: bold; padding: 4px 8px; display: inline-block;">TASLP</span>), 2024. 🔗[[IEEE](https://ieeexplore.ieee.org/abstract/document/10497864/), [arXiv](https://arxiv.org/abs/2312.03620), [pre-trained models & simple inference](https://github.com/Liu-Tianchi/Golden-Gemini-for-Speaker-Verification), [train & test code](https://github.com/wenet-e2e/wespeaker/tree/master/examples/voxceleb/v2), [ONNX](https://github.com/wenet-e2e/wespeaker/blob/master/docs/pretrained.md)]
- **<u>T. Liu</u>**, K. A. Lee, Q. Wang, H. Li, *Disentangling Voice and Content with Self-Supervision for Speaker Recognition*, Advances in Neural Information Processing Systems (<span style="background: linear-gradient(to bottom, #D8BFD8, rgba(255, 255, 255, 0)); color: black; font-weight: bold; padding: 4px 8px; display: inline-block;">NeurIPS</span>), 2023. 🔗[[NeurIPS](https://proceedings.neurips.cc/paper_files/paper/2023/hash/9d276b0a087efdd2404f3295b26c24c1-Abstract-Conference.html), [arXiv](https://arxiv.org/abs/2310.01128)]
- **<u>T. Liu</u>**, R. K. Das, K. A. Lee, H. Li, *MFA: TDNN with multi-scale frequency-channel attention for text-independent speaker verification with short utterances*, **IEEE ICASSP**, **oral**, 2022. 🔗[[IEEE](https://ieeexplore.ieee.org/abstract/document/9747021/), [arXiv](https://arxiv.org/abs/2202.01624), [code](https://github.com/Liu-Tianchi/MFA-TDNN)]

- [<span style="background: linear-gradient(to right, #c9e5ee, #FFEFD5); color:black; font-weight:bold; padding:2px 5px;">🌊MERaLiON🦁</span>] M. Huzaifah\*, G. Lin\*, **<u>T. Liu</u>**\*, H. B. Sailor\*, K. M. Tan\*, T. K. Vangani\*, Q. Wang\*, J. H. M. Wong\*, N. F. Chen, A. T. Aw (MERaLiON Team), *MERaLiON-SpeechEncoder: Towards a Speech Foundation Model for Singapore and Beyond*, 2024. 🔗[[arXiv](https://arxiv.org/abs/2412.11538), [🤗Hugging Face](https://huggingface.co/MERaLiON)]
  
**Speech-LLM Pretraining & Reasoning**
- Q. Wang, H. B. Sailor, **<u>T. Liu</u>**, ..., *Benchmarking Contextual and Paralinguistic Reasoning in Speech-LLMs: A Case Study with In-the-Wild Data*, **EMNLP** (findings), 2025. 🔗[[arXiv](https://arxiv.org/abs/2509.16589), [ACL Anthology](https://aclanthology.org/2025.findings-emnlp.760/)]
- Q. Wang, H. B. Sailor, J. H. Wong, **<u>T. Liu</u>**, ..., *Incorporating Contextual Paralinguistic Understanding in Large Speech-Language Models*, **IEEE ASRU**, 2025. 🔗[[IEEE (soon)](), [arXiv](https://arxiv.org/abs/2508.07273)]
- Q. Wang, H. B. Sailor, **<u>T. Liu</u>**, A. T. Aw, *Contextual Paralinguistic Data Creation for Multi-Modal Speech-LLM: Data Condensation and Spoken QA Generation*, **INTERSPEECH**, 2025. 🔗[[ISCA](https://www.isca-archive.org/interspeech_2025/wang25e_interspeech.html), [arXiv](https://arxiv.org/abs/2505.13338), [dataset(🤗Hugging Face)](https://huggingface.co/datasets/MERaLiON/CPQA-Evaluation-Set)]
- [<span style="background: linear-gradient(to right, #c9e5ee, #FFEFD5); color:black; font-weight:bold; padding:2px 5px;">🌊MERaLiON🦁</span>] M. Huzaifah\*, G. Lin\*, **<u>T. Liu</u>**\*, H. B. Sailor\*, K. M. Tan\*, T. K. Vangani\*, Q. Wang\*, J. H. M. Wong\*, N. F. Chen, A. T. Aw (MERaLiON Team), *MERaLiON-SpeechEncoder: Towards a Speech Foundation Model for Singapore and Beyond*, 2024. 🔗[[arXiv](https://arxiv.org/abs/2412.11538), [🤗Hugging Face](https://huggingface.co/MERaLiON)]
- (Under Review) L. Xue, ..., **<u>T. Liu</u>**, ..., *Audio-FLAN: A Preliminary Release*, 2025. 🔗[[arXiv](https://arxiv.org/abs/2502.16584), [Dataset(🤗Hugging Face)](https://huggingface.co/datasets/HKUSTAudio/Audio-FLAN-Dataset), [Github](https://github.com/lmxue/Audio-FLAN)]
  
**Speaker Recognition & Target Speaker Extraction**
- J. Li, K. A. Lee, D. T. Truong, **<u>T. Liu</u>**, M. W. Mak, *Xi+: Uncertainty Supervision for Robust Speaker Embedding*, **IEEE ICASSP**, 2026. 🔗[[arXiv]](https://arxiv.org/abs/2509.05993)
- (**Best Paper Award**) R. Tao, Z. Shi, Y. Jiang, **<u>T. Liu</u>**, H. Li, *Voice Conversion Augmentation for Speaker Recognition on Defective Datasets*, **APSIPA ASC**, 2025. 🔗[[arXiv](https://arxiv.org/abs/2404.00863), [IEEE Xplore](https://ieeexplore.ieee.org/document/11249009)]
- Y. Ma, S. Wang, **<u>T. Liu</u>**, H. Li, *PhiNet: Speaker Verification with Phonetic Interpretability*, IEEE/ACM Transactions on Audio, Speech, and Language Processing (<span style="background: linear-gradient(to bottom, #C6DBEF, rgba(255, 255, 255, 0)); color: black; font-weight: bold; padding: 4px 8px; display: inline-block;">TASLP</span>), 2025. 🔗[[IEEE Xplore](https://ieeexplore.ieee.org/document/11293376)]
- **<u>T. Liu</u>**, R. Tao, Q. Wang, ..., *Interpolating Speaker Identities in Embedding Space for Data Expansion*, **APSIPA ASC**, 2025. 🔗[[arXiv](https://arxiv.org/abs/2508.19210), [IEEE Xplore](https://ieeexplore.ieee.org/document/11249126)]
- Y. Ma, S. Wang, **<u>T. Liu</u>**, H. Li, *ExPO: Explainable Phonetic Trait-Oriented Network for Speaker Verification*, IEEE Signal Processing Letters (**SPL**), 2025. 🔗[[IEEE](https://ieeexplore.ieee.org/document/10845144), [arXiv](https://arxiv.org/abs/2501.05729), [code](https://github.com/mmmmayi/ExPO)]
- K. Zhang, M. Borsdorf, **<u>T. Liu</u>**, S. Wang, Y. Wei, H. Li, *Speaker Extraction with Verification of Present and Absent Target Speakers*, Journal of Shanghai Jiaotong University (Science), 2025. 🔗[[Paper Link](https://link.springer.com/article/10.1007/s12204-025-2798-4)]
- **<u>T. Liu</u>**, *Advances in Robust and Practical Speaker Verification*, 2025.
- **<u>T. Liu</u>**, K. A. Lee, Q. Wang, H. Li, *Golden Gemini is All You Need: Finding the Sweet Spots for Speaker Verification*, IEEE/ACM Transactions on Audio, Speech, and Language Processing (<span style="background: linear-gradient(to bottom, #C6DBEF, rgba(255, 255, 255, 0)); color: black; font-weight: bold; padding: 4px 8px; display: inline-block;">TASLP</span>), 2024. 🔗[[IEEE](https://ieeexplore.ieee.org/abstract/document/10497864/), [arXiv](https://arxiv.org/abs/2312.03620), [pre-trained models & simple inference](https://github.com/Liu-Tianchi/Golden-Gemini-for-Speaker-Verification), [train & test code](https://github.com/wenet-e2e/wespeaker/tree/master/examples/voxceleb/v2), [ONNX](https://github.com/wenet-e2e/wespeaker/blob/master/docs/pretrained.md)]
- **<u>T. Liu</u>**, K. A. Lee, Q. Wang, H. Li, *Disentangling Voice and Content with Self-Supervision for Speaker Recognition*, Advances in Neural Information Processing Systems (<span style="background: linear-gradient(to bottom, #D8BFD8, rgba(255, 255, 255, 0)); color: black; font-weight: bold; padding: 4px 8px; display: inline-block;">NeurIPS</span>), 2023. 🔗[[NeurIPS](https://proceedings.neurips.cc/paper_files/paper/2023/hash/9d276b0a087efdd2404f3295b26c24c1-Abstract-Conference.html), [arXiv](https://arxiv.org/abs/2310.01128)]
- Q. Wang, K. A. Lee, **<u>T. Liu</u>**, *Incorporating Uncertainty from Speaker Embedding Estimation to Speaker Verification*, **IEEE ICASSP**, **oral**, 2023. 🔗[[IEEE](https://ieeexplore.ieee.org/document/10097019/), [arXiv](https://arxiv.org/abs/2302.11763)]
- **<u>T. Liu</u>**, R. K. Das, K. A. Lee, H. Li, *MFA: TDNN with multi-scale frequency-channel attention for text-independent speaker verification with short utterances*, **IEEE ICASSP**, **oral**, 2022. 🔗[[IEEE](https://ieeexplore.ieee.org/abstract/document/9747021/), [arXiv](https://arxiv.org/abs/2202.01624), [code](https://github.com/Liu-Tianchi/MFA-TDNN)]
- **<u>T. Liu</u>**, R. K. Das, K. A. Lee, H. Li, *Neural acoustic-phonetic approach for speaker verification with phonetic attention mask*, IEEE Signal Processing Letters (**SPL**), 2022. 🔗[[IEEE](https://ieeexplore.ieee.org/abstract/document/9681187/)]
- Q. Wang, K. A. Lee, **<u>T. Liu</u>**, *Scoring of Large-Margin Embeddings for Speaker Verification: Cosine or PLDA?*, **INTERSPEECH, oral**, 2022. 🔗[[ISCA](https://www.isca-archive.org/interspeech_2022/wang22r_interspeech.html), [arXiv](https://arxiv.org/abs/2204.03965)]
- **<u>T. Liu</u>**, R. K. Das, M. C. Madhavi, S. Shen, H. Li, *Speaker-Utterance Dual Attention for Speaker and Utterance Verification*, **INTERSPEECH**, 2020. 🔗[[ISCA](https://www.isca-archive.org/interspeech_2020/liu20u_interspeech.html), [arXiv](https://arxiv.org/abs/2008.08901)]
- **<u>T. Liu</u>**, M. C. Madhavi, R. K. Das, H. Li, *A Unified Framework for Speaker and Utterance Verification*, **INTERSPEECH**, 2019. 🔗[[ISCA](https://www.isca-archive.org/interspeech_2019/liu19m_interspeech.html), [code](https://github.com/Liu-Tianchi/SUV)]
  
**Speech DeepFake Detection / Antispoofing**
- D. T. Truong, **<u>T. Liu</u>**, ..., *Addressing Gradient Misalignment in Data-Augmented Training for Robust Speech Deepfake Detection*, **IEEE ICASSP**, 2026. 🔗[[arXiv]](https://arxiv.org/abs/2509.20682)
- **<u>T. Liu</u>**, D. T. Truong, R. K. Das, K. A. Lee, H. Li, *Nes2Net: A Lightweight Nested Architecture for Foundation Model Driven Speech Anti-spoofing*, IEEE Transactions on Information Forensics and Security (<span style="background: linear-gradient(to bottom, #C1E1C1, rgba(255, 255, 255, 0)); color: black; font-weight: bold; padding: 4px 8px; display: inline-block;">TIFS</span>), 2025. 🔗[[IEEE](https://ieeexplore.ieee.org/document/11222612), [arXiv](https://arxiv.org/abs/2504.05657v1), [Code & Models](https://github.com/Liu-Tianchi/Nes2Net)][![](https://img.shields.io/github/stars/Liu-Tianchi/Nes2Net?style=social&label=Nes2Net)](https://github.com/Liu-Tianchi/Nes2Net)
- **<u>T. Liu</u>**, L. Zhang, R. K. Das, Y. Ma, R. Tao, H. Li, *How Do Neural Spoofing Countermeasures Detect Partially Spoofed Audio?*, **INTERSPEECH, oral**, 2024. 🔗[[ISCA](https://www.isca-archive.org/interspeech_2024/liu24m_interspeech.html), [arXiv](https://arxiv.org/abs/2406.02483)]
- Z. Pan, **<u>T. Liu</u>**, H. B. Sailor, Q. Wang, *Attentive Merging of Hidden Embeddings from Pre-trained Speech Model for Anti-spoofing Detection*, **INTERSPEECH, oral**, 2024. 🔗[[ISCA](https://www.isca-archive.org/interspeech_2024/pan24c_interspeech.html), [arXiv](https://arxiv.org/abs/2406.10283), [code](https://github.com/pandarialTJU/AttM_INTERSPEECH24)]
- **<u>T. Liu</u>**, I. Kukanov, Z. Pan, Q. Wang, H. B. Sailor, K. A. Lee, *Towards Quantifying and Reducing Language Mismatch Effects in Cross-lingual Speech Anti-Spoofing*, IEEE Spoken Language Technology Workshop (**SLT**), 2024.🔗[[IEEE](https://ieeexplore.ieee.org/document/10832142), [arXiv](https://arxiv.org/abs/2409.08346)]
- A. Guragain\*, **<u>T. Liu</u>**\*, Z. Pan, H. B. Sailor, Q. Wang, *Speech Foundation Model Ensembles for the Controlled Singing Voice Deepfake Detection (CtrSVDD) Challenge 2024*, IEEE Spoken Language Technology Workshop (**SLT**), (co-first author\*), 2024. 🔗[[IEEE](https://ieeexplore.ieee.org/document/10832226), [arXiv](https://arxiv.org/abs/2409.02302), [code](https://github.com/Anmol2059/SVDD2024)]
- D. T. Truong, **<u>T. Liu</u>**, ..., *QAMO: Quality-aware Multi-centroid One-class Learning For Speech Deepfake Detection*, under review. 🔗[[arXiv]](https://arxiv.org/abs/2509.20679)

**Audio-Visual**
- J. Meng, H. B. Sailor, Q. Wang, **<u>T. Liu</u>**, ..., *Exploring audio-visual fusion methods in foundation model-based deception detection*, **APSIPA ASC**, 2025. 🔗[[IEEE Xplore](https://ieeexplore.ieee.org/document/11249189)]

  




<!--- 
**2025**

- ⭐ **<u>T. Liu</u>**, D. T. Truong, R. K. Das, K. A. Lee, H. Li, *Nes2Net: A Lightweight Nested Architecture for Foundation Model Driven Speech Anti-spoofing*, **IEEE Transactions on Information Forensics and Security (T-IFS)**, 2025. 🔗[[IEEE](https://ieeexplore.ieee.org/document/11222612), [arXiv](https://arxiv.org/abs/2504.05657v1), [Code & Models (Github)](https://github.com/Liu-Tianchi/Nes2Net)]
- ⭐ (**Best Paper Award**) R. Tao, Zhan Shi, Yidi Jiang, **<u>T. Liu</u>**, H. Li, *Voice Conversion Augmentation for Speaker Recognition on Defective Datasets*, **APSIPA ASC**, 2025. 🔗[[arXiv](https://arxiv.org/abs/2404.00863), [IEEE Xplore](https://ieeexplore.ieee.org/document/11249009)]
- Y. Ma, S. Wang, **<u>T. Liu</u>**, H. Li, *PhiNet: Speaker Verification with Phonetic Interpretability*, IEEE/ACM Transactions on Audio, Speech, and Language Processing (**TASLP**), 2025. 🔗[[IEEE Xplore](https://ieeexplore.ieee.org/document/11293376)]
- Q. Wang, H. B. Sailor, **<u>T. Liu</u>**, ..., *Benchmarking Contextual and Paralinguistic Reasoning in Speech-LLMs: A Case Study with In-the-Wild Data*, **EMNLP Findings**, 2025. 🔗[[arXiv](https://arxiv.org/abs/2509.16589), [ACL Anthology](https://aclanthology.org/2025.findings-emnlp.760/)]
- **<u>T. Liu</u>**, R. Tao, Q. Wang, ..., *Interpolating Speaker Identities in Embedding Space for Data Expansion*, **APSIPA ASC**, 2025. 🔗[[arXiv](https://arxiv.org/abs/2508.19210), [IEEE Xplore](https://ieeexplore.ieee.org/document/11249126)]
- Q. Wang, Hardik B Sailor, J. H. Wong, **<u>T. Liu</u>**, ..., *Incorporating Contextual Paralinguistic Understanding in Large Speech-Language Models*, **IEEE ASRU**, 2025. 🔗[[IEEE (soon)](), [arXiv](https://arxiv.org/abs/2508.07273)]
- Q. Wang, H. B. Sailor, **<u>T. Liu</u>**, A. T. Aw, *Contextual Paralinguistic Data Creation for Multi-Modal Speech-LLM: Data Condensation and Spoken QA Generation*, **INTERSPEECH**, 2025. 🔗[[ISCA](https://www.isca-archive.org/interspeech_2025/wang25e_interspeech.html), [arXiv](https://arxiv.org/abs/2505.13338), [dataset(🤗Hugging Face)](https://huggingface.co/datasets/MERaLiON/CPQA-Evaluation-Set)]
- Y. Ma, S. Wang, **<u>T. Liu</u>**, H. Li, *ExPO: Explainable Phonetic Trait-Oriented Network for Speaker Verification*, IEEE Signal Processing Letters (**IEEE SPL**), 2025. 🔗[[IEEE](https://ieeexplore.ieee.org/document/10845144), [arXiv](https://arxiv.org/abs/2501.05729), [code](https://github.com/mmmmayi/ExPO)]
- Ke Zhang, Marvin Borsdorf, **<u>T. Liu</u>**, S. Wang, Yangjie Wei, H. Li, *Speaker Extraction with Verification of Present and Absent Target Speakers*, Journal of Shanghai Jiaotong University (Science), 2025. 🔗[[Paper Link](https://link.springer.com/article/10.1007/s12204-025-2798-4)]
- Jiaxiang Meng, ..., **<u>T. Liu</u>**, ..., *Exploring audio-visual fusion methods in foundation model-based deception detection*, **APSIPA ASC**, 2025. 🔗[[IEEE Xplore](https://ieeexplore.ieee.org/document/11249189)]
- (Under Review) L. Xue, Ziya Zhou, ..., **<u>T. Liu</u>**, ..., *Audio-FLAN: A Preliminary Release*, 2025. 🔗[[arXiv](https://arxiv.org/abs/2502.16584), [Dataset(🤗Hugging Face)](https://huggingface.co/datasets/HKUSTAudio/Audio-FLAN-Dataset), [Github](https://github.com/lmxue/Audio-FLAN)]
  

- D. T. Truong, **<u>T. Liu</u>**, ..., *Addressing Gradient Misalignment in Data-Augmented Training for Robust Speech Deepfake Detection*, under review, 2025. 🔗[[arXiv]](https://arxiv.org/abs/2509.20682)
- D. T. Truong, **<u>T. Liu</u>**, ..., *QAMO: Quality-aware Multi-centroid One-class Learning For Speech Deepfake Detection*, under review, 2025. 🔗[[arXiv]](https://arxiv.org/abs/2509.20679)
- Junjie Li, ..., **<u>T. Liu</u>**, ..., *Mak Xi+: Uncertainty Supervision for Robust Speaker Embedding* under review, 2025. 🔗[[arXiv]](https://arxiv.org/abs/2509.05993)


**2024**
- ⭐**<u>T. Liu</u>**, K. A. Lee, Q. Wang, H. Li, *Golden Gemini is All You Need: Finding the Sweet Spots for Speaker Verification*, IEEE/ACM Transactions on Audio, Speech, and Language Processing (**TASLP**), 2024. 🔗[[IEEE](https://ieeexplore.ieee.org/abstract/document/10497864/), [arXiv](https://arxiv.org/abs/2312.03620), [pre-trained models & simple inference](https://github.com/Liu-Tianchi/Golden-Gemini-for-Speaker-Verification), [train & test code](https://github.com/wenet-e2e/wespeaker/tree/master/examples/voxceleb/v2), [ONNX](https://github.com/wenet-e2e/wespeaker/blob/master/docs/pretrained.md)]
- ⭐ [<span style="background: linear-gradient(to right, #c9e5ee, #FFEFD5); color:black; font-weight:bold; padding:2px 5px;">🌊MERaLiON🦁</span>] Muhammad Huzaifah\*, Geyu Lin\*, **<u>T. Liu</u>**\*, H. B. Sailor\*, Kye Min Tan\*, Tarun K. Vangani\*, Q. Wang\*, Jeremy H. M. Wong\*, Nancy F. Chen, A. T. Aw (MERaLiON Team), *MERaLiON-SpeechEncoder: Towards a Speech Foundation Model for Singapore and Beyond*, 2024. 🔗[[arXiv](https://arxiv.org/abs/2412.11538), [🤗Hugging Face](https://huggingface.co/MERaLiON)]
- **<u>T. Liu</u>**, Lin Zhang, R. K. Das, Y. Ma, R. Tao, H. Li, *How Do Neural Spoofing Countermeasures Detect Partially Spoofed Audio?*, **INTERSPEECH, oral**, 2024. 🔗[[ISCA](https://www.isca-archive.org/interspeech_2024/liu24m_interspeech.html), [arXiv](https://arxiv.org/abs/2406.02483)]
- Z. Pan, **<u>T. Liu</u>**, H. B. Sailor, Q. Wang, *Attentive Merging of Hidden Embeddings from Pre-trained Speech Model for Anti-spoofing Detection*, **INTERSPEECH, oral**, 2024. 🔗[[ISCA](https://www.isca-archive.org/interspeech_2024/pan24c_interspeech.html), [arXiv](https://arxiv.org/abs/2406.10283), [code](https://github.com/pandarialTJU/AttM_INTERSPEECH24)]
- **<u>T. Liu</u>**, Ivan Kukanov, Z. Pan, Q. Wang, H. B. Sailor, K. A. Lee, *Towards Quantifying and Reducing Language Mismatch Effects in Cross-lingual Speech Anti-Spoofing*, IEEE Spoken Language Technology Workshop (**IEEE SLT**), 2024.🔗[[IEEE](https://ieeexplore.ieee.org/document/10832142), [arXiv](https://arxiv.org/abs/2409.08346)]
- Anmol Guragain\*, **<u>T. Liu</u>**\*, Z. Pan, H. B. Sailor, Q. Wang, *Speech Foundation Model Ensembles for the Controlled Singing Voice Deepfake Detection (CtrSVDD) Challenge 2024*, IEEE Spoken Language Technology Workshop (**IEEE SLT**), (co-first author\*), 2024. 🔗[[IEEE](https://ieeexplore.ieee.org/document/10832226), [arXiv](https://arxiv.org/abs/2409.02302), [code](https://github.com/Anmol2059/SVDD2024)]

**2023**
- ⭐**<u>T. Liu</u>**, K. A. Lee, Q. Wang, H. Li, *Disentangling Voice and Content with Self-Supervision for Speaker Recognition*, Advances in Neural Information Processing Systems (<span style="background: linear-gradient(to bottom, #D8BFD8, rgba(255, 255, 255, 0)); color: black; font-weight: bold; padding: 4px 8px; display: inline-block;">NeurIPS</span>), 2023. 🔗[[NeurIPS](https://proceedings.neurips.cc/paper_files/paper/2023/hash/9d276b0a087efdd2404f3295b26c24c1-Abstract-Conference.html), [arXiv](https://arxiv.org/abs/2310.01128)]
- Q. Wang, K. A. Lee, **<u>T. Liu</u>**, *Incorporating Uncertainty from Speaker Embedding Estimation to Speaker Verification*, **IEEE ICASSP**, **oral**, 2023. 🔗[[IEEE](https://ieeexplore.ieee.org/document/10097019/), [arXiv](https://arxiv.org/abs/2302.11763)]

**2022**
- ⭐**<u>T. Liu</u>**, R. K. Das, K. A. Lee, H. Li, *MFA: TDNN with multi-scale frequency-channel attention for text-independent speaker verification with short utterances*, **IEEE ICASSP**, **oral**, 2022. 🔗[[IEEE](https://ieeexplore.ieee.org/abstract/document/9747021/), [arXiv](https://arxiv.org/abs/2202.01624), [code](https://github.com/Liu-Tianchi/MFA-TDNN)]
- **<u>T. Liu</u>**, R. K. Das, K. A. Lee, H. Li, *Neural acoustic-phonetic approach for speaker verification with phonetic attention mask*, IEEE Signal Processing Letters (**IEEE SPL**), 2022. 🔗[[IEEE](https://ieeexplore.ieee.org/abstract/document/9681187/)]
- Q. Wang, K. A. Lee, **<u>T. Liu</u>**, *Scoring of Large-Margin Embeddings for Speaker Verification: Cosine or PLDA?*, **INTERSPEECH, oral**, 2022. 🔗[[ISCA](https://www.isca-archive.org/interspeech_2022/wang22r_interspeech.html), [arXiv](https://arxiv.org/abs/2204.03965)]

**2019 - 2020** 

- **<u>T. Liu</u>**, R. K. Das, M. Madhavi, S. Shen, H. Li, *Speaker-Utterance Dual Attention for Speaker and Utterance Verification*, **INTERSPEECH**, 2020. 🔗[[ISCA](https://www.isca-archive.org/interspeech_2020/liu20u_interspeech.html), [arXiv](https://arxiv.org/abs/2008.08901)]
- **<u>T. Liu</u>**, Maulik C Madhavi, R. K. Das, H. Li, *A Unified Framework for Speaker and Utterance Verification*, **INTERSPEECH**, 2019. 🔗[[ISCA](https://www.isca-archive.org/interspeech_2019/liu19m_interspeech.html), [code](https://github.com/Liu-Tianchi/SUV)]
--> 


# 💻 Open Source Contributions

- *WeSpeaker* [![](https://img.shields.io/github/stars/wenet-e2e/wespeaker?style=social&label=WeSpeaker)](https://github.com/wenet-e2e/wespeaker)
- *AudioLLM* [![](https://img.shields.io/github/stars/AudioLLMs/AudioLLM?style=social&label=AudioLLM)](https://github.com/AudioLLMs/AudioLLM)
- *Audio-FLAN* [![](https://img.shields.io/github/stars/lmxue/Audio-FLAN?style=social&label=Audio-FLAN)](https://github.com/lmxue/Audio-FLAN)
- *Nes2Net* [![](https://img.shields.io/github/stars/Liu-Tianchi/Nes2Net?style=social&label=Nes2Net)](https://github.com/Liu-Tianchi/Nes2Net)
- *MERaLiON* [[🤗Hugging Face]](https://huggingface.co/MERaLiON)

# 🌟 Others

🥇 **Awards**🥈🥉🏅🎖️
- **🥇Best Paper Award** (1 paper only), **APSIPA**, 2025 (Co-author)
- **🥈Sliver Award, Tencent AI Application Award**, **Tencent**, 2025
- **🥇Best Student Paper Award** (1 recipient annually), Pattern Recognition and Machine Intelligence Association (**PREMIA**), 2024
- **🥇Best Student Paper Award** (2 recipients annually), Nanyang Speech Technology Forum (**NSTF**), 2024
- **🥉3rd place winner** out of 49 teams in the Controlled Singing Voice Deepfake Detection (**CtrSVDD**) Challenge 2024 @ IEEE SLT, 2024
- **🥇Best Paper Award** in 2023 International Doctoral Forum (**CUHK** & **Microsoft**), 2023
- **🥇Travel Grant Award (Top Tier)**, Chinese and Oriental Languages Information Processing Society (**COLIPS**), 2023
- **🎖️5th place winner** out of 128 teams in **NIST** Face Recognition Vendor Test (**FRVT**) - Face Mask Effects, 2020
- **Outstanding Achievement Award** under the Research Domain, PENSEES Singapore, 2020

🏛️ **Academic Service**

<!--- - [Committee](https://www.apsipa2025.org/wp/committee/), Local Arrangements Chair  @ IEEE APSIPA ASC, 2025 
- Scientific Committee for Frontiers in Deepfake Voice Detection and Beyond @ IEEE ASRU, 2025 
- [Committee] Registration Chair, The International Conference on Asian Language Processing (IALP), 2025
--> 

- Virtual Session Chair @ IEEE IALP, 2023
- [Program Committee](https://www.asianlp.sg/conferences/iscslp2022/web/committees/) @ IEEE ISCSLP, 2022
- Volunteer @ IEEE ICASSP, 2022
  
📝 **Reviewer**

*Journal/Transactions/Letters:*
- Neural Networks *'25*
- IEEE/ACM Transactions on Audio, Speech, and Language Processing (TASLP) *'25*
- IEEE Transactions on Dependable and Secure Computing (TDSC) *'25*
- IEEE Transactions on Biometrics, Behavior, and Identity Science (TBIOM) *'25*
- Computer Speech & Language *'24~'25*
- IEEE Signal Processing Letters (SPL) - *'23~'25*

*Conference:*
- Conference on Neural Information Processing Systems (NeurIPS) - *'25*
- IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP) - *'23~'25*
- INTERSPEECH - *'23~'25*
- International Joint Conference on Neural Networks (IJCNN) *'25*
- IEEE Automatic Speech Recognition and Understanding Workshop (ASRU) - *'25*
- IEEE Spoken Language Technology Workshop (SLT) - *'24*
- ASVspoof5 - *'24*
- IEEE ISCSLP - *'22*
