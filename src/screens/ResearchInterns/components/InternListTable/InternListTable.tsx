import React from 'react';
import { useNavigate } from 'react-router-dom';

interface TableProps {
  data: {
    id:string
    name: string;
    description: string;
    attachments: {
      link: string;
      alt: string;
    }[];
    postedOn: Date;
    institution: string;
    attributes: string;
    isActive: boolean;
  }[];
}

const InternListTable: React.FC<TableProps> = ({ data }) => {
  const navigate = useNavigate()
  return (
    <div className="container mx-auto my-8">
      <table className="min-w-full bg-white border border-gray-300 shadow-md rounded mx-auto">
        <thead>
          <tr className="bg-zinc text-zinc-800">
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Description</th>
            <th className="py-2 px-4">Attachments</th>
            <th className="py-2 px-4">Posted On</th>
            <th className="py-2 px-4">Institution</th>
            <th className="py-2 px-4">Attributes</th>
            <th className="py-2 px-4">Active</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr onClick={()=>{navigate(`/researchInterns/${item.id}`)}} key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
              <td className="py-2 px-4">{item.name}</td>
              <td className="py-2 px-4">{item.description}</td>
              <td className="py-2 px-4">
                {item.attachments.map((attachment, idx) => (
                  <a key={idx} href={attachment.link} target="_blank" rel="noopener noreferrer" className="block lowercase p-2 text-indigo-500 hover:underline">
                    {attachment.alt}
                  </a>
                ))}
              </td>
              <td className="py-2 px-4">{item.postedOn.toString()}</td>
              <td className="py-2 px-4">{item.institution}</td>
              <td className="py-2 px-4">{item.attributes}</td>
              <td className="py-2 px-4">{item.isActive ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default InternListTable;
