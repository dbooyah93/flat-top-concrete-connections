# General
This page will be used to track the todo of the page / site. There may be other forms of tracking, but this is more or less the most focused todo list relative to what can be done right now to reach more complicated milestones.

## Short list
This is listed in order of what should be done next considering several factors, i.e. ease to complete, MVP oriented

**10/10/2024**
Get styles to apply correctly.
    - @media queries are acting like there isn't a default state, but there is
**12/6/2024**
Created Andy's page
Updated styles
Reorganized some folders    

## Broader perspective

# Project Plan

## Pages to Build
1. **Welcome Page**
   - Add links: 
     - Contact Me
     - Projects
     - Todo
     - Map
     - Blog
   - Include an Intro Bio section.

2. **Email Me**
   - Create a social page.
   - Add images.
   - **Email Protection Features**:
     - Prevent sending a second email shortly after the first.
     - Block certain domains (e.g., "dont-reply.com").
     - Provide appropriate user-side feedback.

3. **Projects Page**
   - Add sub-pages for technical and non-technical projects.
   - Include images.

4. **Map Page**
   - Use D3 to create a map visualization.
   - Collect and store data in a database for analysis.

---

## Architecture
1. **Express**
   - Handle emails through an API.
   - Build a blog feature using an SQL database.

2. **D3**
   - Use for data visualization (e.g., map demographics or project data).

3. **Image Hosting**
   - Images are currently stored in the repo.
   - Consider exploring external hosting options (e.g., AWS S3, Cloudinary).

---

## Long-Term Features
1. **User Authentication**
   - Implement login and signup functionality using Node.js and Express.
   - Use session-based or token-based authentication (e.g., JWT).

2. **Basic Expense Tracker**
   - Allow users to input and track expenses (e.g., categories, dates, costs).
   - Build forms for data input and display a summary of expenses.
   - Store this data in an SQL database.

3. **API Development**
   - Create RESTful APIs to fetch and manipulate user data, expenses, or blog posts.
   - Use Node.js and Express to build the backend endpoints.

4. **Advanced Features for Budgeting App**
   - Yearly, monthly, and weekly budget tracking.
   - Data visualization with charts (e.g., using D3 or Chart.js).
   - File handling for importing/exporting budgets as CSV or Excel.
