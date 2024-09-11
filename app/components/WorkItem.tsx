import React from "react"

interface WorkItemProps {
  date: string
  position: string
  company: string
  companyLink: string
  location: string
  description: string[]
}

const WorkItem: React.FC<WorkItemProps> = ({
  date,
  position,
  company,
  companyLink,
  location,
  description,
}) => {
  return (
    <div className="flex space-x-4 pb-8">
      <p className="min-w-24 text-sm text-gray-400">{date}</p>
      <div>
        <h3 className="text-sm text-gray-700">
          {position} at{" "}
          <a href={companyLink} className="hover:underline" target="_blank">
            {company}
          </a>
        </h3>
        <p className="text-sm text-gray-400 pt-1">{location}</p>
        {description.map((item, index) => (
          <p key={index} className="text-sm text-gray-500 pt-1">
            {item}
          </p>
        ))}
      </div>
    </div>
  )
}

export default WorkItem
