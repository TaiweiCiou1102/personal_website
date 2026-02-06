from .models import ProfileData, Link, ExperienceItem, EducationItem, SkillCategory, Project

DB = ProfileData(
    name="邱泰瑋",
    contact="0963-696-686",
    email="f12f3f58kkgs4@gmail.com",
    summary="具備3年後端開發與資料工程經驗，涉足網站後端API開發、資料管線與倉儲建置，近期則接觸AI Agent與影像辨識相關開發工作；擁有統計與因果推論學術背景。兼備機器學習模型調校，以及模型落地部屬能力。",
    links=[
        Link(label="Github", url="https://github.com/TaiweiCiou1102"),
        #Link(label="LinkedIn", url="https://www.linkedin.com/in/your-profile"),
        Link(label="HackMD", url="https://hackmd.io/@taiweiciou1102")
    ],
    experience=[
        ExperienceItem(
            company="精誠資訊 Systex",
            period="2022.07 - Present",
            role="資料工程師 & AI開發工程師 (Data & AI Engineer)",
            description=[
                {
                    "title": "AI 燒肉熟度影像偵測系統-PoC",
                    "items": [
                        "負責訓練與調校 YOLO 模型，針對燒肉特徵優化辨識準度，成功完成技術可行性驗證 (PoC)。",
                        "建置即時影像串流架構，整合自動化判讀邏輯，實現肉片生熟狀態之即時視覺化標示。"
                    ]
                },
                {
                    "title": "資料分析Agent模組開發",
                    "items": [
                        "基於LangChain與MCP (Model Context Protocol)架構開發AI Agent，串接Tableau Server；2周內完成核心功能開發，迅速落實自然語言查詢功能。",
                        "解決跨資料表存取難題，設計分段式檢索流程：先判斷查詢涉及哪些特定表格，再個別呼叫對應 API 獲取數據，確保正確擷取資料。"
                    ]
                },
                {
                    "title": "Microsoft Fabric 資料分析平台開發與導入",
                    "items": [
                        "負責Fabric平台關鍵架構開發，獨立建置專案 50% 之Data Pipelines。",
                        "開發 API 串接模組，整合外部API、雲、地端(On-premise)等多源數據至資料倉儲。",
                        "運用 PySpark 和 SQL 部署異常偵測腳本，建立每 4 小時運行之自動化預警系統，將異常發現時間(Time-to-Detect)從數天縮短至數小時內。"
                    ]
                },
                {
                    "title": "Azure Data Factory 資料系統維護",
                    "items": [
                        "解決 ETL 排程因資料量增長引發的級聯延遲 (Cascading Delay) 問題，設計逾時中斷與預警機制，並整合 Databricks 腳本實現 Power BI 報表自動化更新，確保資料交付之穩定性。"
                    ]
                },
                {
                    "title": "SQL Server資料庫健檢",
                    "items": [
                        "維護資料庫高可用性架構 (High Availability)，監控 SQL Server Always On 與 Windows 容錯移轉叢集 (WSFC) 運作狀態，確保服務穩定不中斷。",
                        "執行定期資料庫健檢，針對資料儲存配置 (Storage) 進行參數調校與效能優化，主動排除潛在瓶頸。"
                    ]
                }
            ]
        ),
        ExperienceItem(
            company="精誠資訊 Systex",
            period="2022.07 - Present",
            role="後端軟體工程師 (Backend Engineer)",
            description=[
                {
                    "title": "碳足跡後端系統開發",
                    "items": [
                        "運用 C# 與 .NET Core 主導後端權限系統 (RBAC) 設計與建置，確保企業敏感性碳排數據之安全性。",
                        "建立 Azure DevOps 自動化部署流程 (CI/CD)，整合單元測試，大幅縮短版更上線時間。"
                    ]
                },
                {
                    "title": "供應鏈平台後端系統開發",
                    "items": [
                        "基於 .NET Core (C#) 開發供應鏈管理核心 RESTful API，優化資料庫 Schema 設計以支援複雜查詢需求。",
                        "與 SA 及前端工程師協作，定義前後端介面規格，確保系統功能符合業務需求並如期交付。"
                    ]
                },
                {
                    "title": "書目爬蟲程式開發與維護",
                    "items": [
                        "開發 Flask 書目爬蟲系統，整合 Selenium 網頁爬取與 API 串接之混合模式，精準彙整博客來、三民書局等跨平台書目資訊。",
                        "導入 Multi-threading 多執行緒架構進行效能優化，大幅提升資料抓取速率與系統吞吐量。",
                        "設計自動化維運腳本 (PowerShell)，建立 Chrome Driver 版本衝突之自癒機制 (Self-healing)，實現自動更新驅動與重啟服務，有效降低人工維護成本並確保系統高可用性。"
                    ]
                },
                {
                    "title": "企業級應用程式全端開發 (Power Apps / Dataverse)",
                    "items": [
                        "獨立主導專案 0 到 1 開發： 一手包辦從需求分析、UI/UX 設計、Dataverse 資料表關聯規劃 (Schema Design) 到商業邏輯實作，成功上線供應鏈管理與報關系統等多項應用。",
                        "系統架構規劃： 運用全端開發視角規劃系統運作流程，將實體業務流程轉化為標準化資料模型與自動化邏輯。",
                        "快速應用程式開發 (RAD)： 利用 Low-Code 平台特性進行敏捷開發與迭代，大幅縮短開發週期並精準回應業務端需求。"
                    ]
                }
            ]
        )
    ],
    education=[
        EducationItem(
            school="國立清華大學",
            period="2020.09 - 2025.02",
            degree="經濟學系 碩士 (統計建模與量化分析)",
            details="碩士論文: 外籍移工對台灣勞工薪資及雇用影響之因果分析",
            link="https://hdl.handle.net/11296/4e5ej2"
        ),
        EducationItem(
            school="國立清華大學",
            period="2017.09 - 2020.08",
            degree="人文社會學院學士班 學士 (副修經濟)",
            details=""
        )
    ],
    skills=[
        SkillCategory(category="程式語言", items=["Python", "C#", "SQL", "R"]),
        SkillCategory(category="開發框架", items=["FastAPI", "Flask", ".NET Core"]),
        SkillCategory(category="資料工程", items=["PySpark", "Microsoft Fabric", "Azure Data Factory (ADF)", "SQL Server"]),
        SkillCategory(category="雲端 & DevOps", items=["Azure", "Azure DevOps"]),
        SkillCategory(category="人工智慧 (AI)", items=["LangChain/Graph", "YOLO"]),
        SkillCategory(category="資料分析方法", items=["Causal Inference", "Panel Data", "Time Series Analysis"])
    ],
    certifications=[
        "Microsoft Certified: Azure Database Administrator Associate (DP-300)"
    ],
    languages=[
        "英文 | TOEIC 800"
    ],
    portfolio=[  
        # Project(
        #     id="p1",
        #     title="1999市民專線分析",
        #     type="Web/Code",
        #     description="Analysis of citizen hotline data.",
        #     imageUrl="https://placehold.co/600x400?text=1999+Analysis",
        #     link="https://github.com/TaiweiCiou1102"
        # ),
        Project(
            id="p1",
            title="AI Agent on Line",
            type="Web/Code",
            description="在Line貼上具有活動資訊的網址，AI Agent就會自動摘要活動資訊並儲存在Google Sheet中。",
            imageUrl="/static/aiagent_on_line.png",
            link="https://github.com/TaiweiCiou1102/aiagent_on_line"
        ),
        Project(
            id="p2",
            title="「肉熟了沒」燒肉熟度AI影像辨識",
            type="Web/Code",
            description="YakinikuAI 專案是為了驗證AI影像辨識實作的可行性而生，目的在於幫助公司內部釐清所需要的所有技術。 YakinikuAI是一套能夠從 網路攝影機串流 進行即時推論，判斷燒肉／烤肉的熟度（Undercooked、Well-Cooked、Overcooked），採用 YOLO 風格 標準訓練流程、ONNX 優化推論與 FastAPI 串流服務。",
            imageUrl="/static/YakinikuAI_picture.jpg",
            link="https://github.com/TaiweiCiou1102/YakinikuAI"
        ),
        Project(
            id="p3",
            title="碩士論文:外籍移工對台灣勞工薪資及雇用影響之因果分析",
            type="Document/PDF",
            description="這份研究透過台灣勞動力使用調查數據，深入探討移工引進對本國勞工薪資與就業的影響。研究結果顯示，移工對本國勞工整體薪資無顯著干擾，但會對低技術勞工產生替代效應，導致其就業機會減少；相對地，高技術勞工在製造業中則展現出互補效應。在方法論上，本文詳細評估了合成控制法 (SCM)、差異中之差異 (DID) 以及多種改進的因果推斷模型。為了優化推估精準度，作者進一步提出結合 LASSO 懲罰項與最佳子集選擇 (BSS) 的交替最佳化路徑。最後，研究亦涵蓋了針對台灣產業結構與薪資分佈的描述性分析，並透過蒙地卡羅模擬驗證各類計量模型的有效性。",
            imageUrl="/static/thesis_picture.png",
            documentUrl="/static/Migrant_Labor_Substitution_and_Complementarity.pdf"
        ),
        Project(
            id="p4",
            title="台灣失聯移工趨勢預測與政策干預分析",
            type="Document/HTML",
            description="""
            本專案運用 2010 至 2022 年間的月度數據，建立 SARIMA 季節性時間序列模型，旨在量化評估勞動部 2016 年「取消移工需出國一日規定」之政策成效。透過干預分析 (Intervention Analysis) 模型估計，證實該政策具顯著效果，平均每月減少約 480 名失聯移工（降幅達 30.7%）。
            """,
            imageUrl="/static/missing_foreign_worker_analysis.png",
            documentUrl="/static/missing_foreign_worker_analysis.html"
        )
    ]
)
