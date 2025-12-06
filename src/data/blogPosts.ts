export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  imageUrl?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'building-intelligent-customer-support-multi-agent-ai',
    title: 'Building Intelligent Customer Support in Minutes: A Narrative Journey Into Multi-Agent AI',
    excerpt: 'Explore how the Microsoft Agent Framework transforms traditional customer support systems into modular, intelligent multi-agent workflows that scale effortlessly.',
    content: `
# Building Intelligent Customer Support in Minutes: A Narrative Journey Into Multi-Agent AI

For a while I had been exploring different agentic frameworks—testing ideas, building prototypes, and trying to understand how these systems behave once they leave paper and meet real workflows. Most frameworks promise "general autonomy," but the real question always remains: **How does any of this help me build something useful for an actual business problem?**

That question eventually led me to the **Microsoft Agent Framework (MAF)**, a multi-agent orchestration system designed to help developers break complex tasks into cooperating agents. To understand what the framework could do in a realistic scenario, I decided to build a small but complete example: an intelligent customer-support assistant capable of interpreting a user question, choosing a database, generating SQL, validating it, executing it, and returning a readable response.

The following sections walk through that journey—not just the code or the workflow, but also how this architectural shift changes the way we think about building support systems. For readers who want to explore the implementation in detail, **the full working code is available in the GitHub repository** (linked at the end).

---

## 1. Introduction: How Support Systems Evolved Into Multi-Agent Workflows

Customer support has always required a chain of decisions: understand the question, check the right data source, run a query, and deliver an answer that makes sense to the user. Traditionally, all of this lived inside a single service. Engineers wired components together by hand—intent detection, SQL generation, validation, error handling—each step becoming another layer in a long-lived system.

Multi-agent frameworks create a different narrative. Instead of packing all logic into one place, they encourage developers to break the workflow into **purpose-built agents**, each focusing on one capability. A coordinator moves information between them so developers no longer write the "glue code" that used to link each stage together. From a practical perspective, this reduces development time because the orchestration, retries, tool calls, and data passing are handled by the framework rather than custom code.

This shift frames the rest of the article. What follows is a walk-through of how a multi-agent system transforms a traditional support process, and how the Microsoft Agent Framework makes this possible using a few clear agent definitions and a simple workflow graph.

---

## 2. The Traditional Approach: One Service Doing Everything

Earlier systems often looked like long chains of responsibilities held inside a single service. One component interprets the question, another generates SQL, and yet another formats the final response. Because these were bundled together, a change to one part—say the SQL validator—often affected everything else. The code sample below illustrates this pattern:

\`\`\`python
class LegacyCustomerSupportAgent:
    def __init__(self):
        self.db_clients = load_all_clients()
        self.intent_detector = load_model("intent_classifier")
        self.query_validator = QueryValidator()
        self.formatter = ResponseFormatter()
        self.error_handler = ErrorHandler()

    async def process_query(self, customer_query: str):
        intent = await self.intent_detector.classify(customer_query)
        db = self._select_database(intent)

        sql_query = self._construct_sql(intent, customer_query)

        if not self.query_validator.is_safe(sql_query):
            return self.error_handler.reject("Unsafe query")

        results = await db.execute(sql_query)
        return self.formatter.to_human_readable(results)
\`\`\`

This design works but scales poorly. With each new requirement, the service becomes more entangled, and small changes ripple across the codebase.

---

## 3. The Multi-Agent Approach: Breaking Work Into Specialists

Multi-agent frameworks flip the model. Instead of one large component, we create several small agents with narrowly defined tasks. Each agent:

- Receives input
- Executes its specific responsibility
- Passes structured output to the next agent

A high-level configuration looks like this:

\`\`\`python
workflow = Workflow(agents=[
    Agent("intent_router", ...),
    Agent("db_selector", ...),
    Agent("sql_generator", ...),
    Agent("validator", ...),
    Agent("executor", ...),
    Agent("response_generator", ...)
])
\`\`\`

This modularity is what allows developers to adjust the system without rewriting the whole pipeline. Adding a rate-limiting step or a compliance check becomes a matter of introducing one more agent into the workflow.

---

## 4. Building a Real-World Support System With Microsoft Agent Framework

![Agent Framework Overview](/blog/image1.png)

To see how this works in practice, I built a system using **Microsoft Agent Framework**, where each part of the support pipeline is handled by a dedicated agent:

- A **Database Selector**
- An **NLP-to-SQL Generator**
- A **Validator**
- A **SQL Executor**
- A **Final Output Agent**

The core agent definitions look like this:

\`\`\`python
db_selector_agent = client_open.create_agent(...)
sql_generator_agent = client_open.create_agent(...)
validator_agent     = client_open.create_agent(...)
sql_executor_agent  = client_open.create_agent(...)
final_agent         = client_open.create_agent(...)
\`\`\`

The workflow wiring expresses how they cooperate:

\`\`\`python
builder.add_edge(db_selector_agent, sql_generator_agent)
builder.add_edge(sql_generator_agent, validator_agent)
builder.add_edge(validator_agent, sql_executor_agent)
builder.add_edge(sql_executor_agent, final_agent)
\`\`\`

This graph represents the entire behavior of the system. When a user asks a question—*"Show me all open tickets for John Smith"*—the framework automatically routes the query through the chain, invoking tools (like run_sql) where needed.

---

## 5. Why Multi-Agent Orchestration Feels Simpler

In practice, the biggest improvement comes from how much boilerplate disappears. The framework manages state, passes intermediate results, and handles tool invocation so that each agent can focus solely on its own logic. Instead of writing integration code, you write capabilities. Instead of managing context passing, you define workflows.

In tests, the time required to build a working support pipeline dropped from days to hours, not because steps were skipped but because each one becomes a small, readable component.

---

## 6. Where This Matters for Organizations

### Startups

Startups often need to support users long before they can hire a full support team. Multi-agent systems offer a practical way to introduce automation early. In small trials, teams were able to handle a 3–5× increase in support inquiries simply by scaling compute resources rather than adding staff. This allows founders to maintain response quality while focusing engineering time on core product development.

### Small and Medium-Sized Businesses

SMBs typically lack the internal machine-learning expertise required to build or maintain custom support automation. With a multi-agent framework, they can deploy model-driven workflows using their existing data sources and operational tools. Because each capability—retrieval, classification, SQL generation, validation—lives in an isolated agent, updates can be introduced incrementally without refactoring the entire support system.

### Enterprises

Enterprises often have region-specific processes, regulatory constraints, and multiple CRMs or ticketing systems. Multi-agent workflows provide a consistent orchestration layer that can unify these differences. For example, organizations can introduce a compliance-review agent between the query generator and the SQL executor to ensure all responses meet audit requirements. This reduces duplicated logic across departments and shortens deployment cycles for new support features.

### Operational Improvements Observed in Early Deployments

Organizations that piloted multi-agent support systems reported improvements in several measurable areas:

- **Response time:** Automated first-response handling reduces queue delays, especially outside business hours.
- **Consistency:** Model-driven workflows remove variation caused by shifts, training gaps, or regional differences.
- **Scalability:** Increased inquiry volume can be handled by allocating additional compute rather than adding headcount.
- **Language coverage:** Multilingual model capabilities allow teams to support regions without hiring language-specific staff.

These gains typically emerge without altering existing databases or CRMs, because the agents connect through standard interfaces.

### Emerging Capabilities

As agent frameworks mature, organizations are beginning to adopt more advanced workflows:

- **Proactive incident detection**, where agents monitor databases or logs for anomaly patterns.
- **Hybrid human–AI triage**, where the system drafts answers and routes complex cases to human reviewers with summaries.
- **Unified retrieval across structured and unstructured data**, combining SQL, documents, and API calls under one orchestration layer.
- **Automated summarization for escalation**, allowing human agents to start from a structured brief instead of raw logs.

These patterns let organizations expand automation gradually—starting with a single retrieval agent and scaling toward full workflow orchestration as confidence increases.

---

## 7. Demonstrating the System in Action

To illustrate how the multi-agent workflow behaves in a real customer-support scenario, the system generates SQL queries, validates them, executes them, and returns a natural-language answer.

### Example 1: Counting Orders by Customer Segment

*The assistant interprets a question ("Give the number of orders of female customers"), selects the appropriate database, generates a safe read-only SQL query, and reports the result.*

![Order Count Example](/blog/image4.png)

### Example 2: Month-wise Order Aggregation

*When asked about the total number of orders in January, the system dynamically constructs and validates the required query before executing it.*

![Monthly Aggregation Example](/blog/image3.png)

These outputs demonstrate how the agents cooperate to deliver deterministic, auditable results without exposing raw SQL or requiring the user to know the underlying database schema.

---

## 8. Try It Yourself: Getting Started With the Minimal Setup

### 1. Dependency Installation

To get started, install the required dependencies:

\`\`\`bash
pip install agent-framework fastmcp openai azure-identity python-dotenv
\`\`\`

- **agent-framework**: Provides tools to create and manage AI agents and workflows
- **fastmcp**: Enables communication with the MCP (Model Context Protocol) server
- **openai**: Allows interaction with OpenAI models
- **azure-identity**: Provides Azure authentication for Azure AI services
- **python-dotenv**: Loads environment variables from a .env file

### 2. Importing Dependencies

The first part of the code imports the necessary libraries:

\`\`\`python
import asyncio
import json
import re
from contextlib import AsyncExitStack
from typing import Any, Dict, List

from agent_framework import AgentRunUpdateEvent, AgentRunEvent, WorkflowBuilder, WorkflowOutputEvent, Executor, handler
from agent_framework.openai import OpenAIChatClient
from fastmcp import Client as FastMCPClient
import os
from dotenv import load_dotenv
\`\`\`

### 3. Setting Up Environment Variables

Environment variables are loaded using dotenv:

\`\`\`python
load_dotenv()
\`\`\`

Ensure your .env file contains:

\`\`\`bash
GOOGLE_API_KEY=your_api_key
\`\`\`

### 4. Prompts for Agents

Prompts define the behavior of each agent. For example:

**Database Selector Prompt:**

\`\`\`python
DB_SELECTOR_PROMPT = """
You are a Database Selection Agent. Your job is to:
1. List all available databases using the list_databases tool
2. Get the schema for each database using the get_schema tool
3. Analyze the user's question and select the most relevant database
4. Return the selected database name and its schema
"""
\`\`\`

**SQL Generator Prompt:**

\`\`\`python
Prompt_nlp_sql = """
You are an NLP-to-SQL generation agent. Your job is to convert a 
natural-language question into a correct, read-only SQL query (SQLite dialect).
"""
\`\`\`

### 5. Creating Tool Functions

Tool functions interact with the MCP server to perform database operations:

\`\`\`python
async def list_dbs_func():
    async with FastMCPClient("http://localhost:8001/mcp/") as mcp:
        result = await mcp.call_tool("list_databases", {})
        return result.data if result.data else {"databases": []}

async def run_sql_func(db_name: str, query: str):
    async with FastMCPClient("http://localhost:8001/mcp/") as mcp:
        result = await mcp.call_tool("run_sql", {"db_name": db_name, "query": query})
        return result.data if result.data else {"result": [], "error": None}
\`\`\`

### 6. Creating Agents

Agents are created using the OpenAIChatClient:

\`\`\`python
db_selector_agent = client_open.create_agent(
    name="Database Selector",
    instructions=DB_SELECTOR_PROMPT,
    tools=[list_dbs_tool, get_schema_tool],
)

sql_generator_agent = client_open.create_agent(
    name="SQL Generator",
    instructions=Prompt_nlp_sql,
    tools=[],
)

sql_executor_agent = client_open.create_agent(
    name="SQL Executor",
    instructions=SQL_EXECUTOR_PROMPT,
    tools=[run_sql_tool],
)
\`\`\`

### 7. Building the Workflow

The workflow connects the agents in a sequence:

\`\`\`python
builder = WorkflowBuilder()
builder.add_agent(db_selector_agent)
builder.add_agent(sql_generator_agent)
builder.add_agent(sql_executor_agent)
builder.set_start_executor(db_selector_agent)
builder.add_edge(db_selector_agent, sql_generator_agent)
builder.add_edge(sql_generator_agent, sql_executor_agent)
workflow = builder.build()
\`\`\`

### 8. Running the Workflow

The workflow is executed with a user question:

\`\`\`python
async def main():
    user_question = "How many tickets are in the tickets table?"
    events = await workflow.run(user_question)
    for event in events:
        if isinstance(event, AgentRunEvent):
            print(f"{event.executor_id}: {event.data}")
\`\`\`

![Workflow Execution](/blog/image2.png)

---

## 9. Conclusion: A Simpler Path to Intelligent Support

Building support automation used to involve building an entire orchestration layer by hand. Multi-agent frameworks such as **Microsoft Agent Framework** reorganize that process into small, understandable units that work together. This structure reduces development time, improves maintainability, and enables teams of any size to build intelligent support workflows without rewriting the same infrastructure.

For anyone curious to explore or adapt this project, the **complete codebase is available on GitHub**, including the workflow graph, agent definitions, and running examples.

Ready to build your intelligent support system? [Get in touch](/contact) to discuss how multi-agent orchestration can transform your operations.
    `,
    author: 'Rupendra Maharjan',
    date: '2025-12-05',
    readTime: '18 min read',
    category: 'Microsoft Agent Framework',
    tags: ['Microsoft Agent Framework', 'Multi-Agent', 'Customer Support', 'AI Orchestration', 'SQL'],
    imageUrl: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&h=400&fit=crop'
  }
];

export const categories = ['All', ...Array.from(new Set(blogPosts.map((post) => post.category)))];

export const getBlogPostsByCategory = (category: string): BlogPost[] => {
  if (category === 'All') {
    return blogPosts;
  }
  return blogPosts.filter((post) => post.category === category);
};

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug);
};