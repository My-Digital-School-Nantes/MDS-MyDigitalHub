import { getProject } from './getProjectAction'

export default async function Projets (props) {
  const { slug } = props.params
  const project = await getProject(slug)
  const projet = project[0].attributes
  console.log(project[0])
  console.log(slug)
  return (
    <div className='max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24 '>

      <div className='relative'>
        <img
          src={'http://localhost:1337/' + projet?.image?.data?.attributes?.url}
          alt={projet?.image?.data?.attributes?.alt}
          className='w-full h-64 object-cover rounded-t-lg'
        />
        <div className='absolute top-0 left-0 bg-gradient-to-r from-primary to-blue-400 text-white p-2 rounded-bl-lg'>
          {projet.title}
        </div>
      </div>
      <div className='p-4'>
        <h2 className='text-xl font-bold text-gray-800 dark:text-gray-200'>{projet.title}</h2>
        <p className='text-gray-600 dark:text-gray-400'>{projet.description}</p>
      </div>
    </div>
  )
}
