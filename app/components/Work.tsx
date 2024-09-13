import React from "react"
import WorkItem from "./WorkItem"

const Work = () => {
  return (
    <section className="pt-16">
      <h2 className="text-[15px] text-gray-500 pb-6">Work</h2>

      <WorkItem
        date="2024 — Now"
        position="Founder"
        company="UpCare"
        companyLink="https://upcare.app/"
        location="Stockholm, Sweden"
        description={["The next generation for website monitoring."]}
      ></WorkItem>

      <WorkItem
        date="2024 — Now"
        position="Founder / Web Developer"
        company="Codeflare"
        companyLink="https://codeflare.se/"
        location="Stockholm, Sweden"
        description={["High-performing Web applications."]}
      ></WorkItem>

      <WorkItem
        date="2020 — Now"
        position="Founder / Web Developer"
        company="WP Flare"
        companyLink="https://wpflare.com/"
        location="Stockholm, Sweden"
        description={["High-performing WordPress websites."]}
      ></WorkItem>

      <WorkItem
        date="2015 — Now"
        position="Web Developer"
        company="DevNetwork"
        companyLink="https://www.devnetwork.com/"
        location="San Francisco, CA · Remote"
        description={[
          "Lead developer for DevNetwork's portfolio of 50+ WordPress websites, supporting major tech industry events like DeveloperWeek, API World, and AI Dev Summit. Manage the full lifecycle of web properties from development to deployment, ensuring high performance, security, and reliability.",
          "Provide robust hosting solutions using top-tier platforms such as DigitalOcean, Cloudflare, and AWS, ensuring optimal uptime and scalability for all websites. Continuously optimize web performance, achieving significant improvements across all DevNetwork properties.",
          "Continuously optimize web performance, achieving significant improvements across all DevNetwork properties.",
        ]}
      />

      <WorkItem
        date="2014 — 2019"
        position="Freelancer"
        company="Upwork"
        companyLink="https://www.upwork.com/freelancers/nikolatonevski/"
        location="Skopje, Macedonia · Remote"
        description={[
          "70+ clients, mostly from the US",
          "100+ projects, websites, e-commerce, landing pages, email marketing campaigns, and more.",
        ]}
      ></WorkItem>
    </section>
  )
}

export default Work
