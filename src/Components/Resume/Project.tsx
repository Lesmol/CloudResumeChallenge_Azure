import ProjectInfo from "./ProjectInfo";

function Project() {
  return (
    <div className="mt-4">
      <h1 className="font-bold text-2xl text-primary">Projects</h1>
      <ProjectInfo
        title="Cloud Resume Challenge"
        link="https://github.com/Lesmol/CloudResumeChallenge_Azure"
        stack="React | Azure App Service | GitHub Actions"
        description="This project is the website you're on right now. I used React for the frontend and 
        it's hosted on an Azure App Service. For CI/CD, I made use of GitHub Actions to automatically
         test and deploy the code to the App Service once pushed to main. For more information on the project, 
         click on the title, you'll be redirected to the repo where you can read more in the README file."
      />
      <ProjectInfo
        title="Techspo Site"
        link="https://github.com/Lesmol/Techspo_Website"
        stack="Azure SQL Database | ASP.NET Core | C#"
        description="This responsive MVC application was developed using ASP.NET, the C# framework. Additionally, I designed 
        some of the application's assets with Figma to ensure they match the website's theme. 
        I used Azure for the database server and web hosting. Using Azure for the database 
        server proved beneficial since it was a group effort, it allowed seamless access 
        from different machines within the subnet range I had set up. For more information on the 
        project, click on the title, and you'll be redirected to the repo where you can read more in the README file."
      />
    </div>
  );
}

export default Project;
