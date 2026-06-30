import { Project } from "../../types/Project";
import img1 from "../../images/icons/project1.png";
import img2 from "../../images/icons/project2.png";
import img3 from "../../images/icons/project3.png";
import img4 from "../../images/icons/project4.png";

class ProjectsFeature {
  projects: Project[];

  constructor() {
    this.projects = [
      {
        imageUrl: img1,
        title: "NL→SQL Query Agent",
        description:
          "Natural language to SQL query agent built on .NET 10 and Claude API. Parses questions, generates safe read-only SQL, and returns results with full transparency.",
        href: "https://github.com/FPDPanda/ask-your-db",
      },
      {
        imageUrl: img2,
        title: "Agent Orchestrator",
        description:
          "Multi-agent orchestration engine in C# — routes a task to specialist agents, runs them in parallel, and aggregates the results into a single coherent reply.",
        href: "https://github.com/FPDPanda/agent-flow",
      },
      {
        imageUrl: img3,
        title: "AWS Serverless .NET Kit",
        description:
          "Production-patterned .NET 10 Lambda template wiring API Gateway, SNS, SQS, and DynamoDB — with SAM, LocalStack integration tests, and full CI.",
        href: "https://github.com/FPDPanda/dotnet-serverless-kit",
      },
      {
        imageUrl: img4,
        title: "C# MCP Server",
        description:
          "Model Context Protocol server in .NET that exposes SQL query, schema inspection, and web-fetch tools to Claude Desktop and Claude Code.",
        href: "https://github.com/FPDPanda/dotnet-mcp-toolkit",
      },
    ];
  }

  getProjects(): Project[] {
    return this.projects;
  }
}

const projectsFeature = new ProjectsFeature();

export default projectsFeature;
