import CardCarousel from '@/components/santeComponents/card/CardCarousel'
import { ListAnnonce } from '@/components/santeComponents/list/ListAnnonce'
import { Divider } from '@nextui-org/react'
import { getAnnonces, getContacts } from '@/app/api/santeApi'

export default async function Sante () {
  const annonces = await getAnnonces()
  const contacts = await getContacts()

  return (
    <>
      <div className='text-center my-16 capitalize'>
        <h1 className='text-4xl sm:text-6xl font-bold text-gray-800 dark:text-gray-200'>
          Section
          <span className='bg-gradient-to-r from-primary to-blue-400 text-transparent bg-clip-text '> Santé </span>
        </h1>
      </div>

      <div className='m-8'>
        <p>Le personnel <a class='underline decoration-sky-500'>médical</a> d’une école joue un rôle crucial dans la promotion de la santé et le <a class='underline decoration-pink-500'>bien-être des élèves</a>. Ce groupe dévoué de professionnels de la santé, généralement composé d’infirmières scolaires et parfois de <a class='underline decoration-indigo-500'>médecins consultants</a>, est la pierre angulaire des services de santé dans l'environnement éducatif.</p>

        <p class='pt-6'>Les infirmières <a class='underline decoration-sky-500'>scolaires, en particulier</a>, assurent une multitude de services allant de la premiers soins en cas d’accidents mineurs ou de maladies soudaines à la gestion de conditions médicales chroniques telles que l'asthme ou le diabète. Elles jouent un rôle essentiel dans le dépistage des problèmes de santé, la réalisation de contrôles de routine, et l'éducation <a class='underline decoration-pink-500'>sanitaire des élèves</a>.</p>

        <p class='pt-6'>Leur présence offre également un soutien psychologique indispensable, offrant un espace où les élèves <a class='underline decoration-indigo-500'>peuvent discuter de questions</a> de santé mentale ou de préoccupations personnelles en toute <a class='underline decoration-sky-500'>confidentialité</a>. En outre, ces professionnels collaborent étroitement avec les parents, les enseignants et d’autres spécialistes pour créer un environnement éducatif qui prend en compte <a class='underline decoration-pink-500'>les besoins de santé</a> des élèves.</p>
      </div>
      <div className='text-center my-12 capitalize'>
        <h3 className='text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-200'>
          Contact
          <span className='bg-gradient-to-r from-primary to-blue-400 text-transparent bg-clip-text '> Utile </span>
        </h3>
      </div>

      <div className='m-8'>
        <CardCarousel contacts={contacts} />
      </div>
      <Divider className='my-4' />

      <div className='m-8'>
        <ListAnnonce InitAnnonces={annonces} />
      </div>

    </>
  )
}
