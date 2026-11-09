export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  datePublished: string;
  dateModified: string;
  keywords: string[];
  summary: string;
  sections: { id: string; heading: string; body: string[] }[];
  faqs?: { q: string; a: string }[];
  references: { label: string; href: string }[];
  cta?: { text: string; href: string; label: string };
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-create-a-wikipedia-page-for-your-company",
    title: "How to Create a Wikipedia Page for Your Company",
    description:
      "A practical guide to evaluating eligibility, gathering independent reliable sources, and following Wikipedia’s policies before creating a company article.",
    category: "Wikipedia",
    datePublished: "2026-11-10",
    dateModified: "2026-11-10",
    keywords: [
      "how to create a Wikipedia page for your company",
      "Wikipedia page creation",
      "company Wikipedia page",
      "Wikipedia consulting",
      "Wikipedia notability",
    ],
    summary:
      "Creating a company page on Wikipedia starts with eligibility, not drafting. This guide explains the key steps: confirming notability through independent reliable sources, understanding conflict-of-interest expectations, preparing neutral content, and choosing a responsible submission path.",
    sections: [
      {
        id: "check-eligibility",
        heading: "Start with eligibility, not writing",
        body: [
          "Wikipedia is an encyclopedia, not a marketing channel. Before creating a company article, the most important step is determining whether the company has received significant coverage in reliable, independent secondary sources. Company websites, press releases, paid placements, social profiles, and routine directory listings usually do not establish eligibility on their own.",
          "A practical first step is to collect independent coverage from reputable publications, books, or other editorially controlled sources. The coverage should be about the company itself, not merely a passing mention in a broader story. If strong independent coverage is limited, it may be better to focus on building verifiable public coverage before pursuing an article.",
        ],
      },
      {
        id: "sources",
        heading: "Gather reliable, independent sources",
        body: [
          "Reliable sources are central to every Wikipedia article. For companies, useful sources often include reputable news organizations, industry publications, books, and other independent outlets with editorial oversight. Each important statement in a draft should be supported by an appropriate source.",
          "When reviewing sources, separate independent reporting from promotional material. Sponsored articles, advertorials, and content controlled by the company should be treated cautiously. A responsible Wikipedia consulting process includes a source review to identify what can be verified and where coverage gaps remain.",
        ],
      },
      {
        id: "neutrality-coi",
        heading: "Follow neutral point of view and disclosure expectations",
        body: [
          "Wikipedia articles must be written from a neutral point of view. That means presenting verifiable information fairly, avoiding promotional language, and not emphasizing positive claims without balanced context supported by sources.",
          "If you have a close connection to the company, conflict-of-interest and paid-contribution considerations may apply. Transparency and policy compliance matter. In many cases, requesting feedback or using appropriate community processes is safer than directly publishing promotional content.",
        ],
      },
      {
        id: "draft-and-submit",
        heading: "Draft carefully and choose a responsible submission path",
        body: [
          "A good draft is concise, factual, and fully sourced. It should cover only what independent reliable sources support. Avoid unsourced claims about awards, rankings, market leadership, client lists, or impact. If the topic is borderline, Articles for Creation or community feedback may be appropriate depending on the situation.",
          "No consultant, agency, or company can guarantee that Wikipedia editors will publish or retain an article. Editorial decisions are made independently by the Wikipedia community. The goal of a responsible process is to improve accuracy, compliance, and clarity—not to promise outcomes.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can my company pay someone to create a Wikipedia page?",
        a: "Paid help may be used for research, drafting guidance, or consulting, but paid-contribution and conflict-of-interest expectations should be handled transparently. Payment does not guarantee publication, approval, or retention.",
      },
      {
        q: "What if my company does not have enough media coverage?",
        a: "If independent reliable coverage is limited, the company may not meet Wikipedia’s notability expectations yet. In that case, focus on verifiable business milestones and independent coverage before attempting article creation.",
      },
      {
        q: "Should I publish the page myself?",
        a: "Direct publishing can be risky when there is a conflict of interest or the sourcing is weak. A careful review of sources, neutrality, and applicable disclosure guidance is recommended before choosing how to proceed.",
      },
    ],
    references: [
      { label: "Wikipedia: Notability", href: "https://en.wikipedia.org/wiki/Wikipedia:Notability" },
      { label: "Wikipedia: Reliable sources", href: "https://en.wikipedia.org/wiki/Wikipedia:Reliable_sources" },
      { label: "Wikipedia: Conflict of interest", href: "https://en.wikipedia.org/wiki/Wikipedia:Conflict_of_interest" },
      { label: "Wikipedia: Paid-contribution disclosure", href: "https://en.wikipedia.org/wiki/Wikipedia:Paid-contribution_disclosure" },
      { label: "Wikipedia: Articles for creation", href: "https://en.wikipedia.org/wiki/Wikipedia:Articles_for_creation" },
    ],
    cta: {
      text: "Need a policy-aware review before pursuing a company article?",
      href: "/services/wikipedia-services",
      label: "Explore Wikipedia Consulting Services",
    },
  },
  {
    slug: "wikipedia-notability-requirements-explained",
    title: "Wikipedia Notability Requirements Explained",
    description:
      "Learn what Wikipedia notability means, why independent reliable sources matter, and how to assess whether a topic may be eligible for an article.",
    category: "Wikipedia",
    datePublished: "2026-11-10",
    dateModified: "2026-11-10",
    keywords: [
      "Wikipedia notability requirements",
      "Wikipedia notability guidelines",
      "Wikipedia notability assessment",
      "reliable sources for Wikipedia",
      "Wikipedia consulting",
    ],
    summary:
      "Notability is Wikipedia’s baseline test for whether a topic deserves a standalone article. It is usually established through significant coverage in reliable, independent secondary sources—not through self-promotion, paid content, or routine mentions.",
    sections: [
      {
        id: "what-notability-means",
        heading: "What notability means on Wikipedia",
        body: [
          "Notability helps Wikipedia editors decide which topics have enough verifiable attention to warrant a separate article. The general idea is that a topic should have received significant coverage from reliable sources that are independent of the subject.",
          "Notability is not the same as importance, popularity, or commercial success. A business can be successful in its market and still lack the kind of independent secondary coverage Wikipedia typically looks for. Likewise, a brief mention in a news story does not always equal significant coverage.",
        ],
      },
      {
        id: "independent-sources",
        heading: "Why independent reliable sources matter",
        body: [
          "Independent sources reduce the risk of promotional bias. When coverage is produced by outlets with editorial independence, editors can better evaluate whether the topic has been discussed substantively by third parties.",
          "The quality of sources matters as much as the quantity. A small number of detailed, independent profiles or reports may be more useful than many routine announcements, directory entries, or syndicated press releases. The context of each source should be reviewed carefully.",
        ],
      },
      {
        id: "common-misunderstandings",
        heading: "Common misunderstandings about notability",
        body: [
          "One common misunderstanding is that having a website, social media following, awards page, or press release archive makes a topic notable. Those materials can provide background, but they usually do not replace independent coverage.",
          "Another misunderstanding is that notability can be solved by writing a better draft. Writing quality helps, but sourcing determines whether the article can be supported. A notability assessment should happen before major drafting effort.",
        ],
      },
      {
        id: "how-to-assess",
        heading: "How to assess notability responsibly",
        body: [
          "A responsible assessment starts with a source inventory: identify independent coverage, evaluate its depth, confirm reliability, and map claims to citations. It also includes checking for topic-specific guideline considerations and being honest about gaps.",
          "If the available sources do not yet support a strong article, the right recommendation may be to wait, gather more independent coverage, or narrow the scope to what can be verified. Ethical guidance should never promise approval based on notability research alone.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does a Wikipedia page require media coverage?",
        a: "Often, yes. Significant coverage in reliable, independent secondary sources is a common way subjects demonstrate notability. The exact expectations can vary by topic, so sources should be reviewed in context.",
      },
      {
        q: "Are press releases enough for notability?",
        a: "Press releases are usually not enough because they are not independent of the subject. They may help identify events or leads, but independent reporting is typically more relevant for notability.",
      },
      {
        q: "Can a notability assessment guarantee approval?",
        a: "No. A notability assessment can help evaluate risk and readiness, but independent Wikipedia editors make final editorial decisions.",
      },
    ],
    references: [
      { label: "Wikipedia: Notability", href: "https://en.wikipedia.org/wiki/Wikipedia:Notability" },
      { label: "Wikipedia: Notability (organizations and companies)", href: "https://en.wikipedia.org/wiki/Wikipedia:Notability_(organizations_and_companies)" },
      { label: "Wikipedia: Reliable sources", href: "https://en.wikipedia.org/wiki/Wikipedia:Reliable_sources" },
      { label: "Wikipedia: Verifiability", href: "https://en.wikipedia.org/wiki/Wikipedia:Verifiability" },
    ],
    cta: {
      text: "Want an evidence-based notability review for a company, brand, or individual?",
      href: "/contact",
      label: "Request a Notability Assessment",
    },
  },
  {
    slug: "why-wikipedia-articles-get-deleted",
    title: "Why Wikipedia Articles Get Deleted",
    description:
      "Understand common reasons Wikipedia articles are deleted or nominated for deletion, including weak sourcing, promotional tone, and notability concerns.",
    category: "Wikipedia",
    datePublished: "2026-11-10",
    dateModified: "2026-11-10",
    keywords: [
      "why Wikipedia articles get deleted",
      "Wikipedia deletion",
      "Wikipedia notability",
      "Wikipedia reliable sources",
      "Wikipedia article guidelines",
    ],
    summary:
      "Articles are commonly deleted when they lack reliable independent sourcing, read like advertisements, fail notability expectations, or do not comply with Wikipedia’s content policies. Understanding these risks early can prevent avoidable problems.",
    sections: [
      {
        id: "notability-sourcing",
        heading: "Insufficient notability or sourcing",
        body: [
          "A frequent reason for deletion is that the topic does not appear to meet notability expectations, or the article does not provide enough reliable independent sources to support its claims. Even when a company or person is real, Wikipedia still requires verifiable published coverage from appropriate sources.",
          "Editors may challenge articles that rely heavily on primary sources, press releases, or self-published material. If key claims cannot be verified, the article may be nominated for deletion or substantially revised.",
        ],
      },
      {
        id: "promotional-tone",
        heading: "Promotional or advocacy tone",
        body: [
          "Wikipedia is not a place for marketing copy. Articles written with persuasive language, slogans, unsupported superlatives, or excessive focus on products and services may be flagged. Neutral wording and balanced coverage are essential.",
          "Conflict-of-interest editing can increase this risk. When an article appears to be written by or for the subject, editors may scrutinize tone, sourcing, and disclosure more closely.",
        ],
      },
      {
        id: "policy-issues",
        heading: "Content and process issues",
        body: [
          "Deletion can also result from copyright problems, lack of verifiability, unreliable sourcing, or articles created without following expected community processes. For some drafts, using a more appropriate review path can reduce avoidable friction.",
          "If an article is challenged, the best response is usually to improve sourcing and neutrality where possible—not to argue from promotional material. In some cases, the available evidence may simply be insufficient at that time.",
        ],
      },
      {
        id: "prevention",
        heading: "How to reduce deletion risk",
        body: [
          "Risk reduction starts before writing: assess notability, collect independent sources, map claims to citations, and plan a neutral structure. Drafting should follow what sources support, not what the subject wants to emphasize.",
          "A careful process does not eliminate risk. Wikipedia’s editorial community makes independent decisions, and outcomes can change over time as sources and policies are evaluated. Ethical guidance should focus on compliance and accuracy rather than guaranteed retention.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can a deleted Wikipedia article be restored?",
        a: "Sometimes content can be improved and resubmitted through an appropriate process, but restoration depends on the reason for deletion and whether reliable independent sources support the topic. There is no guarantee of restoration.",
      },
      {
        q: "Does paid editing cause deletion?",
        a: "Paid editing alone is not the only issue, but undisclosed paid contributions, promotional writing, or weak sourcing can increase scrutiny and risk. Transparency and policy compliance are important.",
      },
      {
        q: "How can I prevent deletion before publishing?",
        a: "Start with a notability and source review, use independent reliable sources, write neutrally, and avoid unsupported claims. A policy-aware review can help identify risks before submission.",
      },
    ],
    references: [
      { label: "Wikipedia: Deletion policy", href: "https://en.wikipedia.org/wiki/Wikipedia:Deletion_policy" },
      { label: "Wikipedia: Notability", href: "https://en.wikipedia.org/wiki/Wikipedia:Notability" },
      { label: "Wikipedia: Neutral point of view", href: "https://en.wikipedia.org/wiki/Wikipedia:Neutral_point_of_view" },
      { label: "Wikipedia: Conflict of interest", href: "https://en.wikipedia.org/wiki/Wikipedia:Conflict_of_interest" },
    ],
    cta: {
      text: "Concerned about sourcing or deletion risk?",
      href: "/services/wikipedia-services",
      label: "Get Wikipedia Editorial Guidance",
    },
  },
  {
    slug: "reliable-sources-for-wikipedia",
    title: "What Are Reliable Sources for Wikipedia?",
    description:
      "A clear guide to reliable, independent sources on Wikipedia, including what usually works, what to avoid, and how to evaluate coverage quality.",
    category: "Wikipedia",
    datePublished: "2026-11-10",
    dateModified: "2026-11-10",
    keywords: [
      "reliable sources for Wikipedia",
      "independent sources Wikipedia",
      "Wikipedia citation research",
      "Wikipedia notability sources",
      "Wikipedia article sources",
    ],
    summary:
      "Reliable sources help Wikipedia editors verify information. In most cases, the strongest sources are independent secondary publications with editorial oversight and a reputation for accuracy. Context matters, so each source should be evaluated for reliability, independence, and relevance.",
    sections: [
      {
        id: "what-reliable-means",
        heading: "What makes a source reliable",
        body: [
          "Reliability on Wikipedia depends on context, but reliable sources generally have a track record of accuracy, editorial oversight, and accountability. The question is not just whether a source exists, but whether it is appropriate support for the specific claim being made.",
          "Different topics require different kinds of sources. A claim about a company’s public history may be supported by reputable news reporting, while technical or academic claims may require more specialized publications. Sources should be matched to the statement they support.",
        ],
      },
      {
        id: "independence",
        heading: "Independence is especially important",
        body: [
          "For notability and company biographies, independence is critical. Sources produced by the subject, paid for by the subject, or directly controlled by the subject usually carry less weight as evidence of independent notability.",
          "Examples that often require caution include press releases, company blog posts, sponsored content, advertorials, and interviews republished without independent reporting. These materials may still be useful for limited facts in some contexts, but they are rarely enough to establish notability.",
        ],
      },
      {
        id: "evaluate-quality",
        heading: "How to evaluate source quality",
        body: [
          "Look for depth and substance. Does the source discuss the subject in detail, or is it a passing mention? Is the publisher reputable? Is the content editorially independent? Does the source provide context, reporting, or analysis rather than repeating promotional claims?",
          "It is also useful to review multiple sources together. A pattern of independent coverage from reputable outlets can provide stronger support than isolated mentions. A source review should document what each source supports and identify unsupported statements.",
        ],
      },
      {
        id: "citation-research",
        heading: "Using source research in a responsible draft",
        body: [
          "Citation research should shape the draft. Start by collecting sources, then write only what those sources verify. Avoid adding claims first and searching for citations later, as that approach can lead to weak sourcing or promotional framing.",
          "If the sources do not support a claim, the claim should be removed, narrowed, or rewritten. This discipline is central to Wikipedia article preparation and is one of the main ways to reduce editorial risk.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can company websites be used as Wikipedia sources?",
        a: "Company websites are primary or self-published sources about the subject. They may be useful for limited, uncontroversial facts in some cases, but they are usually weak evidence for notability and should not replace independent secondary coverage.",
      },
      {
        q: "Are news articles always reliable?",
        a: "Not automatically. Reliability depends on the publication, editorial standards, and the type of claim. Reputable outlets are often useful, but each source should still be evaluated in context.",
      },
      {
        q: "How many sources are needed for a Wikipedia page?",
        a: "There is no fixed number that guarantees eligibility. The key issue is whether reliable, independent sources provide significant coverage and support the article’s content. Quality, independence, and relevance matter more than a raw count.",
      },
    ],
    references: [
      { label: "Wikipedia: Reliable sources", href: "https://en.wikipedia.org/wiki/Wikipedia:Reliable_sources" },
      { label: "Wikipedia: Independent sources", href: "https://en.wikipedia.org/wiki/Wikipedia:Independent_sources" },
      { label: "Wikipedia: Identifying reliable sources", href: "https://en.wikipedia.org/wiki/Wikipedia:Identifying_reliable_sources" },
      { label: "Wikipedia: Verifiability", href: "https://en.wikipedia.org/wiki/Wikipedia:Verifiability" },
    ],
    cta: {
      text: "Need help evaluating whether existing coverage supports a Wikipedia draft?",
      href: "/contact",
      label: "Request Citation and Source Research",
    },
  },
  {
    slug: "how-to-get-your-business-on-wikipedia",
    title: "How to Get Your Business on Wikipedia",
    description:
      "A realistic guide to getting a business represented on Wikipedia, including eligibility, source requirements, neutral writing, and responsible next steps.",
    category: "Wikipedia",
    datePublished: "2026-11-10",
    dateModified: "2026-11-10",
    keywords: [
      "how to get your business on Wikipedia",
      "business Wikipedia page",
      "Wikipedia page creation",
      "Wikipedia notability for companies",
      "Wikipedia consulting",
    ],
    summary:
      "Getting a business on Wikipedia is possible only when the topic meets Wikipedia’s standards, especially notability and verifiability. The process should focus on independent reliable sources, neutral presentation, and policy compliance rather than promotional placement.",
    sections: [
      {
        id: "eligibility",
        heading: "Confirm whether the business is eligible",
        body: [
          "Wikipedia does not create articles simply because a business exists or wants visibility. Editors generally expect significant coverage in reliable, independent secondary sources. That coverage should help readers understand why the business is notable beyond routine commercial activity.",
          "A source review is the best starting point. Gather independent articles, reports, or publications that discuss the business in substance. If coverage is thin, indirect, or mostly self-published, the business may not yet be ready for a standalone article.",
        ],
      },
      {
        id: "prepare-information",
        heading: "Prepare verifiable information",
        body: [
          "Once eligibility looks plausible, organize facts that can be supported by independent sources. Typical verifiable topics may include founding details reported by reliable outlets, major products or services covered by third parties, significant partnerships, funding, expansions, or other developments with independent coverage.",
          "Avoid preparing a draft around marketing claims. Statements about being the best, leading, trusted, innovative, or award-winning require careful sourcing and neutral framing. Unsupported promotional claims are a common reason articles fail review.",
        ],
      },
      {
        id: "policy-compliance",
        heading: "Use a policy-compliant approach",
        body: [
          "Neutral point of view, verifiability, and reliable sourcing are core content policies. Conflict-of-interest and paid-contribution disclosure expectations are also important when someone connected to the business is involved in drafting or editing.",
          "A responsible approach may include requesting feedback, improving sourcing, or using an appropriate drafting/review path based on the situation. The right path depends on the topic, available sources, and level of involvement. There is no shortcut that guarantees acceptance.",
        ],
      },
      {
        id: "after-publication",
        heading: "Plan for maintenance, not just creation",
        body: [
          "If an article exists, it still requires accurate maintenance. Changes should be supported by reliable sources and written neutrally. Businesses should expect that independent editors can modify, challenge, merge, or remove content based on policy and sourcing.",
          "The long-term goal should be a factual, verifiable public record—not control over the page. Ethical Wikipedia consulting focuses on readiness, compliance, and accurate source-based editing guidance.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can every business get on Wikipedia?",
        a: "No. A business generally needs sufficient independent, reliable coverage to meet Wikipedia’s notability and verifiability expectations. Many legitimate businesses do not yet meet those standards.",
      },
      {
        q: "How long does it take to get a business on Wikipedia?",
        a: "There is no fixed timeline. Time depends on source availability, article readiness, the drafting/review path, and independent editorial decisions. Any promise of a guaranteed timeframe or outcome should be treated cautiously.",
      },
      {
        q: "Can MIQ LLC guarantee a Wikipedia page for my business?",
        a: "No. MIQ LLC does not guarantee Wikipedia publication, approval, ranking, or retention. We provide consulting, notability research, article preparation guidance, and editorial support focused on responsible process.",
      },
    ],
    references: [
      { label: "Wikipedia: Notability (organizations and companies)", href: "https://en.wikipedia.org/wiki/Wikipedia:Notability_(organizations_and_companies)" },
      { label: "Wikipedia: Reliable sources", href: "https://en.wikipedia.org/wiki/Wikipedia:Reliable_sources" },
      { label: "Wikipedia: Neutral point of view", href: "https://en.wikipedia.org/wiki/Wikipedia:Neutral_point_of_view" },
      { label: "Wikipedia: Conflict of interest", href: "https://en.wikipedia.org/wiki/Wikipedia:Conflict_of_interest" },
      { label: "Wikipedia: Your first article", href: "https://en.wikipedia.org/wiki/Wikipedia:Your_first_article" },
    ],
    cta: {
      text: "Want to know whether your business is ready for Wikipedia?",
      href: "/contact",
      label: "Request a Business Notability Review",
    },
  },
  {
    slug: "wikipedia-article-guidelines-for-businesses",
    title: "Wikipedia Article Guidelines for Businesses",
    description:
      "Key Wikipedia guidelines businesses should understand before creating or editing an article, including notability, neutrality, sourcing, and disclosure.",
    category: "Wikipedia",
    datePublished: "2026-11-10",
    dateModified: "2026-11-10",
    keywords: [
      "Wikipedia article guidelines for businesses",
      "company Wikipedia guidelines",
      "Wikipedia notability for companies",
      "Wikipedia neutral point of view",
      "Wikipedia reliable sources",
    ],
    summary:
      "Business articles on Wikipedia must follow the same core standards as other topics: verifiable content, reliable independent sources, neutral tone, and compliance with conflict-of-interest expectations. Understanding these guidelines early helps avoid common mistakes.",
    sections: [
      {
        id: "core-policies",
        heading: "Start with core content policies",
        body: [
          "Wikipedia’s core content policies shape every business article. Verifiability means readers should be able to check important claims against reliable sources. Neutral point of view means the article should present information fairly, without promotional language or advocacy.",
          "No original research is also important. A business article should summarize what reliable published sources say, not introduce new claims, interpretations, or marketing narratives that lack independent support.",
        ],
      },
      {
        id: "company-notability",
        heading: "Understand company notability expectations",
        body: [
          "For organizations and companies, notability is commonly established through significant coverage in reliable, independent secondary sources. Routine database listings, press releases, self-published profiles, and paid content are usually not enough by themselves.",
          "Before drafting, businesses should assess whether coverage is substantial, independent, and focused on the company. Topic-specific notability guidance can help, but each case still depends on the quality and context of available sources.",
        ],
      },
      {
        id: "writing-standards",
        heading: "Write in an encyclopedic style",
        body: [
          "Business articles should use clear, factual language. Avoid slogans, superlatives, unattributed praise, and long lists of products or services unless they are supported by reliable sources and presented proportionately.",
          "Structure matters. A well-prepared draft usually includes only the most verifiable and relevant information, with citations placed near the claims they support. Content should reflect what independent sources emphasize, not internal marketing priorities.",
        ],
      },
      {
        id: "editing-participation",
        heading: "Handle company involvement carefully",
        body: [
          "Employees, founders, agencies, and consultants may have a conflict of interest when editing about a business they represent. Paid-contribution disclosure and transparent participation help reduce risk and maintain trust.",
          "When involvement creates COI concerns, it may be better to suggest changes with sources, seek feedback, or use an appropriate review process rather than making promotional direct edits. Policy-aware guidance can help determine the safest path.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can a business write its own Wikipedia article?",
        a: "A business can gather sources and understand the process, but direct involvement can raise conflict-of-interest concerns. Neutrality, reliable sourcing, and transparent handling of paid or connected editing are important considerations.",
      },
      {
        q: "What content should a business article include?",
        a: "It should include only information supported by reliable independent sources, presented neutrally and proportionately. The exact content depends on what sources cover, not what the business wants to promote.",
      },
      {
        q: "Do Wikipedia guidelines guarantee approval if followed?",
        a: "No. Following guidelines improves quality and compliance, but independent Wikipedia editors make final decisions about content, inclusion, and retention.",
      },
    ],
    references: [
      { label: "Wikipedia: Notability (organizations and companies)", href: "https://en.wikipedia.org/wiki/Wikipedia:Notability_(organizations_and_companies)" },
      { label: "Wikipedia: Verifiability", href: "https://en.wikipedia.org/wiki/Wikipedia:Verifiability" },
      { label: "Wikipedia: Neutral point of view", href: "https://en.wikipedia.org/wiki/Wikipedia:Neutral_point_of_view" },
      { label: "Wikipedia: No original research", href: "https://en.wikipedia.org/wiki/Wikipedia:No_original_research" },
      { label: "Wikipedia: Conflict of interest", href: "https://en.wikipedia.org/wiki/Wikipedia:Conflict_of_interest" },
    ],
    cta: {
      text: "Need help applying Wikipedia guidelines to a business article?",
      href: "/services/wikipedia-services",
      label: "View Wikipedia Consulting Services",
    },
  },
  {
    slug: "wikipedia-conflict-of-interest-policy-explained",
    title: "Wikipedia Conflict of Interest Policy Explained",
    description:
      "Understand Wikipedia conflict-of-interest and paid-contribution expectations, and how connected editors can participate more responsibly.",
    category: "Wikipedia",
    datePublished: "2026-11-10",
    dateModified: "2026-11-10",
    keywords: [
      "Wikipedia conflict of interest policy",
      "Wikipedia paid contribution disclosure",
      "Wikipedia COI editing",
      "Wikipedia editing for clients",
      "Wikipedia consulting ethics",
    ],
    summary:
      "Wikipedia’s conflict-of-interest guidance addresses situations where editors have personal, professional, financial, or other connections to a topic. Connected editors can still help, but they should prioritize transparency, neutrality, and appropriate processes.",
    sections: [
      {
        id: "what-coi-is",
        heading: "What conflict of interest means",
        body: [
          "A conflict of interest exists when an editor’s relationship to a topic could affect their ability to write neutrally. Common examples include employees, owners, founders, public relations representatives, consultants, and paid editors working on behalf of a person or organization.",
          "Having a connection to a topic does not mean someone can never participate. It does mean they should be careful about how they participate, especially when the topic involves reputation, promotion, or disputed claims.",
        ],
      },
      {
        id: "paid-editing",
        heading: "Paid contributions and disclosure expectations",
        body: [
          "When compensation is involved, transparency becomes especially important. Wikipedia has paid-contribution disclosure expectations intended to make compensated editing visible and reduce undisclosed advocacy.",
          "Disclosure does not make promotional editing acceptable. Paid or connected editors should still avoid biased language, unsupported claims, and improper control over article content. The safest contributions are factual, sourced, and easy for independent editors to verify.",
        ],
      },
      {
        id: "safer-participation",
        heading: "Safer ways to participate",
        body: [
          "Connected editors can often help by collecting reliable sources, identifying errors with citations, suggesting improvements on article talk pages, or requesting edits through appropriate community processes. These approaches can reduce the risk of advocacy and improve transparency.",
          "Before drafting or submitting content, review the available independent sources and remove anything that cannot be verified. If the topic may not be notable, the responsible recommendation is to pause rather than push a weak draft through.",
        ],
      },
      {
        id: "consulting-role",
        heading: "The role of responsible Wikipedia consulting",
        body: [
          "A responsible consultant explains COI risks, evaluates sources, recommends neutral language, and helps clients understand disclosure and process expectations. They should not promise outcomes, conceal involvement, or present marketing copy as encyclopedia content.",
          "For businesses and public figures, this approach protects credibility. It also aligns work with Wikipedia’s community standards, where independent editors evaluate content based on policy and evidence.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is it against Wikipedia rules to edit a page about your company?",
        a: "Connected editing is sensitive and can create conflict-of-interest concerns. The key issues are neutrality, transparency, reliable sourcing, and how the edit is made. In some cases, suggesting changes with sources is safer than direct editing.",
      },
      {
        q: "Do paid Wikipedia editors have to disclose payment?",
        a: "Paid-contribution disclosure expectations may apply. Anyone involved in compensated editing should review the current policy and follow transparent, compliant practices.",
      },
      {
        q: "Can a consultant edit on behalf of a client?",
        a: "Consultants can provide research, drafting guidance, and process support, but any compensated or connected editing should be handled carefully, transparently, and in line with Wikipedia’s policies. No consultant can control editorial outcomes.",
      },
    ],
    references: [
      { label: "Wikipedia: Conflict of interest", href: "https://en.wikipedia.org/wiki/Wikipedia:Conflict_of_interest" },
      { label: "Wikipedia: Paid-contribution disclosure", href: "https://en.wikipedia.org/wiki/Wikipedia:Paid-contribution_disclosure" },
      { label: "Wikipedia: Neutral point of view", href: "https://en.wikipedia.org/wiki/Wikipedia:Neutral_point_of_view" },
      { label: "Wikipedia: Do not disrupt Wikipedia to illustrate a point", href: "https://en.wikipedia.org/wiki/Wikipedia:Do_not_disrupt_Wikipedia_to_illustrate_a_point" },
    ],
    cta: {
      text: "Need conflict-of-interest-aware Wikipedia guidance?",
      href: "/contact",
      label: "Speak with MIQ LLC",
    },
  },
  {
    slug: "how-wikipedia-editors-review-articles",
    title: "How Wikipedia Editors Review Articles",
    description:
      "Learn how Wikipedia editors evaluate new and existing articles, including sourcing, notability, neutrality, and policy compliance.",
    category: "Wikipedia",
    datePublished: "2026-11-10",
    dateModified: "2026-11-10",
    keywords: [
      "how Wikipedia editors review articles",
      "Wikipedia article review",
      "Wikipedia editorial process",
      "Wikipedia notability review",
      "Wikipedia reliable sources",
    ],
    summary:
      "Wikipedia articles are reviewed through community editorial processes, not a single centralized approval team. Editors look for reliable sources, notability, neutral writing, policy compliance, and clear evidence that the article belongs in an encyclopedia.",
    sections: [
      {
        id: "community-process",
        heading: "Review is community-driven",
        body: [
          "Wikipedia is edited by a volunteer community, and review can happen in different ways. Articles may be created, improved, tagged, discussed, revised, or nominated for deletion depending on their quality and sourcing. Drafts may also receive feedback through submission or review processes.",
          "Because many editors can participate, there is no single path that guarantees the same result for every topic. The quality of sources and the neutrality of writing are usually central to how an article is evaluated.",
        ],
      },
      {
        id: "what-editors-check",
        heading: "What editors commonly check",
        body: [
          "Editors often assess whether the topic is notable, whether claims are verifiable, and whether sources are reliable and independent. They may also check tone for promotional language, evaluate whether the article has a conflict-of-interest appearance, and look for copyright or close paraphrasing issues.",
          "For business and biography topics, sourcing and neutrality receive particular attention. An article that is technically well-formatted but based on weak or non-independent sources may still be challenged.",
        ],
      },
      {
        id: "possible-outcomes",
        heading: "Possible outcomes after review",
        body: [
          "An article may be expanded, improved, merged, redirected, kept with cleanup tags, or deleted. Feedback can range from minor citation requests to concerns about notability or promotional content. Outcomes depend on evidence, policy application, and editorial discussion.",
          "If concerns are raised, improving sources and neutrality is often more productive than disputing the process with unsourced arguments. In some cases, the correct outcome may be to wait until stronger independent coverage exists.",
        ],
      },
      {
        id: "prepare-for-review",
        heading: "How to prepare before review",
        body: [
          "Preparation should include a source inventory, claim-by-claim verification, neutral wording, and careful handling of any conflict of interest. Drafts should be concise and limited to what reliable independent sources support.",
          "A policy-aware pre-submission review can identify issues early, but it cannot control how independent editors respond. The goal is to submit accurate, well-sourced material that can withstand scrutiny.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is there an official Wikipedia approval team?",
        a: "Wikipedia content is generally reviewed by community editors through various processes. There is no single approval path that guarantees publication for every article.",
      },
      {
        q: "What makes editors keep an article?",
        a: "Strong independent sourcing, clear notability, neutral writing, verifiable claims, and compliance with Wikipedia policies improve an article’s quality. However, no factor guarantees that an article will be kept.",
      },
      {
        q: "Can an article be changed after it is published?",
        a: "Yes. Wikipedia articles can be edited by others over time. Changes should be based on reliable sources and follow content policies.",
      },
    ],
    references: [
      { label: "Wikipedia: Editing policy", href: "https://en.wikipedia.org/wiki/Wikipedia:Editing_policy" },
      { label: "Wikipedia: Policies and guidelines", href: "https://en.wikipedia.org/wiki/Wikipedia:Policies_and_guidelines" },
      { label: "Wikipedia: Notability", href: "https://en.wikipedia.org/wiki/Wikipedia:Notability" },
      { label: "Wikipedia: Reliable sources", href: "https://en.wikipedia.org/wiki/Wikipedia:Reliable_sources" },
      { label: "Wikipedia: Articles for creation", href: "https://en.wikipedia.org/wiki/Wikipedia:Articles_for_creation" },
    ],
    cta: {
      text: "Preparing a draft for editorial review?",
      href: "/services/wikipedia-services",
      label: "Get Article Preparation Guidance",
    },
  },
  {
    slug: "wikipedia-page-vs-company-website",
    title: "Wikipedia Page vs Company Website",
    description:
      "Compare a Wikipedia page and a company website: purpose, control, tone, sourcing, and when each is appropriate for a business.",
    category: "Wikipedia",
    datePublished: "2026-11-10",
    dateModified: "2026-11-10",
    keywords: [
      "Wikipedia page vs company website",
      "company website vs Wikipedia",
      "Wikipedia for business",
      "business online presence",
      "Wikipedia notability",
    ],
    summary:
      "A company website and a Wikipedia page serve different purposes. A website is a brand-controlled channel for communicating with customers, while a Wikipedia article is an independently edited encyclopedia entry based on verifiable public sources.",
    sections: [
      {
        id: "purpose",
        heading: "Different purposes",
        body: [
          "A company website is designed to explain who you are, what you offer, and how people can contact or buy from you. You control its structure, messaging, calls to action, and design. It is an essential owned asset for most businesses.",
          "A Wikipedia page, by contrast, is not a marketing asset. Its purpose is to summarize publicly verifiable knowledge about a notable topic in a neutral tone. It exists for readers, not for brand promotion, and it is edited by the community.",
        ],
      },
      {
        id: "control-and-editing",
        heading: "Control and editing are not the same",
        body: [
          "On your website, you decide what to publish and update. On Wikipedia, independent editors can add, revise, challenge, or remove content. Even when information is accurate, it must be presented according to Wikipedia policies and supported by appropriate sources.",
          "This difference is important for reputation planning. A Wikipedia article can improve public understanding when it is well-sourced and neutral, but it should not be treated as a controllable profile page. Businesses should maintain accurate owned channels regardless of Wikipedia status.",
        ],
      },
      {
        id: "content-standards",
        heading: "Content standards differ",
        body: [
          "Company websites can include product details, testimonials, pricing, promotions, and conversion-focused messaging, subject to legal and ethical marketing standards. Wikipedia articles generally cannot include promotional language, routine details, or claims that lack independent reliable sourcing.",
          "A business may have strong website content but still not qualify for a Wikipedia article. The deciding factor is not website quality; it is whether independent reliable sources provide enough significant coverage to support an encyclopedic article.",
        ],
      },
      {
        id: "how-to-use-both",
        heading: "How to use both responsibly",
        body: [
          "Businesses should invest in a clear, accurate website first. It supports customers, search visibility, and direct communication. Wikipedia may be relevant later if the business becomes the subject of significant independent coverage and a neutral article can be supported.",
          "A responsible strategy treats these channels as complementary but separate. Use the website to communicate your offerings; use reliable public sources and policy-aware processes if evaluating whether Wikipedia coverage is appropriate.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can a company website replace a Wikipedia page?",
        a: "For marketing and customer communication, a company website is usually more important and fully controllable. A Wikipedia page serves a different purpose and is only appropriate when notability and sourcing standards are met.",
      },
      {
        q: "Does having a good website help create a Wikipedia page?",
        a: "A good website helps your business, but it usually does not establish Wikipedia notability. Wikipedia editors generally look for independent, reliable secondary sources rather than self-published content.",
      },
      {
        q: "Should I focus on Wikipedia or my website first?",
        a: "Most businesses should prioritize an accurate, trustworthy website first. Wikipedia should only be pursued when there is enough independent coverage to support a neutral, verifiable article.",
      },
    ],
    references: [
      { label: "Wikipedia: What Wikipedia is not", href: "https://en.wikipedia.org/wiki/Wikipedia:What_Wikipedia_is_not" },
      { label: "Wikipedia: Notability", href: "https://en.wikipedia.org/wiki/Wikipedia:Notability" },
      { label: "Wikipedia: Reliable sources", href: "https://en.wikipedia.org/wiki/Wikipedia:Reliable_sources" },
      { label: "Wikipedia: Neutral point of view", href: "https://en.wikipedia.org/wiki/Wikipedia:Neutral_point_of_view" },
    ],
    cta: {
      text: "Need help deciding whether Wikipedia is appropriate for your business?",
      href: "/contact",
      label: "Request a Wikipedia Readiness Review",
    },
  },
  {
    slug: "common-wikipedia-submission-mistakes",
    title: "Common Wikipedia Submission Mistakes",
    description:
      "Avoid common mistakes when preparing a Wikipedia article, from weak sources and promotional tone to conflict-of-interest and notability errors.",
    category: "Wikipedia",
    datePublished: "2026-11-10",
    dateModified: "2026-11-10",
    keywords: [
      "common Wikipedia submission mistakes",
      "Wikipedia article mistakes",
      "Wikipedia page rejected",
      "Wikipedia notability mistakes",
      "Wikipedia COI mistakes",
    ],
    summary:
      "Many Wikipedia submissions fail for preventable reasons: weak notability evidence, non-independent sources, promotional writing, copyright issues, or poor handling of conflict of interest. A careful pre-submission review can reduce these risks.",
    sections: [
      {
        id: "weak-notability",
        heading: "Submitting before notability is established",
        body: [
          "A common mistake is starting with the desire for a page instead of the evidence for a page. If independent reliable sources do not provide significant coverage, the draft is likely to face strong scrutiny.",
          "A notability review should come first. This includes checking source quality, independence, depth, and relevance. If evidence is limited, it is better to revise the plan than to submit a weak article.",
        ],
      },
      {
        id: "poor-sourcing",
        heading: "Using weak or non-independent sources",
        body: [
          "Press releases, company websites, paid placements, interviews without independent reporting, and low-quality directories are often used incorrectly. These sources may contain useful leads, but they usually do not carry the same weight as independent secondary coverage.",
          "Another sourcing mistake is adding citations that do not actually support the claim. Every important statement should be matched to a source that directly supports it.",
        ],
      },
      {
        id: "promotional-writing",
        heading: "Writing like marketing copy",
        body: [
          "Promotional tone is easy to spot: slogans, superlatives, vague praise, excessive detail about services, and selective positive claims. Wikipedia articles should be neutral and proportionate to what sources cover.",
          "Conflict-of-interest involvement can make promotional writing more likely. Connected authors should be especially careful to use plain, sourced language and avoid advocacy.",
        ],
      },
      {
        id: "process-errors",
        heading: "Ignoring process, disclosure, or review feedback",
        body: [
          "Mistakes also happen after drafting. Authors may choose an inappropriate submission path, fail to consider paid-contribution or COI expectations, copy text too closely from websites, or respond defensively to feedback.",
          "A better approach is to treat submission as an editorial review, not a publication request. Be prepared to improve sourcing, narrow claims, or conclude that the topic is not ready. No process guarantees acceptance.",
        ],
      },
    ],
    faqs: [
      {
        q: "Why was my Wikipedia draft declined?",
        a: "Common reasons include insufficient notability, weak or non-independent sourcing, promotional tone, copyright concerns, or conflict-of-interest issues. The specific reason depends on the draft and the feedback it received.",
      },
      {
        q: "Can I fix and resubmit a declined draft?",
        a: "Sometimes, if you can address the underlying issues with better independent sources and neutral writing. Resubmission should focus on evidence and policy compliance, not on repeating the same unsupported content.",
      },
      {
        q: "What is the most important step before submission?",
        a: "A careful notability and source review is usually the most important step. It helps determine whether the topic is ready and what claims can be responsibly supported.",
      },
    ],
    references: [
      { label: "Wikipedia: Your first article", href: "https://en.wikipedia.org/wiki/Wikipedia:Your_first_article" },
      { label: "Wikipedia: Common mistakes", href: "https://en.wikipedia.org/wiki/Wikipedia:Common_mistakes" },
      { label: "Wikipedia: Notability", href: "https://en.wikipedia.org/wiki/Wikipedia:Notability" },
      { label: "Wikipedia: Reliable sources", href: "https://en.wikipedia.org/wiki/Wikipedia:Reliable_sources" },
      { label: "Wikipedia: Conflict of interest", href: "https://en.wikipedia.org/wiki/Wikipedia:Conflict_of_interest" },
    ],
    cta: {
      text: "Want a pre-submission review before taking the next step?",
      href: "/contact",
      label: "Request a Draft Readiness Review",
    },
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogPosts() {
  return [...blogPosts].sort((a, b) => b.datePublished.localeCompare(a.datePublished));
}
