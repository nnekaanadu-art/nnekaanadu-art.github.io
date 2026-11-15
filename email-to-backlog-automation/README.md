# Email-to-Backlog Automation

**A Zapier workflow that turns qualifying Gmail messages into Azure DevOps User Stories.**

**Portfolio Section:** Automate the Routine

**[Watch the Workflow Demo](./Email_to_Backlog_Demo.mp4)**

## Overview

Product requests often arrive by email. Transferring each request into a backlog adds a manual step and gives the team another place to check for incoming work.

I built this workflow to let requesters use a dedicated backlog email address while giving the product team a consistent place to review incoming requests in Azure DevOps.

## The Problem

When email serves as an intake channel, someone has to identify requests, copy the information into a work item, and make it visible for triage. That extra step can delay review or leave requests sitting in an inbox.

## The Solution

Zapier uses Gmail’s **New Email Matching Search** trigger with the query `subject:Role`. When a new email matches, Zapier creates a **User Story** in Azure DevOps.

### Key Capabilities

**Keyword-Based Intake**

The keyword `Role` identifies emails that qualify for backlog intake. In the demo, it appears at the start of the subject so the routing rule is easy to see.

**Automatic Work Item Creation**

Zapier creates a User Story in **Backlog Practice (Agile)** and copies the full subject into **Title** and the plain-text email body into **Description**.

**Backlog Triage**

The example story appears in **New** with no parent attached. The product team can review the request, clarify the details, and decide how to organize and prioritize it.

## Product Approach

1. **Use a familiar intake channel.** Requesters can submit ideas through email.
2. **Make the intake rule explicit.** A designated subject keyword determines which emails enter the backlog.
3. **Preserve the request as submitted.** The story carries over the sender’s original wording for the product team to review.

## Technology and Development

| Tool | Role in the workflow |
| --- | --- |
| Gmail | Receives requests at the dedicated backlog address. |
| Zapier | Watches for matching emails and passes their subject and plain-text body to Azure DevOps. |
| Azure DevOps | Creates the User Story and makes it visible in Azure Boards. |

## Intended Audience

- Product Owners and Product Managers
- Agile Delivery Teams
- Teams managing requests across email and Azure DevOps

## Future Enhancements

Potential enhancements include duplicate detection, a confirmation email with the work item link, and routing to different teams based on the type of request.

## Explore the Workflow

**[Watch the Email-to-Backlog Demo](./Email_to_Backlog_Demo.mp4)**

The 50-second walkthrough follows a fictional callback request from Gmail through Zapier to User Story **#102** in Azure Boards.

Explore more product tools and digital experiences in my [portfolio](https://nnekaanadu-art.github.io/).

## Disclaimer

This is an independent portfolio demonstration. The walkthrough uses fictional request and sender details.

<!-- UNIVERSAL FOOTER START -->

---

<p align="center">
  <strong>Product Thinking in Practice</strong>
</p>

<p align="center">
  <a href="https://nnekaanadu-art.github.io/">Portfolio Home</a> |
  <a href="https://www.linkedin.com/in/NnekaAnadu">LinkedIn</a> |
  <a href="https://github.com/nnekaanadu-art">GitHub</a>
</p>

<p align="center">
  © 2026 Nneka Anadu. All rights reserved.
</p>

<!-- UNIVERSAL FOOTER END -->
