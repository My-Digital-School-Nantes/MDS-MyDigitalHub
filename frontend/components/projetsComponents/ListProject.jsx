import { CardProject } from './CardProject'
export const ListProjects = ({ projects }) => {
  return (
    <div className=''>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 '>
        {projects && projects.map((projet) => (
          <CardProject key={projet.id} projet={projet.attributes} />
        ))}
      </div>
    </div>
  )
}
