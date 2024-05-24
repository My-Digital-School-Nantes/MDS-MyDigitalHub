import { CardProject } from './CardProject'
import { Card, CardBody } from '@nextui-org/react'
export const ListProjects = ({ projects }) => {
  return (
    <div>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {projects
          ? (
              projects.map((projet) => (
                <CardProject key={projet.id} projet={projet.attributes} />
              ))
            )
          : (
            <Card>
              <CardBody>Il n'y a pas de projet</CardBody>
            </Card>
            )}
      </div>
    </div>
  )
}
