from scholarly import scholarly
import json
from datetime import datetime
import os

TARGET_PUB_ID = "1W24GsQAAAAJ:eQOLeE2rZwMC"
TARGET_LABEL = "INSIDE citations"

author: dict = scholarly.search_author_id('1W24GsQAAAAJ')
scholarly.fill(author, sections=['basics', 'indices', 'counts', 'publications'])

author['updated'] = str(datetime.now())
author['publications'] = {v['author_pub_id']: v for v in author['publications']}

os.makedirs('results', exist_ok=True)

# ========= 原有：保存完整 author 数据 =========
with open('results/gs_data.json', 'w') as outfile:
    json.dump(author, outfile, ensure_ascii=False)

# ========= 原有：总 citation badge =========
shieldio_data = {
    "schemaVersion": 1,
    "label": "citations",
    "message": f"{author['citedby']}",
}
with open('results/gs_data_shieldsio.json', 'w') as outfile:
    json.dump(shieldio_data, outfile, ensure_ascii=False)

# ========= 新增：单篇论文 citation =========
if TARGET_PUB_ID in author['publications']:
    pub = author['publications'][TARGET_PUB_ID]
    num_citations = pub.get("num_citations", 0)

    paper_shield = {
        "schemaVersion": 1,
        "label": TARGET_LABEL,
        "message": str(num_citations),
        "color": "blue"
    }

    with open('results/inside_citation_shieldsio.json', 'w') as outfile:
        json.dump(paper_shield, outfile, ensure_ascii=False)
else:
    print(f"Publication {TARGET_PUB_ID} not found.")
